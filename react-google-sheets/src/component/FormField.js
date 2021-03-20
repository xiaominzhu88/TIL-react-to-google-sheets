import React, { useState } from 'react';
import { Button, Input } from 'reakit';
import styles from './FormField.module.scss';
import axios from 'axios';

const FormField = () => {
	const [inputValue, setInputValue] = useState({
		name: '',
		age: '',
		hobby: '',
	});

	const handleChange = (e) => {
		setInputValue({
			...inputValue,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(inputValue);

		axios
			.post(
				`https://sheet.best/api/sheets/${process.env.REACT_APP_KEY}`,
				inputValue,
			)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
		setInputValue({ name: '', age: '', hobby: '' });
	};
	return (
		<form onSubmit={handleSubmit}>
			<label>Name</label>
			<Input
				onChange={handleChange}
				value={inputValue.name}
				className={styles.input}
				name="name"
				placeholder="your name"
			/>
			<label>Age</label>
			<Input
				onChange={handleChange}
				value={inputValue.age}
				className={styles.input}
				name="age"
				placeholder="your age"
			/>
			<label>Hobby</label>
			<Input
				onChange={handleChange}
				value={inputValue.hobby}
				className={styles.input}
				name="hobby"
				placeholder="your hobby"
			/>
			<Button type="submit" className={styles.button}>
				Submit
			</Button>
		</form>
	);
};

export default FormField;
