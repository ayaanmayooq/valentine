import React from "react";

interface CardProps {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  variant?: "romantic" | "elegant" | "whimsical";
}

const variantStyles = {
  romantic: {
    topBg: "bg-valentine-red",
    topText: "text-white",
    bottomBg: "bg-valentine-pink",
    bottomText: "text-black",
  },
  elegant: {
    topBg: "bg-valentine-wine",
    topText: "text-white",
    bottomBg: "bg-valentine-cream",
    bottomText: "text-black",
  },
  whimsical: {
    topBg: "bg-valentine-coral",
    topText: "text-black",
    bottomBg: "bg-valentine-rose",
    bottomText: "text-black",
  },
  darker: {
    topBg: "bg-spotify-top",
    topText: "text-white",
    bottomBg: "bg-spotify-bottom",
    bottomText: "text-white",
  },
};

export function Card({ title, subtitle, content, variant = "romantic" }: CardProps) {
  const styles = variantStyles[variant];

  return (
    <div className="h-full w-full flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className={`p-4 ${styles.topBg} ${styles.topText}`}>
        <h2 className="text-xl font-bold">{title}</h2>
        {subtitle && <p className="text-sm mt-1">{subtitle}</p>}
      </div>
      <div
        className={`p-4 ${styles.bottomBg} ${styles.bottomText} flex-grow overflow-auto`}
      >
        {content}
      </div>
    </div>
  );
}
