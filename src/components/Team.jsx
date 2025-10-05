import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    id: 1,
    name: "Rafa Ikhwan",
    role: "CEO & Founder",
    image:
      "https://images.unsplash.com/photo-1530659100910-af50b8ce9ae5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",
    desc: "Memimpin PT EMUDI dengan visi keberlanjutan dan inovasi di sektor pertambangan emas dan nikel.",
  },
  {
    id: 2,
    name: "Angelina Margareth",
    role: "Direktur Operasional",
    image:
      "https://images.unsplash.com/photo-1665224752561-85f4da9a5658?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
    desc: "Mengawasi kegiatan eksplorasi dan memastikan seluruh operasi tambang berjalan efisien serta aman.",
  },
  {
    id: 3,
    name: "Sergio Fernando",
    role: "Kepala Geologi",
    image:
      "https://plus.unsplash.com/premium_photo-1732442109883-63e651f6da23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI3fHx8ZW58MHx8fHx8",
    desc: "Bertanggung jawab atas riset geologi dan analisis mineral untuk meningkatkan hasil eksplorasi tambang.",
  },
  {
    id: 4,
    name: "Sinta Wijaya",
    role: "Manajer Keberlanjutan",
    image:
      "https://plus.unsplash.com/premium_photo-1661590803719-b502845d8170?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI4fHx8ZW58MHx8fHx8",
    desc: "Mendorong penerapan praktik pertambangan berkelanjutan dan menjaga keseimbangan lingkungan.",
  },
];

const Team = () => {
  return (
    <section id="team" className="bg-gray-950 py-20 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold text-yellow-400 mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Tim Profesional Kami
        </motion.h2>
        <p className="text-gray-300 mb-12 max-w-3xl mx-auto">
          Di balik kesuksesan PT EMUDI terdapat tim ahli dengan pengalaman
          bertahun-tahun di industri pertambangan emas dan nikel.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-yellow-400/30 transition duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-yellow-400 mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-400 text-sm mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
