import Input from "../Components/Input"

import "../css/estilos-globales.css"
import "../css/estilos-especificos.css"
import "../css/responsive.css"

const RecoverPassword = () => {
    return(
        <div className="contenedor-vh , dark">
            <div className="width-RecoPass">
                <h1 className="title , center , margin-top">Forgot your password?</h1>
                <p className="texts , center , bold , margin t-b">No problem! Just fill in the email below and we`ll send you a password reset instructions!</p>
                <form className="form">
                <Input
                        type={"email"}
                        text={"* Enter your email"}
                        id={"email"}
                        placeholder={"E.g. Aaron Camacho "}
                        classNameInput={"input , dark"}
                    />
                    <input className="button-secondary , aling-self-center , margin" type="submit"></input>
                </form>
            </div>
        </div>
    )
}

export default RecoverPassword