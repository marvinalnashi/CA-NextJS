"üse client"
import React from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface TextAreaProps {
	id: string;
	label?: string;
  placeholder: string;
	disabled?: boolean;
	required?: boolean;
	register: UseFormRegister<FieldValues>;
	errors: FieldErrors;
}

const TextArea: React.FC<TextAreaProps> = ({
  id,
  placeholder,
	label,
	disabled,
	register,
	required,
	errors,
}) => {
  return (
    <>
      <textarea
        id={id}
        placeholder={placeholder}
        disabled={disabled}
				{...register(id, { required })}
        rows={8}
        className={`
          bg-white 
          rounded-[6px]
          text-[#384179] 
          border 
          border-[#051F0D] 
          block 
          w-full 
          py-[10px] 
          px-[25px] 
          placeholder-[#384179]
          
          ${errors[id] ? "border-rose-500" : "border-[#82839E]"}
          ${ errors[id] ? "focus:border-rose-500" : "focus:outline-none"}
        `}
      />
    </>
  )
}

export default TextArea