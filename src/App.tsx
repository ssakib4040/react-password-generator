import { useEffect, useState } from "react";
import "./App.css";

import { Container } from "react-bootstrap";

function App() {
  const [input, setInput] = useState(8);
  const [password, setPassword] = useState("");

  const handleCopy = (e: any) => {
    navigator.clipboard.writeText(password);

    e.target.innerText = "Copied";
    setTimeout(() => {
      e.target.innerText = "Copy";
    }, 1000);
  };

  // useEffect(() => {
  //   handleGeneratePassword();
  // }, []);

  const handleGeneratePassword = () => {
    var length = input,
      charset =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    setPassword(retVal);
  };

  return (
    <Container className="py-5">
      <div className="row">
        <div className="col-md-5 mx-auto">
          <div className="border p-3">
            <h2>React Password generator</h2>

            <div className="d-flex justify-content-cente align-items-center mb-3">
              <input
                type="range"
                name=""
                id=""
                className="w-100 border me-2"
                value={input}
                onChange={(e) => setInput(parseInt(e.target.value))}
              />
              <span>{input}</span>
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="d-flex">
              <button
                className="btn btn-primary me-2"
                onClick={handleGeneratePassword}
              >
                Generate
              </button>
              <button className="btn btn-primary" onClick={handleCopy}>
                Copy
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default App;
