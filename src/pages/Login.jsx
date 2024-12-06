import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col items-center w-full max-w-md rounded-xl  p-6 sm:p-12 gap-5 sm:gap-8"
      >
        <div className="text-center mb-2 sm:mb-4">
          <p className="text-4xl sm:text-6xl permanent-marker-regular primary-color font-outline-1 text-shadow-black-medium">
            {currentState}
          </p>
        </div>

        {currentState === "Sign Up" && (
          <input
            type="text"
            className="w-full px-4 py-3 sm:py-4 text-base sm:text-lg font-bold text-black border-2 border-lime-950 shadow-md placeholder-black/70 bg-transparent
           "
            placeholder="Name"
            required
          />
        )}

        <input
          type="email"
          className="w-full px-4 py-3 sm:py-4 text-base sm:text-lg font-bold text-black border-2 border-lime-950 shadow-md placeholder-black/70 bg-transparent"
          placeholder="Email"
          required
        />

        {currentState === "Sign Up" && (
          <input
            type="tel"
            className="w-full px-4 py-3 sm:py-4 text-base sm:text-lg font-bold text-black border-2 border-lime-950 shadow-md placeholder-black/70 bg-transparent"
            placeholder="Phone Number"
            required
          />
        )}

        <input
          type="password"
          className="w-full px-4 py-3 sm:py-4 text-base sm:text-lg font-bold text-black border-2 border-lime-950 shadow-md placeholder-black/70 bg-transparent"
          placeholder="Password"
          required
        />

        <div className="w-full flex flex-col sm:flex-row justify-between items-center text-sm space-y-3 sm:space-y-0">
          <p className="cursor-pointer hover:text-primary transition-colors">
            Forgot your password
          </p>

          {currentState === "Login" ? (
            <p
              onClick={() => setCurrentState("Sign Up")}
              className="cursor-pointer hover:text-primary transition-colors"
            >
              Create Account
            </p>
          ) : (
            <p
              onClick={() => setCurrentState("Login")}
              className="cursor-pointer hover:text-primary transition-colors"
            >
              Login Here
            </p>
          )}
        </div>

        <Link to="/" className="w-full">
          <button className="w-full mt-2 sm:mt-4 py-3 sm:py-4 permanent-marker-regular text-shadow-black-small primary-color font-outline-1 text-2xl sm:text-3xl rounded-lg hover:opacity-90 transition-opacity">
            {currentState === "Login" ? "Sign In" : "Create Account"}
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
