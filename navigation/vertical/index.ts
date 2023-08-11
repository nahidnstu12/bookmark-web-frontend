import { TiHomeOutline } from "react-icons/ti";
import {
  MdFormatListBulletedAdd,
  MdOutlineAccountBox,
  MdOutlineLogin,
  MdOutlineManageAccounts,
} from "react-icons/md";
import { IoAlertCircleOutline, IoCubeOutline } from "react-icons/io5";
import { BiLogoGooglePlus } from "react-icons/bi";
import { BsCreditCard2Back, BsTable } from "react-icons/bs";
import { VerticalNavItemsType } from "../../@core/configs/types";

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: "Dashboard",
      icon: TiHomeOutline,
      path: "/",
    },
    {
      title: "Account Settings",
      icon: MdOutlineManageAccounts,
      path: "/account-settings",
    },
    {
      sectionTitle: "Pages",
    },
    {
      title: "Login",
      icon: MdOutlineLogin,
      path: "/pages/login",
      openInNewTab: true,
    },
    {
      title: "Register",
      icon: MdOutlineAccountBox,
      path: "/pages/register",
      openInNewTab: true,
    },
    {
      title: "Error",
      icon: IoAlertCircleOutline,
      path: "/pages/error",
      openInNewTab: true,
    },
    {
      sectionTitle: "User Interface",
    },
    {
      title: "Typography",
      icon: MdFormatListBulletedAdd,
      path: "/typography",
    },
    {
      title: "Icons",
      path: "/icons",
      icon: BiLogoGooglePlus,
    },
    {
      title: "Cards",
      icon: BsCreditCard2Back,
      path: "/cards",
    },
    {
      title: "Tables",
      icon: BsTable,
      path: "/tables",
    },
    {
      icon: IoCubeOutline,
      title: "Form Layouts",
      path: "/form-layouts",
    },
  ];
};

export default navigation;
