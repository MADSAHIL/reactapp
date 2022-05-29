import { useState } from "react";

function FunctionStateCom() {
  let [type, setType] = useState("password");
  let handler = (event) => {
    let { checked } = event.target;
    if (checked) {
      setType("text");
    } else {
      setType("password");
    }
  };
  return (
    <>
      <input type={type} />
      <input type="checkbox" onClick={handler} />
      Show Password
    </>
  );
}
export default FunctionStateCom;
