const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
const header_one = document.getElementById('page-heading');


document.getElementById('page-heading').addEventListener('click', function (e) {
    console.log(e);
    // alert("You have clicked on heading....");
})

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);
        if (e.target.id === "grey") {
            body.style.backgroundColor = e.target.id;
            header_one.style.color = 'black'
        }
        if (e.target.id === "yellow") {
            body.style.backgroundColor = e.target.id;
            header_one.style.color = 'pink'
        }
        if (e.target.id === "pink") {
            body.style.backgroundColor = e.target.id;
            header_one.style.color = 'purple'
        }
        if (e.target.id === "purple") {
            body.style.backgroundColor = e.target.id;
            header_one.style.color = 'white'
        }
    })
});
