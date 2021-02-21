// ----- current date and day
const date = new Date();
const days = ["неділя", "понеділок", "вівторок", "середа", "четвер", "п'ятниця", "субота"];
const day = days[date.getDay()];
const mounths = ["січня", "лютого", "березня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"];
const mount = mounths[date.getMonth()];

document.querySelector('.date').innerHTML = day + ' ' + date.getDate() + ' ' + mount + ' ' + date.getUTCFullYear();


// ----- when was it published (how many days ago)
const dateOfPublication = "2-11-2021";
    //const dateOfPublication = new Date(document.querySelector('.headline').lastModified);

const dateForCheckDate = (date.getMonth() + 1) + '-' + date.getDate() + '-' + date.getUTCFullYear();
const rezultInDays = (Date.parse(dateForCheckDate) - Date.parse(dateOfPublication)) / 1000 / 60 / 60 / 24;
let addTextAboutAgo = "більше року тому";
switch (true) {
    case rezultInDays === 0:
        addTextAboutAgo = " сьогодні";
        break;
    case rezultInDays <= 1:
        addTextAboutAgo = " вчора";
        break;
    case rezultInDays <= 4:
        addTextAboutAgo = " " + rezultInDays + " дні тому";
        break;
    case rezultInDays <= 7:
        addTextAboutAgo = " " + rezultInDays + " днів тому";
        break;
    case rezultInDays <= 30:
        addTextAboutAgo = " понад тиждень тому";
        break;
    case rezultInDays <= 365:
        addTextAboutAgo = " понад місяць тому";
        break;
}
document.querySelector('.published').innerHTML += addTextAboutAgo;

// ------- show big foto
const fotoForOpen = document.querySelector('.img-for-news');
fotoForOpen.addEventListener('click', showBigFoto);
function showBigFoto (){
    document.querySelector('.carousel').style.display="block";
};

// carousel
const images = [
    'img/flag.png',
    'img/macgregor-portie.png',
    'img/politics.png'
];
let currIdx = 0;
function showCurentImg(){
    const imgContainer = document.querySelector('.current');
    imgContainer.src = images[currIdx];
}
showCurentImg();

function nextImg(){
    currIdx++;
    if (currIdx >= images.length) currIdx = 0;
    showCurentImg();
}
function prevImg(){
    currIdx--;
    if (currIdx < 0) currIdx = images.length-1;
    showCurentImg();
}
document.querySelector('.prev').addEventListener('click', prevImg);
document.querySelector('.next').addEventListener('click', nextImg);
