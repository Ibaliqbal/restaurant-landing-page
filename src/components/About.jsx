import { Image, Heading, Text } from "@chakra-ui/react";
import ImageWaiter from "../assets/images/waiter.svg";
import Title from "./Title";
import SosialMedia from "./SosialMedia";
function About() {
  return (
    <section className="w-full pt-28 pb-20 bg-gray-300" id="about">
      <div className="container">
        <Title title="about" />
        <main className="w-full grid md:grid-cols-3 items-center lg:px-10 gap-10 lg:py-10 mt-10">
          <div className="md:col-span-1">
            <Image
              src={ImageWaiter}
              alt="Waiters"
              w="550px"
              h="450px"
              className="max-w-full img-hero md:scale-125 scale-110"
            />
          </div>
          <div className="md:col-span-2 px-4 py-4 leading-relaxed gap-4 grid">
            <Heading as="h3" className="text-primary" size="2xl">
              Why you choose me ?
            </Heading>
            <Text fontSize="lg" as="p">
              Our Authenticity Sets Us Apart Balresto offers true Balinese
              flavor crafted from ancestral family recipes. Every dish bursts
              with the aromatic spices and herbs of an Indonesian island
              paradise. We even import key ingredients direct from Bali. No
              other restaurant captures island cuisine so genuinely.
            </Text>
            <Text fontSize="lg" as="p">
              An Unrivaled Dining Experience Not only does Balresto deliver
              exceptional Indonesian cuisine, our warm decor and hospitality
              provide an immersive tropical dining adventure. From sweet
              greeting drinks to our farewell desserts, we embed Indonesian
              culture into every moment. Our personable service makes guests
              feel a welcomed part of the family.
            </Text>
            <div className="grid gap-2">
              <Heading as="h5" size="sm" className="text-primary">
                Sosial Media
              </Heading>
              <SosialMedia gap="gap-5" sizeIcon="text-2xl" />
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}

export default About;
