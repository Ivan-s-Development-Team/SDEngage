"use client";


import '@/styles/globals.css'
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Footer from '@/components/footer/Footer';
import NavBar from '@/components/ui/navBar';


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
      
        <div>
          {/* Nav Bar */}
          <NavBar/>

          <section
            className={`flex flex-col xl:flex-row gap-5 ${clss} mt-5 sm:mt-10`}
          >
            {children}
          </section>

          {/* Footer section */}
          <Footer />
        </div>
    </>
  );
};

export default Layout;
