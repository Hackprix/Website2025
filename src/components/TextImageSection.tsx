 
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

interface ButtonProps {
  text: string;
  link: string;
  href?: string;
}

interface TextImageSectionProps {
  description: string;
  buttons?: ButtonProps[];
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  imageRotation?: number;
  reverse?: boolean;
}

const TextImageSection: React.FC<TextImageSectionProps> = ({
  description,
  buttons = [],
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  imageRotation = 0,
  reverse = false,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const textVariants = {
    hidden: {
      opacity: 0,
      x: reverse ? 100 : -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: reverse ? -100 : 100,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.4 + i * 0.1,
      },
    }),
  };

  return (
    <div
      ref={ref}
      className={`flex flex-col-reverse gap-8 md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } md:px-16 md:py-20`}
    >
      <motion.div
        className="flex flex-col gap-8 px-4 md:w-1/2"
        initial="hidden"
        animate={controls}
        variants={textVariants}
      >
<motion.p
  className="mt-4 md:text-start text-justify text-sm md:text-2xl leading-relaxed md:leading-loose text-black dark:text-white font-poppins"
  style={{
    WebkitTextStroke: "1px #1F1F1F7A",
  }}
>
  {description}
</motion.p>

        <div className="mt-4 flex flex-col gap-4 text-left md:flex-row">
          {buttons.map((button, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={buttonVariants}
              initial="hidden"
              animate={controls}
            >
              <a href={button.link} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="custom"
                  className="w-full z-50 rounded-full border-4 border-border/20 text-white hover:bg-black/70 bg-black/50  dark:bg-white/30 dark:hover:bg-white/10 dark:text-white px-6 py-6 md:w-auto md:px-6"
                >
                  {button.text}
                </Button>
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="flex items-center justify-center md:mb-0 md:w-3/5"
        initial="hidden"
        animate={controls}
        variants={imageVariants}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          style={{ transform: `rotate(${imageRotation}deg)` }}
          className="w-2/3 object-cover rounded-lg shadow-lg"
          unoptimized
        />
      </motion.div>
    </div>
  );
};

export default TextImageSection;
