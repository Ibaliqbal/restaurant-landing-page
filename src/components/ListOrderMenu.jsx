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
  Divider,
} from "@chakra-ui/react";

function ListOrderMenu({ onClose, isOpen }) {
  const listMenu = dataMenu.data.results;
  const [menu, setMenu] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
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
    setTotalPrice(sum);
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
                  <section className="flex gap-x-4 items-center w-full justify-evenly mt-4">
                    <Avatar
                      src={findMenu.image}
                      className="w-1/5"
                      w={"50px"}
                      h={"50px"}
                    />
                    <Heading
                      as={"h3"}
                      size={"xs"}
                      className="w-1/5 max-w-[60px]"
                    >
                      {findMenu.title}
                    </Heading>
                    <ul className="w-1/2 flex items-center gap-3">
                      <li>
                        <Button
                          onClick={() => handleKurangQuantity(list)}
                          colorScheme="yellow"
                          size={"sm"}
                        >
                          -
                        </Button>
                      </li>
                      <li className="max-w-[60px] text-center">
                        {list.quantity}
                      </li>
                      <li>
                        <Button
                          size={"sm"}                          colorScheme="yellow"
                          onClick={() => handleTambahQuantity(list)}
                        >
                          +
                        </Button>
                      </li>
                    </ul>
                    <Text className="w-1/5 text-center">
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
                      w={"20px"}
                      colorScheme="red"
                      onClick={() => handleDeleteMenu(list)}
                    >
                      X
                    </Button>
                  </section>
                  <Divider h={"10px"} colorScheme="black"/>
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
