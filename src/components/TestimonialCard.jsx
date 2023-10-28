"use client";

import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Comma from "./Comma";
import Image from "next/image";

const TestimonialCard = ({ profileImg, name, comment }) => {
  return (
    <Card className="p-6">
      <CardBody>
        <Comma />
        <Typography style={{ fontSize: "18px" }} className="font-bromega">
          {comment}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 flex flex-row gap-2 items-center">
        <Image src={profileImg} width={60} alt={name} />
        <Typography
          style={{ fontSize: "22px" }}
          variant="paragraph"
          className="font-bromega"
        >
          {name}
        </Typography>
      </CardFooter>
    </Card>
  );
};

export default TestimonialCard;
