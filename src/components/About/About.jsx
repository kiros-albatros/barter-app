import "./About.scss";

const About = ({ title, aboutItems }) => {
	return (
		<div className="about">
			<h2 className="about__title">{title}</h2>
			<ul className="about__list">
				{aboutItems.map((element) => {
					return <li className="about__item">{element}</li>;
				})}
			</ul>
		</div>
	);
};

export default About;
