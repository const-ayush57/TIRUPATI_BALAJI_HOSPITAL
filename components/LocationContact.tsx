"use client";

import { motion } from "framer-motion";

export default function LocationContact() {
    const phoneNumber = "YOUR_PHONE_NUMBER_HERE";

    return (
        <section className="py-24 bg-background-soft">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="flex flex-col gap-10">

                    <motion.div
                        className="rounded-3xl overflow-hidden h-[450px] shadow-2xl border-4 border-white relative group"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="w-full h-full relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.629807802254!2d79.19730837535529!3d28.55084477570946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390aa370d269ced5%3A0x52bf124b38d5fc03!2sTirupati%20Balaji%20Hospital!5e0!3m2!1sen!2sin!4v1772382022104!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0 grayscale contrast-125 opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 pointer-events-auto"
                            ></iframe>


                        </div>
                    </motion.div>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <a href={`tel:${phoneNumber}`} className="w-full sm:flex-1 sm:max-w-sm flex items-center justify-center gap-2 sm:gap-4 bg-primary hover:opacity-90 text-white px-6 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-lg sm:text-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0">
                            <span className="material-symbols-outlined text-2xl sm:text-3xl">call</span>
                            Call Us Now
                        </a>

                        <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer" className="w-full sm:flex-1 sm:max-w-sm flex items-center justify-center gap-2 sm:gap-4 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-lg sm:text-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0">
                            <span className="material-symbols-outlined text-2xl sm:text-3xl">chat</span>
                            Chat on WhatsApp
                        </a>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
