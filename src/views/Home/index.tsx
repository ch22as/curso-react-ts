import ButtonList from "./Components/ButtonList"
// import "./Home.css"
import styles from "./Home.module.css"

const Home = () => {
  return <div>
    <h1>Home</h1>
    <button className={ styles.info }>botton</button>
    <button className={ styles.success }>botton</button>
    <ButtonList />
  </div>
}

export default Home
