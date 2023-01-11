let camp = document.querySelector("#camp");

function validate() {
    
    document.addEventListener('click', (event) => {
        
        if (document.querySelector('#input1').value === "" ||
            document.querySelector('#input2').value === "" ||
            document.querySelector('#input3').value === "" ||
            document.querySelector('#input4').value === "" ||
            document.querySelector('#input5').value === "") {

            camp.innerHTML = "Campos obrigatórios não registrados.";
            camp.style.color = "red";
            camp.style.textAlingh = "left"
            
        } else {
            camp.innerHTML = "Sucesso!";
            camp.style.color = "green";
        }
    });
} 