import React, { useState } from "react";


const Form = () => {
  
  const [user, setUser] = useState({
    name: "",
    email: ""
  })

  const [confirm, setConfirm] = useState()
  const [error, setError] = useState()

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (user.name.length <= 3 && emailRegex.test(user.email)) {
      setError(true)
      setConfirm(false)
    } else {
      setError(false)
      setConfirm(true)
    }
  }

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input type="text" onChange={(e) => {setUser({ ...user, name: e.target.value });}} placeholder="Full name"/>
        <input type="email" onChange={(e) => {setUser({ ...user, email: e.target.value });}} placeholder="Email" />
        <button type="submit">Send</button>
      </form>
      {error && <p className="error">Please verify your information again.</p>}
      {confirm && <p>Thank you, {user.name}! We'll contact you via email as soon as possible.</p>}
    </div>
  );
};

export default Form;
