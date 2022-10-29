const prompt=require("prompt-sync")({sigint:true});
let num = Math.floor(Math.random() *101);
console.log("\nGuess a no. between 1 to 100");
let totalGuesses = 100;
do{
        let userInput = parseInt(prompt("Enter the No : "));
        if(userInput==num)
        {
            break;
        }
        else if(userInput>num)
        {
            console.log("No is less than ",userInput);
        }
        else
        {
            console.log("No is greter than ",userInput);
        }

        totalGuesses=totalGuesses-1;


  }while(totalGuesses>0);

if(totalGuesses>0)
{
    console.log("Your score = ",totalGuesses);
}
else
{
    console.log("You Lost");
}

