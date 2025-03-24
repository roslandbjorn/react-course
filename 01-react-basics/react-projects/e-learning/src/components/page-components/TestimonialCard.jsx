import React from "react";
import { BsStar, BsStarFill, BsTwitter } from "react-icons/bs";

export default function TestemonialCard({
  img,
  fullName = "Full Name",
  jobTitle = "Job Title",
  twitterHandle = "Twitter handle",
  text = "text",
  ratingStars,
}) {
  return (
    <div className="card testemonial in-view">
      <div className="card-header">
        <div className={`card-img ${img}`}>
          <h3 className="card-title">{fullName}</h3>
          <p className="card-text">{jobTitle}</p>
          <div>
            <BsTwitter size={"1.5rem"} />
            {twitterHandle}
          </div>
        </div>
      </div>
      <div className="card-body">
        <p className="card-text">{text}</p>
      </div>
      <div className="card-footer d-flex">
        <BsStarFill className="mr-1" />
        <BsStarFill className="mr-1" />
        <BsStarFill className="mr-1" />
        <BsStarFill className="mr-1" />
        <BsStar className="mr-1" />
      </div>
    </div>
  );
}
