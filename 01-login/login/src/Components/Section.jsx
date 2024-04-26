const Section = ({subtitle, text}) => {
    return(
        <>
            <hr className="border" />
            <h2 className="subtitle , margin-t-b">{subtitle}</h2>
            <p className="texts , margin-bot">{text}</p>
        </>
    )
}

export default Section