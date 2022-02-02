import React from "react";

const Input = ({ name, lable, value, error, onChange }) => {
	return (
		<div className="mb-3">
			<lable htmlFor={name}>{lable}</lable>
			<input
				value={value}
				onChange={onChange}
				// ref={this.username}
				id={name}
				name={name}
				type="text"
				className="form-control"
			/>
			{error && <div className="alert alert-danger">{error}</div>}
		</div>
	);
};

export default Input;
