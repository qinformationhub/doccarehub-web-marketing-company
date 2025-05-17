
import React from 'react';
import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { UserPlus, Wallet } from "lucide-react";

const IntegrationSection = () => {
  return (
    <section id="integration" className="py-16 bg-medical-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10">

          {/* Image Column - Clean image */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative mt-28">
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-gradient-to-br from-medical-100 to-blue-100 rounded-full filter blur-xl opacity-70"></div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gradient-to-tl from-medical-200 to-blue-200 rounded-full filter blur-xl opacity-70"></div>

              <div className="relative z-10">
                <div className="relative z-10 overflow-hidden p-2">
                  <img
                    src="/doc2.png"
                    alt="Doccare"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Column wrapped in Card */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-900 p-8 rounded-3xl shadow-2xl">
              <h2 className="text-3xl font-bold text-white mb-4 leading-snug">Seamless Profile Management</h2>
              <p className="text-lg text-white mb-6">
                Ensure patient and doctor profiles are always accurate and up-to-date with easy, secure access and editing.
              </p>
              
              <div className="space-y-6">
                {/* Feature 1 */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-full shadow">
                    <UserPlus className="h-6 w-6 text-medical-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Effortless Patient Registration</h3>
                    <p className="text-white">Admins handle WhatsApp-based registration, creating a smooth and controlled onboarding experience.</p>
                  </div>
                </div>
                
                {/* Feature 2 */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-full shadow">
                    <Wallet className="h-6 w-6 text-medical-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Flexible Payment & Dues Management</h3>
                    <p className="text-white">Multiple payment modes and real-time dues tracking ensure transparent and convenient financial handling.</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
