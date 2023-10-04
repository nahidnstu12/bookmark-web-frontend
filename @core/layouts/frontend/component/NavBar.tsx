import {
  Avatar,
  Badge,
  Box,
  Button,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Stack } from "@mui/system";
import Link from "next/link";
import { useRouter } from "next/router";

import { useEffect, useState } from "react";
import { AiOutlineFilter } from "react-icons/ai";
import { BiSearch, BiUser } from "react-icons/bi";
import { BsSunFill } from "react-icons/bs";
import { CgMenuLeft, CgShoppingBag } from "react-icons/cg";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { RiMoonLine } from "react-icons/ri";
import { VscHome } from "react-icons/vsc";
import { useGetBooksQuery } from "../../../../@store/features/booksApi";
import { UseThemeContext } from "../../../theme/frontendTheme/ThemeComponent";
import CartItemComponent from "./CartItemComponent";
import Drawer from "./Drawer";
import Logo from "./Logo";

import {
  AppBarContainer,
  IconContainer,
  LinkContainer,
  LogoContainer,
  MenuItemContainer,
  MiniTopBarContainer,
  MobileBarContainer,
  MobileMenuContainer,
  MobMenuItemContainer,
  ThemeSwitchStyle,
} from "./nav-styles";
import SearchBar from "./Searchbar";
import { menuItems, profileMenuItems } from "./data";

const NavBar = () => {
  const theme = useTheme();
  // eslint-disable-next-line no-unused-vars
  // const authChecked = useAuthCheck(); //don't remove it
  // const dispatch = useDispatch();
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [_cartBookFilter, _setCartBookFilter] = useState<any>();
  const [serachTrig, setSearchTrig] = useState(false);
  const [cartListsWithImage, setCartListsWithImage] = useState();
  const [cartModalTrg, setCartModalTrig] = useState(false);
  const [mobMenuTrig, setMobMenuTrig] = useState(false);
  const [mobSearchTrig, setMobSearchTrig] = useState(false);
  const [, setFilterMenuTrig] = useState(false);
  const [profileMenuTrig, setProfileMenuTrig] = useState(false);
  const { handleChangeMode } = UseThemeContext();
  const router = useRouter();
  const isAuthenticated = { accessToken: null };
  // const isAuthenticated = useSelector((state) => state?.auth);
  // const authUser = isAuthenticated?.user || {};
  // const { loginModal, registerModal } = useSelector(
  //   (state) => state?.authModal ?? false,
  // );
  // const profileMenuHandlers = useProfileMenuHandlers();

  // const { data: cartLists } = useGetCartsByUserQuery(
  //   { userId: authUser?.id },
  //   { skip: !authUser?.id },
  // );
  const cartLists: any = [];
  const { data: cartBooks } = useGetBooksQuery({});

  // useEffect(() => {
  //   const cartbookIds = cartLists?.data?.map(
  //     (item: any) => item?.attributes?.book?.data?.id,
  //   );
  //   let query: any = {
  //     populate: ["images"],
  //     filters: {
  //       id: {
  //         $in: cartbookIds,
  //       },
  //     },
  //   };
  //   setCartBookFilter({ query });
  // }, [cartLists]);

  useEffect(() => {
    if (cartLists?.data && cartBooks?.data) {
      const cartBookItem = cartBooks?.data?.reduce(
        (acc: any, curr: any) => ({
          ...acc,
          [curr.id]: curr?.attributes?.images?.data[0]?.attributes?.url,
        }),
        {},
      );

      // @LATER cart image not insert
      const cartWithImage = cartLists?.data?.map((item: any, ind: number) => ({
        ...item.attributes,
        cartImage: cartBookItem[item?.attributes?.book?.data?.id],
        id: cartLists?.data[ind]?.id,
      }));

      setCartListsWithImage(cartWithImage);
    }
  }, [cartLists?.data, cartBooks?.data]);

  const totalAmount = cartLists?.data?.reduce(
    (acc: any, curr: any) =>
      acc +
      (curr?.attributes?.variant?.data?.attributes?.price || 0) *
        curr?.attributes?.quantity,
    0,
  );

  const handleOpenUserMenu = (event: any) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // have logout dependency
  // const profileMenuItems = navigation?.data?.attributes?.profileMenus?.map(
  //   ({ ...menu }) => {
  //     if (typeof profileMenuHandlers[menu.onClickHandler] === "function") {
  //       menu.onClickHandler = profileMenuHandlers[menu.onClickHandler];
  //     } else {
  //       delete menu.onClickHandler;
  //     }
  //
  //     return menu;
  //   },
  // );
  // const menuItems = navigation?.data?.attributes?.menus;

  const toggleDrawer = (open: any) => (event: any) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setCartModalTrig(open);
  };

  const toggleSearch = () => {
    setSearchTrig(true);
  };

  const toggleMenuDraw = (open: any) => (event: any) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setMobMenuTrig(open);
  };

  const toggleProfileDraw = (open: any) => (event: any) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setProfileMenuTrig(open);
  };

  const toggleFilterDraw = (open: any) => (event: any) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setFilterMenuTrig(open);
  };

  const handleSearchToggle = () => {
    if (mobSearchTrig) {
      setMobSearchTrig(false);
    } else {
      setMobSearchTrig(true);
    }
  };

  const handleHome = () => {
    router.push("/");
  };

  const handleClickOpenLogin = () => {
    // dispatch(openLoginModal());
  };

  // const handleCloseLogin = () => {
  //   // dispatch(closeLoginModal());
  // };
  //
  // const handleClickOpenRegister = () => {
  //   // dispatch(openRegisterModal());
  // };
  //
  // const handleCloseRegister = () => {
  //   // dispatch(closeRegisterModal());
  // };

  console.log("navbar mounting");

  return (
    <>
      <AppBarContainer position="fixed" sx={{ px: { xs: "3%", md: "5%" } }}>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <Link href="/" style={{ textDecoration: "none" }}>
            <LogoContainer>
              <Logo />
            </LogoContainer>
          </Link>
          {!serachTrig ? (
            <Stack direction="row" spacing={2} alignItems="center">
              {menuItems?.map((item: any, index: number) => {
                const active = router.pathname.includes(item.url);

                return (
                  <Link
                    key={index}
                    href={item.url}
                    style={{ textDecoration: "none" }}
                  >
                    <LinkContainer
                      sx={{
                        color: active
                          ? theme.palette.action.hover
                          : theme.palette.text.primary,
                      }}
                      key={item.id}
                    >
                      {item.text}
                    </LinkContainer>
                  </Link>
                );
              })}
              <LinkContainer
                sx={{
                  display: () => ({
                    xs: "none",
                    lg: "block",
                  }),
                }}
                onClick={toggleSearch}
              >
                Search
              </LinkContainer>
            </Stack>
          ) : (
            <SearchBar normal={false} />
          )}
          {/* <SearchBar normal /> */}
          <Box sx={{ display: "flex", gap: "2rem" }}>
            <IconContainer onClick={handleChangeMode}>
              <ThemeSwitchStyle>
                {theme.palette.mode === "light" ? (
                  <RiMoonLine />
                ) : (
                  <BsSunFill />
                )}
              </ThemeSwitchStyle>
            </IconContainer>

            {isAuthenticated?.accessToken && (
              <>
                <IconContainer fontSize="28px" onClick={toggleDrawer(true)}>
                  <Badge badgeContent={cartLists?.data?.length} color="primary">
                    <HiOutlineShoppingBag />
                  </Badge>
                </IconContainer>
                <Link href="/profile/my-wishlist">
                  <IconContainer fontSize="32px">
                    <Badge badgeContent={null} color="primary">
                      <MdOutlineFavoriteBorder />
                    </Badge>
                  </IconContainer>
                </Link>
              </>
            )}

            {isAuthenticated?.accessToken ? (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt={"live-test"}
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{
                    mt: "45px",
                  }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {profileMenuItems?.map((menu: any, index) =>
                    typeof menu?.onClickHandler === "function" ? (
                      <MenuItemContainer key={index}>
                        <MenuItem onClick={handleCloseUserMenu}>
                          <Typography
                            textAlign="center"
                            // onClick={menu?.onClickHandler}
                          >
                            {menu.text}
                          </Typography>
                        </MenuItem>
                      </MenuItemContainer>
                    ) : (
                      <MenuItemContainer key={index}>
                        <Link href={menu.url}>
                          <MenuItem onClick={handleCloseUserMenu}>
                            <Typography textAlign="center">
                              {menu.text}
                            </Typography>
                          </MenuItem>
                        </Link>
                      </MenuItemContainer>
                    ),
                  )}
                </Menu>
              </Box>
            ) : (
              <Box>
                <Button
                  variant="contained"
                  disableElevation
                  onClick={handleClickOpenLogin}
                >
                  Join
                </Button>
              </Box>
            )}
          </Box>
        </Stack>

        <CartItemComponent
          cartModalTrg={cartModalTrg}
          toggleDrawer={toggleDrawer}
          theme={theme}
          cartLists={cartListsWithImage}
          totalAmount={totalAmount}
        />
      </AppBarContainer>

      <MobileBarContainer position="fixed">
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="center"
        >
          {mobSearchTrig ? (
            <SearchBar normal={false} />
          ) : (
            <Link href="/">
              <LogoContainer>
                <Logo />
              </LogoContainer>
            </Link>
          )}
        </Stack>
      </MobileBarContainer>
      <MiniTopBarContainer>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Button variant="outlined" onClick={toggleFilterDraw(true)}>
              <AiOutlineFilter />
              <Typography variant="h4" marginLeft="5px">
                Filter
              </Typography>
            </Button>
          </Box>
          <IconContainer onClick={handleChangeMode}>
            <ThemeSwitchStyle>
              {theme.palette.mode === "light" ? <RiMoonLine /> : <BsSunFill />}
            </ThemeSwitchStyle>
          </IconContainer>
        </Stack>
      </MiniTopBarContainer>

      <MobileMenuContainer position="fixed">
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <MobMenuItemContainer onClick={toggleMenuDraw(true)}>
            <CgMenuLeft />
          </MobMenuItemContainer>

          <MobMenuItemContainer onClick={handleSearchToggle}>
            <BiSearch />
          </MobMenuItemContainer>

          <MobMenuItemContainer onClick={handleHome}>
            <VscHome />
          </MobMenuItemContainer>

          <MobMenuItemContainer onClick={toggleDrawer(true)}>
            <Badge badgeContent={2} color="primary">
              <CgShoppingBag />
            </Badge>
          </MobMenuItemContainer>

          <MobMenuItemContainer onClick={toggleProfileDraw(true)}>
            <BiUser />
          </MobMenuItemContainer>
        </Stack>

        <Drawer
          anchor="left"
          open={mobMenuTrig}
          toggle={toggleMenuDraw}
          data={menuItems}
        />
        <Drawer
          anchor="right"
          open={profileMenuTrig}
          toggle={toggleProfileDraw}
          data={profileMenuItems ?? []}
        />
      </MobileMenuContainer>

      {/*<Login*/}
      {/*  open={loginModal}*/}
      {/*  handleClickOpen={handleClickOpenRegister}*/}
      {/*  handleClose={handleCloseLogin}*/}
      {/*/>*/}

      {/*<Register*/}
      {/*  open={registerModal}*/}
      {/*  handleClickOpen={handleClickOpenLogin}*/}
      {/*  handleClose={handleCloseRegister}*/}
      {/*/>*/}
    </>
  );
};

export default NavBar;
