"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Image from "next/image";

const GuideCard = ({ id, img, title, desc }) => {
  return (
    <Card className="mt-6 guideCardShadow">
      <CardHeader shadow={false} className="relative rounded-none h-56">
        <Image
          src={img}
          alt={title}
          fill
          quality={100}
          className="object-contain"
        />
      </CardHeader>
      <CardBody>
        <div className="flex">
          <p className="outlinedNumber">{id}</p>
          <Typography
            style={{ fontSize: "24px" }}
            variant="h5"
            color="blue-gray"
            className="mb-2 font-bromega text-center"
          >
            {title}
          </Typography>
        </div>
        <Typography
          style={{ fontSize: "16px" }}
          className="font-bromega text-center"
        >
          {desc}
        </Typography>
      </CardBody>
    </Card>
  );
};

export default GuideCard;
