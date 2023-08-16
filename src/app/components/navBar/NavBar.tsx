import Image from "next/image";
import Link from "next/link";
import logo_icon from "/public/images/logo_icon.png";

type NavbarProps = {
  openSidBar: boolean;
  isOpen?: boolean;
  setIsOpen: (a: boolean) => void;
  setOpenSidBar: (a: boolean) => void;
};

const NavBar = ({
  isOpen,
  setIsOpen,
  setOpenSidBar,
  openSidBar,
}: NavbarProps) => {
  return (
    <nav className="sticky top-0 left-0 z-50 px-2 lg:px-10 shadow-[0px_1px_2px_rgba(0,0,0,0.2)] py-3 md:py-[19px] bg-white dark:bg-[var(--color-gray-7)]">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="flex lg:hidden items-center gap-4">
            <Link href="'/">
              <Image src={logo_icon} alt="logo" />
            </Link>
            <button type={"button"} onClick={() => setOpenSidBar(!openSidBar)}>
              <span className="material-symbols-outlined">menu_open</span>
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4 md:gap-8">
            <div className="flex flex-col">
              <h6 className="text-base font-bold">Wade Warren</h6>
            </div>
          <div className="flex items-center gap-3 md:gap-6">
            <button
              type={"button"}
              className="flex items-center justify-center text-lg leading-[150%] text-[#F8FAFC] bg-[var(--color-primary)] px-3 py-2 rounded-lg"
            >
              Connect
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
