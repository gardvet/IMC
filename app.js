const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    
    if((height === '') || (height < 0) || (isNaN(height))){
        //NaN !== NaN
        results.innerHTML = "Insira uma altura válida";
        
    } else if (weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = "Insira um peso válido";
    } else {
    //calculate BMI
    const imc = (weight / ((height*height)/10000)).toFixed(2);
    //display the results
    results.innerHTML = `<span>${imc}</span>`
    }
    
});
