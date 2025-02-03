import React from "react";

import { Button } from "@/components/button";

import { useRouter } from "next/navigation";

interface SurveySummaryProps {
  questions: { title: string; text: string; options: string[] }[];
  selectedOptions: (number | undefined)[];
  title: string;
  date: string;
}

interface SurveyResponses {
    answers: string[];
    date: string;
  }

export function SurveySummary({ questions, selectedOptions, title, date }: SurveySummaryProps) {
    const router = useRouter();

    const handleSurveyDone = () => {
        const answers = selectedOptions.map((optionIndex, index) =>
          optionIndex !== undefined ? questions[index].options[optionIndex] : "No answer"
        );
    
        localStorage.setItem("plannedDate", JSON.stringify({ title, date, answers }));
    
        console.log("Saved Survey:", localStorage.getItem("plannedDate"));
    
        router.push("/dashboard");
    };

  return (
    <div className="flex flex-col justify-center p-4">
        <div>
            {/* <h2 className="text-xl font-bold mb-4">Survey Complete!</h2> */}
            <ul>
                {selectedOptions.map((option, index) => (
                <li key={index} className="mb-2">
                    {questions[index].text}: {questions[index].options[option || 0]}
                </li>
                ))}
            </ul>
        </div>
        <div className="mt-4 flex justify-center">
            <Button label="Go to dashboard" variant="primary" onClick={handleSurveyDone}/>
        </div>
    </div>
  );
}