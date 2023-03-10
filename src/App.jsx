import "./App.css";
import ipAddressTracker from "./assets/projects preview/desktop-preview 2.jpg";
import restCountryApi from "./assets/projects preview/desktop-preview 3.jpg";
import interactiveCommentSection from "./assets/projects preview/desktop-preview 4.jpg";
import multiStepForm from "./assets/projects preview/desktop-preview.jpg";

import profilePicture from "./assets/_shirt - no bg - cropped.png";
import Menu from "./components/menu/menu";
import SocialMenu from "./components/social/social";
import "./MediaQueries.css";

function Project(props) {
	let left = props.orientation;
	let preview = props.preview;
	return (
		<>
			<div className={`projectContainer ${left ? "reverse" : ""}`}>
				<div className="textContainer">
					<h3 className="projectName">Project1</h3>
					<div className="projectDescription">
						Lorem ipsum dolor sit amet consectetur adipisicing
						elit. Dicta qui delectus repellendus maxime a
						nihil veritatis atque debitis pariatur, accusamus,
						labore dolorum? Nulla facilis qui illo, esse non
						nemo at quibusdam error ipsum eius harum minus
						iure? Laborum, consequatur sapiente hic dolor
						eligendi velit ipsum nulla sunt ex ipsa assumenda?
					</div>
					<div className="projectTech">
						<ul>
							<li>React</li>
							<li>Javascript</li>
							<li>Bootstrap</li>
							<li>Next</li>
						</ul>
					</div>
				</div>
				<div className="projectImageWrapper">
					<img
						src={preview}
						alt=""
						className="projectImage"
						height={1056}
						width={1440}
					/>
				</div>
			</div>
		</>
	);
}

export default function App() {
	return (
		<>
			<SocialMenu />
			<Menu />
			<div className="App">
				<div className="section">
					<div className="heroContainer">
						<div className="textHero">
							<h1>Esdra Bergamasco</h1>
							<h2>Front-end Web Developer</h2>
						</div>
					</div>
				</div>
				{/* ABOUT SECTION */}
				<div className="section aboutSection">
					<div className="containerAbout">
						<div className="titleAbout">
							<h2>About me</h2>
							<div className="lineAbout"></div>
						</div>
						<div className="textContainerAbout">
							<div className="titleDesc">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Facere debitis id,
								iure cum consequatur molestiae tenetur
								deleniti eum officiis exercitationem
								incidunt natus perferendis neque, odit
								consequuntur! Cum quasi dolorem dolor
								amet optio?
								<br />
								<br />
								Sed deserunt eius saepe, animi magni
								optio eaque amet dicta at omnis,
								temporibus reiciendis, doloribus
								corrupti velit fugiat cum quod
								blanditiis sequi consequatur vero
								facere. Error praesentium a iusto
								numquam quod vero dolor maiores
								laudantium tempore quas nisi ex dicta,
								neque iure debitis distinctio aliquid
								cupiditate.
								<br />
								<br />
								Voluptatem, ducimus quisquam
								reprehenderit officiis, excepturi
								quaerat repellendus inventore maiores
								ipsa consectetur rem magnam eum aut
								velit ratione illum aliquam dignissimos
								dolore?
							</div>
							<div className="imageWrapper">
								<img
									src={profilePicture}
									className="image"
									alt="Profile Picture"
									height={400}
									width={200}
								/>
							</div>
						</div>
						{/* <h3 className="cta">Resume</h3> */}
					</div>
				</div>
				{/* PROJECT SECTION */}
				<div className="section projectSection">
					<div className="containerSection">
						<div className="titleContainer">
							<h2 className="projectTitle">Project</h2>
							<span className="projectLine"></span>
						</div>
						<Project preview={ipAddressTracker} />
						<Project
							orientation="left"
							preview={multiStepForm}
						/>
						<Project preview={restCountryApi} />
						<Project
							orientation="left"
							preview={interactiveCommentSection}
						/>
					</div>
				</div>
				{/* CONTACT SECTION */}
				<div className="section contactSection">
					<div className="contactContainer">
						<div className="contactTitle">
							<h2>Let's work togheter!</h2>
						</div>
						<div className="contactBox">
							<div className="contactDesc">
								Do you have any question? Are you
								interested in working with me? Do you
								have any suggestion?
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
			</div>
		</>
	);
}
