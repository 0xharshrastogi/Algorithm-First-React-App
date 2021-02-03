import React, { useState } from 'react';
import './InputField.css';

const InputField = ({
	id,
	placeholder,
	label,
	onBlurHandler,
}) => {
	const [value, setValue] = useState('');
	return (
		<div className="input-field">
			<label htmlFor={id}>{label}</label>
			<input
				type="text"
				id={id}
				value={value}
				onChange={(e) => setValue(e.target.value)}
				placeholder={placeholder}
				onBlur={() =>
					onBlurHandler instanceof Function
						? onBlurHandler(value)
						: null
				}
			/>
		</div>
	);
};

export default InputField;
