fetch(`${SERVER_NAME}/projects`)
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
    `;

    if (project.service === 'Gwarancja') {
      output += `
          <td></td>
        </tr>
      `;
    } else {
      output += `
          <td><button class="btn btn-warning btn-sm" value="${project.id}" id="id" 
          onclick="createDirectories(value);">Generuj</button></td>
        </tr>
      `;
    }
  });

  document.querySelector('#projects-list').innerHTML = output;
});

function createDirectories(id) {
  fetch(`${SERVER_NAME}/directories/${id}`,{
    method: 'POST',
    headers: {
      "Accept" : "application/json, text/plain, */*",
      "Content-type": "application/json; charset=UTF-8",
      "Content-Length" : "0"
    },
    body: ""
  }).then(response => {
    if (response.status === 200) {
      response.json()
          .then(data => {
            console.log(data['info']);
          })
    }
  }).catch((error) => {
      console.error('Error:', error);
  });
}