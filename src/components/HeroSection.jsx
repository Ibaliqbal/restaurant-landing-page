import React from "react";
import BackgroundImg from "../assets/images/background.svg";
import { Heading, Container, Button, Text } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

function HeroSection() {
  return (
    <section>
      <Container
        maxW="container"
        pt="2rem"
        bgImage={BackgroundImg}
        bgPosition="center"
        bgAttachment="fixed"
        bgSize="cover"
        h="90vh"
        className="text-white hero"
      >
        <div className="container flex items-center py-4 h-full">
          <div className="max-w-6xl">
            <Heading as="h1" size="4xl" className="text-primary">
              Welcome to my Restaurant
            </Heading>
            <Text fontSize="xl" as="p">
              Balresto brings a taste of exotic Bali to San Francisco. Our cozy
              restaurant, with intricate woodcarvings and unique statues,
              recreates the island's warmth. We serve authentic dishes like
              spicy satay, rich rendang stew, flavorful nasi goreng, and warming
              soto soup. Crafted from family recipes and fresh local
              ingredients. Indulge in a complete Indonesian dining experience,
              with sweet treats like banana fritters and black rice pudding to
              follow. At Balresto, a tropical paradise awaits!
            </Text>
            <Button
              className="grid gap-2 mt-4"
              colorScheme="whiteAlpha"
              _hover={{ backgroundColor: "#f59e0b", color: "black" }}
            >
              Order Now
              <FaShoppingCart aria-label="Cart" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
