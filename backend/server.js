const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Semua field wajib diisi!" });
  }

  const data = `Nama: ${name}\nEmail: ${email}\nPesan: ${message}\n========================\n`;

  fs.appendFile("hubungi.txt", data, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Gagal menyimpan data" });
    }
    res.json({ message: "Pesan berhasil disimpan!" });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
