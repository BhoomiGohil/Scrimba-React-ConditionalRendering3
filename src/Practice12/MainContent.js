import React from "react";

export default function MainContent() {
  const [isGoingOut, setIsGoingOut] = React.useState(true);

  function changeMind() {
    // setIsGoingOut((prevState) => {
    //   if (prevState === true) {
    //     return (prevState = false);
    //   } else return (prevState = true);a
    // });
    // setIsGoingOut((prevState) => {
    //   return prevState ? (prevState = false) : (prevState = true);
    // });
    setIsGoingOut((prevState) => !prevState);
  }

  return (
    <div className="state">
      <h1 className="state--title">Do I feel like going out tonight?</h1>
      <button className="state--value" onClick={changeMind}>
        {isGoingOut ? "Yes" : "No"}
      </button>
    </div>
  );
}
