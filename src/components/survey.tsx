"use client";

import React, { useState } from "react";
// import { useRouter } from "next/navigation";
import { Question } from "@/components/question";
import { SurveySummary } from "@/components/survey-summary";

interface Question {
  title: string;
  text: string;
  options: string[];
}

interface SurveyProps {
  title: string;
  date: string;
  questions: Question[];
}

export function Survey({ title, date, questions }: SurveyProps) {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<(number | undefined)[]>([]);
  const [surveyComplete, setSurveyComplete] = useState(false);

  // const router = useRouter();

  const handleSelect = (index: number) => {
    const newSelections = [...selectedOptions];
    newSelections[currentQuestion] = index;
    setSelectedOptions(newSelections);

    if (currentQuestion === questions.length - 1) {
      setSurveyComplete(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-valentine-pink text-black p-6">
      <header className="text-2xl font-bold mb-8">
        {/* {surveyComplete ? "Survey Summary" : `Question ${currentQuestion + 1} of ${questions.length}`} */}
        {surveyComplete ? "She cooked" : `Let her cook!`}
      </header>
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-6">
        {!surveyComplete ? (
          <>
            <Question
              question={questions[currentQuestion]}
              options={questions[currentQuestion].options}
              selectedOption={selectedOptions[currentQuestion]}
              onSelect={handleSelect}
              onBack={handleBack}
            />

            <div className="mt-6 w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-valentine-red h-2 rounded-full"
                style={{
                  width: `${
                    selectedOptions.length / questions.length * 100
                  }%`,
                }}
              ></div>
            </div>
          </>
        ) : (
          <SurveySummary
            questions={questions}
            selectedOptions={selectedOptions}
            title={title}
            date={date}
          />
        )}
      </div>
    </div>
  );
}