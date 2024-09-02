import { ChangeEvent } from "react";
import { ComponentPropsType } from "../../types";
import personIcon from '../../assets/images/profile.png'
import emailIcon from '../../assets/images/mail.png'
import phoneIcon from '../../assets/images/call.png'
const Info = (props: ComponentPropsType) => {
	const { data, setData, errors } = props;

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { value, name } = e.target;
		const _data = { ...data };
		_data[name] = value;
		setData(_data);
	};

	return (
		<form className="form info">
			<h2>Personal info</h2>
			<p>Please provide your name, email, address, and phone number.</p>
			<div className="input__group">
				<label htmlFor="name"><img src={personIcon} alt="" className="icons" />Name: <span className="red-mark">*</span></label>
				<input
					type="text"
					placeholder="e.g. Stephen King"
					value={data.name || ""}
					onChange={handleChange}
					name="name"
					id="name"
				/>
				{errors.name && <p className="error">{errors.name}</p>}
			</div>
			<div className="input__group">
				<label htmlFor="email"><img src={emailIcon} alt="" className="icons"/>Email Address: <span className="red-mark">*</span></label>
				<input
					type="text"
					placeholder="e.g. Stephenking@lorem.com"
					value={data.email || ""}
					onChange={handleChange}
					name="email"
					id="email"
				/>
				{errors.email && <p className="error">{errors.email}</p>}
			</div>
			<div className="input__group">
				<label htmlFor="phone"><img src={phoneIcon} alt="" className="icons"/>Phone Number: <span className="red-mark">*</span></label>
				<input
					type="tel"
					placeholder="e.g. +1 234 567 890"
					value={data.phone || ""}
					onChange={handleChange}
					name="phone"
					id="phone"
				/>
				{errors.phone && <p className="error">{errors.phone}</p>}
			</div>
		</form>
	);
};

export default Info;
