import React from "react"
import { Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const cr = {
  homepage: {
    title: "Beranda",
    intro: (
      <>
        Terima kasih untuk kalian yang telah jaga jarak dan menggunakan masker
        selama PSBB! Saat ini periode PSBB di Jakarta sudah berangsur berakhir,
        sehingga info yang muncul di sini{" "}
        <strong>mungkin tidak lagi relevan</strong>. Silakan klik "Lanjut" untuk
        cari tahu himbauan aktivitas selama PSBB.
        <br />
        <br />
        Tetap sehat, tetap jaga kesehatanmu, ya 😊
      </>
    ),
    menu_bar: "Boleh nggak __ ?",
    cta_start: "Lanjut",
    question: "Boleh nggak...",
    choose_activity: "Pilih aktivitas",
    type_activity: "Ketik kegiatan",
    question_mark: "?",
    randomize_questions: "Acak Pertanyaan",
  },
  common: {
    contribution: (
      <>
        Gak nemu pilihan kegiatan yang kamu cari?{" "}
        <OutboundLink
          href="https://docs.google.com/spreadsheets/d/16skDPETqaL8RXGsfhDtWsNLLtOabbE76Tfw_IzmR0Bg/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Submit di sini dan kami bantu carikan jawabannya!
        </OutboundLink>
      </>
    ),
    console_log: "corona ndang minggato please",
    copyright: (
      <>
        <Link to="/about">Tim BolehNggak.ID</Link>. Selalu jaga sanitasi dan
        kesehatan kalian ya, guys! Terinspirasi dari{" "}
        <OutboundLink
          href="https://canigo.sg"
          target="_blank"
          rel="noopener noreferrer"
        >
          canigo.sg
        </OutboundLink>
      </>
    ),
    back_to_home: "Kembali Ke Beranda",
    source: "Sumber",
    share: "Sebarkan:",
    question_page_title: "Boleh nggak",
    hashtag: ["covid19"],
    disclaimer_no_reference:
      "Karena tidak diatur secara eksplisit, rekomendasi ini ditulis atas pemahaman tim kami terhadap PP PSBB.",
    disclaimer_no_reference_link: "Mohon diterapkan dengan bijaksana ya.",
    disclaimer_no_reference_url:
      "https://corona.jakarta.go.id/storage/documents/peraturan-gubernur-nomor-33-tahun-2020-tentang-pelaksanaan-psbb-dalam-penanganan-covid-19-di-provinsi-dki-jakarta-5e987d4687853.pdf",
  },
  disclaimer: {
    title: "Disclaimer",
    content: (
      <>
        <li>
          Anda memiliki kontrol penuh mengenai pemahaman Anda terhadap semua
          informasi yang ditampilkan.
        </li>
        <li>
          Anda perlu berkonsultasi dengan pihak otoritas berwenang sebelum
          bertindak berdasarkan informasi yang ditampilkan.
        </li>
        <li>
          Para kontributor di halaman ini tidak memiliki kapasitas profesional
          dan tidak memberikan anjuran profesional.
        </li>
        <li>
          Konten yang ditampilkan memiliki masa kedaluwarsa atau inakurasi
          dikarenakan kesalahan manusiawi.
        </li>
        <li>
          Para kontributor tidak merepresentasikan ataupun bertindak atas nama
          organisasi apapun.
        </li>
        <li>
          Semua informasi ditampilkan sesuai dengan kapabilitas terbatas kami
          dan sama sekali tidak ditujukan untuk mencemarkan nama baik siapapun
          atau apapun.
        </li>
        <li>
          Kami tidak bertanggung jawab atas komentar-komentar dari pembaca
          lainnya.
        </li>
        <li>
          Para kontributor memiliki intensi untuk membantu. Kami memohon maaf
          jika terdapat kesalahan ataupun misinformasi. Kami sangat terbuka
          terhadap kritik dan masukan yang membangun.
        </li>
      </>
    ),
  },
  notfound: {
    title: "404",
    content: "Halaman tidak ditemukan.",
  },
  privacy_policy: {
    title: "Kebijakan Privasi",
    content: "-",
  },
  about: {
    title: "About",
    content: (
      <>
        bolehnggak.id dibuat dengan 💕💕️ oleh{" "}
        <OutboundLink
          key="link-arian"
          href="https://id.linkedin.com/in/arianpradana"
          target="_blank"
          rel="noopener noreferrer"
        >
          Arian
        </OutboundLink>
        ,{" "}
        <OutboundLink
          key="link-wahyu"
          href="https://id.linkedin.com/in/wahyudwiwidharto"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wahyu
        </OutboundLink>
        ,{" "}
        <OutboundLink
          key="link-lintang"
          href="https://id.linkedin.com/in/lintanggustika"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lintang
        </OutboundLink>
        ,{" "}
        <OutboundLink
          key="link-aswin"
          href="https://id.linkedin.com/in/aswinprasetyo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aswin
        </OutboundLink>
        ,{" "}
        <OutboundLink
          key="link-rose"
          href="https://id.linkedin.com/in/rose-kusuma-diah-tantri-228a71153"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rose
        </OutboundLink>
        , dan Rara
      </>
    ),
  },
}

export default cr
