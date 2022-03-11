import "./Feedback.scss";
import image2 from "../../images/2.jpeg";
import image3 from "../../images/1.png";

const Feedback = () => {
	return (
		<div className="feedback">
			<h2>Feedback</h2>
			<ul className="feedback__list">
				<li className="feedback__item">
					<div className="feedback__author">
						<p className="feedback__info">
							<img
								className="feedback__photo"
								src={image2}
								alt=""
							/>
							<span className="feedback__name">Александер</span>
						</p>
						<p className="feedback__text">
							Lorem ipsum — классический текст-«рыба» (условный,
							зачастую бессмысленный текст-заполнитель,
							вставляемый в макет страницы). Является искажённым
							отрывком из философского трактата Марка Туллия
							Цицерона «О пределах добра и зла», написанного в 45
							году до н. э.
						</p>
					</div>
				</li>

				<li className="feedback__item">
					<div className="feedback__author">
						<p className="feedback__info">
							<img
								className="feedback__photo"
								src={image3}
								alt=""
							/>
							<span className="feedback__name">Еухения</span>
						</p>
						<p className="feedback__text">
							Lorem ipsum — классический текст-«рыба» (условный,
							зачастую бессмысленный текст-заполнитель,
							вставляемый в макет страницы). Является искажённым
							отрывком из философского трактата Марка Туллия
							Цицерона «О пределах добра и зла», написанного в 45
							году до н. э.
						</p>
					</div>
				</li>

				<li className="feedback__item">
					<div className="feedback__author">
						<p className="feedback__info">
							<img
								className="feedback__photo"
								src={image2}
								alt=""
							/>
							<span className="feedback__name">Александер</span>
						</p>
						<p className="feedback__text">
							Lorem ipsum — классический текст-«рыба» (условный,
							зачастую бессмысленный текст-заполнитель,
							вставляемый в макет страницы). Является искажённым
							отрывком из философского трактата Марка Туллия
							Цицерона «О пределах добра и зла», написанного в 45
							году до н. э.
						</p>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default Feedback;
