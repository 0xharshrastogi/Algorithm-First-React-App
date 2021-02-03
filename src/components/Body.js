import React, { useState } from 'react';
import './Body.css';
import BodyLeft from './BodyLeft';
import BodyRight from './bodyRight';

const Body = () => {
	const [output, setOutput] = useState(null);

	return (
		<section className="wrapper split">
			{/* left */}
			<BodyLeft setOutput={setOutput} />

			{/* Right */}
			<BodyRight>{output}</BodyRight>
		</section>
	);
};
export default Body;
