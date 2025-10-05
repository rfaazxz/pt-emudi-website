import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        setSent(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        alert(data.error || "Gagal menyimpan pesan");
      }
    } catch (err) {
      console.error(err);
      alert("Terjadi kesalahan saat menyimpan pesan");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-gray-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-yellow-400 text-center mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hubungi Kami
        </motion.h2>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Isi form di bawah ini untuk mengirim pesan kepada kami. Semua inputan akan tersimpan otomatis.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Form Kontak */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-900 p-8 rounded-2xl shadow-lg space-y-6"
          >
            <div>
              <label className="block text-gray-300 mb-2">Nama</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-400"
                placeholder="Masukkan nama Anda"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-400"
                placeholder="Masukkan email Anda"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Pesan</label>
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-400"
                placeholder="Tulis pesan Anda..."
              ></textarea>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              disabled={loading}
              className={`w-full py-3 rounded-lg font-semibold transition ${
                loading ? "bg-gray-700 cursor-not-allowed" : "bg-yellow-500 hover:bg-yellow-400 text-black"
              }`}
            >
              {loading ? "Mengirim..." : "Kirim Pesan"}
            </motion.button>

            {sent && (
              <p className="text-green-400 text-center mt-4">
                ✅ Pesan kamu berhasil disimpan!
              </p>
            )}
          </motion.form>

          {/* Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl overflow-hidden shadow-lg shadow-yellow-400/10"
          >
            <iframe
              title="Lokasi Tambang"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31827.05693293053!2d121.604!3d-4.039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2da5b3c25b7d3c3d%3A0x19e98b66d0ee6a4a!2sKonawe%2C%20Sulawesi%20Tenggara!5e0!3m2!1sid!2sid!4v1698846882435!5m2!1sid!2sid"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
