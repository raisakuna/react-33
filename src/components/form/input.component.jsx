import { useController } from "react-hook-form";
import { object } from "yup";
export const InputLabel = ({ field, labelText }) => {
  return (
    <label
      htmlFor={field}
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      {labelText}
    </label>
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
        className="bg-gray-50 border border-gray-300 text-teal-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-primary-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
      />
      {errMsg && <span className="text-red-600">{errMsg}</span>}
    </>
  );
};

export const RadioInputField = ({ options, name, control, errMsg = null }) => {
  const { field } = useController({
    control: control,
    name: name,
  });
  return (
    <>
      {options.map((option, index) => (
        <div key={index} className="flex items-center">
          <input
            id={option.value}
            type="radio"
            value={option.value}
            {...field}
            className="w-4 h-4 mx-2  text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
          />
          <label
            htmlFor={option.value}
            className=" mx-1 text-sm font-medium text-gray-900"
          >
            {option.label}
          </label>
        </div>
      ))}
      {errMsg && <span className="text-red-600">{errMsg}</span>}
    </>
  );
};

export const SelectOptionField = ({
  control,
  name,
  errMsg = null,
  options,
}) => {
  const { field } = useController({
    control: control,
    name: name,
  });
  return (
    <>
      <select
        id={name}
        {...field}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option value="">--Select a role--</option>
        {options.map((option, index) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
      {errMsg && <span className="text-red-600">{errorMsg}</span>}
    </>
  );
};

export const TextAreaField = ({ control, name, errMsg = null }) => {
  const { field } = useController({
    name: name,
    control: control,
  });
  return (
    <>
      <textarea
        id={name}
        {...field}
        rows={3}
        style={{ resize: "none" }}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      ></textarea>
      {errMsg && <span className="text-red-600">{errMsg}</span>}
    </>
  );
};

export const FileUploadField = ({
  control,
  name,
  errMsg = null,
  isMultiple = false,
}) => {
  const {
    field: { onChange, value },
  } = useController({
    control,
    name: name,
  });
  return (
    <>
      <input
        onChange={(e) => {
          if (isMultiple) {
            onChange(object.values(e.target.file));
          } else {
            onChange(e.target.files["0"]);
          }
        }}
        multiple={isMultiple}
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
        id={name}
        type="file"
      />
      {errMsg && <span className="text-red-600">{errMsg}</span>}
    </>
  );
};
