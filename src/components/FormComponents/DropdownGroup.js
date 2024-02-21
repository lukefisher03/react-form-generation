import "./DropdownGroup.css"

export const DropdownGroup = ({d}) => {
    return (
        <div className="dropdown-container">
            <label htmlFor="select-group">My Label</label>
            <select id="select-group">
                <option>option1</option>
                <option>option2</option>
                <option>option3</option>
            </select>
        </div>
    )
}