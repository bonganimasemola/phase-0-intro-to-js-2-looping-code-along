//const writeCards = ["Charlie", "Samip", "Ali"]; 



function writeCards(names, eventName) {
    let thankYouMessages = [];
    for (let i=0; i < names.length; i++) {
        let message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`
         thankYouMessages.push(message);
    }
    return thankYouMessages;
    }




//const count = [ "10", "9", "8", "7", "6", "5", "4", "3", "2", "1" ];


/*function countDown (count) {
     let i = 0;
    while (countDown < 10); {
        console.log(countDown); i--;
        debugger;
    }  
    return count;
    } */

    function countDown(number) {
        for (let i = number; i >= 0; i--)
           console.log(i)
        }
      
      
         