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

    fetch(`${SERVER_NAME}/projects`, {
      method: 'POST',
      body: JSON.stringify({
          buildingId: sessionStorage.getItem("buildingId"),
          serviceTypeId: formElements['service-type'].value,
          tenant: formElements['tenant'].value,
          date: formElements['date'].value.substring(0,6),
          floor: formElements['floor'].value,
          shortDescription: formElements['short-description'].value
      }),
      headers: {
          "Accept" : "application/json, text/plain, */*",
          "Content-type": "application/json; charset=UTF-8"
      }
    }).catch(err => {
        console.log(err);
      });

    location.replace("edit-delete.html");
}

function update(formElements) {
    const projectId = formElements['id'].value;

    fetch(`${SERVER_NAME}/projects/${projectId}`, {
        method: 'PUT',
        body: JSON.stringify({
            id: projectId,
            mpk: formElements['mpk'].value,
            projectNum: formElements['project'].value,
            buildingId: formElements['building-id'].value,
            serviceTypeId: formElements['service-type'].value,
            tenant: formElements['tenant'].value,
            date: formElements['date'].value.substring(0,6),
            floor: formElements['floor'].value,
            shortDescription: formElements['short-description'].value
        }),
        headers: {
            "Accept" : "application/json, text/plain, */*",
            "Content-type": "application/json; charset=UTF-8"
        }
    }).catch(err => {
        console.log(err);
    });

    location.replace("edit-delete.html");
}