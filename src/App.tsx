// import TypingTest from "./components/TypingTest"
import { Button } from 'primereact/button'
import { Menu } from 'primereact/menu';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';

const App = () => {
  const [value, setValue] = useState("")

  const items = [
    { label: 'New', icon: 'pi pi-plus' },
    { label: 'Search', icon: 'pi pi-search' }
  ]

  return (
    <>
      <h1>Hola mundo desde prime</h1>
      <Button> Haz click </Button >
      <Menu model={items} />
      <div className="card flex justify-content-center">
        <InputText value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
    </>
  )
}

export default App
