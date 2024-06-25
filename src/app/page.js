"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import BackgroundImage from "../../public/background.png";
import WhitePaperBackground from "../../public/whitepaper.png";

export default function Home() {
  return (
    <main>
      <section>
        <div className="relative w-full">
          <Image src={BackgroundImage} width={1080} height={930} alt="Picture of building" className="w-full h-screen object-cover object-center" />
          <div className="absolute inset-0 bg-black/45"></div>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-5xl text-center text-3xl font-bold leading-snug text-white lg:text-4xl xl:text-5xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            Pentingnya Rumah Tahan Gempa
          </motion.h2>
        </div>
        <div className="relative">
          <Image src={WhitePaperBackground} width={1080} height={1920} alt="white paper background" className="w-full h-[1100px] sm:h-[950px] relative" />
          <div className="mx-auto max-w-[65ch] text-black py-8 flex flex-col gap-5 px-4 absolute top-0 inset-0">
            <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              Memahami apa yang perlu dilakukan saat gempa terjadi adalah perkara kemampuan seseorang dalam menghadapi ancaman bencana gempa. Lantas, bagaimana dengan pembangunan fisiknya?
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              Hal yang bisa dilakukan masyarakat dalam upaya mitigasi dalam hal pembangunan fisik di antaranya adalah memastikan bahwa rumahnya tahan gempa. Bukan tanpa alasan, kerusakan struktur bangunan, terutama perumahan memang menjadi
              ancaman serius bagi negara rawan gempa seperti Indonesia.
            </motion.p>
            <motion.img initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ ease: "easeOut" }} src="/bangunan-quote.png" alt="gambar bangunan-quote" />
            <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              Saat terjadi gempa, seberapa bagus desain dan konstruksi bakal teruji. Jika ternyata tidak bagus, maka bangunan tersebut sudah tentu berpotensi mengalami kerusakan fatal.
            </motion.p>
            <motion.img initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 4, ease: "easeOut" }} src="/quote.png" alt="gambar quote komentar dosen" />
            <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              Nuraziz mengatakan, kualitas bahan bangunan, pendetailan pembesian, serta sambungan dinding, kolom, dan balok, menjadi biang utama penyebab keruntuhan bangunan, fasilitas umum, rumah tinggal, hingga bangunan sederhana lainnya.
              Ia menerangkan, ada banyak aspek yang perlu diperhatikan kontraktor untuk mendirikan bangunan tahan gempa sesuai standar. Mulai dari sambungan, pemilihan dan persiapan material sebelum digunakan, pendetailan pekerjaan
              penulangan, pengangkuran dinding ke kolom, hingga pendetailan penulangan balok kolom.
            </motion.p>
          </div>
        </div>
        <div className="bg-[#052153] text-white">
          <div className="mx-auto max-w-[65ch] p-4 pt-7  flex flex-col gap-5 ">
            <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              “Sebagai contoh, diperlukan panjang pengangkuran yang sesuai pada sambungan antara kolom dan balok sloof. Penulangan kolom pada bagian atas dan bawah atau fondasi kolom sebaiknya dilebihkan dari besar minimal 40 kali
              diameternya,” jelas Nuraziz.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              Standar yang dimaksud Nuraziz ialah Standar Nasional Indonesia (SNI) yang dikeluarkan oleh Kementerian Pekerjaan Umum dan Perumahan Rakyat (PUPR) RI. Dia sempat memberikan contoh perhitungan besi pengangkuran kolom dan dinding
              bata.
            </motion.p>
            <motion.img initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 4, ease: "easeOut" }} src="/card-pertama.png" alt="gambar card pertama" />
            <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              Jika diameter penulangan 10 milimeter, maka panjang minimal pengangkuran 40 sentimeter ke arah kanan dan ke kiri dari sudut bangunan. Pengangkuran itu diaplikasikan setiap enam lapis bata. Lalu, besi angkur dicor pada lapis
              bata sebagai pengikat kolom dengan dinding agar sambungan atau angkur sesuai standar Kementerian Pekerjaan Umum dan Perumahan Rakyat Republik Indonesia.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              Prinsip yang sama berlaku untuk sambungan pada sopi-sopi atau atap maupun sudut dinding. Kata Nuraziz, perlu pengangkuran yang tepat untuk kolom di tengah dinding yang terhubung pada segitiga pelana atap dan kolom yang bertemu
              sudut dinding.
            </motion.p>
            <motion.img initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 4, ease: "easeOut" }} src="/card-kedua.png" alt="gambar card kedua" />
            <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              Di samping itu, masih ada beberapa persyaratan pokok yang harus dipenuhi kontraktor untuk menciptakan rumah tahan gempa, di antaranya: kualitas bahan bangunan baik, keberadaan dimensi struktur sesuai, sambungan elemen struktur
              utama baik, dan mutu pekerjaan yang baik.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              “Perlu diperhatikan bahwa pekerjaan ini tidak terlihat kasat mata dan baru akan teruji ketika gempa terjadi. Oleh karena itu, patuhilah proses dan standar dalam pembuatan bangunan untuk menjaga keselamatan kita bersama,” tutup
              Nuraziz.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              Saat ini, pemerintah Indonesia juga memiliki rumah tahan gempa berstandar SNI, namanya Rumah Instan Sederhana Sehat (RISHA). Rumah ini telah dibangun sejak 2004 dan dikembangkan oleh Balai Penelitian dan Pengembangan
              Kementerian PUPR. Bangunan ini menahan gempa hingga 8 skala Richter. Interior dan eksteriornya terbuat dari anyaman bambu atau kayu lapis.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              Rumah Pintar RISHA memiliki 5 komponen, yaitu pondasi, struktural RISHA, utilitas, nonstruktural, dan komponen atap. Rumah ini punya banyak keunggulan, antara lain: pembangunannya cepat, harganya terjangkau, serta moveable
              atau knock down, sehingga memudahkan penghuni bila ingin pindah, cukup dengan membongkar lalu memasangnya kembali.
            </motion.p>
          </div>
        </div>
      </section>
    </main>
  );
}
