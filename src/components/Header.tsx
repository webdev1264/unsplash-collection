"use client";
import { useAppDispatch } from "@/redux/store";
import { changeTheme } from "@/redux/theme/slice";
import { usePathname } from "next/navigation";
import { themeSelector } from "@/redux/theme/selectors";
import { useSelector } from "react-redux";
import Link from "next/link";

import { BiSolidToggleLeft } from "react-icons/bi";
import { BiSolidToggleRight } from "react-icons/bi";
import MainLogo from "./MainLogo";

const Header = () => {
  const { theme } = useSelector(themeSelector);
  const dispatch = useAppDispatch();
  const location = usePathname().slice(1);

  const activeStyleClass = theme === "theme--dark" && "active-link--dark";
  const activeBtn = `px-5 py-2 font-semibold rounded-md bg-gray-200 ${activeStyleClass}`;
  const nonActiveBtn = "px-5 py-2 text-gray-500 font-medium";

  return (
    <header className="h-28 px-10 flex flex-col justify-center border-b-2">
      <div className="flex flex-row justify-between">
        <div className="basis-1/5">
          <div className="py-2">
            <MainLogo height={28} className="main-logo" />
          </div>
        </div>
        <div className="basis-1/4 flex justify-between gap-1">
          <div className="cursor-pointer">
            {theme === "theme--light" ? (
              <BiSolidToggleLeft className="w-12 h-11" onClick={() => dispatch(changeTheme())} />
            ) : (
              <BiSolidToggleRight className="w-12 h-11" onClick={() => dispatch(changeTheme())} />
            )}
          </div>
          <Link href="/" className={!location ? activeBtn : nonActiveBtn}>
            Home
          </Link>
          <Link
            href="/collections"
            className={location === "collections" ? activeBtn : nonActiveBtn}>
            Collections
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
