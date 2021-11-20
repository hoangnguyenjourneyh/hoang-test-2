import { TodoPage } from './page/TodoPage';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <TodoPage />
    </ThemeProvider>
  );
}

export default App;
