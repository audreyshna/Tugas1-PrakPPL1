const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();

app.use(express.json());

let pantryItems = [
    { id: 1, name: 'Susu UHT', expiry_date: '2026-04-01', status: 'Fresh' }, // HARUS ADA KOMA DI SINI
    { id: 2, name: 'Beras 5kg', expiry_date: '2027-01-15', status: 'In Stock' }, // DAN DI SINI
    { id: 3, name: 'Minyak Goreng 2L', expiry_date: '2026-12-20', status: 'Fresh' } // BARIS TERAKHIR BOLEH TANPA KOMA
];

// WELCOME PAGE
app.get('/', (req, res) => {
    res.status(200).send(`
        Selamat Datang di Smart Pantry API.
        Akses <a href="/items">/items</a> untuk melihat daftar barang.`);
});

// CREATE
app.post('/items', (req, res) => {
    const { name, expiry_date, status } = req.body;
    const newId = pantryItems.length > 0 ? pantryItems[pantryItems.length - 1].id + 1 : 1;
    const newItem = { id: newId, name, expiry_date, status };
    pantryItems.push(newItem);
    res.status(201).json(newItem);
});

// READ
app.get('/items', (req, res) => {
    res.status(200).json(pantryItems);
});

// UPDATE
app.put('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name, expiry_date, status } = req.body;
    const index = pantryItems.findIndex(item => item.id === id);

    if (index !== -1) {
        pantryItems[index] = { id, name, expiry_date, status };
        res.status(200).json(pantryItems[index]);
    }
    else {
        res.status(404).json({ message: "Barang tidak ditemukan" });
    }
});

// DELETE
app.delete('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = pantryItems.findIndex(item => item.id === id);

    if (index !== -1) {
        pantryItems.splice(index, 1);
        res.status(200).json({ message: "Barang berhasil dihapus" });
    } else {
        res.status(404).json({ message: "Barang tidak ditemukan" });
    }
});

if (require.main === module) {
    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}

module.exports = app;