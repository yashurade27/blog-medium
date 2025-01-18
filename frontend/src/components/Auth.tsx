import { SignupInput } from "@yashurade/medium-common2";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";

export default function Auth({ type }: { type: "signup" | "signin" }) {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SignupInput>({
    firstName: "",
    username: "",
    password: "",
  });

  async function sendRequest() {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type==='signup' ? 'signup': 'signin'}`, postInputs)
      const jwt = response.data;
      localStorage.setItem("token", jwt)
      navigate('/blogs');
    } catch(e) {

    }
  }


  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center flex-col">
        <div>
          <div className="text-3xl font-extrabold text-center">
            {type === "signup" ? "Create an account" : "Sign in"}
          </div>
          <div className="text-slate-400 text-center mb-10">
            {type === "signin"
              ? "Don't have an account? "
              : "Already have an account?"}
            <Link className="pl-2 underline" to={type === "signin" ? "/signup" : "/signin"}>
              {type === "signin" ? "Signup" : "Signin"}
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4 px-12 py-8 bg-white rounded-md shadow-md w-[370px] mx-auto">
          {type==='signup' ? <LabelledInput
            label="Name"
            placeholder="Yash Urade...."
            onChange={(e): any => {
              return setPostInputs({
                ...postInputs,
                firstName: e.target.value,
              });
            }}
          />: null}

          <LabelledInput
            label="Username"
            placeholder="yashurade@gmail.com"
            onChange={(e): any => {
              return setPostInputs({
                ...postInputs,
                username: e.target.value,
              });
            }}
          />

          <LabelledInput
            label="Password"
            type={"password"}
            placeholder="Password"
            onChange={(e): any => {
              return setPostInputs({
                ...postInputs,
                password: e.target.value,
              });
            }}
          />
          <button
            onClick={sendRequest}
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-7 py-2.5 mb-2 w-48"
          >
            {type === "signup" ? "Signup" : "Signin"}
          </button>
        </div>
      </div>
    </div>
  );
}

interface LabelledInputtype {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => {};
  type?: string;
}

function LabelledInput({
  label,
  placeholder,
  onChange,
  type,
}: LabelledInputtype) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <input
        onChange={onChange}
        type={type || "text"}
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
