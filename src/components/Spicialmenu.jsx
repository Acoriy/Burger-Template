import SpecialCard from "../Layouts/SpecialCard";
import Img1 from '../assets/img/menu2.jpg'; 
import Img2 from '../assets/img/menu3.jpg'; 
import Img3 from '../assets/img/menu4.jpg'; 

const Spicialmenu = () => {
  return (
    <div className="min-h-screen bg-backgroundColor px-5 lg:px-24 flex-col items-center pt-32 dark:bg-slate-900 dark:text-secondary">
      <div className="pt-0 lg:pt-10 ">
        <h1 className="text-center text-secondary text-4xl font-bold pb-10">
          Special Menu
        </h1>
        <div className="flex flex-col lg:flex-row gap-5 items-center justify-center">
            <SpecialCard title={"Delight Burger"} img={Img1} price={"$10.00"}/>
            <SpecialCard title={"Jamboree Burger"} img={Img2} price={"$12.00"}/>
            <SpecialCard title={"Serenade Burger"} img={Img3} price={"$10.00"}/>
        </div>
      </div>
    </div>
  );
};

export default Spicialmenu;
