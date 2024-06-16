import logo from './logo.svg';
import './App.css';
import { NativeBaseProvider, Box } from "native-base";
import Button from './componentes/button';

function App() {
  return (
    <NativeBaseProvider>      
      <Button size="sm" variant="subtle" color="secondary" text="Click Me"/>
      <Button variant="subtle" color="primary" text="Click Me"></Button>
    </NativeBaseProvider>
    
  );
}

export default App;
