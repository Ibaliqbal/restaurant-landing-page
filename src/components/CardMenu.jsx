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
import { FaShoppingCart, FaMoneyBillAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { dataMenu } from "../data/db";

function CardMenu(props) {
  const { type } = props;
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    let menu = dataMenu.data.results;
    menu =
      type.toLowerCase() === "all menu"
        ? menu
        : menu.filter((list) => list.category === type.toLowerCase());
    setMenus(menu);
  }, [type]);
  return (
    <section className="grid place-items-center lg:grid-cols-3 md:grid-cols-2 gap-4">
      {menus?.map((menu) => (
        <Card maxW="md" key={menu.id} className="group">
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
              <Heading size="md" as="h3">{menu.title}</Heading>
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
                Order Now
                <FaMoneyBillAlt className="text-lg" />
              </Button>
              <Button
                colorScheme="whiteAlpha"
                className="grid gap-2"
                color="#737373"
                _hover={{ backgroundColor: "#1d4ed8", color: "#1f2937" }}
                _focus={{ backgroundColor: "#1d4ed8", color: "#1f2937" }}
              >
                Add to cart
                <FaShoppingCart />
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
    </section>
  );
}

export default CardMenu;
