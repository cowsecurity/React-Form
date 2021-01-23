import React, { useState } from "react";

function App() {
  const [heading, changeHeading] = useState("");
  const [headingText, setHeadingText] = useState("");

  function handleChange(event) {
    changeHeading(event.target.value);
  }

  function handleClick(event) {
    setHeadingText(heading);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={heading}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
