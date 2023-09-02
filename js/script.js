const form = document.getElementById('form');
form.addEventListener('submit', function(event) {
  
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const bmi = (weight / (height * height)).toFixed(2);

    if (!isNaN(bmi)) {
        const value = document.getElementById('value');
        let description = '';

        value.classList.add('attention');
        
        document.getElementById('infos').classList.remove('hidden');
    
        if (bmi < 18.5){
            description = 'Cuidado! Você está abaixo do peso! COMA MAIS!';
        } 

        else if (bmi >= 18.5 && bmi <= 25) {
            description = "Parabens,você está no peso ideal! ";
            value.classList.remove('attention');
            value.classList.add('normal');
        }

        else if (bmi > 25 && bmi <= 30) {
            description = "Cuidado! Você está com sobrepeso!";
        }

        else if (bmi > 30 && bmi <= 35) {
            description = "Négocio ta ficando sério";
        }

        else if (bmi > 35 && bmi <= 40) {
            description = "PROCURE AJUDA PROFISSIONAL";
        }

        else {
            description = "TU TA FUDIDO!";
        }

        value.textContent = bmi.replace('.', ',');
        document.getElementById('description').textContent = description;
    }
});

form.addEventListener('keypress', function(event) {
    if (event.key === 'press') {
        document.getElementById('#calculate').click();
    }
});
