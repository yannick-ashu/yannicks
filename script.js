const btns = Array.from(document.getElementsByClassName('button'));
let acButton = document.getElementById('AC')
const display = document.querySelector('.output')
console.log(btns)
btns.map(button => {
    button.addEventListener('click', (e) => {
       switch(e.target.innerText){
        case 'AC':
            display.innerText = '';
            break;
            case 'DEL':
              if(display.innerText) {
                display.innerText = display.innerText.slice(0, -1);
              } 
              break;
              case '=':
                try{
                    display.innerText = eval(display.innerText);
                } 
                catch {
                    display.innerText = 'Calm down Nigga!'
                }break;
                
        default:
            display.innerText += e.target.innerText;
       }
    })
})