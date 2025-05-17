import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-medical-50 to-white"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Request a Demo</h2>
          <p className="section-subtitle">
            See how DocCareHub Connect can revolutionize your healthcare practice.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-lg shadow-custom"
          >
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    className="mt-1"
                    placeholder="Name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="yourname@example.com"
                    className="mt-1"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="whatsapp">WhatsApp Number</Label>
                  <Input
                    id="whatsapp"
                    placeholder="+xxxxxxxxxxxx"
                    className="mt-1"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your practice..."
                    className="mt-1"
                    rows={4}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-medical-500 hover:bg-medical-600"
                >
                  Request Demo
                </Button>
              </div>
            </form>
          </motion.div>

          {/* Video Demo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-medical-600 text-white p-2 sm:p-2 lg:p-2 rounded-lg shadow-custom flex justify-center"
          >
            <div className="w-full max-w-4xl aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://drive.google.com/file/d/1uQqPUThSzORVGYZ2qRY4TgJRHhu_FE1T/preview"
                className="w-full h-full"
                allow="autoplay"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
