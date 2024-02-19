import "./profile.css";
import Topbar from "../../components/TopBar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "../../assets/myimg.jpeg";

function Profile(){
  return(
    <div>
      <Topbar />
      <div className="profile">
       <Sidebar />
       <div className="profileRight">
         <div className="profileRightTop">
           <div className="profileCover">
           <img src="https://wallpapercave.com/wp/wp2599594.jpg" alt="" className="profileCoverImg"/>
           <img src="https://c4.wallpaperflare.com/wallpaper/735/622/390/mahendra-singh-dhoni-cricket-athlete-wallpaper-preview.jpg" alt="" className="profileUserImg"/>
           </div>
           <div className="profileInfo">
              <h4 className="profileInfoName"> Kanishkan K</h4>
              <span className="profileInfoDesc">Hey,It's me</span>
           </div>
         </div>
         <div className="profileRightBottom">
           <Feed />
           <Rightbar profile />
       </div>
       </div>
      </div>
    </div>
  )
}

export default Profile;