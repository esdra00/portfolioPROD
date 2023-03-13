import "./App.css";
import profilePicture from "./assets/_shirt - no bg - cropped.png";
import Contact from "./components/contact/contact";
import Menu from "./components/menu/menu";
import Project from "./components/project/project";
import SocialMenu from "./components/social/social";
import "./MediaQueries.css";
// import projectsData from "./assets/data.json";

// function Project() {
// 	return (
// 		<>
// 			{projectsData &&
// 				projectsData.map((project) => {
// 					return (
// 						<div
// 							className={`projectContainer ${project.Orientation}`}
// 							key={project.id}
// 						>
// 							<div className="textContainer">
// 								<h3 className="projectName">
// 									{project.title}
// 								</h3>
// 								<p className="projectDescription">
// 									{project.Description}
// 								</p>
// 								<ul className="projectTech">
// 									{project.Frameworks.map(
// 										(framework) => {
// 											return (
// 												<li className="projectFramework">
// 													{framework}
// 												</li>
// 											);
// 										}
// 									)}
// 								</ul>
// 							</div>
// 							<div className="projectImageWrapper">
// 								<img
// 									src={project.Preview}
// 									alt=""
// 									className="projectImage"
// 									height={1056}
// 									width={1440}
// 								/>
// 							</div>
// 						</div>
// 					);
// 				})}
// 		</>
// 	);
// }

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
							<span className="lineTitle"></span>
							<h2>About me</h2>
							<span className="lineTitle"></span>
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
							<span className="lineTitle"></span>
							<h2 className="projectTitle">Project</h2>
							<span className="lineTitle"></span>
						</div>
						<Project />
					</div>
				</div>
				<Contact />
			</div>
		</>
	);
}
