import Menu from "../assets/img/menu1.png";

// eslint-disable-next-line react/prop-types
const MenuCard = ({ id , price, title }) => {
  return (
    <div className="group relative space-y-2 p-4 bg-white flex-grow rounded-md shadow-[0_3px_8px_rgb(0,0,0,0.24)] cursor-pointer hover:bg-primary duration-300 ease-in-out"
     key={id}>
      <img src={Menu} alt="Image" className="absolute w-40 -right-6 sm:-right-14 bottom-0 mr-2 group-hover:-translate-y-8 duration-300 ease-in-out"/>
      
        <h2 className="text-2xl text-primary font-bold group-hover:text-black">{title}</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi,
          laborum!
        </p>
        <strong className="text-2xl text-secondary">{price}</strong>

      {/* <div className="flex justify-end">
        <img src={Menu} alt="Image" className="w-1/2 z-3 " />
      </div> */}
    </div>
  );
};

export default MenuCard;
