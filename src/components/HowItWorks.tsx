
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface StepProps {
  number: number;
  title: string;
  description: string;
  delay: number;
  isLast?: boolean;
}

const Step = ({ number, title, description, delay, isLast = false }: StepProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex-1 p-4 relative"
    >
      {/* Step Number */}
      <div className="flex justify-center mb-4 relative z-10">
        <div className="w-16 h-16 rounded-full bg-medical-500 flex items-center justify-center text-white text-2xl font-bold">
          {number}
        </div>
      </div>
      
      {/* Dotted Line */}
      {!isLast && (
        <div className="hidden md:block absolute top-12 left-[calc(50%+35px)] w-[calc(100%-70px)] h-0 border-t-2 border-dashed border-medical-300 z-0" />
      )}
      
      {/* Step Content in Card */}
      <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 bg-sky-100 backdrop-blur-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl text-medical-800">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-medical-600">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Patient Registration",
      description: "Patients log in with WhatsApp and password; an OTP is sent to WhatsApp to verify and complete secure login after registration.",
      delay: 0.1
    },
    {
      number: 2,
      title: "Appointment Booking",
      description: "Patients can browse doctor profiles, view schedules, choose time slots, add a reason if needed, and request an appointment easily.",
      delay: 0.3
    },
    {
      number: 3,
      title: "Flexible Payment Options",
      description: "Patients can choose to pay via cash or card, with the flexibility to make partial or full payments.",
      delay: 0.5,
      isLast: true
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-r from-medical-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">A simple, three-step process that streamlines healthcare administration.</p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6">
            {steps.map((step, index) => (
              <Step 
                key={index} 
                number={step.number} 
                title={step.title} 
                description={step.description} 
                delay={step.delay}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
