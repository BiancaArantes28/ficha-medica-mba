import { createTheme, ThemeProvider } from '@mui/material/styles';
import { RoutesComponent } from './Routes';
import './App.css';

let theme = createTheme({
  palette: {
    primary: {
      main: '#0052cc',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <RoutesComponent />
      </ThemeProvider>
    </div>
  );
}

export default App;
