import React, { useState } from "react";
import Card from "./Card";

const App = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [type, setType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (type === "") {
      alert("Select type of search...");
    }
    if (type === "pincode") {
      fetch(`https://api.postalpincode.in/pincode/${search}`)
        .then((res) => res.json())
        .then((data) => {
          data[0].Status === "Success" ? setData(data) : setData([]);
        });
    }
    if (type === "postoffice") {
      fetch(`https://api.postalpincode.in/postoffice/${search}`)
        .then((res) => res.json())
        .then((data) => {
          data[0].Status === "Success" ? setData(data) : setData([]);
        });
    }
  };

  const handleChange = (e) => {
    setType(e.target.value);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Search Pincode</h1>
      <form className="form-control" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your Pincode/Post Office"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div style={{ margin: "10px 0 20px" }}>
          <div>
            <input
              type="radio"
              name="type"
              id="radioBtn"
              value="pincode"
              onChange={handleChange}
            />{" "}
            Search by Pincode
          </div>
          <div>
            <input
              type="radio"
              name="type"
              id="radioBtn"
              value="postoffice"
              onChange={handleChange}
            />{" "}
            Search by Post Office
          </div>
        </div>
        <button type="submit" id="searchBtn">
          Search
        </button>
      </form>
      {data.length > 0 && (
        <>
          <hr />
          <h3 style={{ textAlign: "center", color: "lightgreen" }}>
            {data[0].Message}
          </h3>
          <div className="card-container">
            {data[0].PostOffice.map((postOffice, i) => (
              <Card
                key={i}
                name={postOffice.Name}
                block={postOffice.Block}
                district={postOffice.District}
                state={postOffice.State}
                pincode={postOffice.Pincode}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default App;
