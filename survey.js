


// ??? where is readLine?
const readline = require('readline');

// ??? what is the createInterface ?
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let array = []
rl.question('What\'s your name?', (answer) => {
  console.log(answer)
  array.push(answer)
  
   rl.question('What\'s an activity you like?', (answer2) => {
    console.log(answer2)
     array.push(answer2)
     
     rl.question('What\'s do you listen to?', (answer3) => {
      console.log(answer3)
       array.push(answer3)
       
       rl.question('What meal is your favourite?', (answer4) => {
        console.log(answer4)
         array.push(answer4)

         rl.question('What\'s your favourite thing to eat for that meal?', (answer5) => {
          console.log(answer5)
           array.push(answer5)

           rl.question('What\'s sport is your absolute favourite?', (answer6) => {
            console.log(answer6)
             array.push(answer6)

             rl.question('What\'s your superpower?', (answer7) => {
              console.log(answer7)
               array.push(answer7)

               
               console.log(`My name is ${answer}, my favorite sport is ${answer6} and I like ${answer2}.
               I listen to ${answer3}, my favorite meal is ${answer4}) and my favorite food is ${answer5}
               .My superpower is ${answer7}`)
  rl.close();
})
  })
    })
      })
        })
   })
});








// // \u0003 maps to ctrl+c input
// if (answer === '\u0003') {
//   process.exit();