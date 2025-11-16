
import './App.css';
import { MantineProvider } from '@mantine/core';

function App() {
  return (
    <MantineProvider>
      <h1 className="text-3xl font-bold underline">Hello World</h1>
    </MantineProvider>
  );
}

export default App;
