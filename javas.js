const app = document.getElementById("app")

// array, vetor, lista
const users = [
    {
        email: "teste@teste.com",
        telefone: "40028922",
        ref: 100,
        refBy: null
    },
    {
        email: "tust@tust.com",
        telefone: "40028922",
        ref: 200,
        refBy: 100
    },
    {
        email: "toste@toste.com",
        telefone: "40028922",
        ref: 300,
        refBy: 200
    }
]

const getUserInfo = (userData) => {
    return users.find((user) => {
        return user.email == userData.email
    })
}

const getTotalSubscribers = (userData) => {
    const subs = users.filter((user) => {
        return user.refBy == userData.ref
    })
    return subs.length
}

const showInvite = (userData) => {
    app.innerHTML = `
    <input type="text" id="link" value="https://evento.com?ref=${userData.ref}" disabled> 

<div id = 'stats'>
    <h4>
        ${getTotalSubscribers(userData)}
    </h4>
    <p>Inscrições feitas</p>
</div>`
}
const saveUser =  (userData)  => {
    const newUser = {
        ...userData,
        ref: Math.round(Math.random() * 4000),
        refBy: 100
    }
    users.push(newUser)
    console.log(users)
    return(newUser)
}


const formaction = () => {
    const form = document.getElementById("form")
    form.onsubmit = (event) => {
        event.preventDefault()
        const formData = new FormData (form)
        const userData = {
            email: formData.get("email"),
            phone: formData.get("phone")
        }
        const user = getUserInfo(userData)
        if (user) {
            showInvite(user)
        } else{
            const newUser  = saveUser(userData)
            showInvite(newUser)
        }
    }
}


const startApp = () => {
    const content = `
    <form id="form">
        <input type="email" name = "email" placeholder="E-mail"> 
        <input type="text" name = "phone" placeholder="Telefone"> 
        <button>
            Confirmar
        </button>
    </form>
    `
    app.innerHTML = content;
    formaction()
}
startApp()
document.getElementById("logo").onclick = () => startApp()