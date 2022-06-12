const getPlayerName = () => {
 let name = prompt("Please enter your name", "");
  const userDetails = {
    name: name,
    points: 0,
    level: 1
  }
  range1 = 1;
  range2 = 2;
  let userInput = prompt("kindly guess a number", "");
  return guessNumber(range1,range2,userInput,userDetails)
}

const guessNumber = (range1,range2,userInput,userDetails) => {
  userLevel = userDetails.level
  range2 = userLevel > 1 ? userLevel-- : range2
  let rand = randomNumber(range1,range2)
  if(userInput == rand){
    userDetails.points = userDetails.points + 1;
    userDetails.level = userDetails.level + 1;
    console.log(`Correct! ${userDetails.name}, you are now in stage ${userDetails.level}`);
  }else{
    console.log(`Incorrect guess ${userDetails.name}, you are still in stage ${userDetails.level}`);
  }
}

const randomNumber = (range1,range2) => {
  rand = Math.random() * (range2 - range1 + 1) + range1;
  return Math.floor(rand)                        
}

getPlayerName();

//comments
// was not able to work with cookies.. had issues a couple issues, due to deadline.. had to scrap it