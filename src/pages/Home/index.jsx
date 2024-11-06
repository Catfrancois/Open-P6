import cote from '../../assets/img/cote.png'
import Cards from '../../components/Cards'
import useFetchAnnouncements from '../../utils/hooks/index'
import './Home.scss'

const Home = () => {
  const url = '/data/announcements.json'
  const { data } = useFetchAnnouncements(url)

  return (
    <div className="home">
      <div className="home__img-container">
        <img src={cote} alt="cote" className="home__img" />
        <h1 className='home__title'>Chez vous, partout et ailleurs</h1>
      </div>
      <div className='home__cards-container'>
        <Cards data={data} />
      </div>
    </div>
  )
}

export default Home