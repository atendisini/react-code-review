import { useState } from "react";

function Login() {
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log(password);
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
