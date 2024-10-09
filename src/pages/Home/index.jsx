import cote from '../../assets/img/cote.png'
import Cards from '../../components/Cards'
import useFetchAnnouncements from '../../utils/hooks/index'
import './Home.scss'

const Home = () => {
  const url = '/data/announcements.json'
  const { data, isLoading, error } = useFetchAnnouncements(url)

  if (isLoading) return <span>Chargement...</span>
  if (error) return <span>Erreur: {error.message}</span>

  if (error)
    return <span>Il y a un problème: {error.message}</span>

  return (
    <div className="home">
      <div className="home__header">
        <img src={cote} alt="cote" className="home__img" />
        <h1 className='home__title'>Page D'accueil</h1>
      </div>
      <div className='home__cards'>
        <Cards data={data} />
      </div>
    </div>
  )
}

export default Home