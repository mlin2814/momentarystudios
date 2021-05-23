function collapse() {
    let nav = document.getElementById("nav-bar");
    if (nav.className === "nav-bar") {
        nav.className += " responsive";
    } else {
        nav.className = "nav-bar";
    }
}

// document.addEventListener('DOMContentLoaded', sendForm);

// function sendForm() {
//     document.getElementById('submit').addEventListener('click', function(event) {
//         let req = new XMLHttpRequest();
//         let payload = {name:null, email:null, comment:null}

//         payload.name = document.getElementById('name').value 
//         payload.email = document.getElementById('email').value 
//         payload.comment = document.getElementById('comment').value 

//         console.log(payload)

//         req.open('POST', 'http://web.engr.oregonstate.edu/~zhangluy/tools/class-content/form_tests/check_request.php')
//         req.setRequestHeader('Content-Type', 'application/json')
//         req.addEventListener('load', function() {
//             if(req.status >= 200 && req.status < 400){
//                 var response = JSON.parse(req.responseText);
//                 document.getElementById('enteredText').textContent = payload;
//                 console.log(response)
//               } else {
//                 console.log("Error in network request: " + req.statusText);
//               }});
//             req.send(JSON.stringify(payload));
//             event.preventDefault();
//         // })
//     })
// }