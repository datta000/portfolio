import React, { useState } from 'react';
import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";

const API_URL = import.meta.env.VITE_API_URL;


const Contact = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitting form:", form);

        try {
            const res = await fetch(`${API_URL}/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            const data = await res.json();
            console.log("Server response:", data);

            if (res.ok) {
                setStatus("✅ Message sent successfully!");
                setForm({ name: "", email: "", message: "" }); // reset form
            } else {
                setStatus("❌ Failed to send: " + (data.error || "Unknown error"));
            }
        } catch (err) {
            console.error("❌ Error submitting form:", err);
            setStatus("❌ Server error. Try again later.");
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <SectionWrapper >
                <section id="contact" className="w-full py-12 px-4 sm:px-8 md:px-16">

                    <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
                        Contact Me
                    </h2>

                    <form
                        onSubmit={handleSubmit}
                        className="max-w-xl mx-auto flex flex-col gap-4 bg-gray-100 dark:bg-[#1a1a1a] p-6 rounded-lg shadow-md"
                    >

                        <label className="flex flex-col">
                            <span className="text-sm text-gray-700 dark:text-gray-300 mb-1">Your Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="John Doe"
                                className="p-3 rounded bg-white dark:bg-[#2a2a2a] text-black dark:text-white outline-none border dark:border-gray-600"
                                required
                            />
                        </label>

                        <label className="flex flex-col">
                            <span className="text-sm text-gray-700 dark:text-gray-300 mb-1">Your Email</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                className="p-3 rounded bg-white dark:bg-[#2a2a2a] text-black dark:text-white outline-none border dark:border-gray-600"
                                required
                            />
                        </label>

                        <label className="flex flex-col">
                            <span className="text-sm text-gray-700 dark:text-gray-300 mb-1">Your Message</span>
                            <textarea
                                rows={5}
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Type your message..."
                                className="p-3 rounded bg-white dark:bg-[#2a2a2a] text-black dark:text-white outline-none border dark:border-gray-600"
                                required
                            />
                        </label>

                        <button
                            type="submit"
                            className="bg-black dark:bg-white text-white dark:text-black py-3 px-6 rounded hover:opacity-90 transition"
                        >
                            Send Message
                        </button>
                    </form>

                    {status && (
                        <p className="text-center mt-4 text-sm text-gray-700 dark:text-gray-300">
                            {status}
                        </p>
                    )}
                </section>
            </SectionWrapper>
        </motion.div>
    );
};

export default Contact;
