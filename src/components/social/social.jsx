import linkedLogo from "../../assets/social media icon/104493_linkedin_icon 1.svg";
import gmailLogo from "../../assets/social media icon/1181190_email_gmail_google_mail_icon 1.svg";
import githubLogo from "../../assets/social media icon/394187_github_icon 1.svg";
import whatsappLogo from "../../assets/social media icon/843786_whatsapp_icon 1.svg";
import "./socialStyle.css";

const Comp = (props) => {
	let img = props.img;
	let link = props.link;
	return (
		<>
			<div className="instaLink">
				<a href={link} target="_blank">
					<img
						src={img}
						alt="linkedin link"
						height={25}
						width={25}
					/>
				</a>
			</div>
		</>
	);
};

export default function SocialMenu() {
	return (
		<>
			<div className="socialMenu">
				<Comp
					img={githubLogo}
					link={"https://github.com/esdra00"}
				/>
				<Comp
					img={linkedLogo}
					link={"https://www.linkedin.com/in/esdra-bergamasco/"}
				/>
				<Comp
					img={gmailLogo}
					link={"mailto:esdrabergamasco@gmail.com"}
				/>
				<Comp img={whatsappLogo} link={"tel:+393475330260"} />
				<div className="socialLine"></div>
			</div>
		</>
	);
}
