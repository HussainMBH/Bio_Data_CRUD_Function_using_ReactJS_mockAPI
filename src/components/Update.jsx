import axios from "axios";
import React, { useState, useEffect } from "react";
import { Form, Button, Checkbox } from "semantic-ui-react";
import { API_URL } from "../Constatnts/URL";
import { useNavigate } from "react-router-dom";

function Update () {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [id, setId] = useState("");
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();


  const updateuser = async () => {
    await axios.put(API_URL + id, {
      firstName,
      lastName,
      checked
    });
    navigate("/read"); //go to next page directly if click save button
  }
  useEffect(() => {
    setId(localStorage.getItem("id"));
    setFirstName(localStorage.getItem("firstName"));
    setLastName(localStorage.getItem("lastName"));
    setChecked(localStorage.getItem("checked"));
  }, [])
  return (
    <Form className="form">
      <Form.Field>
        <label>First Name</label>
        <input
          placeholder="Enter Your First Name"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        ></input>
      </Form.Field>
      <br />
      <Form.Field>
        <label>Last Name</label>
        <input
          placeholder="Enter Your Last Name"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        ></input>
      </Form.Field>
      <br />
      <Form.Field>
        <Checkbox
          label="Agree the terms & conditions"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
      </Form.Field>
      <Button onClick={updateuser}>Update</Button>
    </Form>
  );
};

export default Update;
