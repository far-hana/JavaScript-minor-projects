const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

//console.log(window.getComputedStyle(red).backgroundColor);

const getBgColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
};

// var color = getBgColor(pink);

// pink.addEventListener("mouseenter", () => { 
//     center.style.background = color;
// });

const magicColorChanger = (element, color) => {
    element.addEventListener("mouseenter", () => {  //element from first 5 lines.
        center.style.background = color;
    });
};

magicColorChanger(red, getBgColor(red));
magicColorChanger(cyan, getBgColor(cyan));
magicColorChanger(violet, getBgColor(violet));
magicColorChanger(orange, getBgColor(orange));
magicColorChanger(pink, getBgColor(pink));