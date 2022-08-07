let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll("button");

btns.forEach(function (item) {
    item.addEventListener("click", () => {
        if (item.classList.contains("decrease")) {
            count--;
        }
       else if (item.classList.contains("increase")) count++;
       else {count = 0};

       value.innerHTML = count;
       
       if (value.innerHTML < 0) value.style.color = "red";
       else if (value.innerHTML > 0) value.style.color = "green";
       else value.style.color = "black";
    })
})


