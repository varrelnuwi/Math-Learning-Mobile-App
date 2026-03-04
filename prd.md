# Product Requirements Document (PRD)

## Aplikasi Mobile Pembelajaran Determinan Matriks

---

# 1. Product Overview

**Product Name:** Determinant Learning App

**Product Type:** Mobile Learning Application

**Platform (MVP):** Android Mobile Application

**Product Description:**
Aplikasi ini bertujuan membantu pengguna mempelajari konsep determinan matriks bujur sangkar ukuran **2×2 dan 3×3** melalui tiga fitur utama:

* Materi pembelajaran
* Kalkulator determinan
* Kuis latihan

Aplikasi dirancang sebagai **offline learning tool** yang mudah digunakan dan memiliki **UI modern dengan floating bottom navigation**.

---

# 2. Objectives

Tujuan utama aplikasi:

1. Membantu pengguna memahami konsep determinan matriks secara visual.
2. Memberikan alat untuk menghitung determinan matriks secara langsung.
3. Menguji pemahaman pengguna melalui kuis interaktif berbasis waktu.

---

# 3. Target Users

| User          | Description                       |
| ------------- | --------------------------------- |
| Siswa SMA     | Belajar konsep determinan matriks |
| Mahasiswa     | Memahami determinan dasar         |
| Pengguna umum | Pembelajaran matematika dasar     |

---

# 4. Platform Scope

| Platform | Status      |
| -------- | ----------- |
| Android  | MVP         |
| iOS      | Future      |
| Web      | Not Planned |

---

# 5. Technology Stack

### Mobile Development

| Layer     | Technology   |
| --------- | ------------ |
| Framework | React Native |
| Tooling   | Expo         |
| Language  | TypeScript   |

### UI System

| Tool                    | Purpose                |
| ----------------------- | ---------------------- |
| NativeWind              | Tailwind-style styling |
| shadcn-style components | Modern UI design       |
| Lucide Icons            | Icon library           |

### Libraries

| Library          | Function                 |
| ---------------- | ------------------------ |
| React Navigation | Navigation system        |
| expo-av          | Audio playback           |
| Math utilities   | Determinant calculations |

---

# 6. Application Flow

```
App Launch
   │
Introduction Screen
   │
Main Application
   │
   ├── Materi
   ├── Kalkulator
   └── Kuis
```

Setelah halaman **Introduction**, pengguna masuk ke **Main Application Layout** yang menggunakan **Floating Bottom Navbar** untuk navigasi utama.

---

# 7. Navigation System

Aplikasi menggunakan **tab-based navigation** dengan **Floating Bottom Navbar**.

### Navigation Hierarchy

```
Introduction
   │
Main Application
   │
   ├── Materi
   │      ├── Materi 2x2
   │      └── Materi 3x3
   │
   ├── Kalkulator
   │      ├── Kalkulator 2x2
   │      └── Kalkulator 3x3
   │
   └── Kuis
          ├── Kuis 2x2
          └── Kuis 3x3
```

---

# 8. Main Application Layout

Layout utama aplikasi terdiri dari tiga bagian utama.

```
--------------------------------
              AppBar
--------------------------------

             Content

--------------------------------
      Floating Bottom Navbar
--------------------------------
```

Navbar akan selalu tampil di halaman utama aplikasi.

---

# 9. Floating Bottom Navbar

### Purpose

Memudahkan navigasi antar fitur utama aplikasi.

### Position

Bagian bawah layar (floating).

### Menu

| Menu       | Function                      |
| ---------- | ----------------------------- |
| Materi     | Membuka halaman materi        |
| Kalkulator | Membuka kalkulator determinan |
| Kuis       | Membuka kuis latihan          |

### UI Behavior

| Behavior     | Description            |
| ------------ | ---------------------- |
| Active Tab   | Icon + label highlight |
| Inactive Tab | Default style          |
| Interaction  | Tap to switch tab      |

Contoh tampilan:

```
[📘 Materi]   [🧮 Kalkulator]   [🎯 Kuis]
```

---

# 10. Global Actions

Setiap halaman memiliki opsi berikut:

| Action    | Function                 |
| --------- | ------------------------ |
| Main Menu | Kembali ke halaman utama |
| Exit      | Keluar dari aplikasi     |

Biasanya tersedia melalui **AppBar menu**.

---

# 11. Feature Requirements

---

# 11.1 Introduction Screen

### Description

Halaman pembuka aplikasi.

### Content

* Judul aplikasi
* Deskripsi singkat aplikasi
* Instruksi memulai aplikasi

### Behavior

```
Tap anywhere → masuk ke aplikasi
```

---

# 11.2 Materi

### Description

Menampilkan teori determinan matriks.

### Submenu

| Menu           | Description                   |
| -------------- | ----------------------------- |
| Determinan 2x2 | Materi determinan matriks 2x2 |
| Determinan 3x3 | Materi determinan matriks 3x3 |

---

### Materi 2x2

Rumus:

```
| a  b |
| c  d |

det(A) = ad − bc
```

Konten halaman:

* penjelasan rumus
* contoh perhitungan

---

### Materi 3x3

Metode:

```
Metode Sarrus
```

Konten halaman:

* ilustrasi metode
* contoh perhitungan

---

# 11.3 Kalkulator Determinan

### Description

Fitur untuk menghitung determinan matriks.

### Menu

| Option | Description                       |
| ------ | --------------------------------- |
| 2x2    | Kalkulator determinan matriks 2x2 |
| 3x3    | Kalkulator determinan matriks 3x3 |

---

### Kalkulator 2x2

Input:

```
| a  b |
| c  d |
```

Formula:

```
det(A) = ad − bc
```

Output:

```
det(A)
```

---

### Kalkulator 3x3

Input:

```
| a b c |
| d e f |
| g h i |
```

Formula:

```
det(A) = aei + bfg + cdh − ceg − bdi − afh
```

Output:

```
det(A)
```

---

# 11.4 Quiz

### Description

Latihan menentukan determinan matriks.

Matrix akan digenerate secara **random**.

Range nilai:

```
-10 sampai 10
```

---

## Quiz 2x2

### Timer

```
1 menit
```

### Flow

```
Generate Matrix
Start Timer
User Input Answer
Submit
```

### Result

| Condition | Response             |
| --------- | -------------------- |
| Correct   | tampil pesan benar   |
| Incorrect | tampil jawaban benar |

---

## Quiz 3x3

### Timer

```
3 menit
```

Flow sama dengan quiz 2x2.

---

# Warning Sound

Pada:

```
10 detik terakhir
```

akan muncul bunyi peringatan.

---

# 12. Non-Functional Requirements

### Performance

* aplikasi berjalan **offline**
* response time < 1 detik

### Usability

* UI sederhana
* navigasi mudah
* tombol jelas

### Compatibility

| Device     | Support   |
| ---------- | --------- |
| Android 8+ | Supported |

---

# 13. Success Metrics

Keberhasilan MVP diukur dari:

| Metric                        | Target |
| ----------------------------- | ------ |
| Aplikasi berjalan tanpa crash | 100%   |
| Kalkulator determinan benar   | 100%   |
| Quiz berjalan dengan timer    | Yes    |

---

# 14. MVP Scope

Fitur yang termasuk dalam MVP:

| Feature                    | Included |
| -------------------------- | -------- |
| Introduction Screen        | ✔        |
| Materi                     | ✔        |
| Kalkulator                 | ✔        |
| Quiz                       | ✔        |
| Timer                      | ✔        |
| Warning sound              | ✔        |
| Floating Navbar Navigation | ✔        |

---
