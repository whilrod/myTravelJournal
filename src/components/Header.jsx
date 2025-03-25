import globe from "../assets/globe.png"
function Header() {
  return(
    <>
        
        <header>
            <img src={globe} alt="globe icon" />
            <h1>My travel Journal.</h1>
        </header>
    </>
  )
}

export default Header