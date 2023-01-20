let camp = document.querySelector("#camp");
let inputs = document.querySelectorAll("input")
let campObg = document.querySelectorAll(".campRequired")


function validate() {
    
    document.addEventListener('click', (event) => {
        for(let i = 0; i < inputs.length; i++) {
            if (inputs[i].value ==="") {
            
                campObg[i].innerHTML = "*Campo Obrigatório*"
                camp.innerHTML = "Campos obrigatórios não registrados.";
                camp.style.color = "red"
                

            } else {
                campObg[i].innerHTML = ""
                camp.innerHTML = "Sucesso!";
                camp.style.color = "green";
            }
        }
    });
} 