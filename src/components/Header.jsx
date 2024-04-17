import {useState , useEffect } from "react";
import logo from "../assets/logo.jpg";
import "../index.css";

export default function Header(){
  const [theme , setTheme] =useState("light"); //by default theme light h 
  
  useEffect(()=>{
        document.documentElement.removeAttribute("class");
        document.documentElement.classList.add(theme); // yha pr hum us classs ko add kr rhe h with the theme 
       },[theme])    //  in the theme state variable 
  




  return (
    <header>    <div className="logo">
      <img src={logo}alt="Taskmate logo" />
      <span>Taskmate Logo</span>
    </div>


    <div className="themeSelector">
      <span onClick={() => setTheme("light")}    className={theme === "light" ? "light activeTheme" : "light"}></span>
      <span onClick={() => setTheme("medium")}   className = {theme === "medium" ? "medium activeTheme" : "medium"}></span>
      <span onClick={() => setTheme("dark")}     className = {theme === "dark" ? "dark activeTheme" : "dark"}></span>
      <span onClick={() => setTheme("gOne")}     className={theme === "gOne" ? "gOne activeTheme" : "gOne"}></span>
      <span onClick={() => setTheme("gTwo")}     className ={theme === "gTwo" ? "gTwo activeTheme" : "gTwo"}></span>
      <span  onClick={() => setTheme("gThree")}    className={theme === "gThree" ? "gThree activeTheme" : "gThree"}></span>
    </div>

    </header>
  )
}

