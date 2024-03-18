import { useState } from "react";
import { PTags } from "../Text";
import Image from "next/image";
import Express from "../Media/express.png";
import Guarnteed from "../Media/guaranteed.png";
import Conv from "../Media/conv.png";
import Excellent from "../Media/customer.png";
import Container from "../Containers/container";
import Button from "../Button";
import Reviews from "./reviews";
import Modal from "../Modal";
import PickUpForm from "../PickupForm";
import classes from "../../styles/Home.module.css";

export default function Homepage() {
  const [pickUpForm, showPickUpForm] = useState(false);

  const showPickUpFormHandler = () => showPickUpForm(true);
  const hidePickUpFormHandler = () => showPickUpForm(false);

  return (
    <Container width="100%" flex="column">
      <main>
        <div className={classes.banner}>
          <section className={classes["main-desc"]}>
            <h1 className={classes["h1-banner"]}>
              Express Dry Cleaning Service
            </h1>
            <PTags color="white" fontSize="20px" margin="0.5rem 0">
              24 Magbo village Ijebu-Lekki
            </PTags>
            <Button
              text="Request Pickup"
              back="white"
              width="fit-content"
              height={"3rem"}
              borderRadius={"5px"}
              font="20px"
              padding={"0.5rem 3rem"}
              click={showPickUpFormHandler}
            />
          </section>
          <div>
            <span className={classes["dot"]}></span>
          </div>
          <div>
            <span className={classes["dot"]}></span>
          </div>
          <div>
            <span className={classes["dot"]}></span>
          </div>
          <div>
            <span className={classes["dot"]}></span>
          </div>
          <div>
            <span className={classes["dot"]}></span>
          </div>
          <div>
            <span className={classes["dot"]}></span>
          </div>
          <div>
            <span className={classes["dot"]}></span>
          </div>
          <div>
            <span className={classes["dot"]}></span>
          </div>
          <div>
            <span className={classes["dot"]}></span>
          </div>
          <div>
            <span className={classes["dot"]}></span>
          </div>
          <div>
            <span className={classes["dot"]}></span>
          </div>
          <div>
            <span className={classes["dot"]}></span>
          </div>
          <div>
            <span className={classes["dot"]}></span>
          </div>
          <div>
            <span className={classes["dot"]}></span>
          </div>
          <div>
            <span className={classes["dot"]}></span>
          </div>
        </div>

        <div className={classes.quote}>
          <b>★</b>
          <br />
          Need your clothes cleaned and ready in a hurry? Look no further! At
          FreshFold, we specialize in providing fast and reliable dry-cleaning
          services completed within 24 hours.
          <br />
          <b>★</b>
        </div>
      </main>

      <Container
        flex="column"
        margin="5rem 0 0 0"
        padding="0.5rem"
        width="100%"
      >
        <PTags textAlign="center" width="100%" fontSize="25px">
          Why Choose us
        </PTags>

        <div className={classes["why-choose-us"]}>
          <div className={classes["choose-us"]}>
            <Image
              src={Express}
              className={classes["choose-us-img"]}
              alt="Express service"
            />
            <PTags width="100%">
              We offer quick and efficient service, ensuring that customers'
              clothes are cleaned and ready to wear within a short turnaround
              time, 12-24 Hours for express service.
            </PTags>
          </div>

          <div className={classes["choose-us"]}>
            <Image
              src={Guarnteed}
              className={classes["choose-us-img"]}
              alt="Express service"
            />
            <PTags width="100%">
              We provide high-quality cleaning services, use advanced cleaning
              techniques and friendly products ensures that garments are treated
              with care.
            </PTags>
          </div>

          <div className={classes["choose-us"]}>
            <Image
              src={Conv}
              className={classes["choose-us-img"]}
              alt="Express service"
            />
            <PTags width="100%">
              We offer easy online booking and payment options, making it
              convenient for customers to schedule pickups and deliveries to
              save you time and effort.
            </PTags>
          </div>

          <div className={classes["choose-us"]}>
            <Image
              src={Excellent}
              className={classes["choose-us-img"]}
              alt="Express service"
            />
            <PTags width="100%">
              Our team of skilled professionals is dedicated to providing
              exceptional customer service. They are friendly, attentive, and
              always willing to go the extra mile to ensure customer
              satisfaction
            </PTags>
          </div>
        </div>
      </Container>
      <Container width="100%" justify="center">
        <Button
          text="Request Pickup Now!"
          font="20px"
          padding="1rem 3rem"
          width="20rem"
          back="#011F4B"
          color="white"
          borderRadius={"5px"}
          click={showPickUpFormHandler}
        />
      </Container>

      <Container margin="7rem 0" padding="0 1rem" flex="column" width="100%">
        <PTags textAlign="center" width="100%" fontSize="25px">
          Customer Reviews
        </PTags>

        <Reviews />

        <Container width="100%" justify="center">
          <Button
            text="Leave a Review"
            font="20px"
            padding="1rem 3rem"
            width="20rem"
            back="#011F4B"
            color="white"
            borderRadius={"5px"}
          />
        </Container>
      </Container>

      {/* ALL OTHER OVERLAY COMPONENTS */}
      {pickUpForm && (
        <Modal click={hidePickUpFormHandler}>
          <PickUpForm />
        </Modal>
      )}
    </Container>
  );
}
