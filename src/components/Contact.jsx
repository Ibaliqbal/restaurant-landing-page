import React, { useRef, useState } from "react";
import {
  Box,
  Image,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Heading,
  Highlight,
} from "@chakra-ui/react";
import ThankYouWaiter from "../assets/images/thankyou.svg";
import Title from "./Title";

function Contact() {
  const fullNameRef = useRef("");
  const numberPhoneRef = useRef("");
  const emailRef = useRef("");
  const commentRef = useRef("");
  const [load, setLoad] = useState(false);
  return (
    <section className="w-full pt-28" id="contact">
      <div className="container">
        <Title title="contact" />
        <main className="w-full grid lg:grid-cols-3 bg-primary rounded-xl mt-20 items-center justify-around px-8 py-10 gap-4">
          <Box className="lg:col-span-1 grid place-items-center">
            <Image src={ThankYouWaiter} alt="Thank You" w="500px" h="600px" />
          </Box>
          <form
            action=""
            className="w-full px-4 py-4 lg:col-span-2 grid gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              console.log(fullNameRef.current.value);
              console.log(numberPhoneRef.current.value);
              console.log(emailRef.current.value);
              console.log(commentRef.current.value);
              setLoad(true);
              setTimeout(() => {
                setLoad(false);
              }, 1000);
            }}
          >
            <Heading className="text-center" as="h3">
              <Highlight query="CONTACT US" styles={{px: "2", py: "1", rounded: "lg", bg: "teal.100"}}>CONTACT US</Highlight>
            </Heading>
            <FormControl>
              <FormLabel>Full Name</FormLabel>
              <Input
                type="text"
                placeholder="Enter your name"
                ref={fullNameRef}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                ref={emailRef}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Phone Number</FormLabel>
              <Input
                type="tel"
                placeholder="Enter your phone number"
                ref={numberPhoneRef}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Comment</FormLabel>
              <Textarea
                placeholder="Please comment below here"
                h="200px"
                resize="none"
                color="white"
                ref={commentRef}
              />
            </FormControl>
            <Button type="submit" colorScheme="teal" isLoading={load}>
              SUBMIT
            </Button>
          </form>
        </main>
      </div>
    </section>
  );
}

export default Contact;
