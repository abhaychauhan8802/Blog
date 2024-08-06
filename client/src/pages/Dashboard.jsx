import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { SideBar, Profile, Posts, Users } from "../components";
import Comments from "../components/Dashboard/Comments";
import DashboardComp from "../components/Dashboard/DashboardComp";

const Dashboard = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
        <SideBar />
      </div>
      {tab === "profile" && <Profile />}
      {tab === "posts" && <Posts />}
      {tab === "users" && <Users />}
      {tab === "comments" && <Comments />}
      {tab === "dash" && <DashboardComp />}
    </div>
  );
};

export default Dashboard;
