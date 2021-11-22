// alert("Le JavaScript fonctionne !")

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
function play(){
	// document.querySelector("#explication").style.color=red;
	document.getElementById("#menu").style.visibility=collapse;
}

let score = 0;
let y = 7;
let x = 6;
let broken = false;
let main_car = "main_car_1";//main_car represente la claase de la voiure utilisee

//pour le menu
document.querySelector("#menu_car1").classList.add("main_car_1");
function car1(){
	
	document.querySelector("#menu_car2").classList.remove("selected_car");
	main_car = "main_car_1";
	document.querySelector("#menu_car1").classList.add("selected_car");
	console.log(main_car);
}
function car2(){
	document.querySelector("#menu_car1").classList.remove("selected_car");
	main_car = "main_car_2";
	document.querySelector("#menu_car2").classList.add("selected_car");
	console.log(main_car);
}

document.querySelector("#case1_7").classList.add("car");

	
console.log(y,x);
document.querySelector("#case"+y+"_"+x).classList.add(main_car);
window.addEventListener("keypress",(e) =>{
	
    console.log(e);
    console.log(y,x);

    if (e.key === "q" && x>5){
        document.getElementById("case"+y+"_"+x).classList.remove(main_car);
        x-=1;
	}
    if (e.key === "d" && x<8){	
        document.getElementById("case"+y+"_"+x).classList.remove(main_car);
        x+=1;
		}
    if (e.key === "z" && y>0){
        document.getElementById("case"+y+"_"+x).classList.remove(main_car);
    	y-=1;
	}
    if (e.key === "s" && y<7){
        document.getElementById("case"+y+"_"+x).classList.remove(main_car);
		y+=1;
	}
	if (x=== 7 && y ===1){
		document.getElementById("case"+y+"_"+x).classList.add(main_car+"broken");
		broken = true;
	}
	else{
		document.getElementById("case"+y+"_"+x).classList.add(main_car);
	}	
})


// var rightPressed = false;
// var leftPressed = false;
// var paddleX = 230;
// document.addEventListener("keydown", keyDownHandler, false);
// document.addEventListener("keyup", keyUpHandler, false);
 

