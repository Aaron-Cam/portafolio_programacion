import { Link } from "react-router-dom"

import "../css/estilos-globales.css"
import "../css/estilos-especificos.css"

const Error404 = () => {
    return(
        <div className="contenedor-vh , dark">
            <div className="width-404">
                <h1 className="title , center , margin-t-b">Error 404</h1>
                <hr className="border"></hr>
                <h2 className="texts , center , margin-t-b">Page not found</h2>
                <Link className="links , aling-self-center" to="/">Back to home</Link>
            </div>
        </div>
    )
}

export default Error404