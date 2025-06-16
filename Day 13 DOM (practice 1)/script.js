console.log()
let a = alert("box")
document.title = "DOM";
document.querySelectorAll(".box").forEach(
    (e) => e.style.color = "red"
)
document.querySelectorAll(".box").forEach(
    (e) => e.style.backgroundColor = "aqua"
)
document.getElementById("boxfox").style.color = "blue";