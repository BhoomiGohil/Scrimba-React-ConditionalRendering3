import React from "react";

export default function MainContent() {
  const [isGoingOut, setIsGoingOut] = React.useState(true); // State to track if the user feels like going out

  function changeMind() {
    // Toggles the state of isGoingOut
    // The following commented code are alternative methods for toggling the state
    /*
    setIsGoingOut((prevState) => {
      if (prevState === true) {
        return (prevState = false); // If true, set to false
      } else return (prevState = true); // If false, set to true
    });
    
    setIsGoingOut((prevState) => {
      return prevState ? (prevState = false) : (prevState = true); // Conditional check to toggle state
    });
    */
    setIsGoingOut((prevState) => !prevState); // Simplified way to toggle the state
  }

  return (
    <div className="state">
      <h1 className="state--title">Do I feel like going out tonight?</h1>
      <button className="state--value" onClick={changeMind}>
        {isGoingOut ? "Yes" : "No"}
        {/* Displaying "Yes" or "No" based on the state */}
      </button>
    </div>
  );
}
