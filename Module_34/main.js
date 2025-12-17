//function printNames(){
   // document.write('John');
   // document.write('<br>')
   // setTimeout(function(){document.write(Ana); }, 3000);
//}

//printNames{};

var colors = ['red', 'green', 'blue', 'purple'];

function changeBgColor(){
    document.querySelector('body').style.background=
    colors[Math.floor(Math.random()*colors.length)];
}

changeBgColor();

var names = ['John', 'Ana', 'Bob', 'Mark'];

function changeNames(){
    document.querySelection('p').innerHTML = names[Math.random()]
}

while(guessNumber == false){

        var random = Math.floor(Math.random()*6);
        console.log(random);

        if(nrSelect.value == random){
            guessNumber = true;
            console.log("Guessed within: "+count+"times");
        }else{
            count = count + 1;
        }
    }
