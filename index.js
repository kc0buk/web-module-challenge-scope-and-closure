// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 *    counter1 uses a closure (the second function), a count variable that is contained within the function scope, and another variable (counter1) that can maintain the count after the function terminates, while the count variable in counter2 is a global variable.
 * 2. Which of the two uses a closure? How can you tell?
 *    counter1 returns returns a function, which is the embedded function, aka a closure.
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better?
 *    counter1 may be prefereble when multiple independent counts need to be maintained (e.g. counter1, counter3, counter4) because each separate value of the count can be held in the variable, while the function an be resused by all variables. If I wanted to create multiple different counters with the structue of counter2, I would need to rewrite the function again each time.
 *
*/
console.log('******************** TASK 1 ********************');

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}

/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */
console.log('******************** TASK 2 ********************');

function inning(){
  let score = 0;
  function points() {
    score = (Math.floor(Math.random() * 3));
    return score;
  }
  return points;
}

const pointsScored = inning();

console.log(pointsScored());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 
console.log('******************** TASK 3 ********************');

function finalScore(callback, num){
  let homeScore = 0;
  let awayScore = 0;
    for (let i = 0; i < num; i++) {
      homeScore = homeScore + callback();
      awayScore = awayScore + callback();
      // console.log(i + ' : Home ' + homeScore + ' : ' + pointsScored() + ' : Away ' + awayScore + ' : ' + pointsScored());
  }

  return {"Home" : homeScore, 
          "Away" : awayScore};

}

console.log(finalScore(inning(),9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

function scoreboard(/* CODE HERE */) {
  /* CODE HERE */
}


