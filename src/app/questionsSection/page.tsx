import ReviewCard from "@/entities/reviewCard/ui/ReviewCard";
import OurClients from "@/widgets/ourClients/ui/OurClients";
import QuestionsSection from "@/widgets/questionsSection/ui/QuestionsSection";
import React from "react";

const page = () => {
  return (
    <>
      <QuestionsSection />
      <OurClients />
    </>
  );
};

export default page;
