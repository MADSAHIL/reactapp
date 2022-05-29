import { useState } from "react";

function Register() {
  let Defaultuser = { uname: "", password: "", email: "", phone: "" };
  let [user, setUser] = useState(Defaultuser);
  let [users, setUsers] = useState([]);
  let { uname, password, email, phone } = user;
  let Handler = (event) => {
    event.preventDefault();
    let confirmation = window.confirm("Are you ready to register ?");
    if (confirmation) {
      setUsers([...users, user]);
      setUser(Defaultuser);
    }
  };

  let changeHandler = (event) => {
    let { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  return (
    <>
      <form>
        <label>User Name</label>
        <input
          onChange={changeHandler}
          name="uname"
          value={uname}
          type="text"
        />
        <br />
        <label>Password</label>
        <input
          onChange={changeHandler}
          name="password"
          value={password}
          type="password"
        />
        <br /> <label>Email</label>
        <input
          onChange={changeHandler}
          name="email"
          value={email}
          type="email"
        />
        <br /> <label>Phone</label>
        <input
          onChange={changeHandler}
          name="phone"
          value={phone}
          type="phone"
        />
        <br />
        <input type="submit" value="Register" onClick={Handler} />
      </form>
      <table style={{ border: "1px solid black" }}>
        <tr>
          <td>Name</td>
          <td>Password</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{user.uname}</td>
            <td>{user.password}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
          </tr>
        ))}
        ;
      </table>
    </>
  );
}

export default Register;
