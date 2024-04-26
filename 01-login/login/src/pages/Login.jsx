import { Link } from "react-router-dom"
import Input from "../Components/Input"
import useDarkMode from "../Logic/Darkmode"

import "../css/estilos-globales.css"
import "../css/estilos-especificos.css"
import "../css/responsive.css"

/* Dev branch */

const Login = () => {

    const [dark, darkmode] = useDarkMode();

    return(
        <div className={`contenedor-vh flex-col ${dark ? "dark-background" : "light-background"}`}>
            <div className={`card-container-login flex-row , ${dark ? 'shadow-dark' : 'shadow-light'}`}>
                <div className="card-img , flex-col , aling-items-center">
                    <h1>Blue Studios</h1>
                    <h4>Study specialized in water simulation</h4>
                </div>
                <div className={`card-login , flex-col ${dark ? "dark" : "light"}`}>
                    <img className="icon" src="../src/assets/icon.png"></img>
                    <div className="aling-self-flex-end">
                        <button onClick={darkmode} className={`margin-top , margin-right ${dark ? 'btn-ld-dark' : 'btn-ld-light'}`}>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12.2256 2.00253C9.59172 1.94346 6.93894 2.9189 4.92893 4.92891C1.02369 8.83415 1.02369 15.1658 4.92893 19.071C8.83418 22.9763 15.1658 22.9763 19.0711 19.071C21.0811 17.061 22.0565 14.4082 21.9975 11.7743C21.9796 10.9772 21.8669 10.1818 21.6595 9.40643C21.0933 9.9488 20.5078 10.4276 19.9163 10.8425C18.5649 11.7906 17.1826 12.4053 15.9301 12.6837C14.0241 13.1072 12.7156 12.7156 12 12C11.2844 11.2844 10.8928 9.97588 11.3163 8.0699C11.5947 6.81738 12.2094 5.43511 13.1575 4.08368C13.5724 3.49221 14.0512 2.90664 14.5935 2.34046C13.8182 2.13305 13.0228 2.02041 12.2256 2.00253ZM17.6569 17.6568C18.9081 16.4056 19.6582 14.8431 19.9072 13.2186C16.3611 15.2643 12.638 15.4664 10.5858 13.4142C8.53361 11.362 8.73568 7.63895 10.7814 4.09281C9.1569 4.34184 7.59434 5.09193 6.34315 6.34313C3.21895 9.46732 3.21895 14.5326 6.34315 17.6568C9.46734 20.781 14.5327 20.781 17.6569 17.6568Z"
                                fill="currentColor"
                            />
                            </svg>
                        </button>
                    </div>
                    <form className="form">
                        <Input
                            type={"text"}
                            text={"Name"}
                            id={"name"}
                            placeholder={"Enter Username or Email"}
                            classNameInput={`input ${dark ? 'dark' : 'light'}`}
                        />
                        <Input
                            type={"password"}
                            text={"Password"}
                            id={"password"}
                            placeholder={"Enter your pasword"}
                            classNameInput={`input ${dark ? 'dark' : 'light'}`}
                        />
                    </form>
                    <Link to="/recover-password" className="forgot">Forgot your Password?</Link>
                    <button className="button-primary" type="submit">Sing In</button>
                    <div className="flex-row , aling-items-center , aling-self-center , margin-top">
                        <hr className="border-s"/>
                        <span className="texts , bold , margin-l-r">Or</span>
                        <hr className="border-s"/>
                    </div>
                    <button className="btn-google">
                        <img className="google-icon" src="../src/assets/Google-Icon.png"/>
                        <span className="ghost-texts">Sing In with Google</span>
                    </button>
                    <div className="aling-self-center , margin-top">
                    <p className="ghost-texts">Not a member yet? <Link to="/singup" className="links">Sign Up here</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login