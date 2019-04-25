social = document.getElementsByClassName("_4299")
console.log(social)

for (let i = social.length - 1; i >= 0; i--) {
  console.log(social[i])
  social[i].remove()
}
