import { MainWrapper } from "styles/StyledComponents/MainWrapper";
import Sidebar from "./Sidebar";
import { Button, Typography } from "antd";
import BackButton from "UI/Icons/BackButton";

interface LayoutProps {
  children: JSX.Element | Array<JSX.Element>;
  backButton?: boolean;
  Headertext?: string | JSX.Element | Array<JSX.Element>;
  subHeader?: string | JSX.Element | Array<JSX.Element>;
}
const Layout = ({
  children,
  backButton,
  Headertext,
  subHeader,
}: LayoutProps) => {
  return (
    <MainWrapper>
      <Sidebar />
      <div className="main-body-wrap">
        {backButton ? (
          <div className="backbtn header-wrap">
            <Button type="text" icon={<BackButton />} />
            <h5>{Headertext}</h5>
            <p>{subHeader}</p>
          </div>
        ) : (
          <div className="header-wrap">
            {" "}
            <Typography.Title level={1}>{Headertext}</Typography.Title>{" "}
          </div>
        )}
        <div className="child-wrapper">{children}</div>
      </div>
    </MainWrapper>
  );
};

export default Layout;
