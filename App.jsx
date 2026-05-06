import {useState} from "react";

function App() {
  const [name,setName] = useState("");

  return (
    <div style={{ padding: "50px"}}>
      <h2>Enter your name:</h2>

      <input
        type="text"
        placeholder="your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>You typed: {name}</p>
    </div>
  );
}

export default App;