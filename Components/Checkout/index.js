import { useState } from "react";
import Container from "../Containers/container";
import Modal from "../Modal";
import Cart from "../Cart";
import { PTags } from "../Text";
import Button from "../Button";

export default function Checkout() {
  const [address, setAddress] = useState("No 7 Tiamiyu Street Fadeyi");
  const [showAddressForm, setShowAddressForm] = useState(false);

  const showAddressFormHandler = () => setShowAddressForm(true);
  const hideAddressFormHandler = () => setShowAddressForm(false);

  return (
    <Container
      margin="5rem 0 0 0"
      padding="1rem"
      flex="column"
      minHeight="80vh"
    >
      <PTags
        fontSize="25px"
        borderBottom="1px #011F4B solid"
        width="100%"
        padding="0 0 0.5rem 0"
        textAlign="center"
      >
        Checkout
      </PTags>

      <Container
        margin="1rem 0"
        width="100%"
        justify="space-between"
        align="center"
      >
        <PTags>
          <b>Pickup Address: </b> {address}
        </PTags>
        <Button
          text="Change Address"
          padding={"0.5rem 1rem"}
          color="#011F4B"
          click={showAddressFormHandler}
        />
      </Container>

      {!address ||
        (showAddressForm && (
          <Modal click={hideAddressFormHandler}>
            <Container width="100%" margin="1rem 0 0 0" flex="column">
              <label>Pickup Address</label>
              <input className="input" type="text" />
            </Container>

            <Container width="100%" margin="1rem 0 0 0" flex="column">
              <label>City/ Area</label>
              <input className="input" type="text" />
            </Container>

            <Container width="100%" margin="1rem 0 0 0" flex="column">
              <label>Local Goverment Area</label>
              <select className="input">
                <option></option>
                {LGA.map((area, ind) => (
                  <option key={ind}>{area}</option>
                ))}
              </select>
            </Container>
          </Modal>
        ))}
      <PTags fontSize="20px" margin="1rem 0 0.5rem 0">
        Confirm Order
      </PTags>
      <Cart />
    </Container>
  );
}

const LGA = [
  "Agege",
  "Ajeromi-Ifelodun",
  "Alimosho",
  "Amuwo-Odofin",
  "Apapa",
  "Badagry",
  "Epe",
  "Eti-Osa",
  "Ibeju-Lekki",
  "Ifako-Ijaiye",
  "Ikeja",
  "Ikorodu",
  "Kosofe",
  "Lagos-Island",
  "Lagos-Mainland",
  "Mushin",
  "Ojo",
  "Oshodi-Isolo",
  "Shomolu",
  "Surulere",
  "Yewa-South",
];
