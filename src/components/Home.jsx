import  Button  from "../Layouts/Button";
import Hero from '../assets/img/hero.png';

const Home = () => {
  return (
    <div className="min-h-screen bg-backgroundColor px-5 lg:px-24 pt-24 lg:pt-32 flex flex-col lg:flex-row items-center dark:bg-slate-900 dark:text-white ">
      <div className="flex flex-col justify-center lg:text-start text-center lg:w-2/3 w-full">
        <h1 className="text-4xl lg:text-5xl font-bold mb-2">Dive into our</h1>
        <h1 className="text-5xl lg:text-7xl font-bold text-primary tracking-[1px] lg:tracking-[0px] mb-8">Cheesy Bluster!</h1>
        <p className="pb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          ab ullam pariatur dolorum odit fugiat deserunt quos vitae consequatur
          illum.
        </p>
        <Button title="Order Now"/>
      </div>

      <div className="lg:pb-16 ">
        <img src={Hero} alt="Image" className="w-full " />
      </div>
    </div>
  );
};

export default Home;
