import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from '../src/routes';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';

function App() {
  return (
      <Router>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </Router>
  );
}

export default App;