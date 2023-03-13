import "./menuMobileStyle.css";

export default function MenuMobile() {
	return (
		<>
			<div className="section menuMobile">
				<nav className="navMenuMobile">
					<ul>
						<li>
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#">About</a>
						</li>
						<li>
							<a href="#">Projects</a>
						</li>
						<li>
							<a href="#">Contact</a>
						</li>
					</ul>
				</nav>
				<div className="socials">
					<div className="social"></div>
					<div className="social"></div>
					<div className="social"></div>
					<div className="social"></div>
				</div>
			</div>
		</>
	);
}
