function Options(props) {
	const questionId = props.questionId;
	const	options = props.options;
	const handleClick = (op) => {
		if (questionId === op.nextOption) {
			op.text = op.answer;
		}
		props.onSelectedOption(op.nextOption);
	}
	
	if (!!options) {
		const items = options.map(op => {
			const index = options.indexOf(op);
			return (
				<li key={index}>
					{questionId !== 5 
					? <button onClick={() => handleClick(op)}>{op.text}</button> 
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