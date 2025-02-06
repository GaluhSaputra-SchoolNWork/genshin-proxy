const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors({
    origin: "*",
    methods: "GET",
    allowedHeaders: "Content-Type"
}));

app.get('/genshin', async (req, res) => {
    try {
        const response = await axios.get('https://gsi.fly.dev/');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
