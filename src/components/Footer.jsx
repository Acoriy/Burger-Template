import { Link } from "react-scroll";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const FooterTeste = () => {
  return (
    <footer className="text-secondary bg-tertiary pt-8 md:pt-0 rounded-t-3xl ">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className="flex flex-col w-full md:w-1/4">
          <Link className="text-semibold text-2xl pb-4">BurgerBurst.</Link>
          <div className="flex flex-row gap-6">
            <FaInstagram size={35} className="cursor-pointer hover:text-primary transition-all duration-300 ease-in-out"/>
            <FaFacebook size={35} className="cursor-pointer hover:text-primary transition-all duration-300 ease-in-out"/>
            <FaLinkedin size={35} className="cursor-pointer hover:text-primary transition-all duration-300 ease-in-out"/>
          </div>
          <p className="mt-2">
            Indulge in a symphony of flavors, where each plate is a canvas for
            culinary excellence.
          </p>
        </div>

        <div className="flex flex-col">
          <h2 className="text-semibold text-2xl pb-4 pt-5 md:pt-0">Important Links</h2>
          <div className="flex flex-col gap-2">
            <Link
              to="menu"
              spy={true}
              smooth={true}
              duration={500}
              className="text-secondary text-md  hover:text-primary transform transition-transform duration-300 ease-in-out cursor-pointer"
            >
              Menu
            </Link>
            <Link
              to="deals"
              spy={true}
              smooth={true}
              duration={500}
              className="text-secondary text-md  hover:text-primary transform transition-transform duration-300 ease-in-out cursor-pointer"
            >
              Hot Deals
            </Link>
            <Link
              to="spicial"
              spy={true}
              smooth={true}
              duration={500}
              className="text-secondary text-md  hover:text-primary transform transition-transform duration-300 ease-in-out cursor-pointer"
            >
              Special Menu
            </Link>
          </div>
        </div>

        <div className="flex flex-col">
          <h2 className="text-semibold text-2xl pb-4 pt-5 md:pt-0">Contact Us</h2>
          <div className="flex flex-col gap-2">
            <p>BurgerBurst@email.com</p>
            <p>+64 958 248 966</p>
          </div>
        </div>
      </div>

      <div>
        <p className="text-center py-4">@copyright developed by <a href="https://sofyaneacoriy.netlify.app" target="_blank" className="font-semibold text-primary hover:underline"> Sofyane Acoriy</a>| All rights reserved </p>
      </div>
    </footer>
  );
};

export default FooterTeste;
