import Chevornleft from "UI/Icons/Chevorn-left";
import { Button } from "antd";
import assets from "json/assets";
import React, { useEffect, useState } from "react";
import { SidebarWrapper } from "styles/StyledComponents/SidebarWrapper";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import PharmaciesIcon from "UI/Icons/PharmaciesIcon";
import ClinicsIocn from "UI/Icons/ClinicsIocn";
import OrderPrescriptionIcon from "UI/Icons/OrderPrescriptionIcon";
import AdminPanelIcon from "UI/Icons/AdminPanelIcon";
import LogoShortIcon from "UI/Icons/LogoShortIcon";
import SupportIcon from "UI/Icons/SupportIcon";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps["items"] = [
  getItem("Pharmacies & Branches", "sub1", <PharmaciesIcon />),

  getItem("Clinics", "sub2", <ClinicsIocn />),

  getItem("Orders & Prescriptions", "sub3", <OrderPrescriptionIcon />),

  getItem("Admin Panel Settings", "sub4", <AdminPanelIcon />),

  getItem("Support", "sub5", <SupportIcon />),
];

const Sidebar = () => {
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  const [Isclick, setIsclick] = useState(false);
  const handleClick = () => {
    setIsclick(!Isclick);
  };

  const addClassToMainBody = () => {
    const mainBody = document.getElementsByClassName("main-body-wrap");
    if (Isclick) {
      mainBody[0].classList.add("sidebarClosed");
    } else {
      mainBody[0].classList.remove("sidebarClosed");
    }
  };
  useEffect(() => {
    addClassToMainBody();
  }, [Isclick]);

  return (
    <SidebarWrapper className={Isclick ? "slideMenu" : ""}>
      <div className="sideBarLogo">
        <img src={assets.logo} alt="" className="mainLogo" />
        <div className="slideLogo">
          <LogoShortIcon />
        </div>
        <Button className="sideBarSlide" onClick={handleClick}>
          <Chevornleft />
        </Button>
      </div>

      <div className="sidebarMenu">
        <Menu
          onClick={onClick}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={items}
        />
      </div>
    </SidebarWrapper>
  );
};

export default Sidebar;
