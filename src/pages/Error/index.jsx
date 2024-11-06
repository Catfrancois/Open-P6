import "./Error.scss"

const Error = () => {
  return (
    <main className="error">
      <h1 className="error__title">404</h1>
      <div className="error__container">
        <p className="error__text">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <a href="http://localhost:3000/home" className="error__link">
          Retourner sur la page d’accueil
        </a>
      </div>
    </main>
  )
}

export default Error
