const readLineSync = require("readline-sync");
const chalk = require("chalk");
var userName = readLineSync.question("What is Your Name ? ");
var score = 0;
//highScores
var highScore = [
  {
    name: "Preetham Nayak",
    score: 20,
  },
  {
    name: "Muni Kumar",
    score: 18,
  },
];
//checking user intrested to play or not
var readyMsg = readLineSync.question(
  "Welcome 🙏  " +
    chalk.hex("#DEADED")(userName.toUpperCase()) +
    ' Lets Play Small Quiz About "IPL" Are You Ready? '
);
var str = readyMsg.toLowerCase();

//if yes  game continues
if (str === "yes") {
  console.log("--Lets See How Much Knowledge You have Regarding IPL--");
  console.log("--------------------------------");
  function play(question, answer) {
    var userAns = readLineSync.question(question);
    if (userAns.toUpperCase() === answer) {
      console.log(
        chalk.rgb(3, 157, 146)("You Are Right 🎉 ") +
          chalk.rgb(246, 181, 177)(userName)
      );
      score = score + 2;
    }

    //if no game ends with bye tag
    else {
      console.log(chalk.rgb(158, 28, 57)("You Are Wrong 😶 ") + userName);
      score = score - 1;
    }
    console.log(
      chalk.rgb(34, 144, 84)("Your Score is : ") +
        chalk.rgb(61, 185, 229)(score)
    );
  }
  var questions = [
    {
      question: `1.Which season(s) had the most number of hat-tricks ?
      A :2014
      B :2008 And 2017
      C :2009 And 2013\n`,
      answer: "B",
    },
    {
      question: `2.Which Australian has the best bowling figures in the IPL?
      A :Andrew Tye
      B :Adam Zampa
      C :James Faulkner\n`,
      answer: "B",
    },
    {
      question: `3.Which player holds the record for the fastest fifty in IPL?
       A :K.L.Rahul
      B :Nicholas Pooran
      C :Yuvraj Singh \n`,
      answer: "A",
    },
    {
      question: ` 4.Who was the captain of the Mumbai Indians in IPL 2012?
      A :Rohit Sharma
      B :Sachin Tendulkar
      C :Harbhajan Singh\n`,
      answer: "C",
    },
    {
      question: `5.Which player is the oldest to win the Purple Cap, which is given to the highest wicket-taker in the tournament?
      A :Imran Tahir
      B :Lasith Malinga
      C :Ashish Nehra \n`,
      answer: "A",
    },
    {
      question: `6.Which team picked up Australia all-rounder Marnus Labuschagne during the mini-auction ahead of IPL 2021?
      A :Punjab Kings
      B :He went unsold
      C :Sunrisers Hyderabad \n`,
      answer: "B",
    },
    {
      question: `7.Which among these players has the joint-most ducks in IPL history alongside Harbhajan Singh?
      A :Rohit Sharma
      B :Parthiv Patel
      C :Ravindra Jadeja\n`,
      answer: "B",
    },
    {
      question: `8.Which team has never made the IPL final?
      A :Punjab Kings
      B :Royal Challengers Bangalore
      C :None of the above \n`,
      answer: "C",
    },
    {
      question: `9.Which Indian player has scored the fastest hundred in the IPL?
      A :Yusuf Pathan
      B :Virat Kohli
      C : Mayank Agarwal \n`,
      answer: "A",
    },
    {
      question: `10.Which two teams made their IPL debuts in 2011?
      A :Kochi Tuskers Kerala and Pune Warriors India
      B :Kochi Tuskers Kerala and Rising Pune Supergiant
      C :Gujarat Lions and and Rising Pune Supergiant \n`,
      answer: "A",
    },
  ];
  for (i = 0; i < questions.length; i++) {
    play(questions[i].question, questions[i].answer);
  }
} else {
  console.log(
    chalk.rgb(
      55,
      177,
      182
    )(
      "Thank You For Your Time Bye Bye 👋 👋  Lets Meet when You Are Free 😀  " +
        userName
    )
  );
}
console.log("---------------------------------------------");

console.log("Yah Total Score is : ", score);

console.log("---High Scores---");
for (let i = 0; i < highScore.length; i++) {
  console.log(highScore[i].name, " = ", highScore[i].score);
}
