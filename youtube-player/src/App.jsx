import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Feed from "./pages/Feed.jsx";
import VideoDetails from "./pages/VideoDetails.jsx";
import ChannelDetails from "./pages/ChannelDetails.jsx";
import SearchResults from "./pages/SearchResults.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetails />} />
        <Route path="/channel/:id" element={<ChannelDetails />} />
        <Route path="/search/:searchTerm" element={<SearchResults />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;