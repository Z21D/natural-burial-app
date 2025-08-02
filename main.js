var currentlyPlaying = null;

function playAudio(audioId) {
    var audio = document.getElementById(audioId);
    if (currentlyPlaying && currentlyPlaying !== audio) {
        currentlyPlaying.pause();
    }
    audio.play();
    currentlyPlaying = audio;
}


document.addEventListener('DOMContentLoaded', function () {
    // Retrieve data from local storage and populate the form fields
    populateFormFromLocalStorage();

    var submitBtn = document.querySelector('.submit-btn');

    submitBtn.addEventListener('click', function () {
        // Gather form data
        var formData = {
            firstName: document.querySelector('input[name="firstName"]').value,
            lastName: document.querySelector('input[name="lastName"]').value,
            dob: document.querySelector('input[name="dob"]').value,
            pob: document.querySelector('input[name="pob"]').value,
            email: document.querySelector('input[name="email"]').value,
            phone: document.querySelector('input[name="phone"]').value,
            address: document.querySelector('input[name="address"]').value,
            gender: document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : "",
            preferredLocation: document.querySelector('input[name="preferredLocation"]:checked') ? document.querySelector('input[name="preferredLocation"]:checked').value : "",
            markerOption: document.querySelector('input[name="markerOption"]:checked') ? document.querySelector('input[name="markerOption"]:checked').value : "",
            additionalRequests: document.querySelector('input[name="additionalRequests"]').value,
            inscriptionRequests: document.querySelector('input[name="inscriptionRequests"]').value
        };

        // Save form data to local storage
        localStorage.setItem('formData', JSON.stringify(formData));

        // Reset form fields
        resetFormFields();
    });

    function populateFormFromLocalStorage() {
        var formData = localStorage.getItem('formData');
        if (formData) {
            formData = JSON.parse(formData);
            document.querySelector('input[name="firstName"]').value = formData.firstName || "";
            document.querySelector('input[name="lastName"]').value = formData.lastName || "";
            document.querySelector('input[name="dob"]').value = formData.dob || "";
            document.querySelector('input[name="pob"]').value = formData.pob || "";
            document.querySelector('input[name="email"]').value = formData.email || "";
            document.querySelector('input[name="phone"]').value = formData.phone || "";
            document.querySelector('input[name="address"]').value = formData.address || "";
            if (formData.gender) {
                document.getElementById(formData.gender).checked = true;
            }
            if (formData.preferredLocation) {
                document.getElementById(formData.preferredLocation).checked = true;
            }
            if (formData.markerOption) {
                document.getElementById(formData.markerOption).checked = true;
            }
            document.querySelector('input[name="additionalRequests"]').value = formData.additionalRequests || "";
            document.querySelector('input[name="inscriptionRequests"]').value = formData.inscriptionRequests || "";
        }
    }



    function resetFormFields() {
        // Reset all input fields
        var inputs = document.querySelectorAll('input[type="text"], input[type="date"], input[type="email"], input[type="tel"], textarea');
        inputs.forEach(function (input) {
            input.value = "";
        });

        // Reset radio buttons
        var radioButtons = document.querySelectorAll('input[type="radio"]');
        radioButtons.forEach(function (radioButton) {
            radioButton.checked = false;
        });
    }
});


const SERVER_URL = "http://ugdev.cs.smu.ca:3717";

function upload() {
    
    $.upload(SERVER_URL + "/myPost", JSON.parse(formData), successFn).fail(errorFn);

}

function download() {

    $.download(SERVER_URL + "/myGet", successFn).fail(errorFn);

}

function successFn(returnedData) {
    console.log(returnedData);
}



function errorFn(err) {
    console.log(err.responseText);
}
