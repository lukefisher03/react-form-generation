import "./Form.css"
import { useState } from "react"
import { RadioGroup } from "./FormComponents/RadioGroup"


export const radioGroupData = {
    name: "visual-or-verbal",
    vertical: true,
    items: [
        {
            id: "red",
            labelText: "I pick red"
        },
        {
            id: "blue",
            labelText: "I pick blue"
        },
        {
            id:"green",
            labelText: "I pick green"
        },
        {
            id:"violet",
            labelText: "I pick violet"
        }
    ]
}

export const Form = () => {
    return (
        <>
            <div id="form-container">
                <form>
                    <RadioGroup r={radioGroupData} />
                </form>
                    <button>NEXT</button>
            </div>
        </>
    )
}
