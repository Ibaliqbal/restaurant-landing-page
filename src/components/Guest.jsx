import Title from "./Title";
import { Text } from "@chakra-ui/react";
import SwiperGuest from "./SwiperGuest";

function Guest({users}) {
  return (
    <section id="testimoni" className="w-full pt-28 bg-secondary mt-6">
      <div className="container">
        <Title title="testimoni" />
        <Text className="text-center mt-16" fontSize={"xl"}>Customer's say about us</Text>
        <SwiperGuest users={users} />
      </div>
    </section>
  );
}

export default Guest;
