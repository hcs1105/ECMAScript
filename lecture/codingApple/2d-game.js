const canvas = document.querySelector('.canvas-1');
const context = canvas.getContext('2d'); 
const obstacleSet = [];

let timer = 0;
let jump = false;
let jumpTimer = 0;
let animation;

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
		context.fillStyle = '#000';
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
	animation = requestAnimationFrame(animationFrames);
	timer++;

	context.clearRect(0, 0, canvas.width, canvas.height);

	if(timer % 120 === 0) {
		const obstacle_1 = new Obstacle();
		obstacle_1.draw();
		obstacleSet.push(obstacle_1);
	}

	obstacleSet.forEach((element, i, o) => {
		// X 좌표가 0 미만이면 필요 없는 장애물 제거
		if(element.x <= 0) {
			o.splice(i, 1);
		}
		element.x--;
		collisionCheck(dinosaur, element); // 주인공과 모든 장애물의 충돌을 체크해야 되므로
		element.draw();
	});

	if(jump === true) {
		dinosaur.y -= 1.5;
		jumpTimer++;
	} else {
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

// 충돌 확인(collision check, collision detection)
function collisionCheck(dinosaur, obstacle_1){
	const diff_collision_x = obstacle_1.x - (dinosaur.x + dinosaur.width);
	const diff_collision_y = obstacle_1.y - (dinosaur.y + dinosaur.height);

	if(diff_collision_x < 0 && diff_collision_y < 0) {
		alert('충돌했어요! 게임 다시 시작');
		context.clearRect(0, 0, canvas.width, canvas.height);
		cancelAnimationFrame(animation);
		location.reload();
	}
}

// 스페이스바를 누르면 공룡 접프하기
document.addEventListener('keydown', e => {
	if(e.code === 'Space') {
		jump = true;
	}
});
