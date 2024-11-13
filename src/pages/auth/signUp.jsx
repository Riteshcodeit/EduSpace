import { useState } from "react";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className=" w-screen h-screen border border-sky-500 flex justify-center items-center">
      <div className=" border border-green-700 flex flex-col p-20">
        <h1 className="font-bold text-center text-5xl p-8">Create Account</h1>
        <form className="flex flex-col gap-10 ">
          <input
            className="p-3 border border-solid border-sky-500 rounded"
            
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="p-3 border border-solid border-sky-500 rounded"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="p-3 border border-solid border-sky-500 rounded"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="border bg-sky-500 p-4 w-40 rounded-xl none font-bold hover:bg-sky-800">Sign Up</button>
        </form>
      </div>
    </div>
  );
}





