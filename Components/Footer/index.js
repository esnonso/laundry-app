import Container from "../Containers/container";
import Image from "next/image";
import Instagram from "../Media/insta.png";
import Twitter from "../Media/twitter.png";
import LinkedIn from "../Media/linked.png";
import { PTags } from "../Text";

export default function Footer() {
  return (
    <Container
      color="#011F4B"
      width="100%"
      justify="center"
      align="center"
      flex="column"
      padding="3rem 0"
      textColor="white"
    >
      <PTags
        textAlign="center"
        width="100%"
        fontSize="25px"
        color="white"
        margin="0.5rem 0"
      >
        Contact Us
      </PTags>
      <PTags textAlign="center" width="100%" color="white" margin="0.1rem 0">
        +2348144762452
      </PTags>
      <PTags textAlign="center" width="100%" color="white" margin="0.1rem 0">
        freshfolds@gmail.com
      </PTags>

      <Container width="100%" justify="center" margin="0 0 1rem 0">
        <Image
          src={Instagram}
          height={25}
          width={25}
          className="social"
          alt="Instagram Logo"
        />
        <Image
          src={Twitter}
          height={25}
          width={25}
          className="social"
          alt="Twitter-logo"
        />
        <Image
          src={LinkedIn}
          height={25}
          width={25}
          className="social"
          alt="LinkedIn logo"
        />
      </Container>

      <small> &copy; FreshFolds 2024. All rights reserved</small>
    </Container>
  );
}
