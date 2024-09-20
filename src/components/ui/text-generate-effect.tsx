"use client";
import { motion } from "framer-motion";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
}

export const TextGenerateEffect: React.FC<TextGenerateEffectProps> = ({
  words,
  className,
}) => {
  const wordsArray = words.split(" ");

  const renderWords = () => {
    return (
      <motion.h2
        className={`font-semibold lg:leading-normal leading-normal tracking-wide text-4xl lg:text-5xl mb-5 overflow-hidden ${
          className || ""
        }`}
      >
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { width: 0, opacity: 0 },
                visible: {
                  width: "100%",
                  opacity: 1,
                  transition: {
                    duration: 0.4,
                    ease: "linear",
                    delay: 0.4 + idx * 0.5,
                  },
                },
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.h2>
    );
  };

  return renderWords();
};
