import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class RegisterForm extends Form {
	state = {
		data: { username: "", password: "", name: "" },
		errors: {},
	};

	schema = {
		email: Joi.string().required().label("Emai"),
		password: Joi.string().required().label("Password"),
		name: Joi.string().required().label("Name"),
	};

	doSubmit = () => {
		// Call the server
		console.log("Login-Form Submitted");
	};
	render() {
		return (
			<div>
				<h1>Register</h1>
				<form onSubmit={this.handleSubmit}>
					{this.renderInput("email", "Username")}
					{this.renderInput("password", "Password", "password")}
					{this.renderInput("name", "Name")}
					{this.renderButton("Register")}
				</form>
			</div>
		);
	}
}

export default RegisterForm;
