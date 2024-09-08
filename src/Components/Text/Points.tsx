import CheckLogo from "../../assets/Images/check.png";
import TextInterface from "../../Interface/TextInterface";

const Points = ({ content, customClass }: TextInterface) => {
  return (
    <span className="flex flex-row w-full max-w-[400px]">
      <img
        src={CheckLogo}
        alt="check logo"
        className="mx-1 mt-[3px] mobile:mt-[6px] max-h-[16px] max-w-[16px]"
      />
      <p className={`text-[16px] mobile:text-[13px] w-full ${customClass}`}>
        {content}
      </p>
    </span>
  );
};

export default Points;
