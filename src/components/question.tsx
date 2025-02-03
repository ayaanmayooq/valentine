import {OptionButton} from '@/components/option-button';
import React from "react";


interface QuestionProps {
  question: {
    title: string;
    text: string;
  };
  options: string[];
  selectedOption: number | undefined;
  onSelect: (index: number) => void;
  onBack: () => void;
}

export function Question({ question, options, selectedOption, onSelect, onBack }: QuestionProps) {
  return (
    <div className="mb-4">
      <button
        className="text-valentine-red font-bold mb-4"
        onClick={onBack}
      >
        &lt; Back
      </button>
      <p className="text-lg font-semibold">{question.title}</p>
      <p className="text-2xl font-bold mt-2">{question.text}</p>
      <ul className="space-y-4 mt-4">
        {options.map((option, index) => (
          <li key={index}>
            <OptionButton
              option={option}
              isSelected={selectedOption === index}
              onClick={() => onSelect(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}