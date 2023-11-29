import React, { useEffect, useContext, useRef, useState } from "react";
import {
  Heading,
  Container,
  Flex,
  Spacer,
  Box,
  Button,
  Link,
  Avatar,
  useDisclosure,
} from "@chakra-ui/react";
import { BiCart, BiAlignRight, BiX } from "react-icons/bi";
import Logo from "../assets/images/logo.svg";
import ListOrderMenu from "./ListOrderMenu";
import { OrderContext } from "../context/orderContext";

function Navbar() {
  const headerRef = useRef(null);
  const [fixedNav, setFixedNav] = useState("");
  const [navbar, setNavbar] = useState(false);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { order } = useContext(OrderContext);
  window.onscroll = function () {
    const fixedNav = headerRef.current.offsetTop;
    if (window.pageYOffset > fixedNav) {
      setFixedNav("bg-transparent shadow-xl fixed");
    } else {
      setFixedNav("");
    }
  };
  return (
    <section
      className={`z-50 w-full max-w-full ${fixedNav ? fixedNav : "relative"}`}
      ref={headerRef}
    >
      <Container maxW="container" py="1rem">
        <header>
          <Flex minWidth="max-content" alignItems="center" gap="2">
            <Box p="2" className="flex items-center">
              <Avatar src={Logo} name="Logo" w="60px" h="60px" />
              <Heading size="lg">BalResto</Heading>
            </Box>
            <Spacer />
            <div
              className="relative bg-primary rounded-lg px-2 py-2 cursor-pointer"
              onClick={onOpen}
            >
              <BiCart className="text-3xl" aria-label="Cart" />
              {order?.length > 0 ? (
                <span className="absolute bg-red-500 px-1 py-1 rounded-3xl right-0 -bottom-2 text-xs text-white">
                  {order.length}
                </span>
              ) : null}
            </div>
            <ListOrderMenu onClose={onClose} isOpen={isOpen} />
            <Button colorScheme="teal">Log in</Button>
            <div className="relative flex max-w-full items-center">
              <div className="text-3xl lg:hidden">
                {navbar ? (
                  <BiX
                    onClick={() => setNavbar((prev) => !prev)}
                    aria-label="close"
                  />
                ) : (
                  <BiAlignRight
                    onClick={() => setNavbar((prev) => !prev)}
                    aria-label="menu"
                  />
                )}
              </div>
              <nav
                className={`lg:flex ${
                  navbar
                    ? "block rounded-md z-[1] w-40 absolute bg-white top-6 right-6"
                    : "hidden"
                }  px-2 py-2`}
              >
                <ul className="lg:grid grid-flow-col place-items-center text-center gap-4 text-lg">
                  <li
                    className={`mt-4 lg:mt-0 ${
                      navbar
                        ? "hover:bg-secondary hover:text-primary px-2 py-1"
                        : null
                    } transition-all duration-300 ease-in-out`}
                  >
                    <Link href="#">HOME</Link>
                  </li>
                  <li
                    className={`mt-4 lg:mt-0 ${
                      navbar
                        ? "hover:bg-secondary hover:text-primary px-2 py-1"
                        : null
                    } transition-all duration-300 ease-in-out`}
                  >
                    <Link href="#about">ABOUT US</Link>
                  </li>
                  <li
                    className={`mt-4 lg:mt-0 ${
                      navbar
                        ? "hover:bg-secondary hover:text-primary px-2 py-1"
                        : null
                    } transition-all duration-300 ease-in-out`}
                  >
                    <Link href="#menu">MENU</Link>
                  </li>
                  <li
                    className={`mt-4 lg:mt-0 ${
                      navbar
                        ? "hover:bg-secondary hover:text-primary px-2 py-1"
                        : null
                    } transition-all duration-300 ease-in-out`}
                  >
                    <Link href="#testimoni">TESTIMONI</Link>
                  </li>
                  <li
                    className={`mt-4 lg:mt-0 ${
                      navbar
                        ? "hover:bg-secondary hover:text-primary px-2 py-1"
                        : null
                    } transition-all duration-300 ease-in-out`}
                  >
                    <Link href="#contact">CONTACT US</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </Flex>
        </header>
      </Container>
    </section>
  );
}

export default Navbar;
