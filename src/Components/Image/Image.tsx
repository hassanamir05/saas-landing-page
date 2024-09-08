import ImageInterface from "../../Interface/ImageInterface";

const Image = ({ imgSrc, customClass }: ImageInterface) => {
  return <img src={imgSrc} className={`mobile:h-[24px] ${customClass}`} />;
};

export default Image;
