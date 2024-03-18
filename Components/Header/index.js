import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";
import { useSelector } from "react-redux";
import Image from "next/image";
import Container from "../Containers/container";
import Button from "../Button";
import UserIcon from "../Media/user.png";
import LaundryBasket from "../Media/laundry-basket.png";
import classes from "./header.module.css";
import Link from "next/link";
import Login from "../Auth/login";
import Cart from "../Cart";
import Modal from "../Modal";
import { H1Tags, PTags } from "../Text";

export default function Header(props) {
  const router = useRouter();
  const cart = useSelector((state) => state.cart);
  const { status } = useSession();
  const [dropdown, showDropdown] = useState(false);
  const [loginForm, showLoginForm] = useState(false);
  const [cartItems, showCartItems] = useState(false);

  const showDropDownHandler = () => showDropdown(true);
  const hideDropDownHandler = () => showDropdown(false);
  const showLoginFormHandler = () => showLoginForm(true);
  const hideLoginFormHandler = () => showLoginForm(false);
  const showCartItemsHandler = () => showCartItems(true);
  const hideCartItemsHandler = () => showCartItems(false);

  const showItemsInCartHandler = () => {
    let noInCart = 0;
    cart.map((item) => (noInCart = +noInCart + +item.quantity));
    return noInCart;
  };

  return (
    <Container width="100%" flex="column" height="100%">
      <div className={classes.header}>
        <Container width="50%" justify="flex-start" align="center">
          <H1Tags>
            <Link href="/" className={classes.logo}>
              FreshFold
            </Link>
          </H1Tags>
        </Container>

        <Container align="center" width="50%" justify="flex-end">
          <Container width="fit-content" align="center">
            <Image
              src={LaundryBasket}
              alt="laundry-basket"
              width={25}
              height={25}
              onClick={showCartItemsHandler}
            />
            <PTags fontSize="20px" margin="0.15rem 0 0 0.15rem">
              {showItemsInCartHandler()}
            </PTags>
          </Container>

          <Image
            src={UserIcon}
            alt="user-icon"
            width={25}
            height={25}
            onMouseOver={showDropDownHandler}
            onMouseLeave={hideDropDownHandler}
            className={classes.image}
          />
          {dropdown && (
            <div
              className={classes["drop-down"]}
              onMouseOver={showDropDownHandler}
              onMouseLeave={hideDropDownHandler}
            >
              {status === "unauthenticated" && (
                <Button
                  text="Login"
                  color={"#011F4B"}
                  font="inherit"
                  click={showLoginFormHandler}
                />
              )}
              {status === "authenticated" && (
                <>
                  <Button
                    text="Profile"
                    color={"white"}
                    font="inherit"
                    click={() => router.push("/profile")}
                  />
                  <Button
                    text="Logout"
                    color={"black"}
                    font="inherit"
                    click={async () => signOut()}
                  />
                </>
              )}
            </div>
          )}
        </Container>
      </div>

      {/* OVERLAYS ON HEADER */}
      {loginForm && (
        <Modal click={hideLoginFormHandler}>
          <Login onHide={hideLoginFormHandler} />
        </Modal>
      )}

      {cartItems && (
        <Modal click={hideCartItemsHandler} long={true}>
          <Cart onHide={hideCartItemsHandler} />
        </Modal>
      )}
    </Container>
  );
}
