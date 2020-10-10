fetch(`${SERVER_NAME}/buildings`)
.then((res) => res.json())
.then((data) => {
  
  let output = '<option value="">Wybierz budynek</option>';

    data.forEach(building => {
    output += `
    <option value="${building.building_id}">${building.name}</option>
    `;
  });

  document.querySelector('#buildings').innerHTML = output;
});


function param() {
  sessionStorage.setItem("buildingName", $("#buildings option:selected").text());
}

/*
Comment left on purpose

jQuery approach:
$("#buildings option:selected").text()

JS approach:
let buildings = document.querySelector('#buildings');
let selectedText = buildings.options[buildings.selectedIndex].text;
*/
