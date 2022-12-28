import "./TopBar.css";

export default function TopBar() {
  return (<div className="top">
    <div className="topLeft">
      <i class="fa-brands fa-square-facebook"></i>
      <i class="fa-brands fa-instagram"></i>
      <i class="fa-brands fa-youtube"></i>
      <i class="fa-brands fa-twitter"></i>
    </div>
    <div className="topCenter">
      <ul className="topList">
        <li className="topListItem">HOME</li>
        <li className="topListItem">ABOUT</li>
        <li className="topListItem">CONTACT</li>
        <li className="topListItem">WRITE</li>
        <li className="topListItem">LOGOUT</li>
      </ul>
      </div>
    <div className="topRight"> 
    <img src="https://en.wikipedia.org/wiki/Portrait_photography#/media/File:ECurtis.jpg" alt="" />
    <i class="fa-solid fa-magnifying-glass"></i>
    </div>
  </div>
  )
}
