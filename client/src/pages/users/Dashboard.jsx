/** @format */

import { TabPane, Tab } from "semantic-ui-react";
import Orders from "./Orders.jsx";
import Layout from "../../component/layout/Layout.jsx";
import Profile from "../../component/Profile.jsx";

const Dashboard = () => {
  //

  const panes = [
    {
      menuItem: "Profile",
      render: () => (
        <TabPane>
          <Profile />
        </TabPane>
      ),
    },
    {
      menuItem: "Orders",
      render: () => (
        <TabPane>
          <Orders />
        </TabPane>
      ),
    },
  ];

  //

  return (
    <Layout>
      <div className="h-[90dvh] ">
        <p
          className="text-center mb-4 border-b-[2px] border-b-gray-500
                py-5 text-3xl"
        >
          Dashboard
        </p>
        <Tab panes={panes} />
      </div>
    </Layout>
  );
};

export default Dashboard;
