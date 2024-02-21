import React from "react";

import { TypeAnimation } from "react-type-animation";

const TypingAnimation = () => {
  return (
    <TypeAnimation
      // 'Lorem ipsum dolor' -> ['Lorem', ' ipsum', ' dolor']
      sequence={[
        "८३२ जना नेपाली चिकित्सकको नतिजा रद्दविरुद्ध अमेरिकी अदालतमा मुद्दा",
        2000,
        "ललिता निवास क्षेत्र ७ दिनभित्र खाली गर्नू : काठमाडौं महानगरपालिका",
        2000,
        "एमाले केन्द्रीय कमिटी बैठक : सरकारविरुद्ध जनदबाबका कार्यक्रममा छलफल जारी",
        2000,
        "सरकारले श्रीलंकाको जेलमा रहेका तीन नेपालीलाई आममाफीका लागि अनुरोध गर्ने",
        2000,
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
