import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "recharts";

const productionData = [
  { year: 2019, emas: 32, nikel: 300 },
  { year: 2020, emas: 37, nikel: 420 },
  { year: 2021, emas: 40, nikel: 530 },
  { year: 2022, emas: 42, nikel: 610 },
  { year: 2023, emas: 54, nikel: 720 },
  { year: 2024, emas: 60, nikel: 850 },
];

const Statistics = () => {
  return (
    <section id="statistics" className="glow-bg bg-gray-900 py-20 text-white relative">

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Judul */}
        <motion.h2
          className="text-4xl font-bold text-yellow-400 mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Data Produksi & Statistik
        </motion.h2>

        <p className="text-3xl sm:text-4xl font-bold">
          Berikut adalah data produksi dan pertumbuhan hasil tambang{" "}
          <span className="text-yellow-400 font-semibold">PT. EMUDI</span>{" "}
          selama 5 tahun terakhir.
        </p>

        {/* Bagian Counter */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Total Emas */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">

<h3 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-4">
              Total Emas 2024
            </h3>
            <p className="text-4xl font-bold">
              <CountUp end={60} duration={3} /> <span className="text-lg">Ton</span>
            </p>
          </div>

          {/* Total Nikel */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-400 mb-2">
              Total Nikel 2024
            </h3>
            <p className="text-4xl font-bold">
              <CountUp end={850} duration={3} /> <span className="text-lg">Ton</span>
            </p>
          </div>

          {/* Pertumbuhan Produksi */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-green-400 mb-2">
              Pertumbuhan Tahunan
            </h3>
            <p className="text-4xl font-bold">
              <CountUp end={18.5} decimals={1} duration={3} />%
            </p>
          </div>
        </motion.div>

        {/* Grafik Produksi */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Grafik Batang */}
          <motion.div
            className="bg-gray-800 p-6 rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
              Volume Produksi (Ton)
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={productionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="year" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip contentStyle={{ backgroundColor: "#222", border: "none" }} />
                <Legend />
                <Bar dataKey="emas" fill="#facc15" name="Emas (Ton)" />
                <Bar dataKey="nikel" fill="#60a5fa" name="Nikel (Ton)" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {}
          <motion.div
            className="bg-gray-800 p-6 rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
              Pertumbuhan Produksi (%)
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={productionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="year" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip contentStyle={{ backgroundColor: "#222", border: "none" }} />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="emas"
                  stroke="#facc15"
                  name="Emas"
                  strokeWidth={3}
                />
                <Line
                  type="monotone"
                  dataKey="nikel"
                  stroke="#60a5fa"
                  name="Nikel"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
