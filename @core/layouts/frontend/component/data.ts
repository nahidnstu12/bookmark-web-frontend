export const menuItems = [
  {
    text: "Books",
    url: "/books",
  },
  {
    text: "Authors",
    url: "/authors",
  },
  {
    text: "Publishers",
    url: "/publishers",
  },
  {
    text: "Contact us",
    url: "/contact",
  },
];
export const profileMenuItems = [
  {
    url: "/profile",
    text: "Profile",
  },
  {
    url: "/profile/my-orders",
    text: "My Orders",
  },
  {
    url: "/profile/my-wishlist",
    text: "My Wishlists",
  },
  {
    url: "/checkout",
    text: "Checkout",
  },
  {
    url: "/profile/change-password",
    text: "Change Password",
  },
  {
    url: "/",
    text: "Logout",
    onClickHandler: "logoutUser",
  },
];
