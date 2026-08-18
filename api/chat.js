// Vercel Serverless Function — POST /api/chat
// Proxies chat messages to Groq so the API key never reaches the browser.
// Requires a GROQ_API_KEY environment variable set in the Vercel project settings.

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { system, messages } = req.body || {};

  if (!process.env.GROQ_API_KEY) {
    return res.status(500).json({ error: "GROQ_API_KEY not configured on the server" });
  }

  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: "messages array is required" });
  }

  // 💡 Local network slow hone ki wajah se timeout ko 30 seconds tak barhane ke liye:
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 Seconds timeout

  try {
    const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      signal: controller.signal, // Controller ko attach karein
      body: JSON.stringify({
        model: "qwen/qwen3.6-27b",
        messages: [
          { role: "system", content: system || "You are a helpful assistant." },
          ...messages,
        ],
        temperature: 0.4,
        max_tokens: 300,
        reasoning_effort: "none",
        reasoning_format: "hidden",
      }),
    });

    clearTimeout(timeoutId); // Request successfully complete hone par timeout ko clear karein

    if (!groqRes.ok) {
      const errText = await groqRes.text();
      console.error("Groq API error:", groqRes.status, errText);
      return res.status(502).json({ error: "Upstream AI request failed" });
    }

    const data = await groqRes.json();
    let reply = data.choices?.[0]?.message?.content?.trim() || "";

    // Safety net: if any raw reasoning/thinking trace slips through in the
    // content field, strip it so only the final answer reaches the user.
    reply = reply.replace(/<think>[\s\S]*?<\/think>/gi, "").trim();
    reply = reply.replace(/^(analysis|thinking)[\s\S]*?(?=\n\n|\bfinal\b)/i, "").trim();

    return res.status(200).json({ reply });
  } catch (err) {
    clearTimeout(timeoutId);
    console.error("chat.js error:", err);
    return res.status(500).json({ error: "Something went wrong" });
  }
}