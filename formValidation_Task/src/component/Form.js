import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function FormValidation() {
  const [userForm, setuserForm] = useState([{ browser: "", IP: "" }]);
  const [browserError, setBrowseError] = useState("");
  const [IpError, setIpError] = useState("");
  const [Error, setError] = useState("");

  const [browser, setBrowser] = useState("Select Browser");
  const [IP, setIP] = useState(0);

  const handleBrowser = (e) => {
    setBrowser(e.target.value);
    console.log("browser", browser);
  };
  const handleIp = (e) => {
    setIP(e.target.value);
    console.log("IP", IP);
  };

  const Errors = () => {
    browser == "" && IP == ""
      ? setError("Please Fill all the Fields")
      : setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Errors();
    setuserForm("userForm", userForm);
  };

  const BrowserValidation = (URL) => {
    const regex = new RegExp("/^[0-9]$/");
    return regex.test(URL);
  };
  return (
    <div
      className="container"
      style={{ width: "30%", height: "500px", margin: "auto" }}
    >
      <h1>Add New Form</h1>
      <form>
        {userForm.length >0 && userForm.map((data, index) => (
          <div key={index}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <label for="cars">Choose a Browser</label>
                <br />
                <input
                  list="browsers"
                  name="browser"
                  onChange={handleBrowser}
                  value={data.browser}
                />
                <datalist id="browsers">
                  <option value="Internet Explorer" />
                  <option value="Firefox" />
                  <option value="Chrome" />
                  <option value="Opera" />
                  <option value="Safari" />
                </datalist>
              </div>
              <div>
                <label for="cars">Enter Browser IP Number</label>
                <br />
                <input type="text" onChange={handleIp} value={data.IP} />
              </div>
              <div>
                <button
                  style={{ borderRadius: "50%", marginTop: "20px" }}
                  onClick={handleSubmit}
                >
                  +
                </button>
              </div>
            </div>
            <span style={{ color: "red" }}>{Error}</span>
          </div>
        ))}
      </form>
    </div>
  );
}
