import { useEffect, useState } from "react";
import { Hearts} from "react-loader-spinner";

const Preloader = (): any => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    showLoader && (
      <div className="h-screen w-screen flex items-center justify-center relative z-[999] bg-white dark:!bg-[var(--color-gray-8)]">
        <Hearts 
          height="80"
          width="80"
          color="#008000"
          ariaLabel="hearts-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    )
  );
};



export default Preloader;
