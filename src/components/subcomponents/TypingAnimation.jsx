import React from "react";

import { TypeAnimation } from "react-type-animation";

const TypingAnimation = () => {
  return (
    <TypeAnimation
       // 'Lorem ipsum dolor' -> ['Lorem', ' ipsum', ' dolor']
      sequence={[
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.",
        2000,
        "One man with courage makes a majority.",2000,
        "Budget issues force the Tour to be cancelled.",2000,
        "The Top 10 Best Computer Speakers in the Market.",2000

      ]}
      cursor={false}
      speed={65}
      omitDeletionAnimation={true}
      style={{ fontSize: "13px" }}
      repeat={Infinity}
    />
  );
};
export default TypingAnimation;
