import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between gap-2 px-2 sm:px-6 m-[34px_0_12px] sm:m-[24px_0_24px]">
      <p className="text-[var(--color-gray-5)] dark:text-white">
        Copyright © 2023 SDE💚Despierta, All rights Reserved
      </p>
      <p className="text-[var(--color-gray-5)] dark:text-white">
        Design & Developed by{" Euripide Carpio "}
        <Link href="/" className="text-[var(--color-primary-dark)]">
          {" "}
          Ivans Development Team
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
