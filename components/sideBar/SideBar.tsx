import { Switch } from "@headlessui/react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import logo from "/public/images/logo.png"
import logo_icon from "/public/images/logo_icon.png";

const SideBar = ({ showText, setShowText, openSidBar, setOpenSidBar }: any) => {
  const [enabled, setEnabled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [show, setShow] = useState(true);
  const [sideBarShow, setSideBarShow] = useState(false);

  // responsive check
  const responsive = useMediaQuery({
    query: "(max-width: 1200px)",
  });

  // get router path
  const pathname = usePathname();

  const onMouseOverHandler = () => {
    if (sideBarShow) {
      setShowText(true);
    }
  };

  const onMouseLeaveHandler = () => {
    if (sideBarShow) {
      setShow(true);
      setShowText(false);
    }
  };

  const onClickHandler = () => {
    setShow(true);
    setSideBarShow(!sideBarShow);
    setShowText(!showText);
  };

  const handleClick = () => {
    setTheme(theme === "dark" || theme === "system" ? "light" : "dark");
  };

  useEffect(() => setEnabled(true), []);

  if (!enabled) return null;

  return (
    <>
      {responsive && openSidBar ? (
        <div className="w-full bg-gray-950 bg-opacity-70 h-[100vh] fixed top-0 left-0 z-30"></div>
      ) : (
        ""
      )}

      <motion.section
        className={`fixed left-0 top-0 z-30 container overflow-y-scroll lg:overflow-auto ${
          showText ? "w-[212px] 2xl:w-[312px]" : "w-auto"
        } border dark:border-[var(--color-dark)] bg-white dark:bg-[var(--color-gray-7)] px-6 pt-6 pb-10 ${
          openSidBar ? "block" : "hidden lg:block"
        }`}
        animate={{
          width: showText ? (responsive ? 212 : 312) : 150,
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="h-[calc(100vh-65px)] flex flex-col justify-between">
          <div className="clss">
            <div className="flex items-center gap-10">
              <Link href="/">
                <Image
                  src={showText ? logo : logo_icon}
                  alt="logo"
                  className="flex-shrink-0"
                />
              </Link>
              <button type={"button"} onClick={onClickHandler}>
                <span className="material-symbols-outlined">menu_open</span>
              </button>
            </div>
            <div className="mt-[60px]">
              <ul>
                <li
                  className="pb-3"
                >
                  <Link
                    href="/"
                    className={`flex items-center gap-2 p-3 ${
                      showText ? "" : "justify-center"
                    } ${pathname === "/" ? "side-bar-active" : ""}`}
                    onClick={() => setOpenSidBar(false)}
                  >
                    <span className="material-symbols-outlined">cottage</span>
                    <span
                      className={`text-[var(--color-gray-4)] font-semibold text-[16px] leading-[130%]`}
                    >
                      {showText ? "Home" : ""}
                    </span>
                  </Link>
                </li>
                <li
                  className="pb-3"
                >
                  <Link
                    href="/quejas"
                    className={`flex items-center gap-2 p-3 ${
                      showText ? "" : "justify-center"
                    } ${pathname === "/quejas" ? "side-bar-active" : ""}`}
                    onClick={() => setOpenSidBar(false)}
                  >
                    <span className="material-symbols-outlined">
                      add_circle
                    </span>
                    <span
                      className={`text-[var(--color-gray-4)] font-semibold text-[16px] leading-[130%]`}
                    >
                      {showText ? "Quejas" : ""}
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-center justify-center gap-1 mt-10">
            <span className="material-symbols-outlined dark:text-white">
              light_mode
            </span>

            <Switch
              checked={enabled}
              onChange={handleClick}
              className={`${
                theme === "light" ? "border-[#1C1B1F]" : "border-[#fff]"
              } relative inline-flex h-[20px] w-[40px] shrink-0 cursor-pointer rounded-full border-2 border-[#1C1B1F] transition-colors duration-200 ease-in-out`}
            >
              <span className="sr-only">Use Setting</span>
              <span
                aria-hidden="true"
                className={`${
                  theme !== "light"
                    ? "translate-x-[20px] bg-[#fff]"
                    : "translate-x-0 bg-[#1C1B1F]"
                } pointer-events-none inline-block h-[16px] w-[16px] transform rounded-full  shadow-lg transition duration-200 ease-in-out`}
              ></span>
            </Switch>
            <span className="material-symbols-outlined dark:text-white">
              dark_mode
            </span>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default SideBar;