error = 0;
primos = 0;
fill = []
lose = false;
button = '';
function numbers(){
    var number = [];
    const box = document.querySelector('#box');
    for(var i = 0; i < 100; i++){
        number = document.createElement('div');
        box.appendChild(DivNumbers(i));
    }
}


function DivNumbers(number) {
    let button = document.createElement('button');
    let p = document.createElement('p');
    var n = number + 1;
    var i = 0;


    button.appendChild(p);
    button.className = 'Boxnumber';
    
    p.textContent = n;
    button.id = 'a'+ (n);

    button.onclick = function() {
        
        if(Found(n) && !lose){
            fill[i] = n;
            i++;
            if(Primo(n)){
                button.style.backgroundColor = "#F62A00";
                primos++;
            }else{
                button.style.backgroundColor = "#00293C";
                error++;
            }
        }

        var menssage = document.getElementById('message');
        var modal = document.getElementById('modal-1');
        
        if(error > 4){
            modal.style.margin = '30px';
            menssage.textContent = 'Perdiste';
            lose = true;
        }
        if(primos == 25){
            modal.style.margin = '30px';
            menssage.textContent = 'Ganaste';
            lose = true;
        }
    };

    return button;
}

function Primo(n){
    var primo = 0;
    for(var i = 1; i <= n; i++){
        if(n % i == 0){
            primo++;
        }
    }

   if(primo == 2){
        return true;
   }else{
        return false;
   }
}

function Found(n){
    for(var i = 0; i < fill.length; i++){
        if(fill[i] == n){
            return false;
        }
    }
    return true;
}


function AnimationPrimos(){
    var n = 0;
    for(var i = 1; i <= 100; i++){    
        x = 'a' + i;
        button = document.getElementById(x);
        if(!Primo(i)){
            n = i;
            for(var j = 1; j <= 100; j++){
                if(j % n == 0){
                    button.style.backgroundColor = "#00293C";
                }
            }
        }else{
            button.style.backgroundColor = "#F62A00";
        }
    }
}



numbers();

