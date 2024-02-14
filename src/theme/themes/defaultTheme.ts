import { ThemeConfig } from "antd";

//test

const _palette = {
  //basic
  colorWhite: "#FFFFFF",
  colorBlack: "#000",
  colorBgMask: "#F2F4F7",
  colorGrayLightest: "#FAFBFC",

  colorPrimary: "#1760e8",
  colorInfo: "#1760e8",
  colorSuccess: "#0b6e40",
  colorError: "#a11c12",
  colorLink: "#124dba",
  colorTextBase: "#101828",
  colorSecondaryText: "#667085",

  // primary colors
  colorPrimaryBg: "#3366FF",
  colorPrimaryBgHover: "#4D7DFF",
  colorPrimaryBorder: "#3366FF",
  colorPrimaryBorderHover: "#4D7DFF",
  colorPrimaryHover: "#4D7DFF",
  colorPrimaryActive: "#254EDB",
  colorPrimaryTextHover: "#FFFFFF",
  colorPrimaryText: "#101828",
  colorPrimaryTextActive: "#FFFFFF",

  //warning colors
  colorWarningBg: "#FEF4E6",
  colorWarningBgHover: "#FFCC66",
  colorWarningBorder: "#FFBB33",
  colorWarningBorderHover: "#FFCC66",
  colorWarningHover: "#FFCC66",
  colorWarning: "#FF8800",
  colorWarningActive: "#E67300",
  colorWarningTextHover: "#FFFFFF",
  colorWarningText: "#B54708",
  colorWarningTextActive: "#FFFFFF",

  //Info colors
  colorInfoBg: "#33CCFF",
  colorInfoBgHover: "#66DDFF",
  colorInfoBorder: "#33CCFF",
  colorInfoBorderHover: "#66DDFF",
  colorInfoHover: "#66DDFF",

  colorInfoActive: "#007799",
  colorInfoTextHover: "#FFFFFF",
  colorInfoText: "#FFFFFF",
  colorInfoTextActive: "#FFFFFF",

  //success colors
  colorSuccessBg: "#E7F8F0",
  colorSuccessBgHover: "#B6E9D1",
  colorSuccessBorder: "#00CC66",
  colorSuccessBorderHover: "#00E673",
  colorSuccessHover: "#00E673",

  colorSuccessActive: "#006633",
  colorSuccessTextHover: "#FFFFFF",
  colorSuccessText: "#0B6E40",
  colorSuccessTextActive: "#FFFFFF",

  //error colors
  colorErrorBg: "#FF3344",
  colorErrorBgHover: "#FF6677",
  colorErrorBorder: "#FF3344",
  colorErrorBorderHover: "#FF6677",
  colorErrorHover: "#FF6677",

  colorErrorActive: "#990000",
  colorErrorTextHover: "#FFFFFF",
  colorErrorText: "#FFFFFF",
  colorErrorTextActive: "#FFFFFF",
  colorE8EFFD: "#E8EFFD",
  colorBorder: "#98A2B3",
  colorBorderSecondary: "#E4E7EC",
  colorB7CEF8: "#B7CEF8",
  color667085: "#667085",
  color0E3A8B: "#0E3A8B",
  color475467: "#475467",
  color1148AE: "#1148AE",
  colorF9FAFB: "#F9FAFB",
  color344054: "#344054",
  color10A55F: "#10A55F",
};

type DefaultPalette = typeof _palette;

declare module "antd/es/theme/internal" {
  interface AliasToken extends DefaultPalette {}
}

const defaultTheme: ThemeConfig = {
  token: {
    ..._palette,
    // Add your sizes here
    fontSizeIcon: 0,
    fontWeightStrong: 0,
    controlOutlineWidth: 0,
    borderRadius: 16,
    fontFamily: "Inter",
  },
  components: {
    Button: {
      borderRadius: 16,
      colorText: _palette.colorPrimaryText,
    },
  },
};

export default defaultTheme;
