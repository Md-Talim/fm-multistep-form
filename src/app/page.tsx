import MultiStepForm from "./multi-step-form";
import Stepper from "./stepper";

const Home = () => {
  return (
    <main className="lg:bg-white lg:flex lg:rounded-[15px] lg:p-4 lg:relative">
      <Stepper />
      <MultiStepForm />
    </main>
  );
};

export default Home;
