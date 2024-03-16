"use client";
import { useState } from "react";

import SearchLogo from "../SearchLogo";
import style from "./home.module.scss";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className={`flex text-center ${style.wrapper}`}>
      <div className={`basis-1/4 ${style.sideLeft}`}></div>
      <div className="basis-1/2 pt-20 px-10">
        <h1 className="text-4xl font-semibold">Search</h1>
        <p className="text-sm mt-2">Search high-resolution images from Unsplash</p>
        <div className="relative">
          <input
            className="px-4 mt-6 w-full h-16 rounded-lg border-gray-200 border"
            type="text"
            placeholder="Enter your keywords..."
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
          />
          {!searchValue && <SearchLogo className="absolute top-10 right-4 w-7 h-7" />}
        </div>
      </div>
      <div className={`basis-1/4 ${style.sideRight}`}></div>
    </div>
  );
}
