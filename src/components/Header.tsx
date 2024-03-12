"use client";
import { useAppDispatch } from "@/redux/store";
import { changeTheme } from "@/redux/theme/slice";
import Image from "next/image";

const Header = () => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <Image src={""} alt="logo" width={20} height={20} />
      <div>Unsplash</div>
      <button onClick={() => dispatch(changeTheme())}>theme toggler</button>
    </div>
  );
};

export default Header;
