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
  const { order, setOrder } = useContext(OrderContext);
  const sum = order.reduce((acc, item) => {
    const product = listMenu.find((product) => product.id === item.id);
    return acc + product.price * item.quantity;
  }, 0);
  useEffect(() => {
    setMenu(order);
  }, [order]);
  return (
    <Drawer
      placement={"right"}
      onClose={onClose}
      isOpen={isOpen}
      size={"sm"}
      className="z-[9999]"
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px">List Order Menu</DrawerHeader>
        <DrawerBody>
          {menu.length > 0 ? (
            menu?.map((list) => {
              const findMenu = listMenu.find(
                (product) => product.id === list.id
              );
              return (
                <div key={list.id}>
                  <section className="flex items-center w-full justify-around mt-2">
                    <Avatar
                      src={findMenu.image}
                      className="w-1/4"
                      w={"50px"}
                      h={"50px"}
                    />
                    <Heading as={"h3"} size={"xs"} className="w-1/4">
                      {findMenu.title}
                    </Heading>
                    <Text className="w-1/4">{list.quantity}</Text>
                    {/* <ul className="w-1/4 flex items-center gap-2">
                      <li>
                        <Button colorScheme="yellow">-</Button>
                      </li>
                      <li>{list.quantity}</li>
                      <li>
                        <Button
                          colorScheme="yellow"
                          onClick={() => {
                            console.log(order);
                            const findMenuSame = order.find(
                              (ord) => ord.id === list.id
                            );
                            console.log(list.id);
                            console.log(findMenuSame);
                            if (findMenuSame) {
                              findMenuSame.quantity++
                              console.log(findMenuSame.quantity);
                            } else {
                              console.log("different menu")
                            }
                            console.log(order)
                          }}
                        >
                          +
                        </Button>
                      </li>
                    </ul> */}
                    <Text className="w-1/4">
                      Rp.{" "}
                      {(list.quantity * findMenu.price).toLocaleString(
                        "id-ID",
                        {
                          styles: "currency",
                          currency: "IDR",
                        }
                      )}
                    </Text>
                  </section>
                </div>
              );
            })
          ) : (
            <Heading as={"h3"}>No order yet</Heading>
          )}
        </DrawerBody>
        {menu?.length > 0 ? (
          <DrawerFooter>
            <div className="bg-primary w-full flex justify-between px-3 py-3 items-center">
              <Heading>Total Price</Heading>
              <Text>
                Rp.{" "}
                {sum.toLocaleString("id-ID", {
                  styles: "currency",
                  currency: "IDR",
                })}
              </Text>
            </div>
          </DrawerFooter>
        ) : null}
      </DrawerContent>
    </Drawer>
  );
}

export default ListOrderMenu;
