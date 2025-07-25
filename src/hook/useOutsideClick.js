import { useEffect } from "react";
import { useRef } from "react";

function useOutsideClick(onClose, listenCapturing= true){
    const ref= useRef()

    useEffect(()=>{
        function handleOutSideClick(e){
            if(ref.current && !ref.current.contains(e.target)){
                 onClose()
             }
         }
         window.addEventListener('click', handleOutSideClick, listenCapturing)
         return ()=>window.removeEventListener('click', handleOutSideClick,listenCapturing)
    },[onClose, listenCapturing]);
    return ref
}

export default useOutsideClick