import { Link } from "react-router-dom"
import useDarkMode from "../Logic/Darkmode"
import privacyEN from "../JSON/privacyEN.json"
import privacyES from "../JSON/privacyES.json"
import useTerms from "../Logic/EsEnLanguage"
import Section from "../Components/Section"

import "../css/estilos-globales.css"
import "../css/estilos-especificos.css"
import "../css/responsive.css"

const Privacy = () => {

    const [dark, darkmode] = useDarkMode();

    const [language, changeLanguage] = useTerms()

    const terms = language === "en" ? privacyEN : privacyES;
    
    return(
        <div className={`contenedor ${dark ? 'dark' : 'light'}`}>
            <div className={`width-terms-privacy , margin-bot ${dark ? "dark" : "light"}`}>
                <div id="optionsTerms-Privacy" className="margin-top , aling-self-center , flex-row">
                    <button className="button-secondary" value="es" onClick={changeLanguage}>Español</button>
                    <div>
                        <button className={dark ? "btn-ld-dark" : "btn-ld-light"} onClick={darkmode}>
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
                    <button className="button-secondary" value="en" onClick={changeLanguage}>English</button>
                </div>
                <h1 className="title , center , margin-top">{terms[language].title}</h1>
                <span className="texts , bold , margin-bot">{terms[language].date}</span>
                <p className="texts , margin-bot">{terms[language].disclaimer}</p>
                <span className="texts , aling-self-center , margin-bot">{terms[language].terms}
                    <Link className="links" to="/terms" target="_blank">{language === "en" ? "Terms of service" : "Términos de servicio"}</Link>
                </span>
                <Section subtitle={terms[language].section1} text={terms[language].content1}></Section>
                <Section subtitle={terms[language].section2} text={terms[language].content2}></Section>
                <Section subtitle={terms[language].section3} text={terms[language].content3}></Section>
                <Section subtitle={terms[language].section4} text={terms[language].content4}></Section>
                <Section subtitle={terms[language].section5} text={terms[language].content5}></Section>
            </div>
        </div>
    )
}

export default Privacy