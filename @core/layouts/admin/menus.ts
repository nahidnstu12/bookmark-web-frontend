import { TiHomeOutline } from "react-icons/ti";
import { GrBook } from "react-icons/gr";
import { BiSolidUser, BiSolidCategory } from "react-icons/bi";
import { BsCartCheckFill } from "react-icons/bs";
import {
  MdShoppingCartCheckout,
  MdOutlineManageAccounts,
} from "react-icons/md";
import { VerticalNavItemsType } from "./adminTypes";

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: "Dashboard",
      icon: TiHomeOutline,
      path: "/",
    },
    {
      title: "Users",
      icon: BiSolidUser,
      path: "/users",
    },
    {
      sectionTitle: "Product Section",
    },
    {
      title: "Product",
      icon: GrBook,
      path: "/products",
    },
    {
      title: "Category",
      icon: BiSolidCategory,
      path: "/categories",
    },
    {
      title: "Cart",
      icon: BsCartCheckFill,
      path: "/carts",
    },
    {
      title: "Order",
      icon: MdShoppingCartCheckout,
      path: "/orders",
    },
    {
      sectionTitle: "Account Section",
    },
    {
      title: "Account Settings",
      icon: MdOutlineManageAccounts,
      path: "/account-settings",
    },
    // {
    //     title: "Register",
    //     icon: MdOutlineAccountBox,
    //     path: "/register",
    //     openInNewTab: true,
    // },
  ];
};

export default navigation;
