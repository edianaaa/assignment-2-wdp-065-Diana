const btnSubmit = document.getElementById('btn-submit')
const btnEdit = document.getElementById('btn-edit')

let formBiodata = document.getElementById('form-biodata')
let inputName = document.getElementById('input-name')
let inputRole = document.getElementById('input-role')
let inputAvailability = document.getElementById('input-availability')
let inputAge = document.getElementById('input-age')
let inputLocation = document.getElementById('input-location')
let inputExperience = document.getElementById('input-experience')
let inputEmail = document.getElementById('input-email')
let textName = document.getElementById('text-name')
let textRole = document.getElementById('text-role')
let textAvailability = document.getElementById('text-availability')
let textAge = document.getElementById('text-age')
let textLocation = document.getElementById('text-location')
let textExperience = document.getElementById('text-experience')
let textEmail = document.getElementById('text-email')

//Event listener untuk button
btnSubmit.addEventListener('click', function (event) {
    event.preventDefault()
    console.log(inputName.value);
    console.log(inputRole.value);
    console.log(inputAvailability.value);
    console.log(inputAge.value);
    console.log(inputLocation.value);
    console.log(inputExperience.value);
    console.log(inputEmail.value);
    textName.innerText = inputName.value
    textRole.innerText = inputRole.value
    textAvailability.innerText = inputAvailability.value
    textAge.innerText = inputAge.value
    textLocation.innerText = inputLocation.value
    textExperience.innerText = inputExperience.value
    textEmail.innerText = inputEmail.value
    formBiodata.style.display = 'none'
})


btnEdit.addEventListener('click', function() {
    console.log(formBiodata.style);
    if (formBiodata.style.display == 'none') {
        formBiodata.style.display = 'block'
        inputName.value = textName.innerText
        inputRole.value = textRole.innerText
        inputAvailability.value = textAvailability.innerText
        inputAge.value = textAge.innerText
        inputLocation.value = textLocation.innerText
        inputExperience.value = textExperience.innerText
        inputEmail.value = textEmail.innerText 
    } else {
        formBiodata.style.display = 'none'
    }
})

function myFunction() {
    document.getElementById("form-biodata").reset();
  }