"use client";

import { Button, Card, Typography } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";
import TrustPilot from "../assets/trustpilot.png";
import RightAngle from "../components/RightAngle";
import InputFieldUK from "@/components/InputFieldUK";
import InputFieldMileage from "@/components/InputFieldMileage";

const HeaderSection = () => {
  return (
    <div style={{padding: "40px"}} className="p-10 rounded-none max-width-1600 mx-auto flex flex-col gap-4 justify-center items-center radialgrad">
      <Typography
        variant="h1"
        color="white"
        className="text-center font-bromega"
      >
        Your car, Your price
        <br />
        Selling made simple
      </Typography>
      <Typography
        variant="paragraph"
        color="white"
        className="text-center font-bromega"
      >
        Find a competitive offer with a personal touch. Sell
        <br />
        confidently, sell with everycarbuyer.
      </Typography>
      <Card style={{padding: "2rem", width: "512px"}} className="w-[512px] p-8 flex flex-col gap-4 justify-center items-center spreadedBG">
        <InputFieldUK />
        <InputFieldMileage />
        <Button type="button" variant="filled" style={{backgroundColor: "#2591FE"}} className="flex flex-row justify-center items-center gap-2 text-white text-base w-full p-6 font-bromega">
          Get my car valuation
          <RightAngle />
        </Button>
      </Card>
      <Image
        src={TrustPilot}
        alt="trustpilot logo"
        width={345}
        height={60}
        className="py-8"
      />
    </div>
  );
};

export default HeaderSection;
