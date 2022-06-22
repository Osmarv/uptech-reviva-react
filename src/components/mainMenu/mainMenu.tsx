import { Link } from 'react-router-dom'
import styled from 'styled-components';

const MainMenuWrapper = styled.nav`
    height: 2.5rem;
    background: #C4C4C4;
    align-content: center;
`

const MainMenuList = styled.ul`
    display: flex;
    justify-content: space-around;
    background-color: #C4C4C4;
    padding: 1rem 0 1rem 0;
`

function MainMenu () {
return(
    <MainMenuWrapper>
        <MainMenuList>
            <li><Link className='main-menu__links' to="/">Página Inicial</Link></li>
            <li><Link className='main-menu__links' to="masculino">Masculino</Link></li>
            <li><Link className='main-menu__links' to="feminino">Feminino</Link></li>
            <li><Link className='main-menu__links' to="infantil">Infantil</Link></li>
            <li><Link className='main-menu__links' to="manual de moda">Manual de Moda</Link></li>
        </MainMenuList>
    </MainMenuWrapper>
)
}

export default MainMenu;