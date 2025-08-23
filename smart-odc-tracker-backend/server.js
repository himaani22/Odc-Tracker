const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Smart ODC Tracker Backend is Running" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const db = require('./db'); // Make sure this path matches your project

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const query = "INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)";
    await db.execute(query, [name, email, message]);
    res.status(200).json({ message: 'Message stored successfully!' });
  } catch (err) {
    console.error('Error inserting contact message:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});
