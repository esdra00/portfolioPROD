import "./contactStyle.css";
export default function Contact() {
	return (
		<>
			{/* CONTACT SECTION */}
			<div className="section contactSection">
				<div className="contactContainer">
					<div className="contactTitle">
						<h2>Let's work togheter!</h2>
					</div>
					<div className="contactBox">
						<div className="contactDesc">
							Do you have any question? Are you interested
							in working with me? Do you have any
							suggestion?
							<br />
							Please let me know.
						</div>
						<form className="contactForm">
							<label
								for="name"
								className="contactFormName"
							>
								My name is:
								<input
									type="text"
									id="name"
									name="name"
								/>
							</label>
							<label
								for="email"
								className="contactFormMail"
							>
								My e-mail is:
								<input
									type="email"
									id="email"
									name="email"
								/>
							</label>
							<label
								for="message"
								className="contactFormMessage"
							>
								Your message
								<textarea
									name="message"
									rows={8}
									// cols={200}
								></textarea>
							</label>
						</form>
						<button className="contactFormButton">
							Send
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

// <form className="contactForm">
// 	<label
// 		for="name"
// 		className="contactFormName"
// 	>
// 		My name is:
// 		<input
// 			type="text"
// 			id="name"
// 			name="name"
// 		/>
// 	</label>
// 	<label
// 		for="email"
// 		className="contactFormMail"
// 	>
// 		My e-mail is:
// 		<input
// 			type="email"
// 			id="email"
// 			name="email"
// 		/>
// 	</label>
// 	<label
// 		for="message"
// 		className="contactFormMessage"
// 	>
// 		Your message
// 		<textarea
// 			name="message"
// 			rows={8}
// 			cols={30}
// 		></textarea>
// 	</label>
// </form>;
