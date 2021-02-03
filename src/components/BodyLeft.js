import React from 'react';
import './BodyLeft.css';
import SortingCard from './SortingCard';
import NaivaCard from './NaivaCard';
import Longest from './Longest';
import Prefix from './Prefix';
import Kmp from './Kmp';
import KnapSack from './KnapSack';
import RabinKarp from './RabinKarp';
import MinimumSpanningTree from './MST/MinimumSpanningTree';

const BodyLeft = ({ setOutput }) => {
	return (
		<section
			className="container left-body mt2"
			data-side="left"
		>
			{/* sorting card */}
			<SortingCard />

			{/* nieve */}
			<NaivaCard />

			{/* Longest Comman Sequence */}
			<Longest />

			<Prefix />

			<KnapSack />

			<Kmp />

			<RabinKarp setOutput={setOutput} />

			<MinimumSpanningTree setOutput={setOutput} />
		</section>
	);
};

export default BodyLeft;
