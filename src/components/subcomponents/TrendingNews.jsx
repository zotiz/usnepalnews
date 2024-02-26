import Image from "next/image";
import React from "react";
import TimeOclock from "./TimeOclock";
import Fallowus from "./Fallowus";
import WeatherApplication from "./WeatherApplication";

const TrendingNews = () => {
  const trendingNews = [
    {
      title:
        "निर्वाचनपछि गठबन्धन हुनसक्छ, चुनावमा रुखमै मत हाल्ने वातावरण बनाउँछौँ : महामन्त्री थापा",
      imgUrl:
        "https://i0.wp.com/himalayakhabar.com/wp-content/uploads/2024/02/gagan-bdr-thapa.jpg?resize=300%2C165&ssl=1",
      date: "Feb 22, 2024",
    },
    {
      title:
        "१०८ कन्याबाट अनन्तश्री ब्रह्माण्डीय महायज्ञ शुभारम्भ, १५ दिनसम्म विभिन्न विषयमा सम्मेलन हुने",
      imgUrl:
        "https://i0.wp.com/himalayakhabar.com/wp-content/uploads/2024/02/kumari-Hk.jpg?resize=300%2C165&ssl=1",
      date: "Feb 22, 2024",
    },
    {
      title: "सात महिनामा आठ खर्ब व्यापार घाटा",
      imgUrl:
        "https://i0.wp.com/himalayakhabar.com/wp-content/uploads/2023/02/trade.jpg?resize=300%2C165&ssl=1",
      date: "Feb 22, 2024",
    },
    {
      title: "लघुवित्त र सहकारीका समस्या चाँडै समाधान हुन्छन् : प्रधानमन्त्री",
      imgUrl:
        "https://i0.wp.com/himalayakhabar.com/wp-content/uploads/2024/02/PM_Cooperative1-scaled.jpg?fit=2560%2C1335&ssl=1",
      date: "Feb 22, 2024",
    },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-3">
      <div className="col-span-2 text-xl font-semibold text-red-600">
        <span className="border-b-2 pb-[9px] border-red-500 pr-2">
          ट्रेन्डिङ समाचार
        </span>

        <div className=" bg-gray-200 h-[2px] mt-2" />
        <div className="mt-4 flex flex-col md:flex-row gap-8">
          <div className="md:flex-1 h-[450px] relative">
            <Image
              src="https://i0.wp.com/himalayakhabar.com/wp-content/uploads/2023/12/399898178_360144253195175_5812233660479531845_n-scaled.jpg?fit=2560%2C1920&ssl=1"
              alt="asdf"
              fill={true}
              className="object-cover"
            />
            <div className="absolute text-white w-full h-full p-4 flex flex-col justify-end gap-4 custom-bg">
              <p className="bg-[#9C5BB7] w-fit py-1 px-3 text-[13px] tracking-wide rounded">
                साहित्य
              </p>
              <p>‘राष्ट्रियता अब भूगोलमा मात्र सिमित छैन’</p>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <i class="bx bx-user-circle text-xl"></i>
                  <p className="text-[12px] tracking-wide"> Jyoti Mishra</p>
                </div>
                <TimeOclock />
              </div>
            </div>
          </div>
          <div className="flex-1 h-[450px]">
            {trendingNews.map((item, index) => {
              return (
                <div key={index} className={`flex gap-3 mb-4`}>
                  <Image src={item.imgUrl} alt="daf" width={150} height={150} />
                  <div className="text-black">
                    <TimeOclock textcolor={"text-gray-400"} />
                    <p className="text-black text-[14px] font-normal">{item.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="text-[#598ff9]  font-semibold">
        <span className="border-b-2 pb-[14px] pr-2 border-blue-500">
          Follow Us
        </span>
        <div className=" bg-gray-200 h-[2px] mt-3" />
        <Fallowus/>
        <WeatherApplication/>
      </div>
    </div>
  );
};

export default TrendingNews;
