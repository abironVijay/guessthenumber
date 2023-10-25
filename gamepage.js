// generation of random value
var y=Math.floor(Math.random()*10+1);
// count of attempts
// until hit
var guess=1; 
var x=document.getElementById("guessField").value;
// function for the number sent by the user
function submit() {
    if (x==y) {
        alert("CONGRATULATIONS!!" + player_name+ "YOU GUESSES IT RIGHT IN"+guess+"GUSSES");
    } else if(x > y){
       guess++;
       alert("OOPS SORRY !!TRY A SMALLER NUMBER");

    }
    else{
        guess++;
        alert("OOPS SORRY !! TRY A GREATER NUMBER")
    }
}
