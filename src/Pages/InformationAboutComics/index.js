import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { useHistory, useParams } from 'react-router-dom';
import './style.css';
import CardTwo from '../../Components/CardTwo/CardTwo';

const InformationAboutComics = () => {
  const [showComic, setShowComic] = useState([]);
  const history = useHistory();
  const params = useParams();

  function goHome() {
    history.push('/');
  }

  useEffect(() => {
    const getComicsForId = async () => {
      const timeStamp = '1';
      const apiKey = '32e7a6fce30eac78d6431f09a0442ff1';
      const md5 = 'e248a6ab65b8f3965efc5da3baa03f54';
      const response = await api.get(
        `/v1/public/comics/${params.id}?&ts=${timeStamp}&apikey=${apiKey}&hash=${md5}`
      );
      setShowComic(response.data.data.results);
      console.log(response.data.data.results, 'teste');
    };
    getComicsForId();
  }, [params.id]);

  return (
    <div className='container-first'>
      <section className='container'>
        <div className='section-one'>
          {showComic.map((comic) => (
            <CardTwo>
              <section className='section-card'>
                <div key={comic.id}>
                  <img
                    className='heroesImageSingular'
                    src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                  />
                </div>
                <div>
                  <ul>
                    <li className='list-items'>{comic.title}</li>
                    <li className='list-items'>
                      Autor: {comic.creators.items.name}
                    </li>
                    <li className='list-items'>
                      Preço: {comic.prices[0].price}
                    </li>
                  </ul>
                </div>
              </section>
            </CardTwo>
          ))}
          <button className='button' onClick={goHome}>
            Voltar
          </button>
        </div>
      </section>
    </div>
  );
};

export default InformationAboutComics;
