import MenuCard from "../Layouts/MenuCard";

const Menu = () => {
  const menuData = [
    { id: 1, title: "Tango Burger", price: "$29" },
    { id: 2, title: "Punch Burger", price: "$25" },
    { id: 1, title: "Crunch Burger", price: "$20" },
    { id: 1, title: "Carnival Burger", price: "$42" },
    { id: 1, title: "Twist Burger", price: "$40" },
    { id: 1, title: "Burst Burger", price: "$45" },
  ];

  return (
    <div className="bg-tertiary">
      <div className="min-h-screen flex items-center justify-center flex-col px-5 lg:px-24 gap-8 pb-5 lg:pb-0 py-4">
        <h1 className="text-center text-secondary text-4xl font-bold tracking-[1.5px]">
          Explore Menu
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5">
          {menuData.map((item) => {
            return (
              <MenuCard key={item.id} title={item.title} price={item.price} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
