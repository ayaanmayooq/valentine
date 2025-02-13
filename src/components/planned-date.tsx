"use client";

import React, { useEffect, useState } from "react";

interface SurveyResponses {
  title: string;
  date: string;
  answers: string[];
}

export function PlannedDate() {
  const [plannedDate, setPlannedDate] = useState<SurveyResponses | null>(null);

  useEffect(() => {
    const savedDate = localStorage.getItem("plannedDate");
    if (savedDate) {
      setPlannedDate(JSON.parse(savedDate));
    }
  }, []);

  return (
    <div className="h-full w-full p-4 overflow-auto">
      {plannedDate ? (
        <div className="text-left">
          {/* Title */}
          <h2 className="text-2xl font-bold text-valentine-rose mb-4">
            {plannedDate.title}
          </h2>

          {/* Answers */}
          <ul className="text-left mb-4">
            {plannedDate.answers.map((answer, index) => (
              <li key={index} className="p-1 rounded-md">
                {answer}
              </li>
            ))}
          </ul>

          {/* Date */}
          <p className="text-center">
            Excited for{" "}
            <span className="font-medium">
              {plannedDate.date}
            </span>
          </p>
        </div>
      ) : (
        <p className="text-gray-500 text-center">
          No planned date found. Take the survey!
        </p>
      )}
    </div>
  );
}
