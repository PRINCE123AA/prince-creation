const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve the timezone-clock.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'timezone-clock.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
