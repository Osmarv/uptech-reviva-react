import { MainMenuWrapper, MainMenuList, MainMenuLink } from "./mainMenuStyles";

function MainMenu () {
return(
    <MainMenuWrapper>
        <MainMenuList>
            <MainMenuLink to="/"><li>Página Inicial</li></MainMenuLink>
            <MainMenuLink to="masculino"><li>Masculino</li></MainMenuLink>
            <MainMenuLink to="feminino"><li>Feminino</li></MainMenuLink>
            <MainMenuLink to="infantil"><li>Infantil</li></MainMenuLink>
            <MainMenuLink to="manual de moda"><li>Manual de Moda</li></MainMenuLink>
        </MainMenuList>
    </MainMenuWrapper>
)
}

export default MainMenu;