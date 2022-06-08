import logo from '../icons/pokemonLogo.png'

const Header = () => {
  return (
    <div className='header'>
        <h4><img src={logo} alt='Pokemon'/> Search</h4>
        <p>Powered by <a href='https://pokeapi.co/' target='_blank' rel='noreferrer'>Pok&eacute;Api</a></p>
    </div>
  )
}

export default Header