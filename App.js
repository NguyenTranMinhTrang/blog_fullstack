import React from "react";

// Screens
import Home from "./app/screens/Home";
import SearchBar from "./app/screens/SearchBar";
import FeaturedNews from "./app/screens/FeaturedNews";
import BreakingNews from "./app/screens/BreakingNews";



// Fake data
import data from "./fakeData";

const App = () => {
  const breakingNews = data.filter(item => item.category === "breaking-news");

  return (
    <Home>
      <SearchBar />
      <FeaturedNews item={{
        id: "1",
        title: "This is the title no one.",
        desc:
          "Desc is the short form of description and this format is the actual same as our real database.",
        thumbnail: "http://lorempixel.com/400/200/",
        category: "breaking-news"
      }} />
      <BreakingNews data={breakingNews} />
    </Home>
  )
}

export default App;