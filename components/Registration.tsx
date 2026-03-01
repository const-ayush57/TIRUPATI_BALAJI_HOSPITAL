"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Registration() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successId, setSuccessId] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formElement = e.currentTarget;
        const formData = new FormData(formElement);

        // Structure the payload for the external backend
        // Note: The ID is no longer generated here to prevent collisions.
        const payload = {
            timestamp: new Date().toISOString(),
            name: formData.get("fullName"),
            phone: formData.get("phone"),
            address: formData.get("address"),
            age: formData.get("age"),
            gender: formData.get("gender"),
            problem: formData.get("problem")
        };

        try {
            // Provide a plug-and-play connection point for the backend developer
            const endpoint = process.env.NEXT_PUBLIC_REGISTRATION_API;
            let finalTrackingId = "";

            if (endpoint) {
                const response = await fetch(endpoint, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });

                if (!response.ok) throw new Error("API request failed");

                // The backend MUST return the unique token/ID they generated in the sheets
                const responseData = await response.json();
                finalTrackingId = responseData.id || "ID-MISSING-FROM-SERVER";

            } else {
                // If no env variable is set, simulate a successful network request and return a mock token
                await new Promise(resolve => setTimeout(resolve, 1500));
                console.log("Mock Submission Payload (Waiting for actual API link):", payload);
                finalTrackingId = "MOCK-" + Math.floor(Math.random() * 90000 + 10000);
            }

            // Show success screen with the authoritative backend token
            setSuccessId(finalTrackingId);
            formElement.reset();
        } catch (error) {
            console.error("Submission error:", error);
            alert("There was a problem submitting your registration. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-24 bg-white" id="registration">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)]"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="bg-white px-8 py-10 text-center border-b border-slate-100">
                        <h2 className="text-3xl font-black text-deep-slate">Patient Registration</h2>
                        <p className="text-slate-500 mt-2">Please fill in the details below to pre-register for your visit.</p>
                    </div>

                    {successId ? (
                        <div className="p-12 text-center space-y-4">
                            <div className="size-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                                <span className="material-symbols-outlined text-4xl">check_circle</span>
                            </div>
                            <h3 className="text-2xl font-bold text-deep-slate">Registration Successful!</h3>
                            <p className="text-slate-600">Your information has been securely received.</p>
                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 inline-block mt-4 mb-8">
                                <p className="text-sm font-semibold text-slate-500 mb-1">Your Tracking ID</p>
                                <p className="text-xl font-mono font-bold tracking-widest text-primary">{successId}</p>
                            </div>
                            <div>
                                <button onClick={() => setSuccessId(null)} className="text-action font-semibold hover:underline">Submit another registration</button>
                            </div>
                        </div>
                    ) : (
                        <form className="p-6 sm:p-8 lg:p-12 space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-deep-slate">Full Name <span className="text-primary">*</span></label>
                                    <input
                                        name="fullName"
                                        className="w-full bg-slate-50 border border-slate-300 px-4 py-3 rounded-xl focus:bg-white focus:ring-2 focus:ring-action/20 focus:border-action transition-all shadow-sm"
                                        placeholder="e.g. John Doe"
                                        type="text"
                                        disabled={isSubmitting}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-deep-slate">Phone Number <span className="text-primary">*</span></label>
                                    <input
                                        name="phone"
                                        className="w-full bg-slate-50 border border-slate-300 px-4 py-3 rounded-xl focus:bg-white focus:ring-2 focus:ring-action/20 focus:border-action transition-all shadow-sm invalid:[&:not(:placeholder-shown):not(:focus)]:border-primary/50"
                                        placeholder="+91 00000 00000"
                                        type="tel"
                                        disabled={isSubmitting}
                                        pattern="\+91\s[0-9]{5}\s[0-9]{5}"
                                        onInput={(e) => {
                                            let val = e.currentTarget.value;

                                            if (val === '+91' || val === '+9' || val === '+' || val === '') {
                                                e.currentTarget.value = '';
                                                return;
                                            }

                                            if (val.startsWith('+91 ')) val = val.slice(4);
                                            else if (val.startsWith('+91')) val = val.slice(3);
                                            else if (val.startsWith('+9')) val = val.slice(2);
                                            else if (val.startsWith('+')) val = val.slice(1);

                                            let digits = val.replace(/\D/g, '');

                                            if (digits.length > 10 && digits.startsWith('91')) {
                                                digits = digits.slice(2);
                                            }

                                            digits = digits.slice(0, 10);

                                            if (digits.length === 0) {
                                                e.currentTarget.value = '';
                                                return;
                                            }

                                            let finalString = '+91 ';
                                            finalString += digits.slice(0, 5);
                                            if (digits.length > 5) {
                                                finalString += ' ' + digits.slice(5, 10);
                                            }

                                            e.currentTarget.value = finalString;
                                        }}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-deep-slate">Address <span className="text-primary">*</span></label>
                                <input
                                    name="address"
                                    className="w-full bg-slate-50 border border-slate-300 px-4 py-3 rounded-xl focus:bg-white focus:ring-2 focus:ring-action/20 focus:border-action transition-all shadow-sm"
                                    placeholder="Full residential address"
                                    type="text"
                                    disabled={isSubmitting}
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start md:items-end">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-deep-slate">Age <span className="text-primary">*</span></label>
                                    <input
                                        name="age"
                                        className="w-full bg-slate-50 border border-slate-300 px-4 py-3 rounded-xl focus:bg-white focus:ring-2 focus:ring-action/20 focus:border-action transition-all shadow-sm"
                                        placeholder="Years"
                                        type="number"
                                        min="0"
                                        max="120"
                                        disabled={isSubmitting}
                                        required
                                    />
                                </div>
                                <div className="col-span-1 md:col-span-3 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 py-2">
                                    <span className="text-sm font-bold text-deep-slate">Gender <span className="text-primary">*</span></span>
                                    <div className="flex items-center gap-6">
                                        <label className="inline-flex items-center cursor-pointer group">
                                            <input disabled={isSubmitting} className="text-action focus:ring-action w-4 h-4" name="gender" type="radio" value="male" required />
                                            <span className={`ml-2 text-sm text-deep-slate transition-colors ${!isSubmitting && 'group-hover:text-action'}`}>Male</span>
                                        </label>
                                        <label className="inline-flex items-center cursor-pointer group">
                                            <input disabled={isSubmitting} className="text-action focus:ring-action w-4 h-4" name="gender" type="radio" value="female" required />
                                            <span className={`ml-2 text-sm text-deep-slate transition-colors ${!isSubmitting && 'group-hover:text-action'}`}>Female</span>
                                        </label>
                                        <label className="inline-flex items-center cursor-pointer group">
                                            <input disabled={isSubmitting} className="text-action focus:ring-action w-4 h-4" name="gender" type="radio" value="other" required />
                                            <span className={`ml-2 text-sm text-deep-slate transition-colors ${!isSubmitting && 'group-hover:text-action'}`}>Other</span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-deep-slate">Problem in Detail <span className="text-primary">*</span></label>
                                <textarea
                                    name="problem"
                                    className="w-full bg-slate-50 border border-slate-300 px-4 py-3 rounded-xl focus:bg-white focus:ring-2 focus:ring-action/20 focus:border-action transition-all shadow-sm resize-none"
                                    placeholder="Briefly describe your medical concerns..."
                                    rows={4}
                                    disabled={isSubmitting}
                                    required
                                ></textarea>
                            </div>

                            <motion.button
                                className="w-full bg-action hover:opacity-90 text-white py-4 rounded-xl font-bold text-lg shadow-lg transition-all mt-4 relative overflow-hidden flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className="animate-spin material-symbols-outlined shrink-0 text-xl">progress_activity</span>
                                        Processing Registration...
                                    </>
                                ) : "Submit Registration"}
                            </motion.button>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
