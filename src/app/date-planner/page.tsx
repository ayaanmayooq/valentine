"use client";

// import { useState } from "react";
// import { Switch } from "@headlessui/react";
import { Survey } from "@/components/survey";

import dateData from "@/data/valen-25.json";

export default function DateSurvey() {
  return (
    <Survey
    title={dateData.title}
    date={dateData.date}
    questions={dateData.questions}
  />
  );
}
