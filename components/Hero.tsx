"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative h-[650px] flex items-center justify-center overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url("/images/TIRUPATI_BALAJI_HOSPITAL_IMAGE.jpeg")' }}
            ></div>
            <div className="absolute inset-0 hero-overlay"></div>

            <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl">
                <motion.h1
                    className="text-white font-serif font-bold mb-4 sm:mb-6 tracking-tight drop-shadow-md [text-shadow:2px_2px_4px_rgba(0,0,0,0.6)]"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Tirupati Balaji Hospital
                </motion.h1>

                <motion.p
                    className="text-white font-medium mb-8 sm:mb-10 tracking-wide uppercase"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    Compassionate Care, Advanced Medicine
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row justify-center gap-4 w-full px-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    <Link href="/#team" className="bg-action hover:opacity-90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-2 hover:scale-105 active:scale-95 duration-200">
                        Our Specialties <span className="material-symbols-outlined">arrow_forward</span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
