import Title from "./Title";
import SwiperGuest from "./SwiperGuest";

function Guest({users}) {
  return (
    <section id="testimoni" className="w-full pt-28 bg-secondary mt-6">
      <div className="container">
        <Title title="testimoni" />
        <SwiperGuest users={users} />
      </div>
    </section>
  );
}

export default Guest;
