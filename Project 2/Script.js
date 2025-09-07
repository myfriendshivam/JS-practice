const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const results = document.getElementById('results');

    if(height === '' || height <0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`;
    }else if(weight === '' || weight <0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`;
    }else {
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        let category = '';
        if(bmi < 18.5) category = "Underweight";
        else if(bmi <= 24.6) category = "Normal weight";
        else category = "Overweight";
        // Show the result
        results.innerHTML = `<span>${bmi}, ${category}</span>`;
        
    }
});