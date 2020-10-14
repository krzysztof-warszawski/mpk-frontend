let query = window.location.search;
let urlParam = new URLSearchParams(query);
const buildingId = urlParam.get('id');

const url = `${SERVER_NAME}/buildings/${buildingId}`

fetch(url)
.then((res) => res.json())
.then((building) => {

  const form = document.querySelector('.needs-validation')
  let formElements = form.elements;

  formElements['id'].value = building.building_id;
  formElements['name'].value = building.name;
  formElements['address'].value = building.address;
  formElements['owner'].value = building.owner;

});