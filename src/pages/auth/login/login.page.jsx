import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import {
  InputLabel,
  TextInputField,
} from "../../../components/form/input.component";

const LoginPage = () => {
  // Form-Handling Custom way
  // const [credentials, setCredential] = useState();
  // const inputChangeEvent = (e) => {
  //   const { value, name, type, required } = e.target;
  //console.log(value, name, type, required);
  // setCredential({
  //   ...credentials,
  //   [name]: value,
  // });
  // const submitEvent = (data) => {
  //   api call to submit
  //   e.preventDefault(data);
  //   console.log(data);
  // };

  // Form Handling using React Hook Form using register way.

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitEvent = (data) => {
    console.log(data);
  };
  console.log(errors);

  //console.log(credentials);
  return (
    <>
      <section className="bg-gray-50 dark:bg-primary-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="w-auto h-8 block  dark:hidden"
              src="/logo_light.png"
              alt=""
            />
            <img
              className="hidden w-auto h-8 dark:block"
              src="/logo_dark.png"
              alt=""
            />
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form
                onSubmit={handleSubmit(submitEvent)}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <InputLabel field={"email"} labelText={"Your email"} />
                  <TextInputField
                    control={control}
                    name={"email"}
                    type="email"
                    errMsg={errors?.email ? "Email is required" : ""}
                    placeholder="Enter your email"
                  />

                  {/*} <Controller
                    name="email"
                    control={control}
                    defaultValue={""}
                    render={({ field }) => (
                      <input
                        type="email"
                        {...field}
                        placeholder="Enter your name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    )}
                  ></Controller>

                  <span className="text-red-600">
                    {errors?.email ? "Email is required" : ""}
                  </span>
                  */}
                </div>
                <div>
                  {/*
                  <Controller
                    name="password"
                    defaultValue={""}
                    control={control}
                    render={({ field: { ref, ...rest } }) => (
                      <input
                        type="password"
                        placeholder="••••••••"
                        {...rest}
                        ref={ref}
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    )}
                  ></Controller>
                  */}
                  {/*
                  <input
                    type="password"
                    id="password"
                    {...register("password", { required: true })}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  */}
                  {/*<span className="text-red-600">
                    {errors?.password ? "Password is required" : ""}
                  </span> */}
                  <InputLabel field={"password"} labelText={"Password"} />

                  <TextInputField
                    control={control}
                    name={"password"}
                    type="password"
                    errMsg={errors?.email ? "Password is required" : ""}
                    placeholder="Enter your Password!"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      />
                      <span className="text-red-600">
                        {errors?.password ? "Password is required" : ""}
                      </span>
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
