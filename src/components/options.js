import { useState } from "react";
import SweetAlert from 'sweetalert2-react';

function Options(props) {
	const questionId = props.questionId;
	const	options = props.options;
	const [alert, showAlert] = useState({show: false, text: ""});
	const handleClick = (op, index) => {
		if (questionId === op.nextOption) {
			showAlert({show: true, text: op.answer});
			var elements = document.querySelectorAll('.option');
			var currentElement = Array.from(elements)
				.filter(x => x.getAttribute('data-key') == index)[0];

			if (!!currentElement) 
			{
				currentElement.className = 'wrong-answer';
				currentElement.setAttribute('disable', true);
			}
		}
		props.onSelectedOption(op.nextOption);
	}
	
	if (!!options) {
		const items = options.map(op => {
			const index = options.indexOf(op);
			return (
				<li className='option' key={index} data-key={index}>
					{questionId !== 5 
					? <button onClick={() => handleClick(op, index)}>{op.text}</button> 
					: <a href={op.answer} target="_blank" rel="noreferrer">{op.text}</a>}
				</li>
			);
		});

		return (
			<div>
				<ul>{items}</ul>
				<SweetAlert
					show={alert.show}
					title=""
					text={alert.text}
					onConfirm={() => showAlert({show: false, text: ""})}
				/>
			</div>
		);
	}

	return("");
}

export default Options;