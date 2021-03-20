import React, { useState } from 'react';
import { Button, Input } from 'reakit';
import styles from './FormField.module.scss';
import axios from 'axios';
import { format } from 'date-fns';
import classNames from 'classnames';

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

	const created = format(new Date(), 'MM-dd-yyyy');
	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post(
				`https://sheet.best/api/sheets/${process.env.REACT_APP_KEY}`,
				inputValue,
			)
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
				placeholder="name"
			/>
			<label>Age</label>
			<Input
				onChange={handleChange}
				value={inputValue.age}
				className={styles.input}
				name="age"
				placeholder="age"
			/>
			<label>Hobby</label>
			<Input
				onChange={handleChange}
				value={inputValue.hobby}
				className={styles.input}
				name="hobby"
				placeholder="hobby"
			/>
			<label>Created at</label>
			<Input
				disabled
				value={created}
				className={classNames(styles.input, styles.date)}
				placeholder="created at"
			/>
			<Button type="submit" className={styles.button}>
				Submit
			</Button>
		</form>
	);
};

export default FormField;
