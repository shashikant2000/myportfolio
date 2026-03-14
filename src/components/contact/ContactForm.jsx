import { useState } from 'react';
import Button from '../reusable/Button';
import FormInput from '../reusable/FormInput';

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});
	const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setStatus('sending');

		// Build a mailto link as a simple contact method (no backend needed)
		const mailtoLink = `mailto:shashikant.k.y.02@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
		window.location.href = mailtoLink;

		setStatus('success');
		setFormData({ name: '', email: '', subject: '', message: '' });
		setTimeout(() => setStatus(''), 3000);
	};

	return (
		<div className="w-full lg:w-1/2">
			<div className="leading-loose">
				<form
					onSubmit={handleSubmit}
					className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
				>
					<p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
						Contact Form
					</p>
					<FormInput
						inputLabel="Full Name"
						labelFor="name"
						inputType="text"
						inputId="name"
						inputName="name"
						placeholderText="Your Name"
						ariaLabelName="Name"
						value={formData.name}
						onChange={handleChange}
					/>
					<FormInput
						inputLabel="Email"
						labelFor="email"
						inputType="email"
						inputId="email"
						inputName="email"
						placeholderText="Your email"
						ariaLabelName="Email"
						value={formData.email}
						onChange={handleChange}
					/>
					<FormInput
						inputLabel="Subject"
						labelFor="subject"
						inputType="text"
						inputId="subject"
						inputName="subject"
						placeholderText="Subject"
						ariaLabelName="Subject"
						value={formData.subject}
						onChange={handleChange}
					/>

					<div className="mt-6">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							htmlFor="message"
						>
							Message
						</label>
						<textarea
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							id="message"
							name="message"
							cols="50"
							rows="6"
							aria-label="Message"
							required
							value={formData.message}
							onChange={handleChange}
						></textarea>
					</div>

					{status === 'success' && (
						<p className="mt-4 text-green-600 dark:text-green-400 text-sm">
							Message ready to send! Your email client should open.
						</p>
					)}

					<div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
						<Button
							title={status === 'sending' ? 'Sending...' : 'Send Message'}
							type="submit"
							aria-label="Send Message"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;
