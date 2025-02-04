"use client";

import React from "react";

export interface MemoryCardProps {
  year: string;
  imageUrl: string;
  description: string;
  backgroundUrl: string;
  /** Optional additional classes (e.g., for animation). */
  className?: string;
}

export default function MemoryCard({
  year,
  imageUrl,
  description,
  backgroundUrl,
  className,
}: MemoryCardProps) {
  return (
    <div
      // Merge in any animation classes via `className` prop
      className={`relative w-full min-h-screen bg-cover bg-center ${className ?? ""}`}
      style={{
        backgroundImage: `url(${backgroundUrl})`,
      }}
    >
      {/* Dark overlay to soften the background */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Content container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row">
        {/* LEFT SECTION: Photo, year overlay, and description */}
        <div className="md:w-2/3">
          {/* Photo with year overlay in bottom-left corner */}
          <div className="relative inline-block shadow-2xl">
            <img src={imageUrl} alt="Ataturk" className="max-w-full h-auto" />
            <span
              className="
                absolute 
                bottom-0 
                left-0 
                text-white 
                text-5xl 
                font-bold 
                p-4
                leading-none
              "
            >
              {year}
            </span>
          </div>

          {/* Description text below the photo */}
          <div className="mt-6 text-gray-200 text-lg leading-relaxed">
            {description}
          </div>
        </div>

        {/* RIGHT SECTION: Vertical line + "FATHER OF THE TURKS" text */}
        <div className="md:w-1/3 mt-10 md:mt-0 md:pl-12 flex flex-col justify-center">
          <div className="hidden md:block border-l border-gray-500 h-40 mx-auto" />
          <p
            className="
              uppercase
              tracking-widest
              text-gray-300
              text-sm
              text-center
              mt-2
              hidden
              md:block
            "
          >
            Father of the Turks
          </p>
        </div>
      </div>
    </div>
  );
}
