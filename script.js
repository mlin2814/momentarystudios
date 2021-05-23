function collapse() {
    let nav = document.getElementById("nav-bar");
    if (nav.className === "nav-bar") {
        nav.className += " responsive";
    } else {
        nav.className = "nav-bar";
    }
}
