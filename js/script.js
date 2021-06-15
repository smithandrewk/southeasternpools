let colors = ["#0040FF", "#FF0000", "#00B135"];
// yellow
// #FFE500
(function() {
    // setModeEventListener();
    setColorHoverListener();
    // setBioEventListener();
    // setRandomPhoto();

    setInterval(() => {
        setRandomPhoto();
    }, 2500);


})();

/* Dark Mode */
// function setModeEventListener() {
//   let list = document.body.classList;
//   document.getElementById("toggler").addEventListener("change", event => {
//     event.target.checked ? list.add("dark-mode") : list.remove("dark-mode");
//   });
// }

/* Colors */

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function setRandomLinkColor() {
    Array.from(document.getElementsByTagName("a")).forEach(e => {
        e.style.color = getRandomColor();
    });
}

function setColorHoverListener() {
    Array.from(document.querySelectorAll("a, button")).forEach(e => {
        e.addEventListener("mouseover", setRandomLinkColor);
    });
}

/* Photos */

function setRandomPhoto() {
    let num = Math.floor(Math.random() * 3) + 1;
    console.log(num)
    document.getElementById("propic").src = `./img/headshots/face${num}.jpg`;
}