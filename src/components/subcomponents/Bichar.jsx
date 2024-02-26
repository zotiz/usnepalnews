import Image from "next/image";
import React from "react";
import TimeOclock from "./TimeOclock";
import Author from "./AuthorName";

const Bichar = () => {
  const bicharharu = [
    {
      img: "https://i0.wp.com/himalayakhabar.com/wp-content/uploads/2023/12/neu-dev.png?fit=323%2C351&ssl=1",
      title: "ईश्वर र धर्मका कुराः",
      authorName: "देवराज न्यौपाने",
      time: "15 Feb 2024",
    },
    {
      img: "https://i0.wp.com/himalayakhabar.com/wp-content/uploads/2023/11/aani.gif?fit=1266%2C600&ssl=1",
      title: "मानव सेवा नै सर्वोत्कृष्ट धर्म",
      authorName: "आनी छोइङ डोल्मा",
      time: "16 Feb 2024",
    },
    {
      img: "https://i0.wp.com/himalayakhabar.com/wp-content/uploads/2023/11/Ram-C-Bhatta.jpg?fit=1000%2C600&ssl=1",
      title: "अमेरिकामा व्याप्त ठगीको जालो",
      authorName: "रामचन्द्र भट्ट",
      time: "18 Feb 2024",
    },
    {
      img: "https://i0.wp.com/himalayakhabar.com/wp-content/uploads/2023/12/angest-mahila-hinsa.jpg?fit=1200%2C650&ssl=1",
      title: "लभ बम्बिङ’ र लैङ्गिक हिंसाको पुनःपरिभाषा",
      authorName: "निमा काफ्ले",
      time: "10 Feb 2024",
    },
  ];
  const recentNews = [
    {
      img: "https://i0.wp.com/himalayakhabar.com/wp-content/uploads/2024/02/ShurbahadurSingha_Karnali_RSS_12.webp?resize=150%2C150&ssl=1",
      title:
        "नयाँ पुस्तालाई सम्पन्न कर्णाली हस्तान्तरण गर्छौं : उपप्रधानमन्त्री खड्का",
    },
    {
      img: "https://i0.wp.com/himalayakhabar.com/wp-content/uploads/2023/09/Pakrau.jpg?resize=150%2C150&ssl=1",
      title: "सुन तस्करी प्रकरणमा कलेज सञ्चालक पक्राउ",
    },
    {
      img: "https://i0.wp.com/himalayakhabar.com/wp-content/uploads/2024/02/dollar.jpg?resize=150%2C150&ssl=1",
      title: "१० वर्षदेखि डलर देखाएर ठगी गरेको रकम मुद्दती खातामा प्रयोग",
    },
    {
      img: "https://i0.wp.com/himalayakhabar.com/wp-content/uploads/2024/02/cricket-nepal.jpg?resize=150%2C150&ssl=1",
      title: "‘ए’ ग्रेडका खेलाडीलाई मासिक एक लाख तलब दिने क्यानको निर्णय",
    },
    {
      img: "https://i0.wp.com/himalayakhabar.com/wp-content/uploads/2024/02/dr_mahat1-scaled.jpg?resize=150%2C150&ssl=1",
      title:
        "नागरिकको जीवनस्तर उकास्ने गरी आगामी आवको बजेट तर्जुमा हुन्छ: अर्थमन्त्री डा महत",
    },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-2">
      <div className="col-span-2 text-xl font-semibold bg-[#222327] rounded p-8">
        <span className="border-b-2 pb-[9px] border-red-500 pr-2 text-white">
          विचार
        </span>

        <div className=" bg-gray-400 h-[1px] my-2" />
        <div className="text-white flex gap-4 my-4">
          <div className="flex-1">
            <Image
              src="https://i0.wp.com/himalayakhabar.com/wp-content/uploads/2023/01/1577809660_bp.jpg?fit=%2C&ssl=1"
              alt="Bichar"
              width={350}
              height={100}
              className="w-full h-60 object-cover"
            />
          </div>
          <div className="flex-1 flex flex-col gap-3">
            <div className="flex gap-2 text-gray-400">
              <Author authorName="धर्मेन्द्र झा" />
              <TimeOclock />
            </div>
            <p>बिपीको मेलमिलापको कसीमा वर्तमान</p>
            <p className="text-[16px] font-light text-gray-300">
              नेपाली कांग्रेसका संस्थापक महानायक बिपी कोइराला आठ वर्षको भारत
              निर्वासनपछि स्वदेश फर्कनुभएको दिनलाई नेपाली कांग्रेसले राष्ट्रिय
              मेलमिलाप दिवसका रुपमा मनाउँदै आएको छ । त्यसो त कांग्रेसभित्रैका
              केही नेताको बुझाइमा भारत गमन बिपीको आत्मनिर्वासनको...
              <br />
              <button className="text-[12px] bg-white text-black py-1 px-2 rounded-lg mt-2">
                Read More
              </button>
            </p>
          </div>
        </div>
        <div className="text-white grid grid-cols-2 gap-4 mt-6">
          {bicharharu.map((item, index) => {
            return (
              <div key={index} className="flex gap-5 mt-2">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={150}
                  height={50}
                  className="object-cover h-24"
                />
                <div className="flex flex-col gap-1">
                  <div className="text-gray-400">
                    <TimeOclock />
                  </div>

                  <p className="text-[15px]">{item.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <span className="border-b-2 pb-[9px] border-[#04AA52] pr-2 text-[#04AA52] font-semibold text-lg">
          भर्खरैको समाचार
        </span>

        <div className=" bg-gray-200 h-[2px] mt-2" />
         <div className="">
          {recentNews.map((item, index) => {
            return (
              <div key={index} className="flex gap-5 mt-3">
                <div className="w-40 h-28 relative">
                 <Image
                    src={item.img}
                    fill={true}
                    alt={item.title}
                    // width={250}
                    // height={250}
                    className="h-full w-full object-cover"
                  /> 
                </div>

                <div className="flex-1 ">
                  <div className="text-gray-400 mb-1">
                    <TimeOclock />
                  </div>

                  <p className="text-[15px] font-semibold text-[#2f2e2e]">{item.title}</p>
                </div>
              </div>
            );
          })}
          </div>
     
      </div>
    </div>
  );
};

export default Bichar;
