"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Staff() {
    const staffMembers = [
        {
            name: "Dr. Rajesh Sharma",
            role: "Senior Cardiologist",
            specialty: "Cardiology",
            desc: "Expert in heart health and advanced surgical procedures with 20+ years of experience.",
            image: ""
        },
        {
            name: "Dr. Sneha Kapoor",
            role: "Head of Pediatrics",
            specialty: "Pediatrics",
            desc: "Specializing in neonatal and adolescent care with a gentle approach to children's health.",
            image: ""
        },
        {
            name: "Dr. Amit Verma",
            role: "Orthopedic Surgeon",
            specialty: "Orthopedics",
            desc: "Renowned specialist in joint replacement and sports trauma management.",
            image: ""
        },
        {
            name: "Dr. Priya Nair",
            role: "General Physician",
            specialty: "General Medicine",
            desc: "Focused on comprehensive family healthcare and preventative wellness.",
            image: ""
        }
    ];

    return (
        <section className="py-24 bg-background-soft" id="team">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="font-extrabold text-deep-slate mb-4">Meet Our Experts</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">Our team of world-renowned specialists is dedicated to providing you with the highest level of expertise and care.</p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {staffMembers.map((doctor, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)] group border border-slate-100 hover:shadow-[0_10px_15px_rgba(0,0,0,0.1)] transition-all duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="h-80 overflow-hidden relative">
                                {doctor.image ? (
                                    <Image
                                        src={doctor.image}
                                        alt={doctor.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-slate-50 flex flex-col items-center justify-center text-slate-400">
                                        <span className="material-symbols-outlined text-6xl opacity-50">person</span>
                                        <span className="text-xs uppercase font-bold tracking-wider mt-2 opacity-50">Photo Pending</span>
                                    </div>
                                )}
                                <div className="absolute bottom-4 left-4">
                                    <span className="bg-action text-white px-3 py-1 rounded text-xs font-bold uppercase shadow-sm">
                                        {doctor.specialty}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-deep-slate mb-1 group-hover:text-action transition-colors">{doctor.name}</h3>
                                <p className="text-sm font-semibold text-action mb-3">{doctor.role}</p>
                                <p className="text-sm text-slate-500 line-clamp-2 italic">{doctor.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
