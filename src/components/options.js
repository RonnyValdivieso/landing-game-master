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
					<button onClick={() => handleClick(op)}>{op.text}</button>
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