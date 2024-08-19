import React, { useEffect, useState } from "react";
import './App.css'
import { Btn } from "./components/btn/Btn";
import InputField from "./components/InputField/InputField"
import Card from "./components/card/Card";
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";

export default function App() {


  let [dataObj, setDataObj] = useState({
    name: '',
    error: '',
    disableBtn: true
  })



  const handleInput = (input) => {
    // dataObj['name'] = input.target.value;
    dataObj.name = input.target.value;
    setDataObj({ ...dataObj });
  }


  const validateInput = () => {
    if (name == '') {
      dataObj.error = 'Username is required';
      dataObj.disableBtn = true;
      setDataObj({ ...dataObj })
    } else if (name.length < 5) {
      dataObj.error = 'Name must be at least five character long.';
      dataObj.disableBtn = true;
      setDataObj({ ...dataObj })
    }
    else {
      dataObj.error = 'All Ok';
      dataObj.disableBtn = false;
      setDataObj({ ...dataObj })
    }
  }

  useEffect(() => {
    validateInput();
  }, [dataObj.name]);





  return (
    <>
      {/* <Card /> */}
      <h1>{dataObj.name}</h1>
      <p>{dataObj.error}</p>
      <TextField
        label='Name'
        onChange={(s) => handleInput(s)}
      />

      <Button
        variant="contained"
        disabled={dataObj.disableBtn}
      >Click Me</Button>



    </>
  )
}




