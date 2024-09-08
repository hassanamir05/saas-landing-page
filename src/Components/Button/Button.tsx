interface ButtonProps {
  name: string;
  customClass?: string;
  onClick?: () => void;
}

const Button = ({ name, customClass, onClick }: ButtonProps) => {
  return (
    <button
      className={` bg-primary text-white font-poppins text-[14px] h-[40px] px-4 rounded-[40px]  hover:cursor-pointer  ${customClass}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
