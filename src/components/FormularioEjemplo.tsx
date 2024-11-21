import { useState } from "react"

interface FormFields {
  nombre: string
  edad: string
  isDeveloper: boolean
}

export const FormularioEjemplo = () => {
  const [formData, setFormData] = useState<FormFields>({
    nombre: '',
    edad: '',
    isDeveloper: false
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, id, type, checked } = e.target
    console.log(e.target.type)

    if(type === 'checkbox') return setFormData(data => ({
      ...data,
      [id]: checked
    }))

    setFormData(data => {
      return {
        ...data,
       [id]: value
      }
    })
    console.log(formData)
  }

  return (
    <div>
      <h1>FormularioEjemplo</h1>
      <form>
        <label htmlFor="nombre">Nombre</label>
        <input
          id="nombre"
          type="text"
          value={formData.nombre}
          onChange={handleChange} placeholder="Tu nombre"
        />
        <br />

        <label htmlFor="edad">Edad</label>
        <input
          id="edad"
          type="number"
          value={formData.edad}
          onChange={handleChange}
        />

        <br />

        <label htmlFor="isDeveloper">Es Developer</label>
        <input
          id="isDeveloper"
          type="checkbox"
          checked={formData.isDeveloper}
          onChange={handleChange}
        />

        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}
