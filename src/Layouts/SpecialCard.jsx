import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import Button from "./Button";

// eslint-disable-next-line react/prop-types
const SpecialCard = ({ title, img, price }) => {
  return (
    <div className="bg-tertiary w-full lg:w-2/6 rounded-md flex flex-col items-center gap-3 pb-5 cursor-pointer shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <img src={img} alt="Image" className=" rounded-lg" />
      <div className="flex flex-col gap-4 pt-3">
        <h3 className="text-2xl font-bold text-primary">{title}</h3>
        <div className="flex flex-row text-secondary justify-center">
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarHalf />
        </div>
        <div className="flex flex-row items-center gap-4">
          <h3 className="text-secondary text-2xl font-bold">{price}</h3>
          <Button title={"Bury Now"} />
        </div>
      </div>
    </div>
  );
};

export default SpecialCard;
