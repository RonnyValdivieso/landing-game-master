import Typist from 'react-typist';
import useSound from 'use-sound';

const StartTypingSound = (props) => {
	const step = props.step;
  const [play, {stop}] = useSound('/sounds/Voz-015.mp3', {volume: 0.3});

	return (
		<div>
			{step.text}
			<Typist key={step.id} onCharacterTyped={play} onTypingDone={stop} avgTypingDelay={90} onLineTyped={props.showOptions()}>
				{/* {step.text} */}
				<br/>
				{step.question}
			</Typist>
		</div>
	);
};

export default StartTypingSound;