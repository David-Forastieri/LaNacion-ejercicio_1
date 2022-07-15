import './App.css';
import Baner from './componentes/Baner/Baner';
import Footer from './componentes/footer/Footer';
import Header from './componentes/Header/Header';
import ArticleContainer from './containers/ArticleContainer/ArticleContainer';

function App() {
  return (
    <>
      <Header/>
      <Baner/>
      <ArticleContainer/>
      <Footer/>
    </>
  );
}

export default App;
