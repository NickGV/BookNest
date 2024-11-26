import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { SearchPage } from "./pages/SearchPage";
import { UserLibrary } from "./pages/UserLibrary";
import { BookDetails } from "./pages/BookDetails";
import { RegisterPage } from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthProvider";
import { PrivateRoute } from "./components/PrivateRoute";
import { BookProvider } from "./context/BookProvider";
import { Toaster } from 'sonner'

function App() {
  return (
    <BookProvider>
      <AuthProvider>
        <Toaster />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/book/:id" element={<BookDetails />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />

            <Route
              path="/protected"
              element={
                <PrivateRoute>
                  <UserLibrary />
                </PrivateRoute>
              }
            />
          </Routes>
        </Layout>
      </AuthProvider>
    </BookProvider>
  );
}

export default App;
