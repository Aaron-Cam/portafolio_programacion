import "../css/estilos-globales.css"

const Input = ({type, text, id, classNameInput, placeholder}) => {
    return(
    <>
        <label htmlFor={id} className="label">{text}</label>
        <input type={type} id={id} className={classNameInput} placeholder={placeholder}></input>
    </>
    )
}

export default Input