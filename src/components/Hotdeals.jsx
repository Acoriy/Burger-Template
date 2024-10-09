import Button from "../Layouts/Button";
import Deals from "../assets/img/deals.jpg";

const Hotdeals = () => {
  return (
    <div className="min-h-screen px-5 lg:px-24 flex flex-col justify-center  bg-backgroundColor dark:bg-slate-900 text-white">
      <h1 className="text-center text-4xl font-bold text-secondary pb-8 pt-24">
        Hot Deals
      </h1>
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex  flex-row w-full  lg:w-2/4">
          <img src={Deals} alt="Image" className="rounded-md" />
        </div>

        <div className="flex flex-col  text-center md:text-start w-full lg:w-2/4 sapce-y-4 gap-5">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mx-5 lg:mx-0">
            Exclusive Special Combo!
          </h1>
          <h2 className="text-3xl md:text-4xl  font-bold text-secondary">
            Elevate Your Meal with Our Special Bundle
          </h2>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dolorum
            obcaecati nostrum quam, qui expedita quaerat veritatis
            necessitatibus quidem. Possimus incidunt natus eaque repudiandae
            ratione illum ducimus atque eveniet assumenda!
          </p>
          <Button title={"Vist Now"} />
        </div>
      </div>
    </div>
  );
};

export default Hotdeals;
