import { Component } from 'react'

interface Props {
  contador: number
}

export default class CompomenteClaseCicloDeVida extends Component {
  state: {
    contador: 0
  }
  constructor(props: Props) {
    super(props)
    this.state = { contador: 0 }
    this.incrementaContador = this.incrementaContador.bind(this)
  }

  componentDidMount(): void {
    // Llamadas a API
    // Inizializar timesOuts/intervals
    // Inizializar listenert
    console.log('acabo de montarme')
  }
  componentDidUpdate(): void {
    // console.log(prevState)
    // console.log(this.state)
    console.log('acabo de actualizarme')
  }
  componentWillUnmount(): void {
    console.log('Voy a desmonmtarme')
    // Eliminar TimeOut/Intervarls/listeners
  }

  incrementaContador () {
    this.setState({ ...this, contador: this.state.contador + 1 })
  }

  render() {
    const { contador } = this.state
    const { incrementaContador } = this

    return (
      <div>
        <p>CompomenteClaseCicloDeVida</p>
        <button onClick={ incrementaContador }>
          { contador }
        </button>
      </div>
    )
  }
}
