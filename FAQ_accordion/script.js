const boxes = document.querySelectorAll(".box");
console.log(boxes); 
const images = document.querySelectorAll(".img");
console.log(images); 

window.addEventListener("load", () =>{
        for (let i = 0; i < boxes.length; i++) {
            const box = boxes[i];
            const img = images[i];

            img.addEventListener("click", () => {

                if (box.style.display == "none") {
                    box.style.display = "initial";
                    img.src = "./assets/images/icon-minus.svg";
                }
                else {

                    box.style.display = "none";
                    img.src = "./assets/images/icon-plus.svg";
                }
            });

        }
    });

