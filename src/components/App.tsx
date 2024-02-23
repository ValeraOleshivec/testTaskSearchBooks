import React from "react";
import { Header } from "components/ui/Header";
import { SearchSection } from "components/ui/SearchSection";
import { BooksSection } from "components/ui/BooksSection";
import { StoreProvider } from "store/StoreProvider/StoreProvider";

const App = () => {
  return (
    <StoreProvider>
      <div className="app">
        <Header />
        <SearchSection />
        <BooksSection />
      </div>
    </StoreProvider>
  );
};

export default App;
