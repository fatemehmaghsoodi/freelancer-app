import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import useLocalStorage from "../hook/useLocalStorage";

const DarkModeContext= createContext()

export function DarkModeProvider({children}){
    const [isDarkMode, setIsDarkMode]= useLocalStorage("isDarkMode", 
    window.matchMedia('(prefers-color-scheme: dark)').matches
    )

    const toggleDarkMode =()=> setIsDarkMode(prev=>!prev)

    useEffect(()=>{
        if(isDarkMode){
            document.documentElement.classList.add("dark-mode")
            document.documentElement.classList.remove("light-mode")
        }else{
            document.documentElement.classList.add("light-mode")
            document.documentElement.classList.remove("dark-mode")
        }
    },[isDarkMode])

    return <DarkModeContext.Provider value={{isDarkMode, toggleDarkMode}}> 
        {children}
    </DarkModeContext.Provider>
}

export function useDarkModeContext(){
    const context= useContext(DarkModeContext)
    if(context == undefined) throw new Error("DarkMode was used outside of DarkModeProvider")
    return context
}