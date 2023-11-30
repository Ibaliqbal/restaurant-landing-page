import React, { useContext, useState, useEffect } from "react";
import { dataMenu } from "../data/db";
import { OrderContext } from "../context/orderContext";
import {
  Drawer,
  DrawerContent,
  DrawerBody,
  DrawerOverlay,
  DrawerHeader,
  DrawerFooter,
  DrawerCloseButton,
  Avatar,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";

function ListOrderMenu({ onClose, isOpen }) {
  const listMenu = dataMenu.data.results;
  const [menu, setMenu] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0)
  const {
    order,
    totalQuantity,
    handleTambahQuantity,
    handleKurangQuantity,
    handleDeleteMenu,
  } = useContext(OrderContext);

  useEffect(() => {
    setMenu(order);
    const sum = order.reduce((acc, item) => {
      const product = listMenu.find((product) => product.id === item.id);
      return acc + product.price * item.quantity;
    }, 0);
    setTotalPrice(sum)
  }, [order, totalQuantity]);
  return (
    <Drawer
      placement={"right"}
      onClose={onClose}
      isOpen={isOpen}
      size={"md"}
      className="z-[9999]"
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px">
          <div>
            <Heading as={"h3"} size={"md"}>
              List Order Menu
            </Heading>
          </div>
        </DrawerHeader>
        <DrawerBody>
          {menu.length > 0 ? (
            menu?.map((list) => {
              const findMenu = listMenu.find(
                (product) => product.id === list.id
              );
              return (
                <div key={list.id} className="w-full">
                  <section className="flex items-center w-full justify-around mt-2">
                    <Avatar
                      src={findMenu.image}
                      className="w-1/5"
                      w={"50px"}
                      h={"50px"}
                    />
                    <Heading as={"h3"} size={"xs"} className="w-1/5">
                      {findMenu.title}
                    </Heading>
                    <ul className="w-1/4 flex items-center gap-1">
                      <li>
                        <Button
                          colorScheme="yellow"
                          onClick={() => handleKurangQuantity(list)}
                        >
                          -
                        </Button>
                      </li>
                      <li className="w-[50px] text-center">{list.quantity}</li>
                      <li>
                        <Button
                          colorScheme="yellow"
                          onClick={() => handleTambahQuantity(list)}
                        >
                          +
                        </Button>
                      </li>
                    </ul>
                    <Text className="w-1/5">
                      Rp.{" "}
                      {(list.quantity * findMenu.price).toLocaleString(
                        "id-ID",
                        {
                          styles: "currency",
                          currency: "IDR",
                        }
                      )}
                    </Text>
                    <Button
                      className="w-1/5"
                      w="40px"
                      colorScheme="red"
                      onClick={() => handleDeleteMenu(list)}
                    >
                      X
                    </Button>
                  </section>
                </div>
              );
            })
          ) : (
            <Heading as={"h3"} size={"md"}>
              No order yet
            </Heading>
          )}
        </DrawerBody>
        {menu?.length > 0 ? (
          <DrawerFooter>
            <section className="w-full grid gap-2">
              <div className="bg-primary w-full flex rounded-lg justify-between px-3 py-3 items-center">
                <Heading as={"h3"} size={"md"}>
                  Total Price
                </Heading>
                <Text>
                  Rp.{" "}
                  {totalPrice.toLocaleString("id-ID", {
                    styles: "currency",
                    currency: "IDR",
                  })}
                </Text>
              </div>
              <div className="bg-primary w-full flex rounded-lg justify-between px-3 py-3 items-center">
                <Heading as={"h3"} size={"md"}>
                  Total Quantity
                </Heading>
                <Text>{totalQuantity}</Text>
              </div>
            </section>
          </DrawerFooter>
        ) : null}
      </DrawerContent>
    </Drawer>
  );
}

export default ListOrderMenu;
