function submitData() {
    let firstName = document.querySelector('input[name="firstname"]');
    let lastName = document.querySelector('input[name="lastname"]');
    let age = document.querySelector('input[name="age"]');

    let genderDOM = document.querySelector('input[name="gender"]:checked');
    let interestDOM = document.querySelectorAll('input[name="interest"]:checked');

    let descriptionDOM = document.querySelector('textarea[name="description"]');

    let userData = {
        firstName: firstNameDOM.value,
        lastName: lastNameDOM.value,
        age: ageDOM.value,
        gender:genderDOM.value,
        description: descriptionDOM.value,
    }
    console.log('submit data:', userData);
}