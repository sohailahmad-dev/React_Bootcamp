import React, { useState } from "react";
import './App.css'
import { Btn } from "./components/btn/Btn";
import InputField from "./components/InputField/InputField"

export default function App() {

  let [name, setName] = useState('M Shumail');





  const handleLogin = () => {
    setName('Irtaza Azeem')
  }


  return (
    <>
      <h1>{name}</h1>
      <br /> <br />
      <Btn
        label='Login'
        func={handleLogin}
      />
      <Btn
        label='Create Account'
        func={() => alert('in create Account')}
      />

      <Btn />

    </>
  )
}




