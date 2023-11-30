import {
  Card,
  Stack,
  Image,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Button,
  Divider,
  ButtonGroup,
} from "@chakra-ui/react";
import { useEffect, useState, useContext } from "react";
import { dataMenu } from "../data/db";
import { OrderContext } from "../context/orderContext";
import AOS from "aos";
import "aos/dist/aos.css";

function CardMenu(props) {
  const { handleAddToCart } = useContext(OrderContext);
  const listMenu = dataMenu.data.results;
  const { type, menus } = props;
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    let menu = menus;
    menu =
      type.toLowerCase() === "all menu"
        ? menu
        : menu.filter((list) => list.category === type.toLowerCase());
    setMenu(menu);
  }, [type]);
  AOS.init({
    duration: 2000,
  });
  return (
    <section className="grid place-items-center lg:grid-cols-3 md:grid-cols-2 gap-4">
      {menu?.map((menu) => (
        <Card maxW="md" key={menu.id} className="group" data-aos="fade-up">
          <CardBody>
            <div className="relative">
              <Image
                src={menu.image}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
                w="300px"
                h="200px"
                className="group-hover:scale-110 transition-transform duration-300 ease-in-out"
              />
            </div>
            <Stack mt="6" spacing="3">
              <Heading size="md" as="h3">
                {menu.title}
              </Heading>
              <Text as="p">{menu.description.slice(0, 300)}...</Text>
              <Text color="blue.600" fontSize="2xl" as="p">
                Rp.{" "}
                {menu.price.toLocaleString("id-ID", {
                  styles: "currency",
                  currency: "IDR",
                })}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2" className="flex items-center">
              <Button
                className="grid gap-2"
                colorScheme="blackAlpha"
                _hover={{ backgroundColor: "#f59e0b", color: "black" }}
                _focus={{ backgroundColor: "#f59e0b", color: "black" }}
              >
                Buy Now
              </Button>
              <Button
                colorScheme="whiteAlpha"
                className="grid gap-2"
                color="#737373"
                _hover={{ backgroundColor: "#1d4ed8", color: "#1f2937" }}
                _focus={{ backgroundColor: "#1d4ed8", color: "#1f2937" }}
                onClick={() => handleAddToCart(menu)}
              >
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
    </section>
  );
}

export default CardMenu;
