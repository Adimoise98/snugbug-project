import SubscribeNowButton from "./SubscribeNowButton";

const NewsletterBox = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="text-center">
      <p className="text-3xl permanent-marker-regular primary-color text-shadow-black-small font-outline-1">
        Subscribe now & get 20% off
      </p>
      <p className="text-lime-950  font-extrabold mt-3">
        We will not spam you...maybe just a little bit though. However, who
        wouldn`t like to get the best of the best?
      </p>

      <form
        onSubmit={onSubmitHandler}
        className=" w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 pl-3"
      >
        <input
          className="w-full h-14 text-center sm:flex-1"
          type="text"
          placeholder="Enter your email"
          required
        />
        <SubscribeNowButton />
      </form>
    </div>
  );
};

export default NewsletterBox;
