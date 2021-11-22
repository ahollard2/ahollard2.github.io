let main_car = "main_car_1";
document.querySelector("#menu_car1").classList.add("selected_car");

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
function start(){
	
	// document.querySelector("#explication").style.color=red;
	document.querySelector("#play_btn").style.transition="0.4s ease-out all";
	document.querySelector("#play_btn").style.transform="scale(1.7)";
	document.querySelector("#play_btn").style.opacity="0.5";
	document.querySelector("#menu").style.visibility="hidden";
	
	function sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	  }
	  async function count() {
		document.querySelector("#compte_a_rebour").style.visibility="visible";
		let a;
		for (let i = 0; i < 4; i++) {
			a =3-i
			if (a===0){
				document.querySelector("#compte_a_rebour").style.color="green";
			}
			document.querySelector("#compte_a_rebour").innerHTML = a;

			await sleep(1000);
			if (a==0){
				document.querySelector("#compte_a_rebour").style.visibility="hidden";

			}
			
		}
		
	}
	count();

	play();

	
	document.querySelector("#case"+7+"_"+6).classList.add(main_car);
}
function play(){
let score = 0;
let y = 7;
let x = 6;
let x1= 0;
let y1 = 7;
let x2 = 3;
let y2 = 7;
let x3 = 6;
let y3 = 7;
let x4 = 7;
let y4 = 5;
let broken = false;
let a =1;
let main_car = "main_car_1";//main_car represente la claase de la voiure utilisee
let l = [];
let newl = [];
let carun = "car_un"
let cardeux = "car_deux"
let cartrois = "car_trois"
let carquatre = "car_quatre"
let temps =200
const random_l = [0,0,0,0,0,0,0,1,1,1,2,2,3]
function new_car(){
	const random = random_l [ Math.floor(random_l.length * Math.random())];
	
	for (let i=0; i<random; i++){
		let newl = l.push(Math.floor(Math.random() *3) + 5);
		}
		l = newl
	
	}
	
new_car();
//pour le menu

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

	
// console.log(y,x);

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
	document.getElementById("case"+y+"_"+x).classList.add(main_car);
	
})



function voiture1(){
	document.getElementById("case"+x1+"_"+y1).classList.remove(carun);
	x1+=1;
	if (x1===8){
		x1= 0;
		y1 = getRandomArbitrary(5,8);
	}
    if (x === y1 && y===x1){
		alert('casse'); 
		console.log(x+'='+x1+'et'+y+'='+y1);
		
	}
	
	console.log(temps)

	
	document.getElementById("case"+x1+"_"+y1).classList.add(carun);
	
}
function voiture2(){
	document.getElementById("case"+x2+"_"+y2).classList.remove(cardeux);
	x2+=1;
	if (x2===8){
		x2= 0;
		y2 = getRandomArbitrary(5,8);
	}
    if (x === y2 && y===x2){
		alert('casse'); 
		
		
	}
	
	console.log(temps)

	
	document.getElementById("case"+x2+"_"+y2).classList.add(cardeux);
	
}
function voiture3(){
	document.getElementById("case"+x3+"_"+y3).classList.remove(cartrois);
	x3+=1;
	if (x3===8){
		x3= 0;
		y3 = getRandomArbitrary(5,8);
	}
    if (x === y3 && y===x3){
		alert('casse'); 
		
	}
	
	console.log(temps)

	
	document.getElementById("case"+x3+"_"+y3).classList.add(cartrois);
	
}
function voiture4(){
	document.getElementById("case"+x4+"_"+y4).classList.remove(carquatre);
	x4+=1;
	if (x4===8 ){
		x4= 0;
		y4 = getRandomArbitrary(5,8);
	}
    if (x === y4 && y===x4){
		alert('casse'); 
		
		
	}
	
	

	
	document.getElementById("case"+x4+"_"+y4).classList.add(carquatre);
	
}

function getRandomArbitrary(min,max) {
	return Math.round(Math.random() * (max - min) + min);
}




setInterval(voiture1,temps);
setInterval(voiture2,temps);
setInterval(voiture3,temps);
setInterval(voiture4,temps)


}	
