import Layout from "Layout/Layout";
import CustomTab from "UI/CustomTab/CustomTab";
import { TabsProps } from "antd";
import BranchesTabpage from "components/BranchesTabPage/BranchesTabpage";
import PharmacyTab from "components/PharmacyTab/PharmacyTab";
import { useState } from "react";

export default function PharmacyAndBranch() {
  // Fetch Data for Pharmacy Tab
  // const useCustomHook = () => {
  //   const { isPending, data: pharmacy } = useQuery({
  //     queryKey: ["pharmacyTab"],
  //     queryFn: ()=>pharmacyCall,
  //   });
  //   console.log("pharmaData", pharmacy);
  //   return { pharmacy, isPending }
  // }
  // Count
  const [pharmacyCount, setPharmacyCount] = useState(0)



  // const { isPending, pharmacy } = useCustomHook()

  // Pages Items
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Pharmacies (${pharmacyCount})`,
      children: (
        // <PharmacyTab filterPass={queryParams} pharmacy={pharmacy as Data} isPending={isPending} />
        <PharmacyTab count={setPharmacyCount} />
      ),
    },
    {
      key: "2",
      label: `Branches (12121)`,
      children: <BranchesTabpage/>,
    },
  ];
  return (
    <Layout Headertext={"Pharmacies & Branches"}>
      <CustomTab items={items} />
    </Layout>
  );
}
