import { useTransition, useRef } from "react"

const enviarInfoABackend = async () => {
  return new Promise( res => {
    return setTimeout( () => res(null), 2000 )
  } )
}

const FormularioTransition = () => {
  const [isPending, startTransition] = useTransition()
  const formRef = useRef<HTMLFormElement>(null)

  const formAction = () => {

    startTransition(enviarInfoABackend)
  }

  return (
    <div>
      <h2>FormularioTransition</h2>
      <form action={ formAction } ref={ formRef }>

        <input type="text" name="username" placeholder="username"/>
        <br />
        <input type="password" name="password" placeholder="password"/>
        <br />
        <button type="submit" disabled={ isPending }>Enviar</button>

      </form>
    </div>
  )
}

export default FormularioTransition
