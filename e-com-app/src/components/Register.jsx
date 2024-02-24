import { useContext, useState } from "react";
import { AppContext } from "../App";

function Register() {
  const { user, setUser } = useContext(AppContext);
  const [value, setValue] = useState({
    mail: "",
    password: ""
  });

  const handleChange = (event) => {
    setValue({
      ...value,
      mail: event.target.value
    });
  };

  const handleChange2 = (event) => {
    setValue({
      ...value,
      password: event.target.value
    });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    setUser(value);
    console.log(value);
  };

  

  return (
    <div style={{
      width: "400px",
      marginLeft: "8%",
      marginRight: "1%",
    }}>
      <form onSubmit={handleOnSubmit}>
        <h1 className="h3 mb-3 fw-normal">Register</h1>
        <div className="mb-3 form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value={value.mail}
            onChange={handleChange}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="mb-3 form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={value.password}
            onChange={handleChange2}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <button className="btn btn-primary w-100 py-2" type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
