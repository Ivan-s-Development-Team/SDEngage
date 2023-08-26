
import Preloader from "../preloader/Preloader";
import UploadFile from "./UploadFile";
import PageLayout from '@/components/layout/PageLayout';

const CreateQuejaMain = () => {
  return (    
    <PageLayout>
      <div className="w-full flex flex-wrap sm:flex-nowrap gap-8 sm:gap-3 xl:gap-6">
      <div className="w-full">
        {/* Upload File */}
        <UploadFile />
      </div>
      
    </div>
    </PageLayout>
    
  );
};

export default CreateQuejaMain;
