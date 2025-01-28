import React, { useState } from "react";

function SearchBar() {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleClick = (e) => {
    setShowInput(true);
    e.target.hidden = true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim !== "") {
      setInputValue("");
      setShowInput(false);
    }
  };

  return (
    <div className="flex flex-col w-100 h-screen items-center justify-center">
      <form onSubmit={handleSubmit}>
        {showInput ? (
          <input
            className="input w-3xl h-10"
            type="text"
            placeholder="Search..."
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
        ) : (
          showInput
        )}
        {!showInput ? (
          <button
            onClick={handleClick}
            className="btn btn-primary btn-lg w-12 h-10"
            type="submit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </button>
        ) : (
          !showInput
        )}
      </form>
    </div>
  );
}

export default SearchBar;
