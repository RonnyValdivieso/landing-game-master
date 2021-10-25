import { useState } from "react";

function Options(props) {
	const questionId = props.questionId;
	const	options = props.options;
	const [customClass, setClass] = useState('');
	const handleClick = (op, index) => {
		if (questionId === op.nextOption) {
			op.text = op.answer;
			// setClass('option-answer');
			var elements = document.querySelectorAll('.option');
			console.log(elements);
			var currentElement = Array.from(elements)
				.filter(x => x.getAttribute('data-key') == index)[0];
			console.log(currentElement);
			currentElement.className = 'option-answer';
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
			<ul>{items}</ul>
		);
	}

	return("");
}

export default Options;