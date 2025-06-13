document.getElementById("pink").style.color = "pink"
// document.getElementsByClassName("box").style.color = "azure"
// This doesn't seem to work
document.querySelectorAll(".box").forEach(
    (e)=> e.style.backgroundColor = "azure"
)
// This worked like a charm