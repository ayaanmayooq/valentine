import React from "react";

interface OptionButtonProps {
  option: string;
  isSelected: boolean;
  onClick: () => void;
}

export function OptionButton({ option, isSelected, onClick }: OptionButtonProps) {
  return (
    <button
      className={`w-full text-left px-4 py-3 border rounded-lg font-medium transition-colors duration-200 hover:bg-valentine-rose focus:outline-none ${
        isSelected ? "bg-valentine-red text-white" : "bg-valentine-pink"
      }`}
      onClick={onClick}
    >
      {option}
    </button>
  );
}