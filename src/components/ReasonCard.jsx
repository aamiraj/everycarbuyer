import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const ReasonCard = ({ title, desc }) => {
  return (
    <Card className="reasonCardShadow">
      <CardBody>
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 font-bromega text-lg text-black"
        >
          {title}
        </Typography>
        <Typography className="font-bromega text-base text-black">
          {desc}
        </Typography>
      </CardBody>
    </Card>
  );
};

export default ReasonCard;
