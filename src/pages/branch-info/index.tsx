import Layout from "Layout/Layout";
import CustomTab from "UI/CustomTab/CustomTab";
import { TabsProps } from "antd";
import BranchInfoTab from "components/BranchInfoTab/BranchInfoTab";
import HighDemandlinesTable from "components/HighDemandlinesTab/HighDemandlinesTable";
import UserTab from "components/UserTab/UserTab";

const BranchInfo = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Branch Details",
      children: <BranchInfoTab />,
    },
    {
      key: "2",
      label: "High-Demand Lines",
      children: <HighDemandlinesTable />,
    },
    {
      key: "3",
      label: "Users",
      children: <UserTab />,
    },
  ];
  return (
    <Layout Headertext={"Bright Side"} subHeader={"Spinal Health"} backButton>
      <div className="tab-wrapper">
        <CustomTab items={items} />
      </div>
    </Layout>
  );
};

export default BranchInfo;
