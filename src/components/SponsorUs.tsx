/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Button } from "@/components/ui/Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordination";
import { Input } from "@/components/ui/Input";
import { Building2, Mail, Phone, Globe, User, FileText, Loader2 } from "lucide-react";
import { useState, useRef } from "react";
import { InteractiveHoverButton2 } from "@/components/ui/InteractiveHoverButton2";
import { SparklesCore } from "./ui/Sparkles";

interface FormSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  isComplete?: boolean;
}

interface FormData {
  organizationName: string;
  fullName: string;
  email: string;
  phone: string;
  website: string;
  additionalDetails: string;
}

export function SponsorUs() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    organizationName: "",
    fullName: "",
    email: "",
    phone: "",
    website: "",
    additionalDetails: "",
  });
  
  const dialogCloseRef = useRef<HTMLButtonElement>(null);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/send-sponsor-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Thank you for your interest! We will contact you soon.');
        setFormData({
          organizationName: "",
          fullName: "",
          email: "",
          phone: "",
          website: "",
          additionalDetails: "",
        });
        dialogCloseRef.current?.click();
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      alert('There was an error submitting the form. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const sections: FormSection[] = [
    {
      id: "1",
      icon: <Building2 className="size-4 stroke-2 text-muted-foreground" />,
      title: "Organization Information",
      children: (
        <div className="flex flex-col gap-4">
          <Input
            type="text"
            placeholder="Enter your organization name"
            value={formData.organizationName}
            onChange={(e) => handleInputChange('organizationName', e.target.value)}
          />
        </div>
      ),
    },
    {
      id: "2",
      icon: <User className="size-4 stroke-2 text-muted-foreground" />,
      title: "Personal Information",
      children: (
        <div className="flex flex-col gap-4">
          <Input
            type="text"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={(e) => handleInputChange('fullName', e.target.value)}
          />
        </div>
      ),
    },
    {
      id: "3",
      icon: <Mail className="size-4 stroke-2 text-muted-foreground" />,
      title: "Contact Information",
      children: (
        <div className="flex flex-col gap-4">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
          />
          <Input
            type="tel"
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
          />
        </div>
      ),
    },
    {
      id: "4",
      icon: <Globe className="size-4 stroke-2 text-muted-foreground" />,
      title: "Website Information",
      children: (
        <div className="flex flex-col gap-4">
          <Input
            type="url"
            placeholder="Enter your website URL (optional)"
            value={formData.website}
            onChange={(e) => handleInputChange('website', e.target.value)}
          />
        </div>
      ),
    },
    {
      id: "5",
      icon: <FileText className="size-4 stroke-2 text-muted-foreground" />,
      title: "Additional Details",
      children: (
        <div className="flex flex-col gap-4">
          <textarea
            className="flex min-h-[100px] w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm shadow-black/5 transition-shadow placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
            placeholder="Please provide any additional details about your sponsorship interests"
            value={formData.additionalDetails}
            onChange={(e) => handleInputChange('additionalDetails', e.target.value)}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="overflow-hidden items-center justify-center flex py-10 bg-gradient-to-r from-purple-900/20 to-cyan-900/20">
      <SparklesCore
        id="tsparticlessponsorsus"
        background="transparent"
        minSize={0.8}
        maxSize={1.6}
        particleDensity={20}
        className="w-full h-full opacity-50 absolute"
      />
      <Dialog>
        <DialogTrigger asChild>
          <InteractiveHoverButton2 text="Sponsor Us" />
        </DialogTrigger>
        <DialogContent className="flex flex-col gap-0 p-0 sm:max-h-[min(700px,90vh)] sm:max-w-lg [&>button:last-child]:hidden">
          <div className="overflow-y-auto">
            <DialogHeader className="px-6 pt-6 pb-4">
              <DialogTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
                Become a Sponsor
              </DialogTitle>
              <DialogDescription className="text-black/70 dark:text-white/70">
                Join us in making SanketikaFest a success! Fill out the form below to express your interest in sponsorship.
              </DialogDescription>
            </DialogHeader>
            <div className="px-6 pb-6">
              <Accordion type="single" collapsible className="w-full">
                {sections.map((section) => (
                  <AccordionItem
                    key={section.id}
                    value={section.id}
                    className="border-b border-border/50"
                  >
                    <AccordionTrigger className="group hover:no-underline">
                      <div className="flex items-center gap-2">
                        {section.icon}
                        <span className="text-black/80 dark:text-white/80">
                          {section.title}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>{section.children}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
          <DialogFooter className="border-t border-border px-6 py-4">
            <DialogClose ref={dialogCloseRef} asChild>
              <Button type="button" variant="outline" disabled={isLoading}>
                Close
              </Button>
            </DialogClose>
            <Button 
              type="button" 
              onClick={handleSubmit} 
              disabled={isLoading}
              className="min-w-[80px]"
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                'Submit'
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
} 