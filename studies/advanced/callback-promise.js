/**
 * Callback
 */
function waitAndRun_1(){
	setTimeout(() => {
		console.log('끝');
	}, 2000);
}

// waitAndRun_1();	

function waitAndRun_2(){
	setTimeout(() => {
		console.log('1번 콜백 끝');
		setTimeout(() => {
			console.log('2번 콜백 끝');
			setTimeout(() => {
				console.log('3번 콜백 끝');
			}, 2000);
		}, 2000);
	}, 2000);
}

// waitAndRun_2();

/**
 * Promise
 */
const timeoutPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('완료');
	}, 2000);
});

// timeoutPromise.then((res) => {
// 	console.log(res);
// });

const getPromise = (seconds) => new Promise((resolve, reject) => {
	let test = 1;
	setTimeout(() => {
		// if(test === 2) {
		// 	resolve('Promise 완료');
		// } else {
		// 	reject('Promise 에러');
		// }
		reject('Promise 에러');
	}, seconds * 1000);
});

// getPromise(3)
// 	.then((res) => {
// 		console.log('first then');
// 		console.log(res);
// 	})
// 	.catch((res) => {
// 		console.log('first catch');
// 		console.log(res);
// 	})
// 	.finally(() => {
// 		console.log('finally');
// 	});


Promise.all([getPromise(1), getPromise(1), getPromise(1)]).then((res) => {
  console.log(res);
});