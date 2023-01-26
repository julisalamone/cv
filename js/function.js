// var userInfo

// fetch ('https://randomuser.me/api/')
//     .then(response => response.json())
//     .then(json => userInfo = json['results'])

// async function callApi() {
//     response = await fetch ('https://randomuser.me/api/')
//     body = await response.json()
//     return body["results"][0]
// }

// callApi().then(_ => {
//     updateUserInfo(userInfo)
// })

// function updateUserInfo(userInfo) {
//     let completeName = userInfo['name']['title'] 
//         + ' ' 
//         + userInfo['name']['first'] 
//         + ' '
//         + userInfo['name']['last'] 
    
//         document.getElementById("demo").innerHTML = completeName
// }

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById('infocentral');
const url = 'https://randomuser.me/api/';

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let authors = data.results;
  return authors.map(function(author) {
    let li = createNode('li');
    let img = createNode('img');
    let span = createNode('span');
    img.src = author.picture.medium;
    span.innerHTML = `${author.name.first} ${author.name.last}`;
    append(li, img);
    append(li, span);
    append(ul, li);
  })
})
.catch(function(error) {
  console.log(error);
});