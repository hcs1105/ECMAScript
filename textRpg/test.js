/*
 * 문제 1. 다음 다섯 개의 값을 각각 복사해 보세요. 여기서 복사라고 함은 복사본을 수정할 때 원본이 바뀌지 않는 것을 
 * 의미합니다. 객체라면 복사한 객체 내부의 값을 바꿔도 원본 객체의 값이 바뀌지 않아야 합니다.
 */

const a = 'b';
const c = ['d', true, 1];
const e = {g : 'h'};
const i = [{ j : 'k'}, { l : 'm'}];
const n = { o : { p : 'q'}};

const a1 = a;
const c1 = c.slice(); // 변수 C의 배열 안에 있는 요소들이 원시값이므로 slice() 메소드를 사용해도 됨.
const c1 = [...c];
const e1 = {...e}; // 객체 안에 객체가 들어 있지 않으므로
const i1 = JSON.parse(JSON.stringify(i));
const n1 = JSON.parse(JSON.stringify(n));

/*
 * 유제 1. 다음 값을 concat 메소드로 복사해 보세요. 여기서 복사라고 함은 복사본을 수정할 때 원본이 바뀌지 않는 것을 
 * 의미합니다. 객체라면 복사한 객체 내부의 값을 바꿔도 원본 객체의 값이 바뀌지 않아야 합니다.
 */

const g = ['1'];

const g1 = g.concat(); // ["1"]  