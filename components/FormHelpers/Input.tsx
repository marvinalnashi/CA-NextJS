"üse client"
import React from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
	id: string;
	label?: string;
	type?: string;
  placeholder: string;
	disabled?: boolean;
	required?: boolean;
	register: UseFormRegister<FieldValues>;
	errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
  id,
	type = "text",
  placeholder,
	label,
	disabled,
	register,
	required,
	errors,
}) => {
  return (
    <>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
				{...register(id, { required })}
        className={`
          bg-white 
          rounded-[6px]
          text-[#384179] 
          border 
          border-[#051F0D] 
          h-[56px] 
          block 
          w-full 
          py-[5px] 
          px-[25px] 
          placeholder-[#384179]
         
          ${errors[id] ? "border-rose-500" : "border-[#82839E]"}
          ${ errors[id] ? "focus:border-rose-500" : "focus:outline-none"}
        `}
      />
    </>
  )
}

export default Input