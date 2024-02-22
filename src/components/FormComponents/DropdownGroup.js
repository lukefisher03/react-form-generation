import "./DropdownGroup.css";
import { createRef, useRef, useState } from "react";

export const DropdownGroup = ({ d }) => {
    const elements = [];

    // for now sanitization / validation will run in the actual component, later it will be centralized and run only ONCE
    sanitizeDropdownGroup(d); // currently this runs every time the state of this element is reloaded

    const [openClose, setOpenClose] = useState(d.items.map(() => "none"));
    const [dropdownTitles, setTitles] = useState(d.items.map((i) => i.default));

    const showOptions = (index, e) => {
        if (e) {
            e.preventDefault(); // don't reload the page when the button is clicked
        }

        const newList = openClose.map((v, i) => {
            // toggle dropdown
            if (index == i) {
                return v == "none" ? "block" : "none";
            } else {
                return "none";
            }
        });
        setOpenClose(newList);
    };

    const setTitle = (title, index) => {
        const newList = dropdownTitles.map((v, i) => {
            if (index == i) {
                return title;
            }

            return v;
        });

        showOptions(index);

        /* 
        setting state arrays should never be done by mutation. 
        Create a new array, make changes and then override the previous state with the new array. 
        */

        setTitles(newList);
    };

    d.items.forEach((item, index) => {
        elements.push(
            <div className="dropdown-item-container" key={item.name}>
                <label htmlFor="">{item.label}</label>
                <button
                    className="dropdown-btn"
                    onClick={(e) => showOptions(index, e)}
                >
                    {dropdownTitles[index]}
                    <span className="down-arrow"></span>
                </button>
                <div
                    className="dropdown-options-container"
                    style={{ display: openClose[index] }}
                >
                    {item.options.map((e, i) => (
                        <a onClick={() => setTitle(e, index)} key={i}>
                            {e}
                        </a>
                    ))}
                </div>
            </div>
        );
    });

    return <div className="dropdown-container">{elements}</div>;
};

export const validateDropdownGroup = (g) => { /* TODO */};

export const sanitizeDropdownGroup = (g) => {
    g.items.forEach((item) => {
        if (!("default" in item)) {
            item.default = "Select one";
        }
    });
};
