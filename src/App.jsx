import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/post/:id" element={<Post />}></Route>
      </Routes>
    </>

    // 1.  ✅ Fetch From Server
    // 2.  ✅ Show Fetched Data
    // 3.  ✅ Show Fetched Data Serially As Server Response
    // 4.  ✅ Sort Fetched Data By Newest
    // 5.  ✅ Sort Fetched Data By Most Liked
    // 6.  ✅ Filter By All and Saved 
    // 7.  ✅ Thumbnail And Title Will Be Clickable And Redirect To Individual Video Page
    // 8.  ✅ Related Blogs Will Be Shown In Sidebar Excluding The Current Blog 
    // 9.  ✅ If Save Button Clicked Video Will Be Saved And Saved Will Be Shown In UI 
    // 10. ✅  If Like Is Clicked Like Will Increase And Sync With Server


    
  );
}

export default App;
