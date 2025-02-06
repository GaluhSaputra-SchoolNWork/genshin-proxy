const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('API is working!');
});

app.get('/genshin', async (req, res) => {
    try {
        const response = await axios.get('https://gsi.fly.dev/');
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching Genshin data:', error);
        res.status(500).json({ error: 'Error fetching data' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
