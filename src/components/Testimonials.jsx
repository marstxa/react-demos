import React, { useState } from "react";

function Testimonials() {
  const [indexValue, setIndexValue] = useState(0);
  const numberStars = [1, 2, 3, 4, 5];

  const handleRight = () => {
    setIndexValue((indexValue + 1) % data.length);
  };

  const handleLeft = () => {
    setIndexValue((indexValue + data.length - 1) % data.length);
  };

  const data = [
    {
      quote:
        "This platform is incredibly easy to use and saved me so much time!",
      person: "Sarah Lee",
      stars: 5,
    },
    {
      quote:
        "The support team was extremely helpful when I had a question. Great service!",
      person: "Tom Harris",
      stars: 4,
    },
    {
      quote: "I wish there were more features, but it works for what I need.",
      person: "Emily Chen",
      stars: 3,
    },
    {
      quote:
        "Exceeded my expectations! I'll be recommending this to all my friends.",
      person: "Michael Green",
      stars: 5,
    },
    {
      quote: "Service is good, but the app can be a bit slow sometimes.",
      person: "Olivia Martinez",
      stars: 4,
    },
    {
      quote: "Didn't work as expected for me, unfortunately.",
      person: "James Black",
      stars: 2,
    },
    {
      quote: "A must-have tool! It does everything I need and more.",
      person: "Lisa White",
      stars: 5,
    },
    {
      quote:
        "I had some issues getting started, but once I figured it out, it's been smooth.",
      person: "Daniel Kim",
      stars: 4,
    },
    {
      quote: "Not bad, but I think there are better alternatives out there.",
      person: "Ava Scott",
      stars: 3,
    },
    {
      quote: "Amazing experience! Fast, reliable, and just what I needed.",
      person: "Jack Wilson",
      stars: 5,
    },
  ];

  return (
    <div className="card w-3xl h-96 bg-base-100">
      <div className="card-body flex items-center justify-evenly">
        <div className="rating rating-xl">
          {numberStars.map((index) => {
            let isChecked = false;
            if (index === data[indexValue].stars) {
              isChecked = true;
            }

            return (
              <input
                key={index}
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-primary m-4"
                checked={`${isChecked === true ? "checked" : ""}`}
              />
            );
          })}
        </div>
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-2xl italic w-96 text-center">
            {data[indexValue].quote}
          </h4>
        </div>
        <div className="font-bold">
          <p>{data[indexValue].person}</p>
        </div>
        <div className="flex flex-row justify-between items-center w-8/12">
          <button className="btn btn-accent w-20 h-10" onClick={handleLeft}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="white"
              class="bi bi-arrow-left-circle"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
              />
            </svg>
          </button>
          <button className="btn btn-accent w-20 h-10" onClick={handleRight}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="white"
              class="bi bi-arrow-right-circle"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
              />
            </svg>{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
