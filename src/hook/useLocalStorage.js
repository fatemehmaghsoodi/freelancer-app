import { useEffect } from "react";
import { useState } from "react";

export default function  useLocalStorage(key, initialState) {
    const [value, setValue]= useState(()=>{
        const storeValue= localStorage.getItem(key)
        return storeValue? JSON.parse(storeValue) : initialState
    })

    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(value))
    },[value,key])

    return [value, setValue]
}