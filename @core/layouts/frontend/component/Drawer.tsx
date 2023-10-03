import { Box, Divider, ListItem, Stack, SwipeableDrawer } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoIosClose } from "react-icons/io";
import {
  CloseBtnContaner,
  MenuContainer,
  MenuHeaderContiner,
  MenuLinkContainer,
  MenuListContainer,
} from "./nav-styles";

const Drawer = ({ anchor, data, open, toggle }: any) => {
  const router = useRouter();
  return (
    <SwipeableDrawer
      anchor={anchor}
      open={open}
      onClose={toggle(false)}
      onOpen={toggle(true)}
    >
      <MenuContainer role="presentation">
        <MenuHeaderContiner>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Link href="/">
              {/*<Logo />*/}
              Bookstore
            </Link>
            <Box>
              <CloseBtnContaner onClick={toggle(false)}>
                <IoIosClose />
              </CloseBtnContaner>
            </Box>
          </Stack>
        </MenuHeaderContiner>
        <Divider />

        <MenuListContainer>
          {data?.map((item: any, index: number) => (
            <ListItem key={index} onClick={toggle(false)}>
              <Link href={item.url || "/"}>
                <MenuLinkContainer active={router.pathname.includes(item.url)}>
                  {item.text}
                </MenuLinkContainer>
              </Link>
            </ListItem>
          ))}
        </MenuListContainer>
      </MenuContainer>
    </SwipeableDrawer>
  );
};

export default Drawer;
