import { useState } from "react";
import {
  InputLabel,
  TextInputField,
} from "../../../components/form/input.component";
import { useForm } from "react-hook-form";
const RegisterPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handlePasswordChange = (r) => {
    setPassword(e.target.value);
    setPasswordMatch(e.target.value === confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordMatch(e.target.value === password);
  };

  const submitEvent = (data) => {};
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full lg:w-1/2 p-6 my-6 bg-white rounded-lg shadow-md">
          <h2 className="mb-6 text-2xl font-bold text-center text-gray-900">
            Register
          </h2>
          <form onSubmit={handleSubmit(submitEvent)}>
            {/* Name */}
            <div class="mb-4">
              <InputLabel field={"name"} labelText={"Name"} />
              <TextInputField
                control={control}
                name={"name"}
                errMsg={errors?.name?.message}
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div class="mb-4">
              <InputLabel field={"email"} labelText={"Email"} />
              <TextInputField
                control={control}
                type="email"
                name={"email"}
                errMsg={errors?.email?.message}
                placeholder="Enter your Email"
              />
            </div>
            {/* Password */}
            <div class="mb-4">
              <InputLabel field={"password"} labelText={"Password"} />
              <TextInputField
                control={control}
                type="password"
                name={"password"}
                errMsg={errors?.password?.message}
                placeholder="Enter your Password"
              />
            </div>

            {/* Confirm Password */}
            <div class="mb-4">
              <InputLabel
                field={"passwordConfirmation"}
                labelText={"Confirm Password"}
              />
              <TextInputField
                control={control}
                type="password"
                name={"passwordConfirmation"}
                errMsg={errors?.confirmPassword?.message}
                placeholder="Confirm your Password"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Gender
              </label>
              <div className="flex space-x-4">
                <div className="flex items-center">
                  <input
                    id="male"
                    type="radio"
                    value="male"
                    name="gender"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                  />
                  <label
                    htmlFor="male"
                    className="ml-2 text-sm font-medium text-gray-900"
                  >
                    Male
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="female"
                    type="radio"
                    value="female"
                    name="gender"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                  />
                  <label
                    htmlFor="female"
                    className="ml-2 text-sm font-medium text-gray-900"
                  >
                    Female
                  </label>
                </div>
              </div>
            </div>

            {/* Role */}
            <div>
              <label
                htmlFor="role"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Role
              </label>
              <select
                id="role"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option value="">Select a role</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
                <option value="moderator">Moderator</option>
              </select>
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>

            {/* Address */}
            <div>
              <label
                htmlFor="address"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Address
              </label>
              <textarea
                id="address"
                rows={3}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              ></textarea>
            </div>

            {/* Image Upload */}
            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900"
                htmlFor="image"
              >
                Upload Image
              </label>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                id="image"
                type="file"
                accept="image/*"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default RegisterPage;
