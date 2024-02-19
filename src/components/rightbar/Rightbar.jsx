import "./rightbar.css";
import Online from "../online/Online";
import { Users } from "../../dynamicData";

function Rightbar({profile}) {
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Cartoon_Happy_Birthday_Cake.svg/800px-Cartoon_Happy_Birthday_Cake.svg.png"
            alt=""
            className="birthdayImg"
          />
          <span className="birthdayText">
            <b>Blesson </b> and <b>3 other friends </b> have birthday today
          </span>
        </div>
        <img
          src="https://rexoxer.in/wp-content/uploads/2021/05/netflix-mod-apk-premium-version-7-54-0-download.jpeg"
          alt=""
          className="rightbarAd"
        />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online user={u} key={u.id} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <div className="rightbarProfile" >
        <h4 className="rightbarTitle"> User Information </h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Chennai</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Tirunelveli</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single </span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="https://cdn.vox-cdn.com/thumbor/4rDBWtnZ7FDBL4fHNL-sLTAV8_k=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/67108186/elon_musk_tesla_3036.0.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Elon Musk</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="https://image.cnbcfm.com/api/v1/image/105815446-1553624918736gettyimages-1078542150.jpeg?v=1612303414"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Jeff Bezos</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="https://variety.com/wp-content/uploads/2020/12/Dwayne_Johnson.png?w=970"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Dwayne Johnson</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgxMjQ5NDUyMjMxNjk3NzY4/gettyimages-492532708-copy.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Vin Diesel</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/98/Margot_Robbie_at_Somerset_House_in_2013_%28cropped%29.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Margot Robbie</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="https://techcrunch.com/wp-content/uploads/2021/01/GettyImages-1211062669.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Robert Downey</span>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
}

export default Rightbar;
