import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Container from "../Containers/container";
import CloseBtn from "../Media/close-btn.png";
import Plus from "../Media/plus.png";
import Minus from "../Media/minus.png";
import { PTags } from "../Text";
import classes from "./index.module.css";
import { cartActions } from "../Store";

export default function Cart(props) {
  const cart = useSelector((state) => state.cart);
  const total = useSelector((state) => state.total);
  const dispatch = useDispatch();
  const router = useRouter();

  const increaseCartItemQuantityHandler = (id) => {
    dispatch(cartActions.increaseQuantity(id));
  };

  const decreaseCartItemQuantityHandler = (id) => {
    dispatch(cartActions.decreaseQuantity(id));
  };

  const removeFromCartHandler = (item) => {
    dispatch(cartActions.removeFromBasket(item));
  };

  return (
    <Container width="100%" flex="column">
      {router.pathname === "/" && (
        <PTags margin="1rem 0 1rem 0" fontSize="20px">
          Laundry Basket
        </PTags>
      )}
      {cart.length === 0 && (
        <PTags fontSize="17px">Oops No Clothes in Laundry Basket!</PTags>
      )}
      {cart.length > 0 && (
        <>
          {" "}
          <Container
            width="100%"
            justify="space-between"
            borderBottom="1px #0B1847 solid"
          >
            <PTags width="40%">
              <b>Item</b>
            </PTags>
            <PTags width="25%">
              <b>Price</b>
            </PTags>
            <PTags width="25%">
              <b>Quantity</b>
            </PTags>
            <PTags width="10%"></PTags>
          </Container>
          {cart.map((item) => (
            <Container
              key={item.id}
              width="100%"
              justify="space-between"
              margin="0.5rem 0 0 0"
              borderBottom="1px #0B1847 solid"
              height="3rem"
              align="center"
            >
              <PTags width="40%">
                {item.name} &#40;{item.service}&#41;
              </PTags>
              <PTags width="25%">₦{item.price}</PTags>
              <Container
                width="25%"
                height="fit-content"
                align="center"
                padding="0 0.1rem"
              >
                <PTags width="8%">{item.quantity}</PTags>
                <Container margin="0 1rem">
                  <Image
                    src={Plus}
                    alt="home icon by icons 8"
                    width={20}
                    height={20}
                    className={classes.plus}
                    onClick={() => increaseCartItemQuantityHandler(item.id)}
                  />
                  <Image
                    src={Minus}
                    alt="home icon by icons 8"
                    width={20}
                    height={20}
                    onClick={() => decreaseCartItemQuantityHandler(item.id)}
                  />
                </Container>
              </Container>
              <Container width="10%" justify="center">
                <Image
                  src={CloseBtn}
                  alt="close-icon"
                  width={20}
                  height={20}
                  onClick={() =>
                    removeFromCartHandler({
                      id: item.id,
                      price: item.price,
                      quantity: item.quantity,
                    })
                  }
                />
              </Container>
            </Container>
          ))}
          <PTags fontSize="20px" width="100%" textAlign="right" margin="1rem 0">
            Total ₦{total}
          </PTags>
          <Container width="100%" justify="flex-end">
            <button
              className="button"
              onClick={() => {
                props.onHide();
                router.push("/checkout");
              }}
            >
              Checkout
            </button>
          </Container>
        </>
      )}
    </Container>
  );
}
