import express from 'express';
import dotenv from 'dotenv';
import handler from './api/chat.js'; // Aapki chat file ko import karega

dotenv.config();

const app = express();
app.use(express.json());

// Jab bhi frontend se request aaye, yeh aapki chat file ke logic ko chalaye
app.post('/api/chat', async (req, res) => {
  try {
    await handler(req, res);
  } catch (error) {
    console.error("Backend Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Backend Server running on http://localhost:${PORT}`);
});
