const express = require('express');
const {v4: uuidv4} = require('uuid');
const app = express();
const PORT = 3000;

app.use(express.json());

let pantryItems = [
    { id: uuidv4(), name: 'Susu UHT', expiry_date: '2026-04-01', status: 'Fresh' }
];

app.use('/items', (req, res) => {
    res.json({ status: 'success', data: pantryItems });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});