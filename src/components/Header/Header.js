import React from "react";
import "./Header.scss";
// import globalhrforum from "../../assets/globalhrforum.svg";
// import massage from "../../assets/massage.svg";
// import userhrimg from "../../assets/user-hr-img.png";
const GlobalHRForum = () => {
  return (
    <div className="global-hr-forum-min">
      <div className="hrforum-Header">
        {/* <img src={globalhrforum} alt="logo" /> */}
        <h2>Global HR Forum</h2>
      </div>
      <div className="global-hr-data">
        <div className="global-hr-user-row">
          <div className="global-hr-user-title-note-img">
            <div className="global-hr-user-col user-image">
              {/* <img src={userhrimg} alt="Ellipse1" /> */}
            </div>
            <div className="global-hr-user-col">
              <div className="global-hr-user-title">Maternity and benefits</div>
              <div className="global-hr-user-notification">silvy started 2 days ago</div>
            </div>
          </div>
          <div className="global-hr-user-icon-number">
            {/* <img src={massage} alt="massage" /> */}
            <span className="global-hr-user-notification-number">05</span>
          </div>
        </div>
        <div className="global-hr-user-row">
          <div className="global-hr-user-title-note-img">
            <div className="global-hr-user-col user-image">
              {/* <img src={userhrimg} alt="Ellipse1" /> */}
            </div>
            <div className="global-hr-user-col">
              <div className="global-hr-user-title">Corporate Taxes</div>
              <div className="global-hr-user-notification">shai replied 4 days ago</div>
            </div>
          </div>
          <div className="global-hr-user-icon-number">
            {/* <img src={massage} alt="massage" /> */}
            <span className="global-hr-user-notification-number">12</span>
          </div>
        </div>
        <div className="global-hr-user-row">
          <div className="global-hr-user-title-note-img">
            <div className="global-hr-user-col user-image">
              {/* <img src={userhrimg} alt="Ellipse1" /> */}
            </div>
            <div className="global-hr-user-col">
              <div className="global-hr-user-title">Public Holidays</div>
              <div className="global-hr-user-notification">gre started 5 days ago</div>
            </div>
          </div>
          <div className="global-hr-user-icon-number">
            {/* <img src={massage} alt="massage" /> */}
            <span className="global-hr-user-notification-number">06</span>
          </div>
        </div>
        <div className="global-hr-user-row">
          <div className="global-hr-user-title-note-img">
            <div className="global-hr-user-col user-image">
              {/* <img src={userhrimg} alt="Ellipse1" /> */}
            </div>
            <div className="global-hr-user-col">
              <div className="global-hr-user-title">COVID Tax Laws</div>
              <div className="global-hr-user-notification">ian started 7 days ago</div>
            </div>
          </div>
          <div className="global-hr-user-icon-number">
            {/* <img src={massage} alt="massage" /> */}
            <span className="global-hr-user-notification-number">08</span>
          </div>
        </div>
        <div className="global-hr-user-row">
          <div className="global-hr-user-title-note-img">
            <div className="global-hr-user-col user-image">
              {/* <img src={userhrimg} alt="Ellipse1" /> */}
            </div>
            <div className="global-hr-user-col">
              <div className="global-hr-user-title">Holiday Policy Japan</div>
              <div className="global-hr-user-notification">marc started 7 days ago</div>
            </div>
          </div>
          <div className="global-hr-user-icon-number">
            {/* <img src={massage} alt="massage" /> */}
            <span className="global-hr-user-notification-number">36</span>
          </div>
        </div>
      </div>
      <div className="global-hr-footer">
        <h4>More</h4>
      </div>
    </div>
  );
};

export default GlobalHRForum;
