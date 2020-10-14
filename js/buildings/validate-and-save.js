(function () {
    'use strict'

    window.addEventListener('load', function () {

        const form = document.querySelector('.needs-validation')

        form.addEventListener('submit', function (event) {
            event.preventDefault()
            if (form.checkValidity() === false) {
                event.stopPropagation()
            } else {
                execute(form);
            }
            form.classList.add('was-validated')
        }, false)
    }, false)
}())


function execute(form) {

    let formElements = clearElements(form);

    if (formElements['id'] === undefined) {
        save(formElements);
    } else {
        update(formElements);
    }
}

function clearElements(form) {

    let formElements = form.elements;
    const regex = new RegExp(/[\\\[\]!@#$%^*~(+\-)={};:<>.?'`"]/g);

    for (let element of formElements) {
        element.value = element.value.replace(regex, '').trim();
    }

    return formElements;
}

function save(formElements) {

    fetch(`${SERVER_NAME}/buildings`, {
        method: 'POST',
        body: JSON.stringify({
            name: formElements['name'].value,
            address: formElements['address'].value,
            owner: formElements['owner'].value
        }),
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Content-type": "application/json; charset=UTF-8"
        }
    }).catch(err => {
        console.log(err);
    });

    location.replace("../../index.html");
}

function update(formElements) {
    const buildingId = formElements['id'].value;

    fetch(`${SERVER_NAME}/buildings/${buildingId}`, {
        method: 'PUT',
        body: JSON.stringify({
            buildingId: buildingId,
            name: formElements['name'].value,
            address: formElements['address'].value,
            owner: formElements['owner'].value
        }),
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Content-type": "application/json; charset=UTF-8"
        }
    }).catch(err => {
        console.log(err);
    });

    location.replace("edit-delete.html");
}