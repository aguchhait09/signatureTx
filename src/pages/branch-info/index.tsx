import Layout from "Layout/Layout";
import CustomTab from "UI/CustomTab/CustomTab";
import { TabsProps } from "antd";
import BranchInfoTab from "components/BranchInfoTab/BranchInfoTab";
import HighDemandlinesTable from "components/HighDemandlinesTab/HighDemandlinesTable";
import UserTab from "components/UserTab/UserTab";
import { useState } from "react";

const BranchInfo = () => {

  const [name, setName] = useState("")
  const [subName, setSubName] = useState("")

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Branch Details",
      children: <BranchInfoTab name={setName} sname={setSubName}/>,
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
    <Layout Headertext={name} subHeader={subName} backButton>
      <div className="tab-wrapper">
        <CustomTab items={items} />
      </div>
    </Layout>
  );
};

export default BranchInfo;
