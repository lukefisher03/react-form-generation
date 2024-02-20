import "./RadioGroup.css"

export const RadioGroup = ({ r }) => {
    const radioGroup = []
    let styles = {
        flexDirection:"row",
        alignItems: "space-evenly"
    }

    if (r.items.length > 2) {
        styles.flexDirection = "column"
        styles.alignItems = "start"
    }

    r.items.forEach((i) => {
        radioGroup.push(<div className="radio-input"><input type="radio" id={i.id} name={r.name} /><label htmlFor={i.id}>{i.labelText}</label></div>)

    })
    return (
        <section className="radio-section" style={styles}>
            {radioGroup}
        </section>
    )
}

export const validateRadioGroup = (r) => {
    try {
        if (!("name" in r)) {
            return "Radio group is missing "
        }
    } catch (e) {

    }

    return ""
}