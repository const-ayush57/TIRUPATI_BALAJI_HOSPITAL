"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-3 sm:py-4 flex items-center justify-between">
                <div className="flex items-center gap-4 sm:gap-8">
                    <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
                        <Image src="/images/TIRUPATI_BALAJI_HOSPITAL_LOGO.svg" alt="Tirupati Balaji Hospital Logo" width={240} height={60} className="h-10 sm:h-12 w-auto transition-transform group-hover:scale-105" />
                    </Link>
                    <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
                        <Link className="text-deep-slate hover:text-primary text-sm font-semibold transition-colors" href="/">Home</Link>
                        <Link className="text-deep-slate hover:text-primary text-sm font-semibold transition-colors" href="/#about">About</Link>
                        <Link className="text-deep-slate hover:text-primary text-sm font-semibold transition-colors" href="/#team">Medical Team</Link>
                        <Link className="text-deep-slate hover:text-primary text-sm font-semibold transition-colors" href="/#registration">Registration</Link>
                    </nav>
                </div>
                <div className="flex items-center gap-3 xl:gap-4">
                    <button className="hidden sm:flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity whitespace-nowrap">
                        <span className="material-symbols-outlined text-lg">call</span>
                        <span>Emergency: 1066</span>
                    </button>
                    <Link href="/#registration" className="bg-action text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg font-bold text-xs sm:text-sm transition-all shadow-sm hover:shadow-md hover:opacity-90 text-center whitespace-nowrap hidden sm:block">
                        Book Appt.
                    </Link>
                    <button className="lg:hidden text-deep-slate p-2 flex items-center justify-center transition-colors hover:bg-slate-100 rounded-md" aria-label="Toggle menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <span className="material-symbols-outlined text-3xl">{isMenuOpen ? "close" : "menu"}</span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl py-4 flex flex-col">
                    <Link onClick={() => setIsMenuOpen(false)} className="px-6 py-3 text-deep-slate hover:bg-slate-50 hover:text-primary font-semibold" href="/">Home</Link>
                    <Link onClick={() => setIsMenuOpen(false)} className="px-6 py-3 text-deep-slate hover:bg-slate-50 hover:text-primary font-semibold" href="/#about">About</Link>
                    <Link onClick={() => setIsMenuOpen(false)} className="px-6 py-3 text-deep-slate hover:bg-slate-50 hover:text-primary font-semibold" href="/#team">Medical Team</Link>
                    <Link onClick={() => setIsMenuOpen(false)} className="px-6 py-3 text-deep-slate hover:bg-slate-50 hover:text-primary font-semibold" href="/#registration">Registration</Link>
                    <div className="px-6 pt-4 pb-2 border-t border-slate-100 mt-2 flex flex-col gap-3">
                        <button className="flex items-center justify-center gap-2 bg-primary text-white px-4 py-3 rounded-xl font-bold w-full transition-opacity hover:opacity-90">
                            <span className="material-symbols-outlined">call</span>
                            Emergency: 1066
                        </button>
                        <Link onClick={() => setIsMenuOpen(false)} href="/#registration" className="bg-action text-white px-4 py-3 rounded-xl font-bold text-center w-full transition-opacity hover:opacity-90 sm:hidden block">
                            Book Appointment
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
