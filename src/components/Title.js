import "./Title.css"

export const Title = ({titleText, descriptionText}) => {
    return (
        <div id="title-container">
            <div id="title-typography">
                <h1>{titleText}</h1>
                <p>{descriptionText}</p>
            </div>
            <button id="back-btn" className="underlined-btn">Back</button>
        </div>
    )
}