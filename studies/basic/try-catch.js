/**
 * try - catch
 * 
 * 1) When it occurs -> it is said to be thrown. ==> throw
 * 2) When you explicitly recognize it -> it is said to catch it. ==> catch
 */

function runner() {
	try {
		console.log('hello'); // hello
		throw new Error('큰 문제가 생겼습니다.');
		console.log('hcs1105'); 
	} catch(e) {
		console.log('catch'); // catch
		console.log(e); // Error: 큰 문제가 생겼습니다.
	} finally {
		console.log('finally'); // finally
	}
}

runner();