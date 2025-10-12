import React, { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const onSubmitHandler = async (event) =>{
    event.preventDefault();
    
  }
  return (
    <div className="h-[30vw]">
      <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
        <div className="inline-flex items-center gap-2 mb-2 mt-10">
          <p className="text-3xl">{currentState}</p>
          <hr className="border-none h-[0.9px] w-8 bg-gray-800" />
        </div>
        {currentState === "Login" ? (
          ""
        ) : (
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-800 rounded"
            placeholder="Name"
            required
          />
        )}
        <input
          type="email"
          className="w-full px-3 py-2 border border-gray-800 rounded"
          placeholder="Email"
          required
        />
        <input
          type="password"
          className="w-full px-3 py-2 border border-gray-800 rounded"
          placeholder="Password"
        />
        <div className="w-full flex justify-between text-sm mt-[-8px]">
          <p className="cursor-pointer hover:underline">Forgote your password?</p>
          {
            currentState === 'Login'
            ? <p onClick={()=>setCurrentState('Sign Up')} className="cursor-pointer hover:underline">Create Account</p> : <p onClick={()=> setCurrentState('Login')} className="cursor-pointer hover:underline">Login Here</p>
          }
        </div>
        <button className="px-8 py-2 mt-4 font-light border border-gray-300 bg-slate-600 text-amber-50 rounded active:bg-amber-50 active:text-slate-800 active:border-slate-800 cursor-pointer">{currentState === 'Login' ? 'Login' : 'Sign Up'}</button>
      </form>
    </div>
  );
};

export default Login;
