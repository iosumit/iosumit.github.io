function openDialog(e) {
    document.getElementById(e).style.display = "flex";
}

function closeDialog(event) {
    if (event && event.classList.contains("dialog-overlay")) {
        event.style.display = "none";
    }
}