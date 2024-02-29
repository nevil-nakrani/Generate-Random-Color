let h3 = document.querySelector("h3");
let btn = document.querySelector("#btn");
let box = document.querySelector("#box");

function AddColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let a = Math.floor(Math.random() * 10) / 10;

    let color = `rgba(${r}, ${g}, ${b}, ${a})`;
    return color;
}

btn.addEventListener("click", () => {
    let ranColor = AddColor();
    h3.innerText = ranColor;
    box.style.backgroundColor = ranColor;

    console.log("Color Updated Successfully!");
})