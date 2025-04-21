import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleSubmit = async () => {
    try {
      const response = await fetch("https://vgb9hhf2g4.execute-api.us-east-2.amazonaws.com/submitNameFunction", {

        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: "Abishek" })
      });

      const data = await response.json();
      console.log("✅ Response from Lambda:", data);
      alert(data.message || "Success!");
    } catch (error) {
      console.error("❌ Error submitting to AWS:", error);
      alert("Submission failed");
    }
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Created by Abishek Lamichhane</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <button onClick={handleSubmit}>
          Submit to AWS
        </button>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

