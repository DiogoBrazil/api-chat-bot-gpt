const express = require('express');
const app = express();
const cors = require('cors');
//app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

const apiChatBotRoutes = require('./routes/apiChatBotRoutes');
app.use('/chat-bot', apiChatBotRoutes);

app.listen(3000, () => {
    console.log('Server running in port 3000!');
});
