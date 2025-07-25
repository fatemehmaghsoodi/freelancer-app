import {HiOutlineX} from "react-icons/hi"
import useOutsideClick from "../hook/useOutsideClick";
function Modal({isOpen, onClose, children, title}) {
    const ref = useOutsideClick(onClose)
   
    return isOpen &&
    <div className="fixed inset-0 z-10 w-full backdrop-blur-md bg-black/70 min-h-screen">
        <div ref={ref} className="shadow-md shadow-transparent rounded-md overflow-y-auto fixed lg:w-4/12 w-6/12 bg-primary-900 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-full">
            <div className="p-4">
                <div className="flex justify-between items-center border-b border-secondary-900 pb-3" >
                    <h2>{title}</h2>
                    <button onClick={onClose}>
                        <HiOutlineX className="text-secondary-900" />
                    </button>
                </div>
                {children}
            </div>
        </div>
    </div>
}

export default Modal