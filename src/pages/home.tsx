import "../styles/home.scss";

const latestTrends = [
  {
    id: 1,
    title: "Shirt with puffed sleeves",
    image: "/assets/trends/puffed-sleeves.png",
  },
  {
    id: 2,
    title: "Linen jumpsuit",
    image: "/assets/trends/linen-jumpsuit.jpg",
  },
  {
    id: 3,
    title: "White format suite",
    image: "/assets/trends/white-formals.png",
  },
  {
    id: 4,
    title: "Pattern dresses",
    image: "/assets/trends/pattern-dress.png",
  },
  {
    id: 5,
    title: "Leather shirt dresses",
    image: "/assets/trends/leather-shirt.png",
  },
];

const popularSuggestions = [
  {
    id: 1,
    title: "Striped shirt dress",
  },
  {
    id: 2,
    title: "Satin shirts",
  },
  {
    id: 3,
    title: "Denim jumpsuit",
  },
  {
    id: 4,
    title: "Leather dresses",
  },
  {
    id: 5,
    title: "Solid tshirts",
  },
];

export function Home() {
  return (
    <div className="bg-container">
      <div className="bg">
        <div className="home-search-bar-container">
          <form>
            <input
              type="text"
              placeholder="Search"
              className="home-search-bar"
            />
            <button type="submit">
              <img
                src="/assets/search.svg"
                className="home-search-icon"
                alt="search"
              />
            </button>
          </form>
        </div>

        <div className="home-search-results-container">
          <div className="latest-trends">
            <div className="title">Latest Trends</div>
            <div className="cards-container">
              {latestTrends.map((trend) => (
                <div className="card">
                  <img src={trend.image} className="card-img" alt="" />
                  <h4 className="card-title">{trend.title}</h4>
                </div>
              ))}
            </div>
          </div>
          <div className="popular-suggestions">
            <div className="title">Popular Suggestions</div>
            <div className="suggestion-list-container">
              {popularSuggestions.map((suggestion) => (
                <ul className="suggestion-list">
                  <li className="suggestion-title">{suggestion.title}</li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
