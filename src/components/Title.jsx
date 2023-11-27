import React from "react";

function Title({title}) {
  return (
    <div className="relative">
      <h1 className={`text-center lg:text-6xl text-3xl font-bold mb-2 title-${title}`}>
        {title.toUpperCase()}
      </h1>
    </div>
  );
}

export default Title;
