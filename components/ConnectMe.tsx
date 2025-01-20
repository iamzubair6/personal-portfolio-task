"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";

const ConnectMe = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <div className="pb-[60px] md:pb-[120px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-display1-mobile md:text-display1 font-semibold mb-4">
          Lets Design Together
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-text-md-mobile md:text-text-md pb-10">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium
        </p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Email"
          className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          required
        />
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-primary text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-primary/80 transition-colors"
          type="submit"
        >
          Contact Me
          <Send size={18} />
        </motion.button>
      </motion.form>
    </div>
  );
};
export default ConnectMe;
