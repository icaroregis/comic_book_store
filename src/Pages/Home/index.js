import React, { useEffect, useState } from 'react';
import Header2 from '../../Components/Header2/index';
import CardOne from '../../Components/CardOne/CardOne';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import './style.css';

const Home = () => {
  const [mostrarQuadrinhos, setMostrarQuadrinhos] = useState([]);
  const history = useHistory();

  function goInformationAboutComics(id) {
    history.push(`/InformationAboutComics/${id}`);
    console.log(id, 'icaro');
  }

  useEffect(() => {
    const getQuadrinhos = async () => {
      const timeStamp = '1';
      const apiKey = '32e7a6fce30eac78d6431f09a0442ff1';
      const md5 = 'e248a6ab65b8f3965efc5da3baa03f54';
      const response = await api.get(
        `/v1/public/comics?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}`
      );
      setMostrarQuadrinhos(response.data.data.results);
      console.log(response.data, 'teste');
    };
    getQuadrinhos();
  }, []);

  console.log(mostrarQuadrinhos);

  return (
    <>
      <section className='container-home'>
        <div>
          <Header2 />
        </div>
        <div className='div-title'>
          <p>
            <strong className='alert-title'>
              Escolha um quadrinho para visualizar os detalhes
            </strong>
          </p>
        </div>

        <div className='section-master'>
          {mostrarQuadrinhos.map((comics) => (
            <CardOne>
              <div key={comics.id} className='section-padrao'>
                <div className='section-image-paragraph'>
                  <img
                    className='heroesImage'
                    src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
                  />
                  {/* <p className='paragraph'>{comics.title}</p> */}
                </div>

                <button
                  className='button'
                  onClick={() => goInformationAboutComics(comics.id)}
                >
                  Ir para detalhes
                </button>
              </div>
            </CardOne>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
