// entry point of app - wrap the app in a layout
import React from "react";
import "../styles/globals.css";

import Nav from "../components/Nav";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main>
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
