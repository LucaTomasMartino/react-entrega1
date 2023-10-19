import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const ErrorPage = () => {
  const navigate = useNavigate();
  useEffect(()=>{
  setTimeout(()=>{
    navigate ("/")
  }, 3500)
  }, [navigate])
  return (
    <div>
        <h1>ErrorPage
        </h1>
        <p className="p-error">Redirigiendo a la pagina de Inicio...</p>
    </div>
  )
}

export default ErrorPage