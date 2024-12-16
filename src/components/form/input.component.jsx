import { useController } from "react-hook-form";
export const InputLabel = ({ field, labelText }) => {
  return (
    <>
      <label
        htmlFor={field}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {labelText}
      </label>
    </>
  );
};
export const TextInputField = ({
  control,
  type = "text",
  name,
  defaultValue = "",
  errMsg = null,
  placeholder = "",
}) => {
  const { field } = useController({
    control: control,
    name: name,
    defaultValue: defaultValue,
    rules: { required: true },
  });
  return (
    <>
      <input
        type={type}
        {...field}
        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
      />
      errMsg ?{" "}
      <>
        <span className="text-red-600">{errMsg}</span>
      </>
    </>
  );
};
