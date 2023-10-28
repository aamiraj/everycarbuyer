"use client";

import { Typography } from "@material-tailwind/react";
import React from "react";

const ReasonHeading = ({ content, marked, rest="" }) => {
    return (
        <div className="m-10 p-6">
          <Typography className="font-bold text-3xl text-center font-bromega">
            {content}
    
            <span className="px-4 py-8 text-3xl text-center font-bromega markerBG">
              {marked}
            </span>
            {" "}{rest}
          </Typography>
        </div>
      );
}

export default ReasonHeading