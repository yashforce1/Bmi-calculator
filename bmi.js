
const calculate = document.getElementById('calculate');

    calculate.addEventListener("click",()=>{
        const height = document.querySelector('#height').value;
        const weight = document.querySelector('#weight').value;

        console.log(height);
        console.log(weight);

        gameplay(height , weight);
    });
    
    
    const final = document.querySelector('#answer');
    const advice = document.querySelector('#advice');

    const gameplay = (height , weight)=>{
        const total = weight / (height/100* height/100);
        // console.log("your bgmi score :",total.toFixed(3));
        final.innerText=` BMI SCORE : ${total.toFixed(2)}`;
        final.style.backgroundColor =" #0f499a"

        if(total < 18.5){
            underweight();
            final.style.backgroundColor = "#2196f3";
        }
        else if( total >= 18.5 && total < 25){
            normal();
            final.style.backgroundColor = "#4caf50";
        }
        else if( total >= 25 && total < 30){
            overweight();
            final.style.backgroundColor = "#ff9800";
        }
        else if( total >= 30){
            obese();
            final.style.backgroundColor = "#f44336"; 
        }
    }
    const underweight = () =>{
        advice.innerText="You are Underweight , eat more";
    }
    const normal = () =>{
        advice.innerText ="You are Fit";
    }
    const overweight = () =>{
        advice.innerText ="You are overweight , follow proper diet!";
    }
    const obese = () =>{
        advice.innerText = "You are having obese , recommend doctor !";
    }


    

