import Dropdown from '../../components/Dropdown'
import mountains from '../../assets/img/mountains.png'
import './About.scss'

const About = () => {
  const dropdownData = [
    { title: "Fiabilité", content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." },
    { title: "Respect", content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." },
    { title: "Service", content: "La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance." },
    { title: "Sécurité", content: "La sécurité est la priorité de Kasa. Aussi bien pour les voyageurs que pour les hôtes, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." }
  ]

  return (
    <main className="about">
      <img src={mountains} alt="banner-img" className="about__img" />
      <div className="about__dropdown-container">
        {dropdownData.map((item, index) => (
          <Dropdown
            key={index}
            title={item.title}
            content={item.content}
            className="about__dropdown-content"
          />
        ))}
      </div>
    </main>
  )
}
export default About
