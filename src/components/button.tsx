import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant: "primary" | "secondary" | "tertiary";
}

export function Button({ label, onClick, variant }: ButtonProps) {
  const baseStyle = "px-6 py-3 rounded font-bold transition";
  const styles = {
    primary: `${baseStyle} bg-valentine-red text-white hover:bg-valentine-rose`,
    secondary: `${baseStyle} bg-white text-valentine-red hover:bg-gray-100`,
    tertiary: `${baseStyle} bg-gray-200 text-gray-700 hover:bg-gray-300`,
  };

  return (
    <button className={styles[variant]} onClick={onClick}>
      {label}
    </button>
  );
}