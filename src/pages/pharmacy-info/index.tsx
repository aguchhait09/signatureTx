import Layout from "Layout/Layout";
import CustomDatePicker from "UI/CustomDateRangePicker/CustomDatePicker";
import CustomTab from "UI/CustomTab/CustomTab";
import { TabsProps } from "antd";
import PharmacyInfoTab from "components/Pharmacyinfotab/PharmacyInfoTab";
import SettingsTab from "components/SettingsTab/SettingsTab";
import useUrlState from "@ahooksjs/use-url-state";
import { useParams } from "react-router";
import { PharmacyProvider } from "lib/modules/pharmacy/context/PharmacyContext";
import BranchesTab from "components/BranchesTab/BranchesTab";
import UserTab from "components/UserTab/UserTab";
import MedicationsPriceOverrideTab from "components/MedicationsPriceOverrideTab/MedicationsPriceOverrideTab";

enum PharmacyTabsEnum {
  info = "info",
  branches = "branches",
  users = "users",
  medications = "medications",
  settings = "settings",
}

const items: TabsProps["items"] = [
  {
    key: PharmacyTabsEnum.info,
    label: "Pharmacy Info",
    children: <PharmacyInfoTab />,
  },
  {
    key: PharmacyTabsEnum.branches,
    label: "Branches",
    children: <BranchesTab />,
  },
  {
    key: PharmacyTabsEnum.users,
    label: "Users",
    children: <UserTab />,
  },
  {
    key: PharmacyTabsEnum.medications,
    label: "Medications Price Override",
    children: <MedicationsPriceOverrideTab />,
  },
  {
    key: PharmacyTabsEnum.settings,
    label: "Settings",
    children: <SettingsTab />,
  },
];

const PharmacyInfo = () => {
  const { pharmacyId } = useParams();
  const [activeTab, setActiveTab] = useUrlState(
    {
      tab: PharmacyTabsEnum.info,
    },
    {
      navigateMode: "replace",
      stringifyOptions: {
        skipEmptyString: true,
        strict: true,
        arrayFormat: "comma",
      },
    }
  );

  return (
    <PharmacyProvider pharmacyId={pharmacyId}>
      <Layout Headertext={"Spinal Health"} backButton>
        <div className="tab-wrapper">
          {activeTab.tab === PharmacyTabsEnum.info ? (
            <div className="date-picker-wrap-absolute">
              <CustomDatePicker />
            </div>
          ) : null}
          <CustomTab
            activeKey={activeTab.tab}
            onChange={(active) => setActiveTab({ tab: active })}
            items={items}
          />
        </div>
      </Layout>
    </PharmacyProvider>
  );
};

export default PharmacyInfo;
