import { useState } from "react";
import {
  InputLabel,
  TextInputField,
  RadioInputField,
  SelectOptionField,
  TextAreaField,
  FileUploadField,
} from "../../../components/form/input.component";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import authSvc from "../auth.service";
const RegisterPage = () => {
  const userRegisterDTO = Yup.object({
    name: Yup.string().min(2).max(25).required(),
    email: Yup.string().email().required(),
    password: Yup.string()
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,25}$/,
        {
          message:
            "Password should contain at least one character, a number and a special character.",
        }
      )
      .required(),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")])
      .required(),
    gender: Yup.string()
      .matches(/^(male|female|other)$/)
      .required(),
    role: Yup.string()
      .matches(/^(customer|seller)$/)
      .required(),
    phone: Yup.string()
      .matches(
        /^(?:\+977[- ]?)?(98\d{8}|97\d{8}|96\d{8}|0[1-6][- ]?\d{6,7})$/,
        { message: "Phone number should start with 98 or .." }
      )
      .required(),
    address: Yup.string().nullable().optional().default(null),
    image: Yup.mixed().required(),
  });

  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userRegistrationDTO),
  });
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

  const submitEvent = async (data) => {
    try {
      const result = await authSvc.registerUser(data);
      console.log(result);
    } catch (exception) {
      console.log("component", exception);
    }
  };
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full lg:w-1/2 p-6 my-6 bg-white rounded-lg shadow-md">
          <h2 className="mb-6 text-2xl font-bold text-center text-gray-900">
            Registration
          </h2>
          <form onSubmit={handleSubmit(submitEvent)}>
            {/* Name */}
            <div className="mb-4">
              <InputLabel field={"name"} labelText={"Name"} />
              <TextInputField
                control={control}
                name={"name"}
                placeholder="Enter your name"
                errMsg={errors?.name?.message}
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <InputLabel field={"email"} labelText={"Email"} />
              <TextInputField
                control={control}
                type="email"
                name={"email"}
                placeholder="Enter your Email"
                errMsg={errors?.email?.message}
              />
            </div>
            {/* Password */}
            <div className="mb-4">
              <InputLabel field={"password"} labelText={"Password: "} />
              <TextInputField
                control={control}
                type="password"
                name={"password"}
                placeholder="Enter your Password"
                errMsg={errors?.password?.message}
              />
            </div>

            {/* Confirm Password */}
            <div className="mb-4">
              <InputLabel
                field={"confirmPassword"}
                labelText={"Confirm Password"}
              />
              <TextInputField
                control={control}
                type="password"
                name={"confirmPassword"}
                placeholder="Confirm your Password"
                errMsg={errors?.confirmPassword?.message}
              />
            </div>

            {/* Gender */}
            <div className="mb-4">
              <InputLabel field={"gender"} labelText={"Gender: "} />
              <div className="flex">
                <RadioInputField
                  options={[
                    { label: "Male", value: "male" },
                    { label: "Female", value: "female" },
                    { label: "Other", value: "other" },
                  ]}
                  name="gender"
                  control={control}
                  errMsg={errors?.gender?.message}
                />
              </div>
            </div>
            {/* Role */}
            <div className="mb-4">
              <InputLabel field={"role"} labelText={"Role: "} />
              <SelectOptionField
                options={[
                  { label: "Buyer", value: "customer" },
                  { label: "Seller", value: "seller" },
                ]}
                control={control}
                name={"role"}
                errMsg={errors?.role?.message}
              />
            </div>

            {/* Phone */}
            <div className="mb-4">
              <InputLabel field={"phone"} labelText={"Phone: "} />
              <TextInputField
                control={control}
                name={"phone"}
                type="tel"
                placeholder="123-456-7890"
                errMsg={errors?.phone?.message}
              />
            </div>

            {/* Address */}
            <div className="mb-4">
              <InputLabel field={"address"} labelText={"Address: "} />
              <TextAreaField
                name={"address"}
                control={control}
                errMsg={errors?.address?.message}
              />
            </div>

            {/* Image Upload */}
            <div className="mb-4">
              <InputLabel field={"image"} labelText={"Image: "} />
              <FileUploadField
                name={"image"}
                control={control}
                errMsg={errors?.image?.message}
                isMultiple={true}
              />
            </div>

            {/* Submit Button */}
            <FormSubmitButtons loading={loading} />
          </form>
        </div>
      </div>
    </>
  );
};
export default RegisterPage;
