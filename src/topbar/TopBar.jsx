import "./TopBar.css";

export default function TopBar() {
  return (<div className="top">
    <div className="topLeft">
      <i className="topIcon fa-brands fa-square-facebook"></i>
      <i className="topIcon fa-brands fa-instagram"></i>
      <i className="topIcon fa-brands fa-youtube"></i>
      <i className="topIcon fa-brands fa-twitter"></i>
    </div>
    <div className="topCenter">
      <ul className="topList">
        <li className="topListItem">HOME</li>
        <li className="topListItem">ABOUT</li>
        <li className="topListItem">CONTACT</li>
        <li className="topListItem">WRITE</li>
        <li className="topListItem">LOGOUT</li>
        <li className="topListItem">Test</li>
      </ul>
      </div>
    <div className="topRight"> 
    <img
    className="topImg"
    src="https://mymodernmet.com/wp/wp-content/uploads/2018/10/Mou-Aysha-portrait-photography-3.jpg" alt="" />
    <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>
    </div>
  </div>
  )
}
