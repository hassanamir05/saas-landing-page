import {
  HeroSection,
  AboutUs,
  Questions,
  CallToAction,
  GetStarted,
  Testimonials,
} from "../../Pages";

const Full = () => {
  return (
    <div className="flex flex-col gap-y-[100px] mobile:gap-y-[30px] pb-[30px]">
      <HeroSection />
      <AboutUs />
      <GetStarted />
      <Testimonials />
      <Questions />
      <CallToAction />
    </div>
  );
};

export default Full;
