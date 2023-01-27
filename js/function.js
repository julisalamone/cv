var userInfo

async function callApi() {
    response = await fetch ('https://randomuser.me/api/')
    body = await response.json()
    userInfo = body["results"][0]
}

callApi().then(_ => {
    updateUserInfo(userInfo)
})

function updateUserInfo(userInfo) {
    let completeName = userInfo['name']['title'] 
        + ' ' + userInfo['name']['first'] 
        + ' ' + userInfo['name']['last'] 

        let país = userInfo['location']['country']
        let imagenUrl = userInfo['picture']['large']
        let edad = userInfo['dob']['date'].substring(0, 10).replaceAll('-', '/').concat(' - ').concat(userInfo['dob']['age']).concat(' años')
        let locación = userInfo['location']['state']
        + ', ' + userInfo ['location']['city']
        let teléfono = userInfo['phone']
        let celular = userInfo['cell']
        let correo = userInfo['email']
        
        
    
        document.getElementById("Nombre").innerHTML = completeName
        document.getElementById("País").innerHTML = país
        document.getElementById("Foto").src = imagenUrl
        document.getElementById("FotoSegunda").src = imagenUrl
        document.getElementById("Edad").innerHTML = edad
        document.getElementById("Locación").innerHTML = locación
        document.getElementById("teléfono").innerHTML = teléfono
        document.getElementById("celular").innerHTML = celular
        document.getElementById("correo").innerHTML = correo
       
}
