import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import resetImg from "../../images/reset.jpg";
import axios from "axios";

function PasswordReset() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [resetCred, setResetCred] = useState({
    username: "",
    currPassword: "",
    newPassword: "",
  });

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/reset`,
        resetCred
      );

      if (res.status === 200) {
        toast.success("Password reset successfully!");
        navigate("/login");
      } else {
        toast.error("Something Went Wrong");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <div class="flex flex-wrap w-full">
        <div class="w-1/2 shadow-2xl">
          <img
            class="hidden object-cover w-full h-screen md:block"
            src={resetImg}
          />
        </div>
        <div class="flex flex-col w-full md:w-1/2 h-screen">
          <div class="flex justify-center pt-12 md:justify-start md:pl-12 md:-mb-24">
            <a href="#" class="p-4 text-xl font-bold text-white bg-black">
              SecretBox.
            </a>
          </div>
          <div class="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
            <p class="text-3xl text-center">Reset Password</p>
            <form onSubmit={handleReset} class="flex flex-col pt-3 md:pt-8">
              <div class="flex flex-col pt-4">
                <div class="flex relative ">
                  <span class=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                    <svg
                      class="svg-icon"
                      width="15"
                      height="15"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M170.666667 938.666667a341.333333 341.333333 0 1 1 682.666666 0H170.666667z m341.333333-384c-141.44 0-256-114.56-256-256s114.56-256 256-256 256 114.56 256 256-114.56 256-256 256z" />
                    </svg>
                  </span>
                  <input
                    required
                    name="username"
                    value={resetCred.username}
                    onChange={(e) =>
                      setResetCred({ ...resetCred, username: e.target.value })
                    }
                    type="text"
                    id="design-login-email"
                    class=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Username"
                  />
                </div>
              </div>
              <div class="flex flex-col pt-4">
                <div class="flex relative ">
                  <span class=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                    <svg
                      width="15"
                      height="15"
                      fill="black"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z"></path>
                    </svg>
                  </span>
                  <input
                    required
                    name="currPassword"
                    value={resetCred.currPassword}
                    onChange={(e) =>
                      setResetCred({
                        ...resetCred,
                        currPassword: e.target.value,
                      })
                    }
                    type="password"
                    id="design-login-email"
                    class=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Current Password"
                  />
                </div>
              </div>
              <div class="flex flex-col pt-4 mb-12">
                <div class="flex relative ">
                  <span class=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                    <svg
                      width="15"
                      height="15"
                      fill="black"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z"></path>
                    </svg>
                  </span>
                  <input
                    required
                    name="newPassword"
                    value={resetCred.newPassword}
                    onChange={(e) =>
                      setResetCred({
                        ...resetCred,
                        newPassword: e.target.value,
                      })
                    }
                    type="password"
                    id="design-login-password"
                    class=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="New Password"
                  />
                </div>
              </div>
              <button
                type="submit"
                class="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-black shadow-md hover:text-black border hover:border-black hover:bg-white focus:outline-none focus:ring-2"
              >
                <span class="w-full">
                  {isLoading ? (
                    <svg
                      className="mx-auto animate-spin"
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      height="25px"
                      width="25px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
                    </svg>
                  ) : (
                    "Reset"
                  )}
                </span>
              </button>
            </form>
            <div class="pt-12 pb-12 text-center flex mx-auto gap-12">
              <Link to="/login" class="font-semibold underline ml-2">
                Login Here
              </Link>
              or
              <Link to="/register" class="font-semibold underline ml-2">
                Register Here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordReset;
