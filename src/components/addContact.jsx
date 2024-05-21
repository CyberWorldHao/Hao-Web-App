import React, { useState } from "react";
import { phonebookData, updateData } from "./phoneBookData.jsx";
import Button from "react-bootstrap/Button";
import "./style.css";

function AddContact(name, num) {
  let newContact = {};
  newContact.name = name;
  newContact.phoneNum = num;
  phonebookData.push(newContact);
  updateData(phonebookData);
}

function RenderForm() {
  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  return (
    <div className="formContainer">
      <form>
        <h4 className="formContent">Name</h4>
        <input
          placeholder="Enter the contact name"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <h4 className="formContent">Phone Number</h4>
        <input
          placeholder="Enter the phone number"
          id="num"
          name="phoneNum"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
        <br />
        <br />
        <Button
          variant="dark"
          id="adding"
          type="submit"
          onClick={() => AddContact(name, num)}
        >
          Save New Contact
        </Button>
      </form>
    </div>
  );
}

export default RenderForm;
