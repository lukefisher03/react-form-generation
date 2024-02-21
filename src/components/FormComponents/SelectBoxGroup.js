import "./SelectBoxGroup.css"

export const requiredProperties = [
    "groupName",
    "type",
    "items"
]

export const SelectBoxGroup = ({ b }) => {
    const radioGroup = []

    const passedValidation = validateSelectBoxGroup(b)

    if (passedValidation.length > 0) {
        return <h3><pre>{passedValidation}</pre></h3>
    }
    let styles = {
        flexDirection:"row",
        alignItems: "space-evenly"
    }

    if (b.items.length > 2) {
        styles.flexDirection = "column"
        styles.alignItems = "start"
    }

    b.items.forEach((i) => {
        radioGroup.push(<div className="radio-input" key={i.id} ><input type={b.type} id={i.id} name={b.groupName} /><label htmlFor={i.id}>{i.labelText}</label></div>)

    })
    return (
        <section className="radio-section" style={styles}>
            {radioGroup}
        </section>
    )
}

export const validateSelectBoxGroup = (r) => {
    console.log("Running validation...")
    if ("groupName" in r) {
        if (typeof r.groupName != "string") {
            return "A SelectBoxGroup has a groupName attribute, but it was given something other than text! Please correct the error to continue"
        } 
        if (r.groupName == "" || r.groupName == undefined) {
            return "A SelectBoxGroup has a groupName attribute, but it is blank! Please correct the error to continue"
        }
    } else {
        return "A SelectBoxGroup has no groupName attribute! Please correct the error to continue."
    }
    
    const groupName = r.groupName

    let errorString = ""
    
    requiredProperties.forEach((e) => {
        if (e in r) {
            if (r[e] == "" || r[e] == undefined || r[e] == [] || r[e] == {}) {
                errorString += `A SelectBoxGroup named: ${groupName}, required attribute "${e}" is empty!\n`
            }
        } else {
            errorString += `A SelectBoxGroup named: ${groupName}, is missing a ${e} property!\n`
        }
    })

    return errorString
}