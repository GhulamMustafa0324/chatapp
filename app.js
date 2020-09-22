let tl = gsap.timeline({ default: { ease: "power1.out" } })
// deplrenoy k bad changes ki hn aapne to local host pr hi try k
//privacy lgadi h ab har jaga chalegaaaaaa
// function anim() {
//     
// }
// me kch bolon? aik idea aya h mujekia

// sir ghous ne kch esa bataya tha k async js esi hoti h k ye code run ho to hi agla code chle to aap
// is se aega wrna nhi aega

// ise pehle chlaen aur agr succesful hoto to hi animation chle async js kren ap muje nhi ati na tbhi to apko bol rha
// to ise foo me daal den?? g

tl.fromTo('.content h1', { opacity: 0, duration: -1 }, { opacity: 1, duration: 1 })
tl.fromTo('.para', { opacity: 0, duration: -1 }, { opacity: 1, duration: 1 })

//fb

// console.log(user.displayName)
// var name = prompt ab aap dekhlo oata nhi kia higya h


//object kahan h isme? konsa object ?FIREBASE DATABASE K 

// ALL VARIABLES
let list = document.querySelector('.list')
let input = document.querySelector('.chat-text')
let status = 'Proceed'
let yourName = document.getElementById("yourName")
let yourText =  document.createTextNode(name)
yourName.appendChild(yourText)
// let chlna = document.querySelector('.chlna')
// let name = prompt('Enter your name')
// FUNCTIONS

// ab ye

// han to ye show kaha kr rha h naam? 


const foo = () => {

        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            var user = result.user;
            console.log('user' ,user);
            name = user.displayName;
            console.log(name)
        }).catch(function (error) {
            console.log(error.message)
        });
        

        let container = document.getElementById("container");
        container.removeAttribute("class", "hide")
        let khuwari = document.getElementById("khuwari");
        khuwari.setAttribute("class", "hide")
        
}


//https://chatapp-19370.web.app/


function addMsg() {
    if (input.value === "") {
        alert('Write any Message')
    } else {
        //li
        var key = firebase.database().ref('messages').push().key;
        var message = {
            Name : name,
            value: input.value,
            key: key
        }

        firebase.database().ref('messages').child(key).set(message)


        input.value = ""
//database blkl sahi h 

        // del 
        // let delBtn = document.createElement('button')
        // let delText = document.createTextNode('Delete')
        // delBtn.appendChild(delText)
        // li.appendChild(delBtn)
    }
}

firebase.database().ref('messages').on('child_added', function (data) {
    let li = document.createElement('li')
    li.classList.add("li")
    let font = document.createElement('font')
    font.classList.add("font")
    let fontText = document.createTextNode(name + ":" + " ")
    let liText = document.createTextNode(data.val().value)
    font.appendChild(fontText)
    li.appendChild(font)
    li.appendChild(liText)
    list.appendChild(li)
})

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