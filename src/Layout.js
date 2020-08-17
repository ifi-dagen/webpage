import React, { useState, useRef } from 'react';
import { useOnClickOutside } from './hooks'
import './index.css';
import Footer from './components/footer';
import Header from './components/header';
import Burger from './components/hamburgermeny/burger'
import Meny from './components/hamburgermeny/meny'


function Layout(props) {

  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return (
    <div>
      <Header />
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
        <Meny open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div id="main"> {props.children} </div>
      <div className="container-fluid col_bilde footer_bilde"></div>
      <Footer className="Footer" />
    </div>
  );
}

export default Layout;
