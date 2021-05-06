import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../../../../context/authContext';
import { UserFactory } from '../../../../../models/factories/UserFactory';

export interface Utils {
  logoutHandler?: Function;
  handleClick?: Function;
}
export const useNavbarContentController = () => {
  const [open, setOpen] = useState(false);
  const { auth, setAuth } = useContext(AuthContext);
  const history = useHistory();
  const factory = new UserFactory();
  const Data = [
    {
      id: 1,
      image:
        'https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/01/20201126-godzilla-kong-2021-sera.jpg',
      title: 'KingKong VS Godzilla',
      writer: 'Yorizel',
      category: 'Backstage',
      description:
        'My Hero Academia: The Strongest Hero é o novo jogo do anime Boku No Hero , sendo um RPG de mundo aberto para mobile. O  jogo foi anunciado pela Sony Pictures Television (SPT) Games e Funimation nesta sexta-feira (23) e contará com todas as vozes originais do anime.\n' +
        'O game ainda não tem data de lançamento, porém ja foi lançado no Japão em 2020, mas por enquanto está em pré-registro na google play e na apple store aqui no Brasil e outros países  :D\n' +
        '.\n' +
        '.\n' +
        '.\n' +
        '#bokunohero #myheroacademy #sony #funimation #jogo #game #rpg #anime #japao #brasil #mobile #jogomobile #freefire',
      date: '15 de maio 2020'
    },
    {
      id: 2,
      image: 'https://i.ytimg.com/vi/8Tk8sqXlogM/maxresdefault.jpg',
      title: 'Mortal Kombat',
      writer: 'Yorizel',
      category: 'Backstage',
      description:
        'asdfasdfasdfasdfasdfasdasdfasdfasdfasdfasdfasdasdfasdfasdfasdfasdfasdasdfasdfasdfasdfasdfasdasdfasdfasdfasdfasdfasdasdfasdfasdfasdfasdfasdasdfasdfasdfasdfasdfasd',
      date: '15 de maio 2020'
    },
    {
      id: 3,
      image:
        'https://animesonehd.xyz/wp-content/uploads/2020/12/tensei-shitara-2-online-em-HD.png',
      title: 'Tensei Shitara',
      writer: 'Yorizel',
      category: 'Shinobi',
      description:
        'asdfasdfasdfasdfasdfasdasdfasdfasdfasdfasdfasdasdfasdfasdfasdfasdfasdasdfasdfasdfasdfasdfasdasdfasdfasdfasdfasdfasdasdfasdfasdfasdfasdfasdasdfasdfasdfasdfasdfasd',
      date: '15 de maio 2020'
    },
    {
      id: 4,
      image:
        'https://super.abril.com.br/wp-content/uploads/2020/05/si_justice_league_hbo.jpg',
      title: 'Snyder cut',
      writer: 'Yorizel',
      category: 'Heroes',
      description:
        'asdfasdfasdfasdfasdfasdasdfasdfasdfasdfasdfasdasdfasdfasdfasdfasdfasdasdfasdfasdfasdfasdfasdasdfasdfasdfasdfasdfasdasdfasdfasdfasdfasdfasdasdfasdfasdfasdfasdfasd',
      date: '15 de maio 2020'
    },
    {
      id: 5,
      image:
        'https://cdn.ome.lt/jDCWgCusZr35o5E5jsnU4wY7KZs=/1200x630/smart/extras/conteudos/re-zero-subaru-ve-emilia.jpg',
      title: 'Re:ZERO',
      writer: 'Yorizel',
      category: 'Shinobi',
      description:
        'asdfasdfasdfasdfasdfasdasdfasdfasdfasdfasdfasdasdfasdfasdfasdfasdfasdasdfasdfasdfasdfasdfasdasdfasdfasdfasdfasdfasdasdfasdfasdfasdfasdfasdasdfasdfasdfasdfasdfasd',
      date: '15 de maio 2020'
    },
    {
      id: 6,
      image:
        'https://cdn.novelupdates.com/images/2018/09/16f28ed8a155d1227eb810c88504dc97.jpg',
      title: 'Reverend insanity',
      writer: 'Yorizel',
      category: 'Shinobi',
      description:
        'asdfasdfasdfasdfasdfasdasdfasdfasdfasdfasdfasdasdfasdfasdfasdfasdfasdasdfasdfasdfasdfasdfasdasdfasdfasdfasdfasdfasdasdfasdfasdfasdfasdfasdasdfasdfasdfasdfasdfasd',
      date: '15 de maio 2020'
    },
    {
      id: 7,
      image:
        'https://uploads.jovemnerd.com.br/wp-content/uploads/2020/05/editora-newpop-revela-preco-e-previsao-de-lancamento-do-manhwa-de-solo-leveling.jpg',
      title: 'Solo leveling',
      writer: 'Yorizel',
      category: 'Shinobi',
      description:
        'asdfasdfasdfasdfasdfasdasdfasdfasdfasdfasdfasdasdfasdfasdfasdfasdfasdasdfasdfasdfasdfasdfasdasdfasdfasdfasdfasdfasdasdfasdfasdfasdfasdfasdasdfasdfasdfasdfasdfasd',
      date: '15 de maio 2020'
    },
    {
      id: 8,
      image: 'https://img.webnovel.com/bookcover/14187175405584205/300/300.jpg',
      title: 'Demonic Sword',
      writer: 'Yorizel',
      category: 'Shinobi',
      description:
        'asdfasdfasdfasdfasdfasdasdfasdfasdfasdfasdfasdasdfasdfasdfasdfasdfasdasdfasdfasdfasdfasdfasdasdfasdfasdfasdfasdfasdasdfasdfasdfasdfasdfasdasdfasdfasdfasdfasdfasd',
      date: '15 de maio 2020'
    }
  ];
  const handleClick = () => {
    if (auth.isLogged) return history.push('profile');
    return setOpen(true);
  };
  const logoutHandler = () => {
    return setAuth({
      token: '',
      isLogged: false,
      user: factory.create()
    });
  };
  return {
    handleClick,
    logoutHandler,
    Data,
    auth,
    open
  };
};
