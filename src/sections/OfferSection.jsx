"use client";
import { Typography, Button, Card } from "@material-tailwind/react";
import React from "react";
import RightAngle from "../components/RightAngle";
import InputFieldUK from "@/components/InputFieldUK";
import InputFieldMileage from "@/components/InputFieldMileage";
import Image from "next/image";
import RandomBlob from "../assets/randomBlob.png";
import Cloud1 from "../assets/cloud1.png";
import Cloud2 from "../assets/cloud2.png";
import Cloud3 from "../assets/cloud3.png";

const OfferSection = () => {
  return (
    <div className="offerSection">
      <Image
        src={RandomBlob}
        alt="Random blob"
        width={216}
        height={199}
        className="randomBlob"
      />
      <Image
        src={Cloud1}
        alt="Cloud"
        width={195}
        height={126}
        className="cloud1"
      />
      <Image
        src={Cloud2}
        alt="Cloud"
        width={205}
        height={151}
        className="cloud2"
      />
      <Image
        src={Cloud3}
        alt="Cloud"
        width={204}
        height={134}
        className="cloud3"
      />
      <Typography
        style={{ padding: "16px 0" }}
        className="font-bold text-3xl text-start font-bromega text-white"
      >
        Get your highest
        <span
          style={{ padding: "16px" }}
          className="whiteMarkerBG font-bold text-3xl text-start font-bromega text-white"
        >
          offer
        </span>
        <br />
        yet the easy way
      </Typography>
      <Card
        style={{ padding: "2rem", width: "512px" }}
        className="w-[512px] p-8 flex flex-col gap-4 justify-center items-center spreadedBG"
      >
        <InputFieldUK />
        <InputFieldMileage />
        <Button
          type="button"
          variant="filled"
          style={{ backgroundColor: "#2591FE" }}
          className="flex flex-row justify-center items-center gap-2 text-white text-base w-full p-6 font-bromega"
        >
          Get my car valuation
          <RightAngle />
        </Button>
      </Card>
    </div>
  );
};

export default OfferSection;
