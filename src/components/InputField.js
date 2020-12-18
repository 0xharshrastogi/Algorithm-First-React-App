import React from "react";
import "./InputField.css";

const InputField = (props) => {
	const { id, placeholder, label } = props;
	return (
		<div className="input-field">
			<label htmlFor={id}>{label}</label>
			<input required type="text" id={id} placeholder={placeholder} />
		</div>
	);
};

export default InputField;
