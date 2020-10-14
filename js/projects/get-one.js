let query = window.location.search;
let urlParam = new URLSearchParams(query);
const projectId = urlParam.get('id');

const url = `${SERVER_NAME}/projects/${projectId}`

fetch(url)
.then((res) => res.json())
.then((project) => {

    const form = document.querySelector('.needs-validation')
    let formElements = form.elements;

    formElements['id'].value = projectId;
    formElements['mpk'].value = project.mpk;
    formElements['project'].value = project.project_num;
    formElements['building-id'].value = project.building_id;
    formElements['service-type'].value = project.service_type_id;
    formElements['tenant'].value = project.tenant;
    formElements['date'].value = project.date;
    formElements['floor'].value = project.floor;
    formElements['short-description'].value = project.short_description;

});