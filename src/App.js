import React from 'react';
import Menu from './components/Menu';
import dadosIniciais from './components/data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';

function App() {
  return (
    <div style={{ background:"#141414"}}>
      <Menu />

     <BannerMain
     videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
     url={dadosIniciais.categorias[0].videos[0].url}
     videoDescription={"O que é Front-end? Trabalha na área que trata da interface de uma aplicção web"}
     />
        <Carousel
          ignoreFirstVideo
          category ={dadosIniciais.categorias[0]}
          />

          <Carousel
            category={dadosIniciais.categorias[1]}
          />

            <Carousel
              category={dadosIniciais.categorias[2]}
            />

             <Carousel
               category={dadosIniciais.categorias[3]}
            />
              <Carousel
              category={dadosIniciais.categorias[4]}
            />

              <Carousel
              category={dadosIniciais.categorias[5]}
               />
        </div>
  );
}

export default App;