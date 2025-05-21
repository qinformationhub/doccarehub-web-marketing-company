
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StayAtHome = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-6xl mx-auto overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 shadow-xl relative"
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-blue-400 opacity-10 -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-indigo-400 opacity-10 translate-y-1/3 -translate-x-1/4"></div>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-2/3 p-8 md:p-12 lg:p-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                  Stay at home, <br className="hidden md:block" />
                  <span className="text-blue-200">receive care anywhere!</span>
                </h2>
                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
                  Experience professional healthcare services without leaving your comfort zone. Let's create healthier, brighter smiles together.
                </p>
                
                <Button 
                  className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-full font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 h-auto"
                >
                  Book Appointment
                  <ArrowRight className="h-5 w-5 text-gray-500" />
                </Button>
              </motion.div>
            </div>
            
            <div className="w-full md:w-1/3 p-4 flex justify-center relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-blue-300 rounded-full blur-3xl opacity-30 scale-75"></div>
                <img 
                  src="/stay.png"
                  alt="Stay at Home Medical Service" 
                  className="max-h-80 lg:max-h-96 object-contain relative z-10 drop-shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StayAtHome;
