import "./About.scss";

const About = ({ title, aboutItems }) => {
	return (
		<div className="about">
			<h2 className="about__title">{title}</h2>
			<ul className="about__list">
				{aboutItems.map((element, index) => {
					return (
						<li key={index} className="about__item">
							{element}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default About;
