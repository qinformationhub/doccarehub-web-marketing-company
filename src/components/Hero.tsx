
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";
import { motion, useAnimation } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

interface AnimatedCounterProps {
  from?: number;
  to: number | string;
  duration?: number;
  label: string;
  icon?: string;
}

const AnimatedCounter = ({ 
  from = 0, 
  to, 
  duration = 2000, 
  label, 
  icon 
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(from);
  const controls = useAnimation();

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      if (typeof to === 'number') {
        setCount(Math.floor(from + progress * (to - from)));
      }

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    controls
      .start({
        scale: [0.9, 1],
        opacity: [0, 1],
        transition: { duration: 0.5 },
      })
      .then(() => {
        animationFrame = requestAnimationFrame(updateCount);
      });

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [from, to, duration, controls]);

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={controls}
      className="flex flex-col items-center"
    >
      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-medical-500 to-blue-500 flex items-center justify-center text-white text-xl font-bold mb-2 shadow-lg">
        {typeof to === "number" ? (
          <>
            {count}
            {icon && <span>{icon}</span>}
          </>
        ) : (
          to
        )}
      </div>
      <h4 className="text-sm font-medium text-medical-700 text-center">
        {label}
      </h4>
    </motion.div>
  );
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 pb-16 md:py-0 overflow-hidden bg-gradient-to-br from-white to-medical-50 w-full"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-medical-100/40 filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-medical-200/30 filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-blue-100/30 filter blur-2xl"></div>
      </div>

      <div className="w-full px-4 z-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          {/* Hero Content */}
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="mt-32">
              <span className="mt-10 font-bold text-5xl sm:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-medical-800 to-blue-500">
                DocCareHub
                <br />
              </span>
            </h1>
            <h1 className="mt-4 text-5xl md:text-5xl lg:text-4xl font-bold text-medical-800 leading-tight mb-6">
              All-in-One Clinic Management Platform
            </h1>
            <div className="inline-block px-4 py-1 bg-gradient-to-r from-medical-700 to-blue-400 p-8 rounded-full font-medium text-sm mb-6 text-white">
              Powered By: Q Information Hub
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
              <Link to="contact" smooth={true} duration={500}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Button className="w-full sm:w-auto px-10 py-6 text-lg bg-gradient-to-r from-blue-600 to-green-200 hover:from-green-600 hover:to-blue-700 text-black hover:text-white font-semibold rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)] transition-all duration-300 flex items-center gap-2">
                    <Sparkles size={20} />
                    Get Started Now
                  </Button>
                </motion.div>
              </Link>

              <Link to="features" smooth={true} duration={500}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto px-10 py-6 text-lg border-2 border-medical-500 text-medical-500 hover:bg-medical-50 rounded-full transition-all duration-300 flex items-center gap-2"
                  >
                    Explore Features <ArrowRight size={18} />
                  </Button>
                </motion.div>
              </Link>
            </div>
            <motion.div
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <AnimatedCounter
                from={0}
                to={4000}
                label="Concurrent Users Tested"
                icon="+"
              />
              <AnimatedCounter
                from={99}
                to={99.99}
                label="Uptime SLA Multi-region"
                icon="%"
              />
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="w-full lg:w-1/2 lg:pl-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative mt-28">
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-gradient-to-br from-medical-100 to-blue-100 rounded-full filter blur-xl opacity-70"></div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gradient-to-tl from-medical-200 to-blue-200 rounded-full filter blur-xl opacity-70"></div>

              <div className="relative z-10">
                <div className="relative z-10 overflow-hidden p-2">
                  <img
                    src="/Hero.png"
                    alt="Doccare"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
