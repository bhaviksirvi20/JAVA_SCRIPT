function nav() {

  let nav = document.createElement("div")
  nav.className = "navbar"
  nav.innerHTML =
    `
  
      <h1>LOGO</h1>
      <nav>
       <a href="#">home</a>
    <a href="#">blog</a>
    <a href="#">contact</a>
    <a href="#">about</a>
    <a href="#">service</a>
    <button>log in</button>
    <button>sign up</button>

      </nav>

 
  `
  return nav

}
export default nav