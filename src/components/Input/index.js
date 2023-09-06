import { type } from "@testing-library/user-event/dist/type";
import React from "react";

export const Input = ({type, name, inputId, placeholder, defaultValue, label, helperText, value, onChange,  error}) => {
    return (
      <div>
        {label && (
          <label className="block text-gray-700 text-sm font-bold mb-2">
            {label}
          </label>
        )}

        {helperText && (
          <label className="block text-lg text-gray-600">{helperText}</label>
        )}
        <input
          type={type}
          name={name}
          id={inputId}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          defaultValue={defaultValue}
          className={
            "shadow appearance-none border rounded w-full mb-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          }
        />

        <p className="mt-2 text-sm text-red-600">{error}</p>
      </div>
    );
}