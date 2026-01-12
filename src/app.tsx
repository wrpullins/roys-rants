import { useState, type FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import NotFound from "./pages/NotFound";
import Blog from "./pages/blog/Blog";

const App: FC = () => {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/blog" element={<Blog />} />
      {/* <Route pathe="/galltery" element={<Gallery/>} */}

      {/* Redirect example */}
      <Route path="/home" element={<Navigate to="/" replace />} />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
