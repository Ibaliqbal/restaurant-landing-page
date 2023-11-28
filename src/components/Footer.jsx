import { Avatar, Heading, Link, Text } from "@chakra-ui/react";
import Logo from "../assets/images/logo.svg";
import SosialMedia from "./SosialMedia";
function Footer() {
  return (
    <footer className="w-full pt-20">
      <section className="container bg-secondary">
        <div className="w-full flex flex-col md:flex-row gap-4 px-4 py-4">
          <div className="md:w-1/2 px-4 py-4 grid gap-2">
            <div className="flex items-center gap-1">
              <Avatar src={Logo} name="Logo" w="40px" h="40px" />
              <Heading as="h5" size="md" className="text-primary">
                BalResto
              </Heading>
            </div>
            <Text as="p">
              Balresto - A True Taste of Bali in San Francisco Our cozy
              restaurant brings a taste of the exotic tropics to the city
              through fragrant family dishes like aromatic soto soup, sweet and
              spicy satay skewers, rich rendang stew, and flavor-packed nasi
              goreng. Complete your visit with crispy banana fritters or creamy
              black rice pudding. At Balresto, escape to an island paradise
              without leaving town.
            </Text>
            <div className="grid gap-2">
              <Heading as="h6" size="sm" className="text-primary">
                Sosial Media
              </Heading>
              <SosialMedia sizeIcon="text-md" gap="gap-2" />
            </div>
          </div>
          <div className="md:w-1/2 px-4 py-4 flex flex-col md:flex-row gap-3">
            <div className="md:w-1/3 px-2 py-2">
              <Heading as="h5" size="md">
                Pages
              </Heading>
              <ul className="grid gap-1 mt-2">
                <li>
                  <Link href="#">Home</Link>
                </li>
                <li>
                  <Link href="#about">About Us</Link>
                </li>
                <li>
                  <Link href="#menu">Menu</Link>
                </li>
                <li>
                  <Link href="#testimoni">Testimoni</Link>
                </li>
                <li>
                  <Link href="#contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="md:w-1/3 px-2 py-2">
              <Heading as="h5" size="md">
                Restaurant
              </Heading>
              <ul className="grid gap-1 mt-2">
                <li>
                  <Link href="#about">About Us</Link>
                </li>
                <li>
                  <Link href="#menu">Menu</Link>
                </li>
                <li>
                  <Link href="#testimoni">Testimoni</Link>
                </li>
                <li>
                  <Link href="#contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/3 px-2 py-2">
              <Heading as="h5" size="md">
                Developer
              </Heading>
              <ul className="grid mt-2 gap-1">
                <li>Iqbal Muthahhary</li>
                <li>iqbalmuthahhary@gmail.com</li>
                <li>
                  <div>
                    <Heading as="h6" size="sm" mb="2">Sosial Media</Heading>
                    <SosialMedia sizeIcon="text-md" gap="gap-2" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
