import { Typography } from '@mui/material';
import Button from '@mui/material/Button';

function App() {
  return (
    <>
    <Typography variant="h3" sx={{ py: 8 }}>Hola mundo desde material UI</Typography>
    <Button size="large" variant="contained">Click</Button>
    <Button size="medium" variant="outlined">Click</Button>
    <Button size="small" variant="text">Click</Button>
    </>
  )
}

export default App
