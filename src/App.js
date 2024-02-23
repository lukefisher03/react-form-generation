import { useEffect, useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { Title } from "./components/Title";

export function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/form")
      .then((res) => {
        return res.text()
      }).then((d) => {
        console.log(d)
      }).catch((e) => {
        console.log("Error!")
        console.log(e)
      })
  }, []);
  return (
    <>
      <div id="content-container">
        <Title
          titleText="Testing 123"
          descriptionText="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim voluptatum aspernatur amet blanditiis repellendus excepturi quasi? Illo, laboriosam. Aut perspiciatis expedita, qui voluptatem dolore cum accusamus placeat tempora ratione temporibus."
        />
        <Form />
      </div>
    </>
  );
}

export default App;
