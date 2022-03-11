import "./Scheme.scss";
import image1 from "../../images/1.png";
import image2 from "../../images/2.jpeg";
import image3 from "../../images/3.jpeg";
import next from "../../images/next.svg";

const Scheme = () => {
	return (
		<ul className="scheme">
			<li className="scheme__item">
				<img className="scheme__image" src={image1} alt="" />
				<span> step 1 </span>
			</li>
			<span className="scheme__arrow">
				<img src={next} alt="" />
			</span>
			<li className="scheme__item">
				<img className="scheme__image" src={image2} alt="" />
				<span> step 2 </span>
			</li>
			<span className="scheme__arrow">
				<img src={next} alt="" />
			</span>
			<li className="scheme__item">
				<img className="scheme__image" src={image3} alt="" />
				<span> step 3 </span>
			</li>
		</ul>
	);
};

export default Scheme;
