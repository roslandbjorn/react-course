import { useState } from "react";

//Data

import testimonialsData from "../../db/tesimonials.json";
import TestemonialCard from "../page-components/TestimonialCard";

export default function TestimonialsList() {
  const [tesimonials, setTesimonials] = useState(testimonialsData);
  return (
    <>
      {tesimonials.map((item) => (
        <TestemonialCard
          key={item.id}
          img={item.img}
          fullName={item.fullName}
          jobTitle={item.jobTitle}
          twitterHandle={item.twitterHandle}
          text={item.text}
        />
      ))}
    </>
  );
}
