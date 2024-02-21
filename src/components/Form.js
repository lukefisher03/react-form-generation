import "./Form.css"
import { useState } from "react"
import { RadioGroup } from "./FormComponents/RadioGroup"
import { TextboxGroup } from "./FormComponents/Textbox"

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

export const textboxGroup = {
    groupName:"TextBoxGroup1",
    items: [
        { 
            name:"question1",
            labelText: "This a test question",
            type: "textarea",
            placeholder: "testing placeholder"
        },
        { 
            name:"question2",
            labelText: "This a test question",
            type: "text",
            placeholder: "testing placeholder"
        },
        { 
            name:"question3",
            labelText: "This a test question",
            type: "text",
            placeholder: "testing placeholder"
        },
    ]
}

export const Form = () => {
    return (
        <>
                <form id="form-container">
                    <TextboxGroup t={textboxGroup}/>
                    {/* <RadioGroup r={radioGroupData}/> */}
                </form>
                    <button id="next-btn" className="solid-btn">NEXT</button>
        </>
    )
}
