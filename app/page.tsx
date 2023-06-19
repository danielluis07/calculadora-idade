"use client";

import { TfiArrowDown } from "react-icons/tfi";
import { useState } from "react";

export default function Home() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const handleDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDay(e.target.value);
  };

  const handleMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMonth(e.target.value);
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYear(e.target.value);
  };

  const calculateAge = () => {
    let myday = day;
    let mymonth = month;
    let myyear = year;

    const calculateYear = () => {
      let currentDate = new Date();
      let birthDay = new Date(`${mymonth}/${myday}/${myyear}`);

      let difference = currentDate.getTime() - birthDay.getTime();

      let resultDays = Math.round(difference / (1000 * 3600 * 24));

      let resultMonths = Math.round(resultDays / 30);

      let myAge = Math.round(resultMonths / 12);

      return myAge;
    };

    const calculateMonth = () => {
      let currentDate = new Date();
      let currentYear = currentDate.getFullYear();

      let currentBirthDayMonth = new Date(`${mymonth}/${myday}/${currentYear}`);

      let howManyMiliseconds =
        currentDate.getTime() - currentBirthDayMonth.getTime();

      let howManyDays = Math.round(howManyMiliseconds / (1000 * 3600 * 24));

      let howManyMonths = Math.round(howManyDays / 30);

      return Math.abs(howManyMonths);
    };

    const calculateDay = () => {
      let currentDate = new Date();
      let currentYear = currentDate.getFullYear();

      let currentBirthDayMonth = new Date(`${mymonth}/${myday}/${currentYear}`);

      let howManyMiliseconds =
        currentDate.getTime() - currentBirthDayMonth.getTime();

      let howManyDays = Math.round(howManyMiliseconds / (1000 * 3600 * 24));

      return Math.abs(howManyDays);
    };

    const theYear = calculateYear();
    const theMonth = calculateMonth();
    const theDay = calculateDay();

    console.log(theMonth);

    return [theYear, theMonth, theDay];
  };

  return (
    // input font size: 32px
    <div className="h-full flex items-center justify-center px-4">
      <div className="w-full desktop:w-[700px] desktop:max-w-[1440px] bg-mainwhite p-10 rounded-bl-xl rounded-tl-xl rounded-tr-xl rounded-br-[150px]">
        {/* inputs */}
        <div className="flex flex-row w-full desktop:w-5/6">
          <div className="w-full">
            <h1 className="text-smokeygrey font-extrabold pb-2 text-sm tracking-widest">
              DAY
            </h1>
            <input
              className="p-4 text-offblack placeholder:text-smokeygrey font-extrabold outline-none text-xl border border-lightgrey w-[100px] desktop:w-[150px] rounded-lg"
              type="text"
              value={Number(day)}
              onChange={handleDayChange}
              placeholder="DD"
            />
          </div>
          <div className="w-full">
            <h1 className="text-smokeygrey font-extrabold pb-2 text-sm tracking-widest">
              MONTH
            </h1>
            <input
              className="p-4 text-offblack placeholder:text-smokeygrey font-extrabold outline-none text-xl border border-lightgrey w-[100px] desktop:w-[150px] rounded-lg"
              type="text"
              value={Number(month)}
              onChange={handleMonthChange}
              placeholder="MM"
            />
          </div>
          <div className="w-full">
            <h1 className="text-smokeygrey font-extrabold pb-2 text-sm tracking-widest">
              YEAR
            </h1>
            <input
              className="p-4 text-offblack placeholder:text-smokeygrey font-extrabold outline-none text-xl border border-lightgrey w-[100px] desktop:w-[150px] rounded-lg"
              type="text"
              value={Number(year)}
              onChange={handleYearChange}
              placeholder="YYYY"
            />
          </div>
        </div>
        {/* line */}
        <div className="w-full h-[1px] bg-lightgrey relative my-10">
          <div
            onClick={() => setIsClicked(true)}
            className="p-3 rounded-full bg-mainpurple w-min absolute top-1/2 -translate-y-1/2 right-0">
            <TfiArrowDown className="text-mainwhite text-3xl" />
          </div>
        </div>
        {/* result */}
        <div>
          <div className="flex flex-row items-center">
            <span className="text-mainpurple text-7xl italic">
              {isClicked ? calculateAge()[0] : "--"}
            </span>
            <h1 className="text-offblack text-7xl font-black italic">years</h1>
          </div>
          <div className="flex flex-row items-center">
            <span className="text-mainpurple text-7xl italic">
              {isClicked ? calculateAge()[1] : "--"}
            </span>
            <h1 className="text-offblack text-7xl font-black italic">months</h1>
          </div>
          <div className="flex flex-row items-center">
            <span className="text-mainpurple text-7xl italic">
              {isClicked ? calculateAge()[2] : "--"}
            </span>
            <h1 className="text-offblack text-7xl font-black italic">days</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
