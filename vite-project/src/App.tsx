import React, {useState} from "react";
import { Menu, X, Home, Box, Layers, Settings, ExternalLink } from 'lucide-react';
import Sidebar from "./components/Sidebar";
import DashboardContent from "./components/DashboardContent";
import "./App.css";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Index from "./pages/index";
// import Dinosaur from "./pages/dinosaur";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <DashboardContent isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
    </div>
  );
}
// function App() {
//   return (
//     <div className="flex h-screen bg-gray-50">
//       <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Index />} />
//           <Route path="/:selectedDinosaur" element={<Dinosaur />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

export default App;
