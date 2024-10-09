import { Link } from "react-scroll";
// import Moon from '../assets/img/moon.png';
import DarkMode from "../Layouts/DarkMode";

const Navebare = () => {
  return (
    <div className="w-full bg-tertiary px-5 lg:px-24 shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4 fixed z-20">
      <div className="flex flex-row justify-between">
         <div className="flex items-center">
            <Link to="home" className="text-secondary text-2xl font-bold cursor-pointer tracking-[0.5px] leading-tight">BurgerBurst.</Link>
         </div>
         
         <div className="hidden lg:flex flex-row  gap-8 justify-center items-center">
            <Link to="menu" spy={true} smooth={true} duration={500} className="text-secondary leading-tight text-lg font-bold hover:text-primary transform transition-transform duration-300 ease-in-out cursor-pointer">Menu</Link>
            <Link to="deals" spy={true} smooth={true} duration={500} className="text-secondary leading-tight text-lg font-bold hover:text-primary transform transition-transform duration-300 ease-in-out cursor-pointer">Hot Deals</Link>
            <Link to="spicial" spy={true} smooth={true} duration={500} className="text-secondary leading-tight text-lg font-bold hover:text-primary transform transition-transform duration-300 ease-in-out cursor-pointer">Special</Link>
            <Link to="review" spy={true} smooth={true} duration={500} className="text-secondary leading-tight text-lg font-bold hover:text-primary transform transition-transform duration-300 ease-in-out cursor-pointer">Review</Link>
         </div>
         <div className="flex flex-row gap-5 justify-center items-center">
            {/* <img src={Moon} className="w-6 h-6 cursor-pointer"  alt="Image" /> */}
            {/* <Button className={"bg-secondary"} title={"Order Now"} /> */}
            <div className="flex items-center">
               <DarkMode />
            </div>
            <button className="text-white bg-secondary font-bold border-none  px-4 py-2 rounded-md hover:scale-105 transition-transform duration-300 ease-in-out ">Order Now</button>
         </div>
      </div>
    </div>
  )
}

export default Navebare
