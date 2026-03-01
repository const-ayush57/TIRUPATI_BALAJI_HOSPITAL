import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-400 py-12 md:py-16 px-4 sm:px-6 lg:px-10 border-t border-slate-800">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
                <div className="space-y-4">
                    <Link href="/" className="flex items-center gap-3 text-white group cursor-pointer inline-flex">
                        <Image src="/images/TIRUPATI_BALAJI_HOSPITAL_LOGO.svg" alt="Tirupati Balaji Hospital Logo" width={240} height={60} className="h-12 w-auto transition-transform group-hover:scale-110" />
                    </Link>
                    <p className="text-sm leading-relaxed">Providing elite healthcare services with a focus on compassion and cutting-edge technology for our community.</p>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-6">Quick Links</h4>
                    <ul className="space-y-3 text-sm">
                        <li><Link className="hover:text-primary transition-colors" href="/#team">Find a Doctor</Link></li>
                        <li><Link className="hover:text-primary transition-colors" href="/#about">Medical Services</Link></li>
                        <li><Link className="hover:text-primary transition-colors" href="/">Patient Stories</Link></li>
                        <li><Link className="hover:text-primary transition-colors" href="/">Careers</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-6">Specialties</h4>
                    <ul className="space-y-3 text-sm">
                        <li className="hover:text-primary transition-colors cursor-pointer">Cardiology</li>
                        <li className="hover:text-primary transition-colors cursor-pointer">Orthopedics</li>
                        <li className="hover:text-primary transition-colors cursor-pointer">Pediatrics</li>
                        <li className="hover:text-primary transition-colors cursor-pointer">Neurology</li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-6">Connect</h4>
                    <div className="flex gap-4 mb-6">
                        <a className="size-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-slate-900 transition-all" aria-label="Share" href="#"><span className="material-symbols-outlined text-xl">share</span></a>
                        <a className="size-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-slate-900 transition-all" aria-label="Instagram" href="#"><span className="material-symbols-outlined text-xl">camera</span></a>
                    </div>
                    <a href="mailto:tirupatibalajihospital4@gmail.com" className="flex items-center gap-2 text-sm hover:text-primary transition-colors mb-6 group break-all">
                        <span className="material-symbols-outlined text-lg group-hover:scale-110 transition-transform shrink-0">mail</span>
                        tirupatibalajihospital4@gmail.com
                    </a>
                    <p className="text-xs">© {new Date().getFullYear()} Tirupati Balaji Hospital. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
