import "tailwindcss/tailwind.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const Hero = () => {
  return (
    <section className={roboto.className}>
      <div
        id="hero"
        className="flex items-center justify-center flex-col py-40">
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-slate-800 dark:text-slate-400 font-semibold font-Poppins">
            Hi, This is Mustafa
          </h1>
          <p className="text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300">
            Junior Front-End Developer with 2+ years of experience in the
            Technology domain. Supportive and enthusiastic team player . Ability
            and willingness to innovate and learn new technologies, quick
            learner passionate about development.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
