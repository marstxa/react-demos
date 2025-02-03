import React, { useState } from "react";

function Accordion({ title, info }) {
  const [isActive, setIsActive] = useState(false);

  const caretDown = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      class="bi bi-caret-down-fill"
      viewBox="0 0 16 16"
    >
      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
    </svg>
  );

  const caretUp = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      class="bi bi-caret-up"
      viewBox="0 0 16 16"
    >
      <path d="M3.204 11h9.592L8 5.519zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659" />
    </svg>
  );

  return (
    <div
      key={Math.random()}
      onClick={() => setIsActive(!isActive)}
      className="w-96 min-h-16 bg-base-100 flex flex-col"
    >
      <div className="flex flex-row justify-between">
        <div className="font-bold w-10/12">{title}</div>
        <div className="w-2/12 items-center">
          {!isActive ? caretDown : caretUp}
        </div>
      </div>
      <div>{isActive && <p>{info}</p>}</div>
    </div>
  );
}

export default Accordion;
