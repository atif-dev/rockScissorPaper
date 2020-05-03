const play = () =>{
	document.querySelectorAll("p")[0].innerHTML = "Player 1";
	document.querySelectorAll("p")[1].innerHTML = "Player 2";

	var randomNumber1 = Math.floor(Math.random() * 3) + 1; //1-3
	var randomHandImage = "hand" + randomNumber1 + ".png"; //hand1.png - hand3.png

	var randomImageSource = "Images/" + randomHandImage; //Images/hand1.png - images/hand3.png
	var image1 = document.querySelectorAll("img")[0];

	image1.setAttribute("src", randomImageSource);


	var randomNumber2 = Math.floor(Math.random() * 3) + 1;
	var randomHandSource2 = "Images/hand" + randomNumber2 + ".png";

	document.querySelectorAll("img")[1].setAttribute("src", randomHandSource2);

	//If player 1 wins
	if (randomNumber1 == 2 && randomNumber2 == 3) {
	  document.querySelector("h2").innerHTML = " Player 1 Wins🚩!";
	  document.querySelectorAll("p")[0].innerHTML = "Player 1🏆";

	}
	else if (randomNumber1 == 3 && randomNumber2 == 2) {
	  document.querySelector("h2").innerHTML = "Player 2 Wins🚩! ";
	  document.querySelectorAll("p")[1].innerHTML = "Player 2🏆";

	}
	else if(randomNumber1 == 2 && randomNumber2 == 1){
	   document.querySelector("h2").innerHTML = "Player 2 Wins🚩! ";
	   document.querySelectorAll("p")[1].innerHTML = "Player 2🏆";
	}else if(randomNumber1 == 1 && randomNumber2 == 2){
		document.querySelector("h2").innerHTML = " Player 1 Wins🚩!";
		document.querySelectorAll("p")[0].innerHTML = "Player 1🏆";
	}else if(randomNumber1 == 3 && randomNumber2 == 1){
		document.querySelector("h2").innerHTML = " Player 1 Wins🚩!";
		document.querySelectorAll("p")[0].innerHTML = "Player 1🏆";
	}else if(randomNumber1 == 1 && randomNumber2 == 3){
		document.querySelector("h2").innerHTML = " Player 2 Wins🚩!";
		document.querySelectorAll("p")[1].innerHTML = "Player 2🏆";
	}else{
		document.querySelector("h2").innerHTML = "Draw😁!";
	}
}
