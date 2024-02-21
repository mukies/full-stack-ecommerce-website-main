import { TabPane, Tab } from "semantic-ui-react";
import Product from "../../pages/admin/Product.jsx";
import Category from "../../pages/admin/Category.jsx";
import Layout from "../layout/Layout.jsx";
import Profile from "../Profile.jsx";

const Menus = () => {
  //

  const panes = [
    {
      menuItem: "profile",
      render: () => (
        <TabPane>
          <Profile />
        </TabPane>
      ),
    },
    {
      menuItem: "products",
      render: () => (
        <TabPane>
          <Product />
        </TabPane>
      ),
    },
    {
      menuItem: "categories",
      render: () => (
        <TabPane>
          <Category />
        </TabPane>
      ),
    },
  ];

  //

  return (
    <Layout>
      <div className="h-auto">
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

export default Menus;
