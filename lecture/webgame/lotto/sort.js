const array = [3, 2, 9, 7, 5, 8, 6, 4, 1];

// 원본이랑 똑같이 복사
// [3, 2, 9, 7, 5, 8, 6, 4, 1]
array.slice(); 
array === array.slice // false

// 오름차순 : [1, 2, 3, 4, 5, 6, 7, 8, 9]
array.slice().sort((a,b) => a - b);

// 내림차순 : [9, 8, 7, 6, 5, 4, 3, 2, 1]
array.slice().sort((a,b) => b - a);

const arr1 = ['apple', 'orange', 'grape', 'banana', 'kiwi'];

// 기본이 오름차순인데 적용(X), ["apple", "orange", "grape", "banana", "kiwi"]
arr1.slice(); 

// 문자열 원소인 배열에서 오름차순 적용(X)
arr1.slice().sort((a,b) => a-b);

// 문자열 원소인 배열에서 내림차순 적용(X) 
arr1.slice().sort((a,b) => b-a); 

// 오름차순 : ["apple", "banana", "grape", "kiwi", "orange"]
arr1.slice().sort((a,b) => a[0].charCodeAt() - b[0].charCodeAt()); 

// 내림차순 : ["orange", "kiwi", "grape", "banana", "apple"]
arr1.slice().sort((a,b) => b[0].charCodeAt() - a[0].charCodeAt());

// 문자열의 첫 글자가 같은 경우 localeCompare 메소드 사용
// 오름차순 : ["apple", "banana", "grape", "kiwi", "orange"] 
arr1.slice().sort((a,b) => a.localeCompare(b));

// 내림차순 : ["orange", "kiwi", "grape", "banana", "apple"]
arr1.slice().sort((a,b) => b.localeCompare(a));

const arr2 = ['가위', '다람쥐', '나라', '하늘', '카드'];

// 오름차순 : ["가위", "나라", "다람쥐", "카드", "하늘"]
arr2.slice().sort((a,b) => a.localeCompare(b));

// 내림차순 : ["하늘", "카드", "다람쥐", "나라", "가위"]
arr2.slice().sort((a,b) => b.localeCompare(a));

const arr3 = ['af', 'ab'];
arr3.sort((a,b) => a - b); // ["af", "ab"]
arr3.sort((a,b) => a.localeCompare(b)); // 사전 순서(오름차순) : ["ab", "af"]
arr3.sort((a,b) => b.localeCompare(a)); // 사전의 반대 순서(내림차순) : ["af", "ab"]