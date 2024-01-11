import "./preloader.css";
import Logo from "../../assets/icons/africa.png";

function CustomPreloader() {
  return (
    <>
      <div className="w-full h-screen bg-lemonyellow bg-opacity-20 flex items-center justify-center">
        <div className="w-[200px] h-[80px] md:h-[100px] flex flex-col lg:justify-between lg:gap-2 ">
          <div className="w-[200px] h-auto flex justify-center pb-3  ">
            <img src={Logo} alt="logo" className="lg:w-[40%] w-[30%] " />
          </div>
          <div className="relative">
            <span className="loader"></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomPreloader;
