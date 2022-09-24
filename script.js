getList = document.querySelector('.movies');
getFilterBtt = document.getElementsByName('film-filter');
getResetBtt = document.querySelector('#resetBtt');
getSearchInput = document.querySelector('#searchInput');
getSearchBtt = document.querySelector('#searchBtt');
getHeader = document.querySelector("header");
getNav = document.querySelector("nav");
getContainer = document.querySelector(".container")

const mouseOver = function mouseOver(element) {
    element.style.opacity = 0.5
    
}

const mouseLeave = function mouseLeave(element) {
    element.style.opacity = 1
}

const addMoviesToDom = function (films) {
    for (let i = 0; i < films.length; i++) {
        let newLi = document.createElement("li");
        let newA = document.createElement("a");
        getList.appendChild(newLi);
        newLi.appendChild(newA);
        newA.href = `https://www.imdb.com/title/${films[i].imdbID}/`;
        newA.target = "_blank";
        newA.innerHTML = `<img src="${films[i].poster}" width='100%'>`;
    }
    getPoster = getList.querySelectorAll("img");
    for (let j = 0; j < getPoster.length; j++) {
        getPoster[j].onmouseover = function () { mouseOver(getPoster[j]) };
        getPoster[j].onmouseleave = function () { mouseLeave(getPoster[j]) };
    }
}

addMoviesToDom(movies)


const filterMovies = function (wordInMovie) {
    resultMovies = [];
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].title.toUpperCase().includes(wordInMovie.toUpperCase())) {
            resultMovies.push(movies[i])
        }
    }
    addMoviesToDom(resultMovies)
}

const filterLatestMovies = function () {
    resultMovies = [];
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].year >= 2014) {
            resultMovies.push(movies[i])
        }
    }
    addMoviesToDom(resultMovies)
}

const removeMovies = function () {
    endChild = getList.lastChild;
    while (endChild) {
        getList.removeChild(endChild);
        endChild = getList.lastChild
    }
}

const handleOnChangeEvent = function (event) {
    removeMovies();
    switch (event) {
        case "new":
            filterLatestMovies();
            break;
        case "avenger":
            filterMovies("avenger");
            break;
        case "xmen":
            filterMovies("x-men");;
            break;
        case "princess":
            filterMovies("princess");
            break;
        case "batman":
            filterMovies("batman");
            break
    }
}

for (let i = 0; i < getFilterBtt.length; i++) {
    getFilterBtt[i].addEventListener('change', () => {
        if (getFilterBtt[i].checked) {
            filterValue = getFilterBtt[i].value
            handleOnChangeEvent(filterValue)
        }
    })
}

const emptyRadioBtt = function () {
    for (let i = 0; i < getFilterBtt.length; i++) {
        getFilterBtt[i].checked = false
    }
}

getResetBtt.addEventListener('click', (event) => {
    removeMovies();
    emptyRadioBtt()
    getSearchInput.value = '';
    addMoviesToDom(movies);
})

getSearchInput.addEventListener('search', () => {
    emptyRadioBtt();
    removeMovies();
    if (getSearchInput.value.length > 0) {
        filterMovies(getSearchInput.value)
    }
    else {
        addMoviesToDom(movies);
    }
})

getSearchBtt.addEventListener('click', (event) => {
    removeMovies();
    emptyRadioBtt()
    if (getSearchInput.value.length > 0) {
        filterMovies(getSearchInput.value)
    }
    else {
        addMoviesToDom(movies);
    }
})


// Onderstaande code is voor wanneer de schermgrootte veranderd of kleiner is dan van een default laptop
let counterSearch = 0;
let counterMenu = 0;

const addNavIcon = function () {
    let navIcon = new Image(); 
    navIcon.src = "./Images/hamburger_menu.png"
    navIcon.setAttribute('id','menuBtt');
    if (getHeader.firstChild) {
        getHeader.insertBefore(navIcon, getHeader.firstChild);
    } 
    else {
        getHeader.appendChild(navIcon);
    }
    navIcon.style.gridRow= "1/1";
    navIcon.style.gridColumn= "2/3";    
    navIcon.style.width = "1.5rem";
    navIcon.style.cursor = "pointer";
    navIcon.style.zIndex = "2";

    getSearchBtt.addEventListener('click', () => {
        counterSearch++
        getTitle = document.getElementsByTagName("h1");
        if (counterSearch % 2 === 1){
            getTitle[0].style.opacity = 0;
            getSearchInput.setAttribute("style", "opacity:1; font-size:1rem");
            getSearchInput.addEventListener("keypress", function(event) {
                if (event.key === "Enter") {
                    getTitle[0].style.opacity = 1;
                    getSearchInput.setAttribute("style", "opacity:0");
                }
            })
        }
        else {
            getTitle[0].style.opacity = 1;
            getSearchInput.setAttribute("style", "opacity:0");
        }
    })
}

const resetScreen = function () {
    getNav.style.opacity = 0;
    for (let i = 0; i < getPoster.length; i++){
        getPoster[i].style.opacity = 1;
    }
    getContainer.style.marginTop = "-10rem";
}


if (screen.width <= 1024) {
    addNavIcon();
    menuBtt = document.querySelector("#menuBtt");
    menuBtt.addEventListener('click', () => {
        counterMenu++
        if (counterMenu % 2 === 1) {
            getNav.style.opacity = 1;
            getContainer.style.marginTop = "3rem";
            for (let i = 0; i < getPoster.length; i++){
                getPoster[i].style.opacity = 0.5;
            }
            for (let j = 0; j < getFilterBtt.length; j++) {
                getFilterBtt[j].addEventListener('change', () => {
                        resetScreen();
                        counterMenu = 0;
                })
            }
            getResetBtt.addEventListener('click', (event) => {
                resetScreen()
            })
        }
        else {
            resetScreen()
        }
    } )
}

window.addEventListener('resize', () => {
    if (screen.width <= 1024 && document.querySelector("#menuBtt")===null) {
        addNavIcon()
    }
    else if (screen.width > 1024 && !(document.querySelector("#menuBtt")===null)) {
        menuBtt = document.querySelector("#menuBtt");
        getHeader.removeChild(menuBtt)
    }
})



