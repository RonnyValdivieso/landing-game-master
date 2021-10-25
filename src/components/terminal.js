import { useState } from "react";
import data from "../data.json";
import Options from './options';
import Intro from "./intro";
import Typist from 'react-typist';
import useSound from 'use-sound';

const Terminal = () => {
	let options = data.options;
	const [currentStepId, setStepId] = useState(-1);
	const [step, setStep] = useState(data.intro);
	const [play, {stop}] = useSound('/sounds/Voz-015.mp3', {volume: 0.1});

	const [show, setShowOptions] = useState(false);
  const showOptions = () => setShowOptions(true);
	const onSelectedOption = (id) => {
		console.log('id seleccionado', id);
		console.log('current id', currentStepId);
		const nextStep = options.filter(x => x.id === id)[0];
		setStep({...nextStep});
		// setShowOptions(false);
		if (id !== currentStepId) {
			setShowOptions(false);
		}
		setStepId(nextStep.id);
	};
	
	return (
		<div id="terminal">
			<div className="terminal-content">		
				{/* <Intro step={step} showOptions={showOptions}/> */}
				{/* {step.text} */}
				<Typist key={step.id} 
								// onCharacterTyped={play}
								onTypingDone={() => { showOptions(); stop();} } avgTypingDelay={60}>
					{/* {step.text} */}
					<br/>
					<br/>
					<Typist.Delay ms={800}/>
					{step.question}
				</Typist>
				
				<div id="options">
					{ show ? <Options questionId={step.id} options={step.options} onSelectedOption={onSelectedOption}/> : null }
				</div>
			</div>
		</div>
	);
};

export default Terminal;