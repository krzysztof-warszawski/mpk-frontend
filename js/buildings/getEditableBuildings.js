fetch('http://localhost/app/api/buildings')
    .then((res) => res.json())
    .then((data) => {
      
      let output = '';

        data.forEach(building => {
        output += `
        <tr>
          <td>${building.building_id}</td>
          <td>${building.name}</td>
          <td>${building.address}</td>
          <td>${building.owner}</td>
          <td><button class="btn btn-warning btn-sm" id="deleteBuilding" value="${building.building_id}">USUŃ</button></td>
        </tr>
        `;
      });

      document.querySelector('#buildings-list').innerHTML = output;
      addEventListenerToDeleteButton();
      
    });
  

  function deleteBuilding(id) {
    fetch('http://localhost/app/api/buildings/' + id, {
      method: 'DELETE'
    }).catch(err => {
      console.log(err);
    });
    location.reload();
  }

  function addEventListenerToDeleteButton() {
    var matches = document.querySelectorAll('#deleteBuilding');
      matches.forEach(function(item) {
        item.addEventListener
        ('click', function() { deleteBuilding(item.value) });
      });
  }