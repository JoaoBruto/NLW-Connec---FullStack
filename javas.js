const app = document.getElementById("app")
const formaction = () =>{
    const form = document.getElementById("form")
    form.onsubmit = (event) => {
        event.preventDefault()
        alert("parow")
    }
}


const startApp = () => {
    const content = `
    <form id="form">
        <input type="email" placeholder="E-mail"> <br><br>
        <input type="text" placeholder="Telefone"> <br><br>
        <button>
            Confirmar
        </button>
    </form>
    `
    app.innerHTML = content
    formaction()
}
startApp()