"üse client"

import React from 'react'

interface ButtonProps {
	label: string;
	classAtts: string;
	disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({label, classAtts, disabled}) => {
  return (
    <>
      <button
        type="submit"
        className={classAtts}
        disabled={disabled}
      >
        {label}
      </button>
    </>
  )
}

export default Button