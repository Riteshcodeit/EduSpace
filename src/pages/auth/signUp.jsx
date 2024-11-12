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

// import React, { useState } from 'react';
// import { useAuth } from '../../hooks/useAuth';

// const Signup = () => {
//   const { signup } = useAuth();
//   const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'student' });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await signup(formData);
//   };

//   return (
//     <div>
//       <h1>Sign Up</h1>
//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder="Name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
//         <input type="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
//         <input type="password" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
//         <select onChange={(e) => setFormData({ ...formData, role: e.target.value })}>
//           <option value="student">Student</option>
//           <option value="teacher">Teacher</option>
//         </select>
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default Signup;
