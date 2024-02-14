import { useQuery } from "@tanstack/react-query";
import Layout from "Layout/Layout";
import CustomTab from "UI/CustomTab/CustomTab";
import { TabsProps } from "antd";
import BranchesTabpage from "components/BranchesTabPage/BranchesTabpage";
import PharmacyTab from "components/PharmacyTab/PharmacyTab";
import { branchApi } from "lib/modules/branchTab/functions/branchTab.api";
import { pharmacyCall } from "lib/modules/pharmacyTab/functions/pharmacyTab.api";
import { DataBranchAll } from "typescript/interfaces/branchAll.interface";
import { Data } from "typescript/interfaces/pharmacyTab.interface";

export default function PharmacyAndBranch() {
  // Fetch Data for Pharmacy Tab
  const { isPending, data: pharmacy } = useQuery({
    queryKey: ["pharmacyTab"],
    queryFn: pharmacyCall,
  });
  console.log("pharmaData", pharmacy);

  // Fetch Data for Branch Tab
  const { data: allBranch } = useQuery({
    queryKey: ["branchAlll"],
    queryFn: branchApi,
  });
  console.log("allBranch", allBranch);

  // Pages Items
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Pharmacies (${pharmacy?.count})`,
      children: (
        <PharmacyTab pharmacy={pharmacy as Data} isPending={isPending} />
      ),
    },
    {
      key: "2",
      label: `Branches (${allBranch?.count})`,
      children: <BranchesTabpage allBranch={allBranch as DataBranchAll} />,
    },
  ];
  return (
    <Layout Headertext={"Pharmacies & Branches"}>
      <CustomTab items={items} />
    </Layout>
  );
}
