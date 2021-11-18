import "./topbar.css";
// import { Search } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">MeetYa</span>
      </div>
      <div className="topbarCenter">
        {/* <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for a recipe"
            className="searchInput"
          />
        </div> */}
      </div>
      <div className="topbarRight">
        <div className="empty-div"></div>
      </div>
    </div>
  );
}