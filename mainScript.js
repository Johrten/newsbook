// social = document.getElementsByClassName("_4299")
// console.log(social)
//
// for (let i = social.length - 1; i >= 0; i--) {
//   console.log(social[i])
//   social[i].remove()
// }

// var sheet = document.createElement('style')
// sheet.innerHTML = "._4299 {display:none;}"
// document.body.appendChild(sheet)

if (!!document.querySelector('[title="Newsbook"]')) {}
else {
  var sheet = document.createElement('style')
  sheet.setAttribute("title","Newsbook")
  sheet.innerHTML = "._666h._18vj._18vk._42ft {display:none} ._3vum {display:none} ._3w53 {display:none}"
  document.body.appendChild(sheet)
}
