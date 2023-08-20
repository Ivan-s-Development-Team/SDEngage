
import UploadFile from "./UploadFile";

const CreateQuejaMain = () => {
  return (    
    <div className="w-full flex flex-wrap sm:flex-nowrap gap-8 sm:gap-3 xl:gap-6">
      <div className="w-full">
        {/* Upload File */}
        <UploadFile />
      </div>
      
    </div>
  );
};

export default CreateQuejaMain;
