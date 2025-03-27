/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import * as React from "react";
import { Button } from "@/components/ui/Button";
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Switch } from "@/components/ui/switch"
// import { Textarea } from "@/components/ui/textarea"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/Tooltip";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { ThemeToggle } from "./ui/ThemeToggle";

function Footerdemo() {
  const [isDarkMode, setIsDarkMode] = React.useState(true);
  const [isChatOpen, setIsChatOpen] = React.useState(false);

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <footer className="relative border border-t-black/30 dark:border-t-white/20 bg-background text-foreground transition-colors duration-300 z-0">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">
              Stay Connected
            </h2>
            <p className="mb-6 text-muted-foreground">
              Where Innovation Meets Collaboration
            </p>
            {/* <form className="relative">
              <Input
                type="email"
                placeholder="Enter your email"
                className="pr-12 backdrop-blur-sm"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form> */}
            {/* <div className="absolute -right-1 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" /> */}
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <a
                href="#"
                className="block transition-colors hover:text-primary"
              >
                Home
              </a>
              <a
                href="#"
                className="block transition-colors hover:text-primary"
              >
                Events
              </a>
              <a
                href="#"
                className="block transition-colors hover:text-primary"
              >
                Schedule
              </a>
              <a
                href="#"
                className="block transition-colors hover:text-primary"
              >
                Sponsers
              </a>
              <a
                href="#"
                className="block transition-colors hover:text-primary"
              >
                Venue
              </a>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <address className="space-y-2 text-sm not-italic">
              <p>Lords Institute of Engineering & Technology</p>
              <p>Himayath sagar, Hyderabad, Telangana 500091</p>
              <p>Phone: (+91) 99086-6428</p>
              <p>Email: sanketika@lords.ac.in</p>
            </address>
          </div>
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="mb-6 flex space-x-4">
              {/* <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                      onClick={() => window.open("https://www.facebook.com", "_blank")}
                    >
                      <Facebook className="h-4 w-4" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider> */}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                      onClick={() =>
                        window.open(
                          "https://www.x.com/lordsinstitute",
                          "_blank"
                        )
                      }
                    >
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              {/* <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                      onClick={() => window.open("https://www.twitter.com", "_blank")}
                    >
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider> */}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                      onClick={() =>
                        window.open(
                          "https://www.instagram.com/sanketika2025",
                          "_blank"
                        )
                      }
                    >
                      <Instagram className="h-4 w-4" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                      onClick={() =>
                        window.open(
                          "https://www.linkedin.com/school/lords-institute-of-engineering-&-technology",
                          "_blank"
                        )
                      }
                    >
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect with us on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex items-center space-x-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2025 Sanketika. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm">
            <a href="#" className="transition-colors hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Terms of Service
            </a>
          </nav>
        </div>
        <div className="flex flex-col items-center justify-center mt-8">
          {/* Image visible in light mode */}
                      <div className="absolute md:h-1/5 md:w-3/5 h-1/12 w-4/5 rounded-full bg-primary/25 dark:bg-primary/10 blur-2xl" />
          <Image
            src="/footertext2.svg"
            alt="Sanketika Logo Light"
            width={100}
            height={100}
            className="mt-4 w-250 block dark:hidden"
          />

          {/* Image visible in dark mode */}
          <Image
            src="/footertext.svg"
            alt="Sanketika Logo Dark"
            width={100}
            height={100}
            className="mt-4 w-250 hidden dark:block"
          />
          <div className="inline-flex mt-8 -mb-8 items-center">
            <p className="font-press md:text-lg text-sm opacity-90  dark:text-white text-gray-500"
            style={{ wordSpacing: "-0.5em" }}
            >Made with</p>
            <Image
              src="/made.svg"
              alt="Heart"
              width={20}
              height={20}
              className="md:mx-2 mx-2 md:mb-1 md:w-6 w-4 mb-[1px]"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footerdemo };
