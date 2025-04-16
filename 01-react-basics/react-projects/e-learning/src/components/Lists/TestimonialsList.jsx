import { useEffect, useState } from "react";

//Data

import testimonialsData from "../../db/tesimonials.json";
import TestemonialCard from "../page-components/TestimonialCard";
import Button from "../Button";

export default function TestimonialsList() {
  // Functions
  const getLocalData = () => {
    setIsLoading(true);

    // Simulate random error
    function getRandomInt() {
      return Math.floor(Math.random() * 4);
    }

    setTimeout(() => {
      parsedData = JSON.parse(localStorage.getItem("testimonialData"));
      // setData(parsedData);
      if (getRandomInt() === 0) {
        setHasError(true);
        setError(new Error("Random error"));
      } else {
        setData(parsedData);
      }
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
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState(null);

  let parsedData;
  const fetchData = async () => {
    try {
      setIsLoading(true);
      getLocalData();
    } catch (error) {
      console.log(error);
      setHasError(true);
      setError(error);
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

  if (hasError) {
    return (
      <>
        <div className="alert alert-danger">
          <p className="mr-1">Something went wrong {error.message}</p>
          <Button text={"Try again"} onClick={getLocalData} />
        </div>
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
