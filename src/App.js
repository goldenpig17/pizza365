import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      {/*MENU BAR*/}
      <Header />
      {/*MAIN CONTENT*/}
      <Content/>
      {/*FOOTER*/}
      <Footer/>
    </div>
  );
}

export default App;
