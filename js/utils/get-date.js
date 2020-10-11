(function () {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth()+1;
    if(month<10) {
        month=`0${month}`;
    }
    document.querySelector('#date').value = `${year}${month}`;
}());

