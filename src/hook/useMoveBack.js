import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function useMoveBack(){
    const navigate = useNavigate()
    return () => navigate(-1)
}