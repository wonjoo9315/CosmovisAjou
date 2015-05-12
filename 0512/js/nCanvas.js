//last work	:2015-05-11
	
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

//----------------------------------------------------------------------------------
window.onload = function(){
	"use strict"; //if 불안정한 경우 발생하면, 비활성화
	// windowResizing();
	initApp(5);
	// updateApp();
};

function initApp(num_movie){
	// Canvas.loadContent();
	for(var i = 0;i<num_movie;i++){
	node[i] = new tempNode('',0,0,0,0);
	}
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
//----------------------------------------------------------------------------------
//Position

//---------------------------------------------------------------------------------
var node = new Array(); //total node
var num_movie = 0;
function tempNode (_name, _posX, _posY, _dx, _dy){
	this.name = _name; 
	this.posX = _posX;
	this.posY = _posY;
	this.dx = _dx;
	this.dy = _dy;

}


//----------------------------------------------------------------------------------
function loadJSON(path, success, error)
{
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function()
	{
		if (xhr.readyState === XMLHttpRequest.DONE) {
			if (xhr.status === 200) {
				if (success)
					success(JSON.parse(xhr.responseText));
			} else {
				if (error)
					error(xhr);
			}
		}
	};
	xhr.open("GET", path, true);
	xhr.send();
}


loadJSON('./js/Moviedata.json',
	 function(data) { 
		// console.log(data); //data input 확인
		 for(var i = 0;i<num_movie;i++){
			node[i].name = data[i].Title;
			 }
			 num_movie = data.length;
			 console.log(node[0].posX);
			 console.log(num_movie);
		 },
	 function(xhr) { console.error(xhr); }
);//END loadJSON

var Canvas_width = 1200;
var Canvas_height = 800;

	
function setRandomPos(num_movie){ 
	for(var j=0; j<num_movie; j++){
		node[j].posX=((Math.random()*(Canvas_width-5))+5);
		node[j].posY=((Math.random()*Canvas_height-5)+5);
		console.log(node[0].posX);
		//Senti_disp_A[j] = 0;
	}//변수값 초기화
}

//감정어와의 위치값 계산
var temp = [0,0];//임시변수
function F_A(value){
	var k =50;//프레임의 넓이를 총 노드의 개수로 나눈 값의 제곱근을 상수 C를 곱한 값이나 상수지정_헬로모카참조
	value*value/k
}
function moveSentiWord(num_node,sword){
		/*함수로 temp값 retren하게 해서 계산하자
		temp = 
		Senti_disp_A[j] = Senti_disp_A[j]*/
		/*
		if(Math.abs(temp[0])==0)
			temp[0]=0.0001;
		if(Math.abs(temp[1])==0)
			temp[1]=0.0001;
			//이걸 넣으면 무한대가 나오고 안넣으면 nan이 뜸 좀더 생각해 보자.
			*/

		temp[0]=node[num_node].posX - loadedData[sword][1];//달콤하다의 posX
		temp[1]=node[num_node].posY - loadedData[sword][2];//달콤하다의 posY
		node[num_node].dx = node[num_node].dx-(temp[0]/Math.abs(temp[0]))*((temp[0])*(temp[0])/50);
		console.log(node[num_node].dx);
		console.log(temp[0]/Math.abs(temp[0]));
		console.log(((temp[0])*(temp[0])/50));
		node[num_node].dy = node[num_node].dy-(temp[1]/Math.abs(temp[1]))*((temp[1])*(temp[1])/50);
		node[num_node].posX = node[num_node].posX+node[num_node].dx;
		node[num_node].posY = node[num_node].posY+node[num_node].dy;

		console.log(node[num_node].dx);
	
}
//***작업중***


	CanvasOne.setStartPos = function(){

		/*영화의 위치정보*/
		ctx = this.Context;

		ctx.beginPath();
		ctx.fillStyle = "black";//내부색
		ctx.arc(this.Canvas.width/2,this.Canvas.height/2,5,0,2*Math.PI);
		ctx.closePath();
		ctx.fill();
		//ctx.beginPath();
		setRandomPos(5);
		//감정어영향
		for(var s=0;s<36;s++)//s=감정어의 갯수
		{moveSentiWord(0,s);
		console.log(s+1 + "번째 감정어");
		}
		
		console.log(node[0].dx);
		for(var k=0; k<num_movie; k++)
		{
			ctx.beginPath();
			ctx.arc(node[k].posX,node[k].posY,5,0,2*Math.PI);
			console.log(node[k].posX);
			ctx.closePath();
			ctx.fill();
			if(k==0)
				ctx.fillStyle = "Yellow";
			else
				ctx.fillStyle = "black";

		}
		//ctx.fill();
		//ctx.stroke;

	};//END CanvasOne.setStartPos

	

