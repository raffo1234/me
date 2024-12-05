"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import Aside from "./components/aside";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div key={pathname}>
          <Aside />
          <Navigation />

          <Footer />
          {children}
          <motion.div
            style={{
              backgroundImage:
                "linear-gradient(120deg, #FFD301 0%, #fda085 100%)",
            }}
            initial={{ top: "50%" }}
            animate={{ top: "-100%" }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute w-[100%] h-[100%] left-0 top-0 bg-slate-600"
          ></motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
