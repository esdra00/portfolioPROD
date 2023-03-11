import "./projectStyle.css";
import projectsData from "/src/assets/data.json";

export default function Project() {
	return (
		<>
			{projectsData &&
				projectsData.map((project) => {
					return (
						<div
							className={`projectContainer ${project.Orientation}`}
							key={project.id}
						>
							<div className="textContainer">
								<h3 className="projectName">
									{project.title}
								</h3>
								<p className="projectDescription">
									{project.Description}
								</p>
								<ul className="projectTech">
									{project.Frameworks.map(
										(framework) => {
											return (
												<li className="projectFramework">
													{framework}
												</li>
											);
										}
									)}
								</ul>
							</div>
							<div className="projectImageWrapper">
								<img
									src={project.Preview}
									alt=""
									className="projectImage"
									height={1056}
									width={1440}
								/>
							</div>
						</div>
					);
				})}
		</>
	);
}
