import { Button } from "../Button";
import InputInterface from "../../Interface/InputInterface";

const Input = ({ placeholder, value, customClass, type }: InputInterface) => {
  return (
    <div
      className={` flex flex-row justify-between bg-[#f1f1f1ad] w-full max-w-[400px] text-[14px] font-poppins leading-[20px]  px-[15px] py-2 rounded-[48px] ${customClass}`}
    >
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        className="border-none outline-none bg-transparent focus:text-dark w-full mobile:max-w-[150px]"
      />
      <Button
        name="Get Started"
        customClass="w-full max-w-[130px] mobile:max-w-[120px]"
      />
    </div>
  );
};

export default Input;
