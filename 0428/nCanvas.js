	/*36개 감정어휘 MDS상의 고정 위치값*/
	var loadedData = [ 
	/* happy */
	["달콤하다",1007,383,0],
	["신나다",895,232,0],
	["유쾌하다",994,121,0],
	["재미있다",807,281,0],
	["즐겁다",1010,239,80],
	["통쾌하다",770,139,0],
	["행복하다",923,328,0],
	["활기있다",868,62,0],
	["환상적이다",853,158,0],
	/* surprise */
	["감격스럽다",874,546,0],
	["감동적이다",816,494,0],
	["경이롭다",861,438,0],
	["굉장하다",768,430,0],
	["놀라다",696,224,0],
	["대단하다",927,481,0],
	["황홀하다",780,367,0],
	
	/* disgust */
	["구역질나다",278,221,0],	
	["불결하다",231,271,0],
	["잔인하다",304,283,0],
	
	/* boring */
	["평온하다",717,560,0],
	["나른하다",769,585,0],
	["지루하다",675,595,0],
	
	/* anger */
	["격분하다",190,388,0],
	["분노하다",112,353,0],
	
	/* sad */
	["가슴아프다",374,511,0],
	["서글프다",490,608,0],
	["슬프다",418,560,0],
	["쓸쓸하다",571,599,0],
	["안타깝다",523,561,0],
	["애석하다",261,470,0],
	
	/* fear */
	["공포스럽다",403,150,0],
	["등골이서늘하다",502,104,0],
	["무섭다",424,77,0],
	["무시무시하다",459,208,0],
	["소름끼치다",600,126,0],
	["오싹하다",535,166,0],
	];

	/*canvas 관련 변수 지정*/
	/*
	var canvas = document.getElementById("nCanvas");//canvas 변수 지정(ID:nCanvas)
	var ctx = canvas.getContext('2d');//context는 2D로
	var canvasWidth = canvas.width;//canvasWidth 변수 생성 및 초기화
	var canvasHeight = canvas.height;//canvasHeight 변수 생성 및 초기화
	*/

	
	/*canvas 색 채우기*/
	// ctx.fillStyle = "rgb(230,240,255)";
	// ctx.fillRect(0,0,canvasWidth,canvasHeight);
	// ctx.fill();

	/*canvas 내부 text, font 지정*/
	// ctx.font = "15px Malgun Gothic";
	// ctx.strokeStyle = "black";//font 테두리색
	// ctx.fillStyle = "white";//font 내부색
	// ctx.textAlign = "center";//가운데정렬


// };


//---------------------------------------------------------------------------------------------------------
window.onload = function(){
	"use strict"; //if 불안정한 경우 발생하면, 비활성화
	// windowResizing();
	initApp();
	// updateApp();
};

function initApp(){
	// Canvas.loadContent();
	CanvasOne.init();
}

var CanvasOne = {}
	// CanvasOne.kconst = 0;
	// CanvasOne.LINE_VISIBLE = false;
	// CanvasOne.LABEL_VISIBLE = true;
	CanvasOne.nodeSize = 1;
	// CanvasOne.transparency = 1;
	// CanvasOne.Loop = 100;
	// CanvasOne.MOUSE_IN = false;

	CanvasOne.init = function(){
		this.Canvas = document.getElementById('nCanvas');
		this.Context = this.Canvas.getContext('2d');

		var cvs = this.Canvas;



		// cvs.addEventListener("mousedown",Event.mouseDown,false);
		// cvs.addEventListener("mouseup",Event.mouseUp,false);
		// cvs.addEventListener("mousemove",Event.mouseMove,false);
		// cvs.addEventListener("mouseout",Event.mouseOut,false); //마우스 벗어남 감지
		// cvs.addEventListener("mousewheel",Event.mouseWheel,false);
		this.setMDSmap();
		this.setStartPos();

	};

	CanvasOne.setMDSmap = function(){
		ctx = this.Context;
		var cvsWidth = this.Canvas.width;//canvasWidth 변수 생성 및 초기화
		var cvsHeight = this.Canvas.height;//canvasHeight 변수 생성 및 초기화

		ctx.fillStyle = "rgb(230,240,255)";
		ctx.fillRect(0,0,cvsWidth,cvsHeight);

		ctx.font = "15px Malgun Gothic";
		ctx.strokeStyle = "black";//font 테두리색
		ctx.fillStyle = "white";//font 내부색
		ctx.textAlign = "center";//가운데정렬
		/*MDS 감정어휘 위치값 대입*/
		for(var i = 0; i < loadedData.length; i++)
		{
			ctx.strokeText(loadedData[i][0],loadedData[i][1],loadedData[i][2]);//텅빈 글씨
			//ctx.fillText(loadedData[i][0],loadedData[i][1],loadedData[i][2]);//채운 글씨
		}
		ctx.fill();
	};


	CanvasOne.setStartPos = function(){

		/*영화의 위치정보*/
		ctx = this.Context;

		// ctx.beginPath();
		ctx.fillStyle = "black";//내부색
		ctx.arc(this.Canvas.width/2,this.Canvas.height/2,10,0,2*Math.PI);
		ctx.fill();

	};