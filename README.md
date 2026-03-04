# Math Learning Mobile App - Determinant

Aplikasi mobile pembelajaran interaktif untuk memahami dan menghitung determinan matriks 2x2 dan 3x3. Dibangun menggunakan React Native, Expo, dan NativeWind (Tailwind CSS untuk React Native).

## 🌟 Fitur Utama

- **📖 Materi Pembelajaran**: Penjelasan interaktif mengenai konsep, rumus, dan contoh penyelesaian determinan matriks 2x2 serta metode Sarrus untuk matriks 3x3.
- **🧮 Kalkulator Cerdas**: Hitung determinan secara instan dengan memasukkan nilai matriks 2x2 atau 3x3, lengkap dengan langkah-langkah detail perhitungannya.
- **🎯 Kuis Berwaktu**: Uji pemahaman dengan menjawab soal determinan matriks acak. Terdapat batasan waktu (1 menit untuk 2x2, 3 menit untuk 3x3) dengan animasi dan peringatan suara saat waktu hampir habis.

## 🛠️ Teknologi yang Digunakan

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/) (dengan Expo Router)
- [NativeWind v4](https://www.nativewind.dev/) (Tailwind CSS)
- [Lucide React Native](https://lucide.dev/icons)
- TypeScript

---

## 🚀 Cara Menjalankan di Local Development (Dev)

Ikuti langkah-langkah berikut untuk menginstall dan menjalankan aplikasi ini secara lokal di komputer Anda:

### 1. Persyaratan Sistem (Prerequisites)
Pastikan Anda sudah menginstall:
- [Node.js](https://nodejs.org/) (disarankan versi LTS, misal v18 atau v20)
- Aplikasi **Expo Go** di HP Anda (tersedia di Play Store / App Store)

### 2. Instalasi

Clone repository ini ke komputer Anda dan masuk ke direktorinya:

```bash
git clone https://github.com/varrelnuwi/Math-Learning-Mobile-App.git
cd Math-Learning-Mobile-App
```

Kemudian, install semua dependensi yang dibutuhkan:

```bash
npm install
```

### 3. Menjalankan Aplikasi (Development Server)

Jalankan server Expo dengan perintah (opsi `-c` digunakan untuk memastikan cache bersih):

```bash
npx expo start -c
```

Setelah server berjalan, akan muncul QR Code di terminal.
- **Android**: Buka aplikasi Expo Go di HP Anda dan scan QR Code tersebut.
- **iOS**: Buka menu Kamera di iPhone dan scan QR Code tersebut.

*Catatan: Pastikan komputer dan HP berada dalam jaringan Wi-Fi yang sama.*

---

## 📦 Cara Membangun (Build) File Installer Mandiri (.apk)

Jika ingin membuat file installer APK yang dapat dibagikan tanpa memerlukan aplikasi Expo Go:

1. Buat akun di [expo.dev](https://expo.dev/)
2. Install EAS CLI secara global:
   ```bash
   npm install -g eas-cli
   ```
3. Login ke akun Expo Anda via terminal:
   ```bash
   eas login
   ```
4. Jalankan perintah build untuk Android:
   ```bash
   eas build --platform android --profile preview
   ```
5. Tunggu proses build selesai di cloud Expo. Link download file `.apk` akan diberikan setelah selesai.
