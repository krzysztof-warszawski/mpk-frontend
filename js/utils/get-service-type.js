fetch(`${SERVER_NAME}/service`)
    .then((res) => res.json())
    .then((data) => {

        let output = '';

        data = data.slice(1, 6);
        data.forEach(service => {
            output += `
            <option value="${service.id}">${service.name}</option>
            `;
        });

        document.querySelector('#service-type').innerHTML = output;
    });