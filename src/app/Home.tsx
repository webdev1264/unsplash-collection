"use client";
import Header from "@/components/Header";
import { themeSelector } from "@/redux/theme/selectors";
import { useSelector } from "react-redux";

export default function Home() {
  const { theme } = useSelector(themeSelector);
  return (
    <main className={theme}>
      <Header />
    </main>
  );
}
