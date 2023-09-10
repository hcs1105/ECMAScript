const canvas = document.querySelector('.canvas-1');
const context = canvas.getContext('2d'); 
const obstacleSet = [];

let timer = 0;
let jump = false;
let jumpTimer = 0;

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

/*
 * 네모 그리는 방법
	 context.fillStyle = '#008000';
	 context.fillRect(10, 10, 100, 100);
 */

// 등장 캐릭터의 속성을 object 형태로 정리하면 편함.
const dinosaur = {
	x : 10,
	y : 200,
	width : 50,
	height : 50,
	draw : function() {
		context.fillStyle = '#008000';
		context.fillRect(this.x, this.y, this.width, this.height);
	}
};

/*
 * 장애물들은 width와 height 값이 다를 수 있음.
 * 장애물도 공룡처럼 속성을 object 형태로 정리하면 편함.
 * 여러 개의 장애물을 Array에 담아서 관리하면 편함.
 * 참고) 실행 횟수는 모니터 FPS에 따라 다름.
 */
class Obstacle {
	constructor() {
		this.x = 500;
		this.y = 200;
		this.width = 50;
		this.height = 50;
	}
	draw() {
		context.fillStyle = '#f00';
		context.fillRect(this.x, this.y, this.width, this.height);
	}
}



function animationFrames() {
	requestAnimationFrame(animationFrames);
	timer++;

	context.clearRect(0, 0, canvas.width, canvas.height);

	if(timer % 120 === 0) {
		const obstacle_1 = new Obstacle();
		obstacle_1.draw();
		obstacleSet.push(obstacle_1);
	}

	obstacleSet.forEach((element, i) => {
		// X 좌표가 0 미만이면 필요 없는 장애물 제거
		if(element.x <= 0) {
			console.log('X 좌표가 0 미만이면 필요 없는 장애물 제거');
			obstacleSet.splice(i, 1);
		}
		element.x--;
		element.draw();
	});

	if(jump === true ) {
		dinosaur.y--;
		jumpTimer++;
	} 

	if(jump === false ) {
		if(dinosaur.y < 200) {
			dinosaur.y++;
		}
	}

	if(jumpTimer > 100) {
		jump = false;
		jumpTimer = 0;
	}
	
	console.log(obstacleSet);

	dinosaur.draw();
}

animationFrames();

// 스페이스바를 누르면 공룡 접프하기
document.addEventListener('keydown', (e) => {
	if(e.code === 'Space') {
		jump = true;
	}
});
