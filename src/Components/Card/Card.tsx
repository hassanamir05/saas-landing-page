import CardInterface from "../../Interface/CardInterface";

const Card = ({
  imgSrc,
  title,
  description,
  customClass,
  text1color = "dark",
  text2color = "light",
}: CardInterface) => {
  return (
    <div
      className={`flex flex-col justify-center items-center gap-y-[20px] max-w-[336px] px-[30px] mobile:px-[5px] w-full pt-3 mt-10 ${customClass}`}
    >
      <div className="h-[120px] w-[120px] midDevice:w-[72px] midDevice:h-[72px] rounded-[50%] bg-[#EEEEEE] flex justify-center items-center">
        <img
          src={imgSrc}
          alt="image"
          className="h-[50px] w-[50px] midDevice:w-[33px] midDevice:h-[33px]"
        />
      </div>
      <p
        className={`font-ibm font-bold text-[20px] text-[${text1color}] w-fulltext-center`}
      >
        {title}
      </p>
      <p
        className={`font-poppins font-light text-[15px] text-[${text2color}] w-full text-center `}
      >
        {description}
      </p>
    </div>
  );
};

export default Card;
