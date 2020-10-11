let query = window.location.search;
let urlParam = new URLSearchParams(query);
const buildingId = urlParam.get('id');

const url = `${SERVER_NAME}/buildings/${buildingId}/projects`

fetch(url)
    .then((res) => res.json())
    .then((data) => {

        let output = '';

        data.forEach(project => {
            output += `
        <tr>
          <td>${project.id}</td>
          <td>${project.date}</td>
          <td>${project.floor}</td>
          <td>${project.mpk}</td>
          <td>${project.project_num}</td>
          <td>${project.short_description}</td>
          <td>${project.tenant}</td>
          <td>${project.service}</td>
        </tr>
        `;
        });

        document.querySelector('#projects-list').innerHTML = output;
});

const buildingName = sessionStorage.getItem("buildingName");
document.querySelector('#building-name').textContent = `Projekty Budynku ${buildingName}`;

sessionStorage.setItem("buildingId", buildingId);