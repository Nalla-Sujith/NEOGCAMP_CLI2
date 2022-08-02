var read=require('readline-sync')
var name=read.question("Enter your name ")
console.log("Hello "+name+" !!\n")
 var score=0
console.log("Lets see How well Do you know about Loops and Operators \n")
 var questions=[
  {
    question:"Noof arguments will while loop take",
    options:["a.1","b.2","c.3"],
    answer:"a"
  },
  {
    question:"Which of the following is called pre increment",
    options:["a. ++(variable)","b.(variable)++","c.variable"],
    answer:"a"
  },
  {
    question:"No of set bits in numbers which are power of 2 are ",
    options:["a.2","b.0","c.1"],
    answer:"c"
  },
  {
    question:"What does right shift operator do?",
    options:["a.Multiply by 2","b.Divide by 2","c.Subtract by 2"],
    answer:"b"
  },
  {
    question:"What does left shift operator do?",
    options:["a.Subtract by 2","b.Divide by 2","c.Multiply by 2"],
    answer:"c"
  },
]
function check(question,answer,options)
{
   var ans=""
   for(var i=0;i<options.length;i++)
     ans+=options[i]+"\n"
   var userinput=read.question(question+"\n"+ans)
    if(userinput === answer)
    {
       score++;
       console.log("Yay ! You're correct")
       console.log("--------------")
    }
    else
    {
         console.log("No You're Wrong")
         console.log("--------------")
    }
}
  for(var i=0;i<questions.length;i++)
  {
    check(questions[i].question,questions[i].answer,questions[i].options);
  }
console.log("You Scored Score: "+score+" /"+questions.length)