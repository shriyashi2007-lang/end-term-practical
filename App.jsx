import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <nav style={{ marginBottom: '20px' }}>
        <NavLink to="/" >Home</NavLink> |{" "}
        <NavLink to="/about" >About</NavLink> |{" "}
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      {}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

