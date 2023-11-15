/**
 * async / await
 * await 키워드는 Promise 오브젝트에만 쓸 수 있다.
 */
const getPromise = (seconds) => new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('완료');
	}, seconds * 1000);
});

async function runner(){
	try {
		const result_1 = await getPromise(1);
		const result_2 = await getPromise(2);
		const result_3 = await getPromise(1);
	
		console.log(result_1); // 완료
		console.log(result_2); // 완료
		console.log(result_3); // 완료
	} catch(e) {
		console.log(e);
	} finally {
		console.log('finally');
	}
}

runner();
console.log('실행 끝');