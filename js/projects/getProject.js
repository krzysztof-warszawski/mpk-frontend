fetch('http://localhost/app/api/projects/186')
.then((res) => res.json())
.then((project) => {

    let output = `
    <tr>
      <td>${project.id}</td>
      <td>${project.building_name}</td>
      <td>${project.date}</td>
      <td>${project.floor}</td>
      <td>${project.mpk}</td>
      <td>${project.project_num}</td>
      <td>${project.short_description}</td>
      <td>${project.tenant}</td>
      <td>${project.service}</td>
    </tr>
    `;
  
  document.querySelector('#projects-list').innerHTML = output;
});