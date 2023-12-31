"use client";

import Heading from "@/components/Heading";
import ReasonCard from "@/components/ReasonCard";
import { reasonData } from "@/data/reasonData";
import { Typography } from "@material-tailwind/react";
import React from "react";

const ReasonSection = () => {
  return (
    <div style={{ backgroundColor: "#F9FCFF" }}>
      <Heading content={"Why"} marked={"choose"} rest={"Everycarbuyer?"} />
      <Typography
        style={{ width: 690, margin: "auto", fontSize: "16px" }}
        variant="paragraph"
        className="font-bromega text-center"
      >
        Sit back and enjoy a stress-free selling process as we expertly navigate
        you through each step, guaranteeing a seamless and effortless
        transaction when we purchase your car.
      </Typography>
      <div className="reasonGrid">
        {reasonData.map((reason, i) => (
          <ReasonCard key={i} title={reason.title} desc={reason.desc} />
        ))}
      </div>
    </div>
  );
};

export default ReasonSection;
