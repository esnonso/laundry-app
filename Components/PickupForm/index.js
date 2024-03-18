import { useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../Store";
import Container from "../Containers/container";
import { PTags } from "../Text";

export default function PickUpForm() {
  const dispatch = useDispatch();
  const [serviceType, setServiceType] = useState("");
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");

  const inputChangeHandler = (setState) => (e) => {
    setState(e.target.value);
  };

  const addToBasketHandler = (e) => {
    e.preventDefault();
    let itemToBeAdded;
    if (serviceType.split(" ")[0] === "Express") {
      for (let item of expressServices) {
        if (item.name === itemName) {
          dispatch(
            cartActions.addToBasket({
              id: item.id,
              name: item.name,
              price: item.price,
              quantity: quantity || 1,
              service: "Express",
            })
          );
        }
      }
    }
    if (serviceType.split(" ")[0] === "Regular") {
      for (let item of regularServices) {
        if (item.name === itemName) {
          dispatch(
            cartActions.addToBasket({
              id: item.id,
              name: item.name,
              price: item.price,
              quantity: quantity || 1,
              service: "Regular",
            })
          );
        }
      }
    }
    setServiceType("");
    setItemName("");
    setQuantity("");
  };

  const compareFn = (a, b) => {
    if (a.name < b.name) return -1;
    else if (a.name > b.name) return 1;
    else return 0;
  };

  return (
    <Container width="100%" flex="column">
      <PTags textAlign="center" width="100%" fontSize="25px">
        Add To Laundry Basket
      </PTags>
      <form style={{ boxSizing: "border-box" }}>
        <Container width="100%" flex="column" margin="0 0 1rem 0">
          <label>Service Type</label>
          <select
            className="input"
            value={serviceType}
            onChange={inputChangeHandler(setServiceType)}
          >
            <option></option>
            <option>Express 12-24 Hours</option>
            <option>Regular 5-7 Days</option>
          </select>
        </Container>

        <Container width="100%" flex="column" margin="0 0 1rem 0">
          <label>Laundry Item</label>
          <select
            className="input"
            value={itemName}
            onChange={inputChangeHandler(setItemName)}
          >
            <option></option>
            {serviceType.split(" ")[0] === "Express" &&
              expressServices
                .sort(compareFn)
                .map((c) => <option key={c.id}>{c.name}</option>)}
            {serviceType.split(" ")[0] === "Regular" &&
              regularServices
                .sort(compareFn)
                .map((c) => <option key={c.id}>{c.name}</option>)}
          </select>
        </Container>

        <Container width="100%" flex="column" margin="0 0 1rem 0">
          <label>Quantity</label>
          <input
            type="number"
            className="input"
            value={quantity}
            onChange={inputChangeHandler(setQuantity)}
          />
        </Container>

        <Container width="100%" justify="flex-end">
          <button className="button" onClick={addToBasketHandler}>
            +Add to Basket
          </button>
        </Container>
      </form>
    </Container>
  );
}

const expressServices = [
  {
    id: "ex1",
    name: "Native",
    price: 5000,
  },
  {
    id: "ex2",
    name: "T-Shirts",
    price: 3000,
  },
  {
    id: "ex3",
    name: "Jeans",
    price: 3000,
  },
  {
    id: "ex4",
    name: "Pant Trousers",
    price: 3000,
  },
  {
    id: "ex5",
    name: "Short",
    price: 3000,
  },
  {
    id: "ex6",
    name: "Gown",
    price: 3000,
  },
  {
    id: "ex7",
    name: "Skirt",
    price: 3000,
  },
  {
    id: "ex8",
    name: "Towel",
    price: 5000,
  },
  {
    id: "ex9",
    name: "Duvet",
    price: 7000,
  },
  {
    id: "ex10",
    name: "Polo",
    price: 7000,
  },
  {
    id: "ex11",
    name: "Blouse",
    price: 7000,
  },
  {
    id: "ex12",
    name: "Long Sleeves",
    price: 7000,
  },
  {
    id: "ex13",
    name: "Short Sleeves",
    price: 7000,
  },
  {
    id: "ex14",
    name: "Agbada",
    price: 7000,
  },
  {
    id: "reg15",
    name: "Cap",
    price: 7000,
  },
  {
    id: "reg16",
    name: "Buba & Wrapper",
    price: 7000,
  },
];

const regularServices = [
  {
    id: "reg1",
    name: "Wedding Gowns",
    price: 3000,
  },
  {
    id: "reg2",
    name: "Center Rugs",
    price: 3000,
  },
  {
    id: "reg3",
    name: "Native Wears",
    price: 1500,
  },
  {
    id: "reg4",
    name: "Tops",
    price: 850,
  },
  {
    id: "reg5",
    name: "Jeans",
    price: 850,
  },
  {
    id: "reg6",
    name: "Trousers",
    price: 850,
  },
  {
    id: "reg7",
    name: "Shorts",
    price: 850,
  },
  {
    id: "reg8",
    name: "Gowns",
    price: 850,
  },
  {
    id: "reg9",
    name: "Skirts",
    price: 850,
  },
  {
    id: "reg10",
    name: "Towels",
    price: 2000,
  },
  {
    id: "reg11",
    name: "Duvet",
    price: 3000,
  },
  {
    id: "reg12",
    name: "Polo",
    price: 7000,
  },
  {
    id: "reg13",
    name: "Blouse",
    price: 7000,
  },
  {
    id: "reg14",
    name: "T-Shirts",
    price: 7000,
  },
  {
    id: "reg13",
    name: "Long Sleeves",
    price: 7000,
  },
  {
    id: "reg13",
    name: "Short Sleeves",
    price: 7000,
  },
  {
    id: "reg14",
    name: "Buba & Wrapper",
    price: 7000,
  },
  {
    id: "reg15",
    name: "Agbada",
    price: 7000,
  },
  {
    id: "reg16",
    name: "Cap",
    price: 7000,
  },
];
