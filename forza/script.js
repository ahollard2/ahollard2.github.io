// alert("Le JavaScript fonctionne !")
let score;
score = 0
function maFonction() {
	document.querySelector("#monPara").style.color="red";
	

}

function foncRouge() {
	document.querySelector("#monPara").classList.remove("vert");
	document.querySelector("#monPara").classList.add("rouge");
}
function foncVert() {
	document.querySelector("#monPara").classList.remove("rouge");
	document.querySelector("#monPara").classList.add("vert");
}


function f_cat(){
	alert("yo")
	document.querySelector("#main_car").style.left=20;
}


function modifMessage() {
	document.querySelector("#monPara").innerHTML = "Bravo, vous avez cliqué sur le bouton !"
}

function foncEntre(){
	document.querySelector("#maDiv").classList.remove("blanc");
	document.querySelector("#maDiv").classList.add("rouge");
}
function foncQuitte() {
	document.querySelector("#maDiv").classList.remove("rouge");
	document.querySelector("#maDiv").classList.add("blanc");
}
// #casey_x, 
// let id_main_car;
// let x,y;
// x,y= 3,3
// id_main_car = "#case"+x+"_"+y
// document.querySelector("#case"+x+"_"+y).classList.add("main_car");
let y = 7;
let x = 6;
let broken = false;

document.querySelector("#case1_7").classList.add("car");
// const yellow = document.getElementById("case"+x+""+y);
// document.getElementById("case"+x+""+y).style.background="red";	
console.log(y,x);
document.querySelector("#case"+y+"_"+x).classList.add("main_car");
window.addEventListener("keypress",(e) =>{
	
    console.log(e);
    console.log(y,x);

    if (e.key === "q" && x>5){
        document.getElementById("case"+y+"_"+x).classList.remove("main_car");
        x-=1;
	}
    if (e.key === "d" && x<8){	
        document.getElementById("case"+y+"_"+x).classList.remove("main_car");
        x+=1;
		}
    if (e.key === "z" && y>0){
        document.getElementById("case"+y+"_"+x).classList.remove("main_car");
    	y-=1;
	}
    if (e.key === "s" && y<7){
        document.getElementById("case"+y+"_"+x).classList.remove("main_car");
		y+=1;
	}
	if (x=== 7 && y ===1){
		document.getElementById("case"+y+"_"+x).classList.add("main_car_broken");
		broken = true;
	}
	else{
		document.getElementById("case"+y+"_"+x).classList.add("main_car");
	}	
})

// var rightPressed = false;
// var leftPressed = false;
// var paddleX = 230;
// document.addEventListener("keydown", keyDownHandler, false);
// document.addEventListener("keyup", keyUpHandler, false);
 

