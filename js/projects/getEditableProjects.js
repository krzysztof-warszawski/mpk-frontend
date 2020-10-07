fetch('http://localhost/app/api/projects')
    .then((res) => res.json())
    .then((data) => {
      
      let output = '';

        data.forEach(project => {
        output += `
        <tr>
          <td>${project.building_name}</td>
          <td>${project.date}</td>
          <td>${project.floor}</td>
          <td>${project.mpk}</td>
          <td>${project.project_num}</td>
          <td>${project.short_description}</td>
          <td>${project.tenant}</td>
          <td>${project.service}</td>
          <td><button class="btn btn-warning btn-sm" id="deleteProject" value="${project.id}">USUŃ</button></td>
        </tr>
        `;
      });

      document.querySelector('#projects-list').innerHTML = output;
      addEventListenerToDeleteButton();
      
    });
  

  function deleteProject(id) {
    fetch('http://localhost/app/api/projects/' + id, {
      method: 'DELETE'
    }).catch(err => {
      console.log(err);
    });
    location.reload();
  }

  function addEventListenerToDeleteButton() {
    var matches = document.querySelectorAll('#deleteProject');
      matches.forEach(function(item) {
        item.addEventListener
        ('click', function() { deleteProject(item.value) });
      });
  }