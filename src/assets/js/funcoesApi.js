function mandaPost(urlApi, usuario) {
    let request = XMLHttpRequest();
    request.open("POST", urlApi, true);
    request.setRequestHeader("Content-type", "application/json");
    request.send(JSON.stringify(usuario));
}

function cadastrarUsuario() {
    preventDefault();
    
    let urlApi = "https://www.taskmanager.targetbr.biz/index.php/usuario";
    let nome = document.querySelector('#nome').value;
    let email = document.querySelector('#email').value;
    let senha = document.querySelector('#senha').value;

    usuario = {
        "dados": {
            "nome": nome,
            "email": email,
            "senha": senha
        }
    }
    mandaPost(urlApi, usuario);
}

/*
    axios
        .post("https://link-api.com")
        .then((res) => {
            this.usuario = res.data;
        })
        .catch((error) => {
            console.log(error);
        });
*/