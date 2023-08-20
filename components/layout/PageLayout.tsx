"use client";



import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Footer from '@/components/footer/Footer';
import NavBar from '@/components/navBar/NavBar';
import SideBar from '@/components/sideBar/SideBar';
import Preloader from "../preloader/Preloader";


type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showText, setShowText] = useState(true);
  const [openSidBar, setOpenSidBar] = useState(false);

  const responsive = useMediaQuery({
    query: "(max-width: 1200px)",
  });

  const pathname = usePathname();

  const clss = pathname === "/profile" ? "" : "mx-2 sm:mx-6";

  return (
    <>
      
      <Preloader />

      <div className="flex items-start">
        {/* Side Bar */}
        <SideBar
          showText={showText}
          setShowText={setShowText}
          openSidBar={openSidBar}
          setOpenSidBar={setOpenSidBar}
        />

        <div
          className={`w-full flex-1 pl-0 ${
            showText
              ? responsive
                ? "lg:pl-[212px]"
                : "lg:pl-[312px]"
              : "lg:pl-[150px]"
          } transition-all duration-500 ease-in-out`}
        >
          {/* Nav Bar */}
          <NavBar
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            openSidBar={openSidBar}
            setOpenSidBar={setOpenSidBar}
          />

          <section
            className={`flex flex-col xl:flex-row gap-5 ${clss} mt-5 sm:mt-10`}
          >
           {children}
            
          </section>

          {/* Footer section */}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
