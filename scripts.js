// collapsible for FAQ

const collapse = document.getElementsByClassName("collapsible");

for (let i = 0; i < collapse.length; i++) {
  collapse[i].addEventListener("click", function() {
    this.classList.toggle("open");
    let insideCollapse = this.nextElementSibling;
    if (insideCollapse.style.maxHeight){
      insideCollapse.style.maxHeight = null;
    } else {
      insideCollapse.style.maxHeight = insideCollapse.scrollHeight + "px";
    }
  });
}