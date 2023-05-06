import React, {useState, useEffect} from 'react';
const Home = props => {
	console.log("Running Home Component") ;
	const [changeState, setChangeState] = useState(false);
	
	useEffect(() => {
		setTimeout(() => {setChangeState(true)}, 1000);
	}, [])
	
	return <Test />
}

export default Home;

export const Test = React.memo(props => {
	console.log("Running Test Component");
	return <div>test div</div>
})