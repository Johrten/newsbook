social = document.getElementsByClassName("_4299")
console.log(social)
for (let i = social.length - 1; i >= 0; --i) {
  // social[i].style.display = "none"
  social[i].remove()
}
