# Tugas 1 Praktikum Proyek Perangkat Lunak - Smart Pantry API

### 1. Deskripsi Project
**Smart Pantry API** adalah aplikasi RESTful API sederhana yang dibangun menggunakan Node.js dan Express. API ini berfungsi untuk mengelola inventori barang rumah tangga secara digital dengan melakukan pencatatan barang dengan identitas unik, tanggal kadaluwarsa, dan status kondisi barang.

### 2. Dokumentasi API
Aplikasi menyediakan CRUD (Create, Read, Update, Delete) yang dapat diakses melalui endpoint berikut:
#### **A. Welcome Message**
Menampilkan pesan awal saat pertama kali mengakses root API.
* **Method:** `GET`
* **Endpoint:** `/`
* **Response (200 OK):**
    ```json
    {
      "message": "Selamat Datang di Smart Pantry API. Akses /items untuk melihat daftar barang."
    }
    ```

#### **B. Read**
Mengambil semua daftar barang yang tersimpan di pantry.
* **Method:** `GET`
* **Endpoint:** `/items`
* **Response (200 OK):**
    ```json
    [
      {
        "id": 1,
        "name": "Susu UHT",
        "expiry_date": "2026-04-01",
        "status": "Fresh"
      },
      {
        "id": 2,
        "name": "Beras 5kg",
        "expiry_date": "2027-01-15",
        "status": "In Stock"
      },
      {
        "id": 3,
        "name": "Minyak Goreng 2L",
        "expiry_date": "2026-12-20",
        "status": "Fresh"
      }
    ]
    ```

#### **C. Create**
Menambahkan barang baru ke dalam list pantry.
* **Method:** `POST`
* **Endpoint:** `/items`
* **Request Body:**
    ```json
    {
      "name": "Telur Omega",
      "expiry_date": "2026-05-20",
      "status": "Fresh"
    }
    ```
* **Response Success (211 Created):**
    ```json
    {
      "id": "4",
      "name": "Telur Omegs",
      "expiry_date": "2026-05-20",
      "status": "Fresh"
    }
    ```

#### **D. Update**
Memperbarui data barang berdasarkan ID unik yang spesifik.
* **Method:** `PUT`
* **Endpoint:** `/items/:id`
* **Request Body:**
    ```json
    {
      "name": "Susu UHT",
      "expiry_date": "2026-04-01",
      "status": "Fresh"
    }
    ```
* **Response (200 OK):**
    ```json
    {
      "id": "2",
      "name": "Susu UHT",
      "expiry_date": "2026-04-01",
      "status": "Fresh"
    }
    ```
* **Response Error (404 Not Found):**
    ```json
    {
      "message": "Barang tidak ditemukan"
    }
    ```

#### **E. Delete**
Menghapus data barang dari list berdasarkan ID.
* **Method:** `DELETE`
* **Endpoint:** `/items/:id`
* **Response Success (200 OK):**
    ```json
    {
      "message": "Barang berhasil dihapus"
    }
    ```
* **Response Error (404 Not Found):**
    ```json
    {
      "message": "Barang tidak ditemukan"
    }
    ```

### 3. Panduan Instalasi (Docker)
Aplikasi telah dikontainerisasi agar mudah dijalankan di lingkungan manapun.
- **Langkah-langkah:**
    1. Pastikan Docker Desktop aktif.
    2. Buka terminal di folder project.
    3. Jalankan perintah:
        ```bash
        docker-compose up --build
        ```
- **Informasi Port:**
    - Host Port: 3000
    - Container Port: 3000
    - Akses API melalui: http://localhost:3000

### 4. Alur Kerja Git
Proyek ini mengikuti standar pengembangan perangkat lunak yang baik:
- **Branching Strategy:**
    - main: Menyimpan kode stabil yang siap dinilai
    - develop: Branch utama untuk pengembangan fitur baru.
- **Conventional Commits:** Menggunakan prefix standar seperti feat:, fix:, docs:, dan test: untuk mempermudah pelacakan history perubahan.

### 5. Status Automasi (GitHub Actions)
Telah diimplementasikan pipeline CI/CD/CS otomatis melalui GitHub Actions untuk menjaga integritas kode:
- **CI (Unit Testing)**: Menjalankan perintah `npm test` menggunakan framework **Jest** secara otomatis setiap kali ada `push` atau `pull request` untuk memastikan semua endpoint CRUD berfungsi normal.
- **CS (Security Scan)**: Menjalankan `npm audit` untuk mendeteksi secara dini celah keamanan pada library/dependencies yang digunakan.

**Badge Status:**
![CI Status](https://github.com/audreyshna/Tugas1-PrakPPL1/actions/workflows/ci.yml/badge.svg)