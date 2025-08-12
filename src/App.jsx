import { useState } from 'react';
import DarkMode from './components/dark-mode';
import ShowEmployees from './components/show-employees';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="flex flex-col min-h-screen p-4 items-center justify-center bg-white text-black dark:bg-gray-900 dark:text-white">
        <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />

        <section className="flex flex-col items-center justify-center relative w-full max-w-4xl mx-auto mb-8">
          <div className="flex flex-col items-center px-7">
            <p className="text-sm max-w-sm">
              <span className="font-bold">Who we are</span>
              <br />
              We are team of creatively diverse. driven. Innovative individuals
              working in various locations from the world.
            </p>
          </div>
        </section>

        <ShowEmployees />

        <footer className="mt-10 font-sans">
          <p className="text-gray-400 text-sm">
            created by <span className="font-bold">benjarodriguez</span> -
            devChallenges.io
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
