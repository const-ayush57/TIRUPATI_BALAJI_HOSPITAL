"use client";

import { motion, Variants } from "framer-motion";

export default function About() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-20 max-w-7xl mx-auto" id="about">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                <motion.div
                    className="space-y-6 md:space-y-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants} className="inline-block px-4 py-1.5 bg-action/10 text-action rounded-full text-xs font-bold tracking-wider uppercase">
                        About Our Institution
                    </motion.div>

                    <motion.h2 variants={itemVariants} className="font-extrabold text-deep-slate leading-tight">
                        A Legacy of Excellence in Medical Care
                    </motion.h2>

                    <motion.p variants={itemVariants} className="text-slate-600 leading-relaxed">
                        Our hospital provides high-quality healthcare services to patients with modern medical facilities, experienced doctors, and dedicated staff. All types of tests, treatments, and emergency services are available here 24x7. Our goal is to provide safe, accurate, and affordable treatment to every patient so that they can return to a healthy life quickly.
                    </motion.p>

                    <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                        <div className="p-6 bg-white rounded-2xl shadow-[0_4px_6px_rgba(0,0,0,0.1)] border border-slate-100 hover:shadow-[0_10px_15px_rgba(0,0,0,0.1)] transition-shadow group">
                            <span className="material-symbols-outlined text-action text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">verified</span>
                            <h4 className="font-bold text-deep-slate">Accredited Care</h4>
                            <p className="text-sm text-slate-500">NABH Certified Facilities</p>
                        </div>
                        <div className="p-6 bg-white rounded-2xl shadow-[0_4px_6px_rgba(0,0,0,0.1)] border border-slate-100 hover:shadow-[0_10px_15px_rgba(0,0,0,0.1)] transition-shadow group">
                            <span className="material-symbols-outlined text-action text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">clinical_notes</span>
                            <h4 className="font-bold text-deep-slate">Expert Doctors</h4>
                            <p className="text-sm text-slate-500">50+ Specialist Consultants</p>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="grid grid-cols-2 gap-3 sm:gap-6 mt-12 lg:mt-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants} className="aspect-square rounded-2xl bg-cover bg-center overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300" style={{ backgroundImage: 'url("/images/GRID_IMAGE_1_OF_4.jpeg")' }}></motion.div>
                    <motion.div variants={itemVariants} className="aspect-square rounded-2xl bg-cover bg-center overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 translate-y-6 sm:translate-y-10" style={{ backgroundImage: 'url("/images/GRID_IMAGE_2_OF_4.png")' }}></motion.div>
                    <motion.div variants={itemVariants} className="aspect-square rounded-2xl bg-cover bg-center overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300" style={{ backgroundImage: 'url("/images/GRID_IMAGE_3_OF_4.jpeg")' }}></motion.div>
                    <motion.div variants={itemVariants} className="aspect-square rounded-2xl bg-cover bg-center overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 translate-y-6 sm:translate-y-10" style={{ backgroundImage: 'url("/images/GRID_IMAGE_4_OF_4.jpeg")' }}></motion.div>
                </motion.div>

            </div>
        </section>
    );
}
