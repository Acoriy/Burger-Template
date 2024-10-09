import { useEffect, useState } from "react"
import darkPng from "../assets/img/moon.png";
import lightPng from "../assets/img/sun.png";

const DarkMode = () => {
    const [theme , setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );

    const element = document.documentElement;

    useEffect(()=>{
        if(theme === "dark"){
            element.classList.add("dark");
            localStorage.setItem("theme" , "dark");
        } else{
            element.classList.remove("dark");
            localStorage.setItem("theme" , "light");
        }
    } , [theme]);

    const changeIteme = ()=>{
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }
    
  return (
    <div>
       <img src={theme === "light" ? darkPng : lightPng} alt="img" onClick={changeIteme} 
        className="w-6 cursor-pointer "/>
    </div>
  )
}

export default DarkMode
