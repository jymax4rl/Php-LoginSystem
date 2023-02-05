// target the input labels
let labelName = document.querySelector('.name>label');
labelName.style.color = 'white';
let labelSurname = document.querySelector('.surname>label');
labelSurname.style.color = 'white';
let labelEmail = document.querySelector('.email>label');
labelEmail.style.color = 'white';
let passwordLabel = document.querySelector('.pwd >label');
passwordLabel.style.color ='white';
let passWordVerifLabel = document.querySelector('.pwdVerification >label');
passWordVerifLabel.style.color ='white';

// target inputs
let inputName = document.querySelector('#name');
let inputSurname = document.querySelector('#surname');
let inputEmail = document.querySelector('#email');
let inputPassword = document.querySelector('#pwdInput');
let inputPassWordVerif = document.querySelector('#pwdVerifInput');


let nameParentDiv = document.querySelector(".name");
let surnameParentDiv = document.querySelector(".surname");
let emailParentDiv = document.querySelector(".email");
let passwordBlock = document.querySelector('.pwords');


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
clicked(inputPassword, passwordLabel);
clicked(inputPassWordVerif, passWordVerifLabel);



blur(inputName, labelName);
blur(inputSurname, labelSurname);
blur(inputEmail, labelEmail);
blur(inputPassword, passwordLabel);
blur(inputPassWordVerif, passWordVerifLabel);





//code to slide the form

let sliderButton = document.querySelector('.sliderBtn');

sliderButton.addEventListener('click', function () {
    nameParentDiv.style.transform = 'translateX(-110%)';
    nameParentDiv.style.transition = 'ease .3s all';
    surnameParentDiv.style.transform = 'translateX(-110%)';
    surnameParentDiv.style.transition = 'ease .3s all';
    emailParentDiv.style.transform = 'translateX(0%)';
    emailParentDiv.style.transition = 'ease .3s all';
    passwordBlock.style.transform = 'translateX(0%)';
    passwordBlock.style.transition = 'ease .3s all';
    console.log('clicked the slider Button')
})
