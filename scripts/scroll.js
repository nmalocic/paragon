document.body.addEventListener("wheel", scroll, {passive: false});

console.log("test");

function scroll(event) {
  event.preventDefault();
  const current = document.getElementsByClassName("active")[0];

  if (event.wheelDelta > 0 && parseInt(current.id) > 1) {
    const inFocus = current.previousElementSibling;
    inFocus.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    current.classList.remove("active");
    inFocus.classList.add("active");
  }
  if (event.wheelDelta < 0 && parseInt(current.id) < 4) {
    const inFocus = current.nextElementSibling;
    inFocus.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    current.classList.remove("active");
    inFocus.classList.add("active");
  }
}