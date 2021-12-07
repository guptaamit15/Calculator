let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for(item of buttons){
    item.addEventListener('click', (e)=> {
        buttonText = e.target.innerText;
        console.log('Button text is ',buttonText)
        
        if (buttonText=='X') {
            buttonText='*';
            screenValue += buttonText;
            screen.value = screenValue;

        }

        else if(buttonText== 'C'){
            screenValue = "";
            screen.value=screenValue;

        }

        else if(buttonText== '='){
            screen.value= eval(screenValue);
        }

        else{

            // a= confirm("Are you sure want to calculate");
            screenValue += buttonText;
            screen.value=screenValue;
        }
    })

    // document.querySelector('.container')
    // .addEventListener('mousemove', function(e){
    //     console.log(e.offsetX, e.offsetY);
    //     document.body.style.backgroundColor = `rgb(${e.offsetX},  ${e.offsetX}, ${e.offsetX})`;
    //     // console.log('Yo')
    // })

    // document.querySelector('.container')
    // .addEventListener('mousemove', function(e){
    //     console.log(e.offsetX, e.offsetY);
    //     document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetX}, ${e.offsetX})`;
    //     // console.log('Yo')
    // })
}