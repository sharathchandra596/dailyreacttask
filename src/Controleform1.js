import { useState } from "react";

function Controleform1() {
  const [username, setUsername] = useState("");
  const [password, setpassowrd] = useState("");
  const [error,setError]=useState("")

function onchangeUser(e)
{
    
    setUsername(e.target.value)
    if(username.length>6)
    {
        setError("length should less then 6")
    }
    else
    {
        setError(null)
    }
}

function onchangepassword(e)
{
    setpassowrd(e.target.value)
}

function handelSubmit()
{

}

  return (
    <form onSubmit={handelSubmit}>
      <input type="text" placeholder="username" value={username} onChange={onchangeUser}/>
        {error && <span style={{color:"red"}}>{error}</span>}

      <input type="password" placeholder="password" value={password} onChange={onchangepassword}/>


      <button type="submit">submit</button>
    </form>
  );
}

export default Controleform1;
