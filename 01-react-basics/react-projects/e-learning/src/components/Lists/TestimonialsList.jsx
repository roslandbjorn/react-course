import { useEffect, useState } from "react";

//Data

import testimonialsData from "../../db/tesimonials.json";
import TestemonialCard from "../page-components/TestimonialCard";

export default function TestimonialsList() {
  // Functions
  const getLocalData = () => {
    setIsLoading(true);
    setTimeout(() => {
      parsedData = JSON.parse(localStorage.getItem("testimonialData"));
      setData(parsedData);
      setIsLoading(false);
    }, 2000);
  };
  // States
  const [tesimonials, setTesimonials] = useState(() => {
    return JSON.parse(localStorage.getItem("testimonialData")) ?? [];
  });

  // Data state

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  let parsedData;
  const fetchData = async () => {
    try {
      setIsLoading(true);
      getLocalData();
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  // Effects
  useEffect(() => {
    // setTesimonials(testimonialsData);
    localStorage.setItem("testimonialData", JSON.stringify(testimonialsData));
    fetchData();
  }, [!data]);

  if (isLoading) {
    return (
      <>
        <div className="alert alert-warning">Loading ...</div>
      </>
    );
  }

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
