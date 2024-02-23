import "./Textbox.css";

export const TextboxGroup = ({ t }) => {
  const items = [];
  if (!("items" in t)) {
    return "Detected no items!";
  }
  t.items.forEach((element, index) => {
    if (element.type == "textarea") {
      items.push(
        <div
          className="text-input-item-container"
          style={{ flexDirection: "column", alignItems: "start" }}
          key={t.groupName + index}
        >
          <label htmlFor={element.name} style={{ marginLeft: 0 }}>
            {element.labelText}
          </label>
          <textarea
            type={element.type}
            placeholder={element.placeholder}
            id={element.name}
          ></textarea>
        </div>,
      );
    } else {
      items.push(
        <div className="text-input-item-container" key={t.groupName + index}>
          <label htmlFor={element.name}>{element.labelText}</label>
          <input
            type={element.type}
            placeholder={element.placeholder}
            id={element.name}
          ></input>
        </div>,
      );
    }
  });

  return (
    <>
      <div id="text-container">{items}</div>
    </>
  );
};
