const images = ["http://www.inteegra.com.br/wp-content/uploads/2021/06/23324-1024x525.jpg",
"https://wallpaperaccess.com/full/214901.jpg",
"https://wallup.net/wp-content/uploads/2019/09/809203-alien-horror-sci-fi-futuristic-dark-aliens-creature-survival-landscape-planet.jpg"]

const chosenImage = images[Math.floor(Math.random() * images.length)];

const body = document.body;
body.style.backgroundImage=`url(${chosenImage})`;
