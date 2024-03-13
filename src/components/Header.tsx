"use client";
import { useAppDispatch } from "@/redux/store";
import { changeTheme } from "@/redux/theme/slice";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { BiSolidToggleLeft } from "react-icons/bi";
import { BiSolidToggleRight } from "react-icons/bi";

import Logo from "../../public/Logo.svg";
import { themeSelector } from "@/redux/theme/selectors";
import { useSelector } from "react-redux";

const Header = () => {
  const { theme } = useSelector(themeSelector);
  const dispatch = useAppDispatch();
  const location = usePathname().slice(1);
  const activeBtn = "px-5 py-2 font-semibold rounded-md bg-gray-200";
  const nonActiveBtn = "px-5 py-2 text-gray-500 font-medium";

  return (
    <header className="">
      <div className="p-8 flex flex-row justify-between">
        <div className="basis-1/5">
          <Image className="py-2" src={Logo} alt="logo" width={140} height={20} />
        </div>
        <div className="basis-1/4 flex justify-between gap-1">
          <div>
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
      <div className="w-full h-px bg-gray-300"></div>
    </header>
  );
};

export default Header;
