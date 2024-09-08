import {
  HeroSection,
  AboutUs,
  Questions,
  CallToAction,
  Footer,
  GetStarted,
  Testimonials,
} from "../../Pages";

const Full = () => {
  return (
    <div className="flex flex-col gap-y-[30px] pb-[30px]">
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
