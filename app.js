const mysql = require("mysql");

// Membuat koneksi ke database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root", // Ganti dengan username MySQL Anda
  password: "", // Ganti dengan password MySQL Anda
  database: "local_mahasiswa", // Ganti dengan nama database yang ingin Anda akses
});

// Menghubungkan ke database
connection.connect((err) => {
  if (err) throw err;
  console.log("Terhubung ke database MySQL");
});

const express = require("express");

const app = express();

// Menangani GET request untuk '/api/data'
app.get("/api/data", (req, res) => {
  // Mendapatkan semua data dari tabel
  connection.query("SELECT * FROM students", (err, rows) => {
    if (err) throw err;
    res.json(rows); // Mengirim data sebagai respons JSON
  });
});

// Menjalankan server pada port tertentu
app.listen(3000, () => {
  console.log("Server berjalan pada http://localhost:3000");
});
