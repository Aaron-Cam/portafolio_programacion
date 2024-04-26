import { Link } from "react-router-dom"
import Input from "../Components/Input"
import useDarkMode from "../Logic/Darkmode"
import { useState } from "react";


import "../css/estilos-globales.css"
import "../css/estilos-especificos.css"
import "../css/responsive.css"

const Singup = () => {

    /* Dark mode */
    const [dark, darkmode] = useDarkMode();

    /* Check Password */
    const [specialCharacters, setSpecialCharacters] = useState(false);
    const [numbers, setNumbers] = useState(false);
    const [length, setLength] = useState(false);
    const [liCase, setliCase] = useState(false);
    const [isValid, setIsValid] = useState(false);

    const [isChecked, setIsChecked] = useState(false);

    /* Show / hide password */
    const [showPassword, setShowPassword] = useState(false);

    const checkBox = (e) =>{
        setIsChecked(e.target.checked);
    }

    const checkPassword = (e) => {
        const password = e.target.value;

        const speCharacters = /[!@#$%^&*(),.?":{}|<>]/;
        const numb = /[0-9]/;
        const len = /^.{6,}$/;
        const upper = /[A-Z]/;
        const lower = /[a-z]/;

        const upperCase = upper.test(password);
        const lowerCase = lower.test(password);

        setSpecialCharacters(speCharacters.test(password));
        setNumbers(numb.test(password));
        setLength(len.test(password));
        setliCase(lowerCase && upperCase);

        setIsValid(speCharacters.test(password) && numb.test(password) && len.test(password) && (lowerCase && upperCase));
    

        console.log(isValid)
    }

    const showHidePassword = () =>{
        if(showPassword){
            setShowPassword(false)
        } else {
            setShowPassword(true)
        }
    }

    const sendFomr = (e) =>{
        if(!isValid){
            e.preventDefault()
            console.log("Estoy previniendo el envío del formulario")
        } else {
            console.log("Estoy enviando el formulario")
        }
    }

    return(
        <div className={`contenedor-vh , flex-col ${dark ? "dark-background" : "light-background"}`}>
            <div className={`card-singup ${dark ? "dark , shadow-dark" : "light , shadow-light"}`}>
            {/* Botón oscuro / claro */}
                <div className="d-l-btn">
                    <button className={`margin ${dark ? "btn-ld-dark" : "btn-ld-light"}`} onClick={darkmode}>
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
                <h1 className="title">Blue Studios</h1>
                <p className="texts , bold">Study specialized in water simulation</p>
                {/* Formulario */}
                <form className="form">
                    <Input
                        type={"text"}
                        text={"* Name"}
                        id={"name"}
                        placeholder={"E.g. Aaron Camacho "}
                        classNameInput={`input ${dark ? 'dark' : 'light'}`}
                    />
                    <Input
                        type={"email"}
                        text={"* Email"}
                        id={"email"}
                        placeholder={"E.g aaroncamacho@example.com"}
                        classNameInput={`input ${dark ? 'dark' : 'light'}`}
                    />
                    {/* Label e Input en formato HTML para el correcto funcionamiento
                    del evento 'onChange'. */}
                    <label className="label" htmlFor="password">* Password</label>
                    <input 
                        onChange={checkPassword} 
                        className={`input ${dark ? "dark" : "light"}`} 
                        id="password" 
                        placeholder="Enter a password" 
                        maxLength="15"
                        type={showPassword ? "text" : "password"}>
                    </input>
                    {/* Botón para mostrar / ocultar contraseña */}
                    <button 
                        onClick={showHidePassword}
                        className={`btn-show ${dark ? "dark" : "light"}`}
                        type="button"
                    >
                        <div title="Show/Hide password">
                            <svg className={showPassword ? "hide" : ""}
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
                                    fill="currentColor"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12 3C17.5915 3 22.2898 6.82432 23.6219 12C22.2898 17.1757 17.5915 21 12 21C6.40848 21 1.71018 17.1757 0.378052 12C1.71018 6.82432 6.40848 3 12 3ZM12 19C7.52443 19 3.73132 16.0581 2.45723 12C3.73132 7.94186 7.52443 5 12 5C16.4756 5 20.2687 7.94186 21.5428 12C20.2687 16.0581 16.4756 19 12 19Z"
                                    fill="currentColor"
                                />
                            </svg>
                            <svg className={`eye-alt ${showPassword ? "" : "hide"}`}
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
                                    fill="currentColor"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12 3C6.40848 3 1.71018 6.82432 0.378052 12C1.71018 17.1757 6.40848 21 12 21C17.5915 21 22.2898 17.1757 23.6219 12C22.2898 6.82432 17.5915 3 12 3ZM16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>
                    </button>
                    {/* Comprobar contraseña */}
                    <ul className="lists , ghost-texts , size-m">
                        <li className={liCase ? "blue" : "gray"}>Contains uppercase and lowercase characters</li>
                        <li className={specialCharacters ? "blue" : "gray"}>Contains special characters</li>
                        <li className={length ? "blue" : "gray"}>At least 6 characters</li>
                        <li className={numbers ? "blue" : "gray"}>Contains numbers</li>
                    </ul>
                    {/* Términos y privacidad */}
                    <div className="margin-top">
                        <input onChange={checkBox} checked={isChecked} className="margin-right" type="checkbox"></input>
                        <label className="texts">By creating an account, you agree to our <Link className="links" to="/terms" target="_blank">Terms of Service</Link> and <Link className="links" to="/privacy" target="_blank">Privacy Policy</Link>.</label>
                    </div>
                </form>
                {/* Botón para crear cuenta */}
                <button 
                    onClick={sendFomr}
                    className={`button-primary ${isValid ? "" : "disable"}`} 
                    type="submit"
                >
                    Create account
                </button>
                <div className="flex-row , aling-items-center , margin-top">
                    <hr className="border-s"></hr>
                    <span className="texts , bold , margin-l-r">Or</span>
                    <hr className="border-s"></hr>
                </div>
                <button className="btn-google , margin-bot">
                    <img className="google-icon" src="../src/assets/Google-Icon.png"/>
                    <span className="ghost-texts">Sing In with Google</span>
                </button>
                <span className="ghost-texts">Already have an acount? <Link to="/" className="links">Sing in</Link></span>
            </div>
        </div>
    )
}

export default Singup