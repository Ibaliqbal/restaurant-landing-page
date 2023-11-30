import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination, A11y } from "swiper/modules";
import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";
function SwiperGuest(props) {
  const { users } = props;
  return (
    <main className="mt-2 pb-16 pt-8 px-6">
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, A11y]}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
      >
        {users?.map((user) => (
          <SwiperSlide key={user.id}>
            <Card>
              <CardHeader>
                <div className="flex gap-4 items-center">
                  <Avatar
                    name={user.fullname}
                    src={user.image}
                    className="shadow-xl w-[50px] h-[50px]"
                    w="50px"
                    h="50px"
                  />
                  <Box>
                    <Heading size="sm" as="h3">{user.fullname}</Heading>
                    <Text className="text-sm md:text-md">{user.position}</Text>
                  </Box>
                </div>
              </CardHeader>
              <CardBody>
                <Text className="lg:h-[250px] h-[300px]" as="p">{user.comment}</Text>
              </CardBody>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}

export default SwiperGuest;
