import { useEffect, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";

const Preloader = (): any => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showLoader) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [showLoader]);
  
  return (
    showLoader && (
      <div className="h-screen w-screen flex items-center justify-center fixed z-[999] bg-white dark:!bg-[var(--color-gray-8)]">
        <InfinitySpin 
        width='200'
        color="gold"
        />
      </div>
    )
  );
};



export default Preloader;
