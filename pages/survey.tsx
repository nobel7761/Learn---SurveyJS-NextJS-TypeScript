import React from "react";
import dynamic from "next/dynamic";

const SurveyComponent = dynamic(() => import("./components/survey"), {
  ssr: false,
});

const Survey = () => {
  return (
    <div>
      <SurveyComponent />
    </div>
  );
};
export default Survey;
