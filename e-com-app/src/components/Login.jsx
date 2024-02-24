import { useContext, useState } from "react";
import { AppContext } from "../App";

function Login() {
  const { user } = useContext(AppContext);
  const [value, setValue] = useState({
    mail: "",
    password: ""
  });

  const handleOnChange = (event) => {
    setValue({
      ...value,
      mail: event.target.value
    });
  };

  const handleOnChange2 = (event) => {
    setValue({
      ...value,
      password: event.target.value
    });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(user.mail);
    console.log(user.mail === value.mail);
    if (user.mail !== value.mail || user.password !== value.password) {
      alert("Email or password incorrect");
    } else {
      alert("Great Welcome!");
    }
  };

  return (
    <div
      style={{
        width: "400px",
        marginLeft: "8%",
        marginRight: "1%",
        marginTop: "1%"
      }}
    >
      <form onSubmit={handleOnSubmit}>
        <h1 className="h3 mb-3 fw-normal">Login</h1>
        <div className="mb-3 form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value={value.mail}
            onChange={handleOnChange}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={value.password}
            onChange={handleOnChange2}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <div className="form-check text-start my-3">
          <input
            className="form-check-input"
            type="checkbox"
            value="remember-me"
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Remember me
          </label>
        </div>
        <button className="btn btn-primary w-100 py-2" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
