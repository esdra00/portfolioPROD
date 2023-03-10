// function Project(props) {
// 	let left = props.orientation;
// 	return (
// 		<>
// 			<div
// 				className={`projectContainer ${
// 					left ? "textLeft" : "textRight"
// 				}`}
// 			>
// 				<div
// 					className={`textContainer ${
// 						left ? "textLeft" : "textRight"
// 					}`}
// 				>
// 					<h3 className="projectName">Project1</h3>
// 					<div className="projectDescription">
// 						Lorem ipsum dolor sit amet consectetur adipisicing
// 						elit. Dicta qui delectus repellendus maxime a
// 						nihil veritatis atque debitis pariatur, accusamus,
// 						labore dolorum? Nulla facilis qui illo, esse non
// 						nemo at quibusdam error ipsum eius harum minus
// 						iure? Laborum, consequatur sapiente hic dolor
// 						eligendi velit ipsum nulla sunt ex ipsa assumenda?
// 					</div>
// 					<div className="projectTech">
// 						<ul>
// 							<li>React</li>
// 							<li>Javascript</li>
// 							<li>Bootstrap</li>
// 							<li>Next</li>
// 						</ul>
// 					</div>
// 				</div>
// 				<div className="projectImage"></div>
// 			</div>
// 		</>
// 	);
// }

// /* PROJECT SECTION */
// <div className="section projectSection">
// 	<div className="containerSection">
// 		<div className="titleContainer">
// 			<h2 className="projectTitle">Project</h2>
// 			<span className="projectLine"></span>
// 		</div>
// 		<Project />
// 		<Project orientation="left" />
// 		<Project />
// 		<Project orientation="left" />
// 		{/* <Project /> */}
// 	</div>
// </div>;

// /* PROJECT SECTION */

// .projectSection {
// 	height: auto;
// 	padding: 100px;
// }
// .containerSection {
// 	margin: 50px;
// 	display: flex;
// 	flex-direction: column;
// 	gap: 150px;
// }
// .titleContainer {
// 	display: flex;
// 	align-items: center;
// }
// .projectTitle {
// 	text-transform: uppercase;
// 	/* font-size: 4rem; */
// }
// .projectLine {
// 	height: 1px;
// 	width: 90%;
// 	margin-left: 50px;
// 	background-color: black;
// }
// /* project component */
// .projectContainer {
// 	width: 100%;
// 	margin: auto;
// 	position: relative;
// 	display: flex;
// }
// .projectImage {
// 	/* position: absolute; */
// 	height: 300px;
// 	width: 500px;
// 	border-radius: 30px;
// 	background-color: beige;
// }
// .textContainer {
// 	position: absolute;
// 	top: 50%;
// 	-ms-transform: translateY(-50%);
// 	transform: translateY(-50%);
// 	/* right: 0; */
// 	width: 60%;
// }
// .textRight {
// 	text-align: right;
// 	right: 0;
// }
// .textLeft {
// 	text-align: left;
// 	left: 0;
// 	flex-direction: row-reverse;
// }
// .projectName {
// 	margin-bottom: 20px;
// }
// @media (max-width: 860px) {
// 	.containerSection {
// 		margin: 25px;
// 		gap: 50px;
// 	}
// 	.textContainer {
// 		width: 85%;
// 		top: 50%;
// 		left: 50%;
// 		transform: translate(-50%, -50%);
// 		text-align: center;
// 	}
// 	.projectContainer {
// 		justify-content: center;
// 	}
// }

/* media written for old project section */
/* @media (max-width: 860px) {
	.containerSection {
		margin: 25px;
		gap: 50px;
	}
	.textContainer {
		width: 85%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
	}
	.projectContainer {
		justify-content: center;
	}
} */