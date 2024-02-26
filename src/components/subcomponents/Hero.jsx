import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="grid md:grid-cols-4 grid-rows-2 gap-1 ">
      <div className="row-span-2 col-span-2 relative h-[454px]">
        <div className="absolute top-0 bottom-0 left-0 right-0 h-full ">
          <Image
            fill={true}
            src="https://i0.wp.com/himalayakhabar.com/wp-content/uploads/2024/02/pm1.jpg?fit=1199%2C850&ssl=1"
            alt="afdf"
            className="object-cover"
          />
        </div>

        <div className="text-white absolute left-0 right-0 bottom-0 z-40 custom-bg p-6  flex flex-col justify-between  h-full">
          <p className="bg-[#997C01] w-fit py-1 px-3 text-[13px] tracking-wide rounded">
            समाचार
          </p>

          <div className="flex flex-col gap-5 ">
            <p className="text-[13px]">Feb 21, 2024</p>
            <p className="text-3xl font-semibold">
              शान्ति सैनिकले जातीय तनाव र आतङ्कवादको खतरा सामना गर्नुपरेको छ :
              प्रधानमन्त्री
            </p>
            <p className="">
              काठमाडौँ । प्रधानमन्त्री पुष्पकमल दाहाल ‘प्रचण्ड’ले वर्तमान
              विश्वमा देखिएका जातीय तनाव र आतङ्कवादका विभिन्न कारकबाट सञ्चालित
              जटिल द्वन्द्वका कारण शान्ति स्थापनार्थ खटिएका सैनिकले खतराको सामना
              गर्नुपरेको बताएका छन् ।
            </p>
          </div>
        </div>
      </div>

      <div className="col-span-2 relative h-[225px]">
        <Image
          fill={true}
          src="https://i0.wp.com/himalayakhabar.com/wp-content/uploads/2024/02/423105680_430337436092594_5110845965178977064_n-scaled.jpg?fit=2560%2C1070&ssl=1"
          alt="af"
          className="object-cover"
        />
        <div className="absolute p-4  flex flex-col justify-between  h-full w-full text-white custom-bg">
          <p className="bg-blue-600 w-fit py-1 px-3 text-[13px] tracking-wide rounded">
          अमेरिका
          </p>
          <div className="flex flex-col gap-2 ">
            <div className="flex items-center gap-2">
              <i className="bx bxs-bolt-circle text-red-500 text-2xl bg-white rounded-full"></i>
              <p className="text-[13px] font-semibold">Feb 21, 2024</p>
            </div>

            <p className="text-lg font-semibold tracking-wide">अप्रिल ९ देखि १७ सम्म टेक्ससमा नवाह आउँदो हप्तादेखि घरघरमा निम्ता सहितको बक्स पठाइदै</p>
          </div>
        </div>
      </div>
      <div className=" relative h-[225px]">
        <Image
          fill={true}
          src="https://i0.wp.com/himalayakhabar.com/wp-content/uploads/2023/09/Ratna_Shrestha_KTM_RSS_02_20230915112350_RATL1481_51.jpg?fit=1920%2C1280&ssl=1"
          alt="af"
          className="object-cover"
        />
        <div className="absolute p-4  flex flex-col justify-between  h-full w-full text-white custom-bg">
          <p className="bg-blue-400 w-fit py-1 px-3 text-[13px] tracking-wide rounded">
          अन्तरवार्ता
          </p>
          <div className="flex flex-col gap-2 ">
            <div className="flex items-center gap-2">
              <i className="bx bxs-bolt-circle text-red-500 text-2xl bg-white rounded-full"></i>
              <p className="text-[13px] font-semibold">Feb 21, 2024</p>
            </div>

            <p className="text-lg">‘संविधानको सकारात्मक पक्षको रक्षा गर्दै अपूर्णता पूरा गर्नुपर्छ’</p>
          </div>
        </div>
      </div>
      <div className=" relative h-[225px]">
        <Image
          fill={true}
          src="https://i0.wp.com/himalayakhabar.com/wp-content/uploads/2023/12/prize.jpg?fit=719%2C480&ssl=1"
          alt="af"
          className="object-cover"
        />
        <div className="absolute p-4  flex flex-col justify-between  h-full w-full text-white custom-bg">
          <p className="bg-[#37CAE8] w-fit py-1 px-3 text-[13px] tracking-wide rounded">
          साहित्य
          </p>
          <div className="flex flex-col gap-2 ">
            <div className="flex items-center gap-2">
              <i className="bx bxs-bolt-circle text-red-500 text-2xl bg-white rounded-full"></i>
              <p className="text-[13px] font-semibold">Feb 21, 2024</p>
            </div>

            <p className="text-lg">बाह्रखरी कथा लेखन प्रतियोगिताको उपाधि पन्तलाई, एक लाख पुरस्कार प्रदान</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
