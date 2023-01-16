let camp = document.querySelector("#camp");
let inputs = document.querySelectorAll("input")
inputs = Array.from(inputs)
let campObg1 = document.getElementById("campRequired1")
let campObg2 = document.getElementById("campRequired2")
let campObg3 = document.getElementById("campRequired3")
let campObg4 = document.getElementById("campRequired4")
let campObg5 = document.getElementById("campRequired5")

function validate() {
    
    document.addEventListener('click', (event) => {
        for(let i = 0; i < inputs.length; i++) {
            if (inputs[i].value ==="") {
            
                campObg1.innerHTML = "*Campo Obrigatório*"
                campObg2.innerHTML = "*Campo Obrigatório*"
                campObg3.innerHTML = "*Campo Obrigatório*"
                campObg4.innerHTML = "*Campo Obrigatório*"
                campObg5.innerHTML = "*Campo Obrigatório*"
                camp.innerHTML = "Campos obrigatórios não registrados.";
                camp.style.color = "red";

            } else {
                campObg1.innerHTML = ''
                campObg2.innerHTML = ''
                campObg3.innerHTML = ''
                campObg4.innerHTML = ''
                campObg5.innerHTML = ''
                camp.innerHTML = "Sucesso!";
                camp.style.color = "green";
            }
        }
    });
} 