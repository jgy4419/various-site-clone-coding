import React, { useEffect } from 'react';
import { ErrorBoundary, useErrorBoundary } from 'react-error-boundary';

const Person = () => {
	const person_name = '철수';
	const {showBoundary} = useErrorBoundary();

	useEffect(() => {
		const getPersonInfo = async () => {
			const new_error = new Error('API 호출에서 에러가 발생했어요.');
			try {
				const res = await fetch('https://jsonplaceholder.typicode.comm/posts/', {
					headers: {
						Accept: "application/json",
					},
					methos: "GET"
				});
				const data = await res.json();
				console.log(data);
			} catch (err) {
				showBoundary(new_error);
			}
		}
		getPersonInfo();
	}, []);

	return <div>{person_name}</div>
}

// FallbackComponent에 적용된 컴포넌트의 첫 번쨰 인자는
// 에러가 발생 시 에러 관련 내용들이 들어가게 된다.
const ErrorFallback = (err) => {
	console.log(err);
	return <div>에러났어요@@</div>
}

const Home = () => {
	return (
		<div>
			<ErrorBoundary FallbackComponent={ErrorFallback}>
				<Person/>
			</ErrorBoundary>
		</div>
	);
};

export default Home;