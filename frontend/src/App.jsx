import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from "./pages/HomePage";
import { SearchPage } from "./pages/SearchPage";
import { UserLibrary } from "./pages/UserLibrary";
import { BookDetails } from "./pages/BookDetails";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/library" element={<UserLibrary />} />
        <Route path="/book/:id" element={<BookDetails />} />
      </Routes>
    </Layout>
  );
}

export default App;
