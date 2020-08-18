fetch('https://raw.githubusercontent.com/sono81/semester-project-2/master/json/characters.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        getData(json);
    })
    .catch(function (error) {
        console.log(error);
    });

    let wrapper = document.querySelector('.wrapper');

function getData(characters) {
    for (i = 0; i < characters.length; i++) {
        wrapper.innerHTML +=   `<div class="character">
                                    <img src="../images/characters/${characters[i].Id+'.png'}">
                                    <p>${characters[i].Name}</p>
                                    <p>${characters[i].Culture}</p>
                                </div>`

                                console.log(characters[i]);
    }
};