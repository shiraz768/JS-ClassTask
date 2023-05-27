let btn = document.getElementById("btn");
let input = document.getElementById("inp")
btn.addEventListener("click", (...skills) => {
    let skill = () => {
        for (key of skills) {
            key += input;
        }
        return document.getElementById("con").innerHTML += "<li>" + input.value + "</li>"
    }
    skill()
})