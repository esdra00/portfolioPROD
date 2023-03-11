import "./contactStyle.css"
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
						<div className="contactForm">
							<div className="contactFormName">
								My name is:
							</div>
							<div className="contactFormMail">
								My e-mail is:
							</div>
							<div className="contactFormMessage">
								Your message
							</div>
						</div>
						<div className="contactFormButton">Send</div>
					</div>
				</div>
			</div>
		</>
	);
}
