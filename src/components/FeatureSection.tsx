
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  User,
  Users,
  Calendar,
  MessageSquare,
  FileText,
  Bell,
  Book,
  ChartBar,
  Settings,
  Shield,
  Lock,
  Eye,
  LucideIcon,
} from "lucide-react";

type UserRole = "patients" | "doctors" | "admins";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Record<UserRole, Feature[]> = {
  patients: [
    {
      icon: Calendar,
      title: "Appointment Booking",
      description: "Schedule appointments with your preferred doctors online.",
    },
    {
      icon: FileText,
      title: "Medical Records",
      description: "Access your complete medical history at any time.",
    },
    {
      icon: Bell,
      title: "Medication Reminders",
      description: "Get timely notifications for medication schedules.",
    },
    {
      icon: MessageSquare,
      title: "Virtual Consultations",
      description:
        "Connect with healthcare providers through secure video calls.",
    },
    {
      icon: ChartBar,
      title: "Health Analytics",
      description: "Track your health metrics with intuitive visualizations.",
    },
    {
      icon: User,
      title: "Profile Management",
      description: "Update personal information and preferences easily.",
    },
  ],
  doctors: [
    {
      icon: Users,
      title: "Patient Management",
      description: "Efficiently handle your patient roster and appointments.",
    },
    {
      icon: Calendar,
      title: "Schedule Control",
      description: "Set your availability and manage your calendar.",
    },
    {
      icon: FileText,
      title: "Digital Prescriptions",
      description: "Create and send prescriptions electronically.",
    },
    {
      icon: ChartBar,
      title: "Performance Metrics",
      description: "Track patient outcomes and practice analytics.",
    },
    {
      icon: MessageSquare,
      title: "Secure Messaging",
      description: "Communicate with patients and colleagues safely.",
    },
    {
      icon: Book,
      title: "Clinical Resources",
      description: "Access medical references and research materials.",
    },
  ],
  admins: [
    {
      icon: Shield,
      title: "System Security",
      description: "Monitor and maintain platform security protocols.",
    },
    {
      icon: Users,
      title: "User Management",
      description: "Control access and permissions for all system users.",
    },
    {
      icon: Settings,
      title: "Configuration",
      description: "Customize system settings and functionality.",
    },
    {
      icon: ChartBar,
      title: "Analytics Dashboard",
      description: "Comprehensive data visualization and reporting tools.",
    },
    {
      icon: Lock,
      title: "Compliance Tools",
      description: "Ensure adherence to healthcare regulations and standards.",
    },
    {
      icon: Eye,
      title: "Audit Controls",
      description: "Monitor system activities and maintain detailed logs.",
    },
  ],
};

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const TabButton = ({ active, onClick, children }: TabButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative px-8 py-3 rounded-t-xl font-medium transition-all duration-300",
        active
          ? "bg-gradient-to-r from-medical-500 to-blue-600 text-white shadow-lg shadow-medical-500/30 translate-y-0 z-10"
          : "bg-gray-200/90 text-gray-600 hover:bg-gray-300/90 hover:-translate-y-1"
      )}
    >
      {active && (
        <>
          <div className="absolute inset-0 rounded-t-xl bg-blue-400 opacity-50 blur-md z-[-1]" />
          <div className="absolute -inset-[1px] rounded-t-xl bg-blue-600 opacity-30 z-[-2]" />
        </>
      )}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {active && (
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
        )}
        {children}
      </span>
    </button>
  );
};

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

const FeatureCard = ({
  title,
  description,
  icon: Icon,
  delay = 0,
}: FeatureCardProps) => {
  return (
    <div
      className="relative bg-white/80 backdrop-blur-xl rounded-xl p-6 shadow-lg hover:shadow-2xl border border-gray-100/50 transition-all duration-300 hover:-translate-y-2 animate-fade-in opacity-0 overflow-hidden group"
      style={{
        animationDelay: `${delay * 100}ms`,
        animationFillMode: "forwards",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/20 rounded-xl opacity-80 z-[-1]" />
      <div className="absolute -right-12 -top-12 w-24 h-24 bg-gradient-to-br from-medical-100/50 to-medical-300/30 rounded-full blur-xl z-[-1] transition-all duration-300 group-hover:scale-150" />

      <div className="flex flex-col gap-4 relative z-10">
        <div className="bg-gradient-to-br from-sky-100 to-blue-100 w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner">
          <Icon className="text-medical-600 w-7 h-7" />
        </div>
        <h3 className="text-gray-800 font-bold text-xl">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-medical-400/40 to-blue-500/40 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </div>
  );
};

const FeatureSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<UserRole>("patients");

  return (
    <section id="features" className="py-20 bg-gradient-to-r from-white to-medical-50">
      <div className="w-full max-w-7xl mx-auto px-4 py-12">
        <div className="relative mb-16">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl z-[-1]" />
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-3">
            Features by User Role
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-medical-500 to-blue-600 mx-auto rounded-full" />
        </div>
    
        <div className="flex flex-col">
          {/* Tab Navigation */}
          <div className="flex flex-auto justify-center gap-1 relative">
            {(["patients", "doctors", "admins"] as UserRole[]).map((role) => (
              <TabButton
                key={role}
                active={activeTab === role}
                onClick={() => setActiveTab(role)}
              >
                {role.charAt(0).toUpperCase() + role.slice(1)}
              </TabButton>
            ))}
          </div>
    
          {/* Content Container with improved connection */}
          <div className="relative">
            {/* Subtle top glow bar */}
            <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-r from-medical-500 to-blue-600 opacity-20 rounded-t-xl blur-sm" />
    
            {/* Gradient border container */}
            <div
              className="relative bg-gradient-to-b from-medical-500 to-blue-600 p-[2px] rounded-2xl animate-fade-in"
              style={{ animationDuration: "0.4s" }}
            >
              {/* Top glow inside the border */}
              <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-r from-medical-500/50 to-blue-600/50 blur-md rounded-t-2xl z-[-1]" />
    
              {/* Inner content with consistent padding and rounded corners */}
              <div className="bg-gray-100/90 backdrop-blur-sm p-8 rounded-[14px]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {features[activeTab].map((feature, index) => (
                    <FeatureCard
                      key={`${activeTab}-${index}`}
                      icon={feature.icon}
                      title={feature.title}
                      description={feature.description}
                      delay={index}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
