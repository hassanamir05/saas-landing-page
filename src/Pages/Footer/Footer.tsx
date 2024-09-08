import { Logo } from "../../assets/Images";

const Footer = () => {
  return (
    <div className="bg-[#000] w-full flex flex-row midDevice:flex-col justify-evenly  midDevice:justify-start  px-[40px] mobile:px-[20px]  py-[40px] mobile:py-[20px] mt-[20px]">
      <div className="flex flex-col midDevice:w-full">
        <span>
          <img src={Logo} alt="logo" className="h-[50px] w-[50px]" />
        </span>
        <div className="p-2 ">
          <span className="text-white text-[20px] mx-2">
            <i className="fa-brands fa-facebook"></i>
          </span>
          <span className="text-white text-[20px] mx-2">
            <i className="fa-brands fa-youtube"></i>
          </span>
          <span className="text-white text-[20px] mx-2">
            <i className="fa-brands fa-twitter"></i>
          </span>
        </div>
      </div>
      <div className=" flex flex-row flex-wrap gap-x-[20px] py-[20px] ">
        <div className="flex flex-col min-w-[150px] gap-y-2 text-[14px] font-poppins text-[#798597] mb-[20px]">
          <p className="font-bold text-white text-[18px] ">Products</p>
          <a href="">Product</a>
          <a href="">Customer Stories</a>
          <a href="">Prcing</a>
          <a href="">About</a>
          <a href="">Jobs</a>
          <a href="">Support</a>
        </div>
        <div className="flex flex-col min-w-[150px] gap-y-2 text-[14px] font-poppins text-[#798597]">
          <p className="font-bold text-white text-[18px] ">
            Planning Solutions
          </p>
          <a href="">Forcreative teams</a>
          <a href=""> For Developers</a>
          <a href="">For Product Teams</a>
          <a href="">For Marketing Teams</a>
          <a href="">Freelancers</a>
          <a href="">All Solutions</a>
        </div>
        <div className="flex flex-col min-w-[150px] gap-y-2 text-[14px] font-poppins text-[#798597] mb-[20px]">
          <p className="font-bold text-white text-[18px] ">Compart to..</p>
          <a href="">Monday</a>
          <a href="">Slack Stories</a>
          <a href="">Basecamp</a>
          <a href="">Asona</a>
          <a href="">Trello</a>
        </div>
        <div className="flex flex-col min-w-[150px] gap-y-2 text-[14px] font-poppins text-[#798597]">
          <p className="font-bold text-white text-[18px] ">Usefull Links</p>
          <a href="">Bog</a>
          <a href="">Press Kit </a>
          <a href="">Privacy Policy</a>
          <a href="">Terms of Use</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
