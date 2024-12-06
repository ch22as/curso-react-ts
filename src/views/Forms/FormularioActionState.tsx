import { useActionState, useRef } from "react"

const enviarInfoABackend = async (): Promise< null | string > => {
  return new Promise( (res) => {
    return setTimeout( () => res("Error"), 2000 )
  } )
}

const FormularioActionState = () => {
  const [error, formAction, isPending] = useActionState<null | string>(enviarInfoABackend, null, )

  const formRef = useRef<HTMLFormElement>(null)

  return (
    <div>
      <h2>FormularioActionState</h2>
      <form action={ formAction } ref={ formRef }>

        <input type="text" name="username" placeholder="username"/>
        <br />
        <input type="password" name="password" placeholder="password"/>
        <br />
        <button type="submit" disabled={ isPending }>Enviar</button>
        <br />
        { error && <span style={ { color: "red" } }>{ error }</span>}
      </form>
    </div>
  )
}

export default FormularioActionState
