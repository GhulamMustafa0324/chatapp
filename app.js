const tl = gsap.timeline({ default: { ease: "power1.out" } })

function anim() {
    tl.to('.khuwari', { y: "-100%", duration: 1 })
}

tl.fromTo('.content h1', { opacity: 0, duration: -1 }, { opacity: 1, duration: 1 })
tl.fromTo('.para', { opacity: 0, duration: -1 }, { opacity: 1, duration: 1 })

//fb
// const fb = () => {
//     var provider = new firebase.auth.FacebookAuthProvider();
//     firebase.auth().signInWithPopup(provider).then(function (result) {
//         var user = result.user;
//         console.log('user' ,user)
//     }).catch(function (error) {
//         console.log(error.message)
//     });

    
// }
// console.log(user.displayName)
// var name = prompt

// ALL VARIABLES
let list = document.querySelector('.list')
let input = document.querySelector('.chat-text')
let status = 'Proceed'
let chlna = document.querySelector('.chlna')
// let name = prompt('Enter your name')
// FUNCTIONS
firebase.database().ref('messages').on('child_added', function (data) {
    let li = document.createElement('li')
    li.classList.add("li")
    let font = document.createElement('font')
    font.classList.add("font")
    let fontText = document.createTextNode(chlna + ":" + " ")
    let liText = document.createTextNode(data.val().value)
    font.appendChild(fontText)
    li.appendChild(font)
    li.appendChild(liText)
    list.appendChild(li)
})

function startStop() {
    if (status === "true") {  
        document.getElementById("startStop").innerHTML = "Stop";
        status = "false"

    }
    else {
        document.getElementById("startStop").innerHTML = "Start";
        status = "true"
    }
}


function addMsg() {
    if (input.value === "") {
        alert('Write any Message')
    } else {
        //li
        var key = firebase.database().ref('messages').push().key;
        var message = {
            value: input.value,
            key: key
        }

        firebase.database().ref('messages').child(key).set(message)


        input.value = ""


        // del 
        // let delBtn = document.createElement('button')
        // let delText = document.createTextNode('Delete')
        // delBtn.appendChild(delText)
        // li.appendChild(delBtn)
    }
}

function deleteeee() {
    list.innerHTML = ""
    firebase.database().ref('messages').remove()
}
input.addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.querySelector(".chat-btn").click();
    }
});