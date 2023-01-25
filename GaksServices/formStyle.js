let labelName = document.querySelector('.name>label');
labelName.style.color = 'white';

let labelSurname = document.querySelector('.surname>label');
labelSurname.style.color = 'white';

let labelEmail = document.querySelector('.email>label');
labelEmail.style.color = 'white';

let inputName = document.querySelector('#name');
let inputSurname = document.querySelector('#surname');
let inputEmail = document.querySelector('#email');


let onclick = inputName.getAttribute('onclick');
let blurred = inputName.getAttribute('blur');
blurred = true;
console.log(blurred);


function clicked(inputArg, labelArg) {

    inputArg.addEventListener('focus', function () {
        onclick = true;
        console.log(onclick);

        if (onclick) {



            labelArg.style.transition = "all ease .3s";
            labelArg.style.transform = "translateY(-35px)";
            labelArg.style.color = "black";
            console.log('clicked the ' + inputArg.name)
        }
    })
}
function blur(inputArg, labelArg) {

    inputArg.addEventListener('blur', function () {
        blurred = true;
        // labelArg.style.transform = "translateY(0px)";
        // console.log('clicked out of ' + inputArg.name)

        if (blurred && inputArg.value == 0) {
            labelArg.style.transition = "all ease .3s"
            labelArg.style.transform = "translateY(0px)";
            labelArg.style.color = "white";
            console.log('clicked out of ' + inputArg.name)
        }
    })
}

clicked(inputName, labelName);
clicked(inputSurname, labelSurname);
clicked(inputEmail, labelEmail);

blur(inputName, labelName);
blur(inputSurname, labelSurname);
blur(inputEmail, labelEmail);





//code to slide the form

let sliderButton = document.querySelector('.sliderBtn');

sliderButton.addEventListener('click', function () {
    inputName.style.transform = 'translateX(-100%)';
    labelName.style.transform = 'translateX(-100px)';
    console.log('clicked the slider Button')
})
