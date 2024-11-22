const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;
const SECRET_KEY = 'your_secret_key';

app.use(bodyParser.json());
app.use(cors());

let users = [];

// API Register
app.post('/api/register', (req, res) => {
  const { username, password } = req.body;
  const user = { username, password };
  users.push(user);

  const token = jwt.sign({ username }, SECRET_KEY);
  res.json({ token });
});

// API Login
app.post('/api/login', (req, res) => {
  const { token } = req.body;
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    const user = users.find((u) => u.username === decoded.username);

    if (user) {
      res.json({ success: true });
    } else {
      res.status(401).json({ success: false, message: 'User not found' });
    }
  } catch (error) {
    res.status(401).json({ success: false, message: 'Invalid token' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
