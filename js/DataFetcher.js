class DataFetcher {

  static getProjects() {
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
        </tr>
        `;
      });
  
      document.querySelector('#projects-list').innerHTML = output;
    });
  }

  static getProject() {
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
}


  static getEditableProjects() {
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
      DataFetcher.addEventListenerToDeleteButton();
      
    });
  }

  static deleteProject() {
    alert("USUNIĘTO!");
  }

  static addEventListenerToDeleteButton() {
    var matches = document.querySelectorAll('#deleteProject');
      matches.forEach(function(item) {
        item.addEventListener
        ('click', DataFetcher.deleteProject);
      });
  }


}





// dodać do get projects boolean TRUE - edit > dodać przycisk (z #id), podpiąć project.id do value??, clickEvent->wczytać id do metody delete / FALSE = read