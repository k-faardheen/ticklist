import useFetch from "./useFetch";

const Header = () => {
  const { data, isPending } = useFetch("https://type.fit/api/quotes");
  let quote;

  if (!isPending) {
    quote = data[Math.floor(Math.random() * 1642)];
  }

  return (
    <div className="header p-12 text-xl text-center text-white ">
      <h1 className="text-left font-bold text-4xl">ticklist.</h1>
      <header className="header__head mt-16">
        <h1>Your Daily Inspirational Quotes</h1>
        <h2>{!isPending && quote.text + " - " + quote.author}</h2>
      </header>
    </div>
  );
};

export default Header;
