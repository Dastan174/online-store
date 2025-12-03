import React from "react";
import scss from "./ourClients.module.scss";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import ReviewCard from "@/entities/reviewCard/ui/ReviewCard";

const OurClients = () => {
  return (
    <div className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <h1>
            <span>ЛУЧШЕ ВСЕГО О НАС</span>
            РАССКАЖУТ НАШИ КЛИЕНТЫ
          </h1>
          <div className={scss.icons}>
            <span>
              <GoArrowLeft />
            </span>
            <span>
              <GoArrowRight />
            </span>
          </div>
          <div className={scss.cards}>
            <ReviewCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
