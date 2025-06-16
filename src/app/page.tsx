import MultiStepForm from "./multi-step-form";
import Stepper from "./stepper";

const Home = () => {
  return (
    <main className="lg:bg-white lg:flex lg:rounded-[15px] lg:p-4 lg:relative lg:w-[940px] lg:h-[600px]">
      <Stepper />
      <MultiStepForm />
    </main>
  );
};

export default Home;
