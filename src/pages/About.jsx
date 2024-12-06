import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16 md:mb-24">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, black 90%, transparent 100%)",
          }}
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p className="text-black font-medium text-md sm:text-lg">
            SnuBug came to life because, let`s face it, hoodies are life. Our
            obsession with this cozy, stylish staple ran so deep, we just had to
            share it with the world. We set out to create the ultimate hoodie
            hub—a place where fellow hoodie fanatics can find the freshest,
            comfiest, and downright coolest designs to fuel their passion.
          </p>
          <p className="text-black font-medium text-md sm:text-lg">
            Since day one, we`ve been on a mission to bring hoodie lovers a
            killer lineup of styles that fit every vibe and mood. From oversized
            and slouchy to sleek and street-ready, we handpick the coziest,
            trendiest designs from top-notch brands to keep your hoodie game
            strong.
          </p>
          <b className="text-shadow-black-small primary-color font-outline-1 permanent-marker-regular text-3xl">
            Our Mission
          </b>
          <p className="text-black font-medium text-md sm:text-lg">
            At SnuBug, our mission is simple: to fuel your hoodie obsession with
            style, ease, and a dash of attitude. We`re here to make sure your
            hoodie hunt is smooth, satisfying, and packed with personality—from
            scrolling and snagging your faves to rocking them in ultimate
            comfort.
          </p>
        </div>
      </div>

      <div className="flex gap-12 flex-col md:flex-row text-sm mb-20">
        <div className="border-2 border-transparent shadow-md shadow-black px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5  justify-around">
          <b className="text-shadow-black-small primary-color font-outline-1 permanent-marker-regular text-3xl">
            Quality Assurance:
          </b>
          <p className="text-black font-medium text-md sm:text-lg">
            We put every hoodie through the ultimate comfort and style test to
            make sure it lives up to our sky-high standards. If it`s not soft,
            stylish, and totally awesome, it doesn`t make the cut.
          </p>
        </div>
        <div className="border-2 border-transparent shadow-md shadow-black px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 justify-around">
          <b className="text-shadow-black-small primary-color font-outline-1 permanent-marker-regular text-3xl">
            Convenience:{" "}
          </b>
          <p className="text-black font-medium text-md sm:text-lg">
            With our super slick website and zero-stress checkout, grabbing your
            next favorite hoodie is as easy as chilling in one.
          </p>
        </div>
        <div className="border-2 border-transparent shadow-md shadow-black px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 justify-around">
          <b className="text-shadow-black-small primary-color font-outline-1 permanent-marker-regular text-3xl">
            Exceptional Customer Service:
          </b>
          <p className="text-black font-medium text-md sm:text-lg">
            Our hoodie-loving squad is always ready to help, making sure your
            experience is as awesome as the hoodies you`ll be rocking.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
