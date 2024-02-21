import "./Form.css"
import { useState } from "react"
import { SelectBoxGroup } from "./FormComponents/SelectBoxGroup"
import { TextboxGroup } from "./FormComponents/Textbox"
import { DropdownGroup } from "./FormComponents/DropdownGroup"

export const selectBoxGroupData = {
    groupName: "group1",
    type: "checkbox",
    items: [
        {
            id: "red",
            labelText: "I have read"
        },
        {
            id: "blue",
            labelText: "I accept any"
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
                    {/* <TextboxGroup t={textboxGroup}/> */}
                    {/* <SelectBoxGroup b={selectBoxGroupData}/> */}
                    <DropdownGroup/>
                </form>
                    <button id="next-btn" className="solid-btn">NEXT</button>
        </>
    )
}
