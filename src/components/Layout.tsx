"use client";
import { useSelector } from "react-redux";
import Header from "./Header";
import { themeSelector } from "@/redux/theme/selectors";

type LayoutProps = {
  children: React.ReactNode;
  className: string;
};

const Layout = ({ children, className }: LayoutProps) => {
  const { theme } = useSelector(themeSelector);
  return (
    <body className={`${className} ${theme}`}>
      <Header />
      <main>{children}</main>
    </body>
  );
};

export default Layout;
