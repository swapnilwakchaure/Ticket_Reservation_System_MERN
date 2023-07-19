import styled from "styled-components";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const Navbar = () => {

    return (
        <Main>
            {/* 1st logo part */}
            <Logo>
                <Image src="" alt="logo" />
                <p>Logo</p>
            </Logo>
            {/* 2nd menu part */}
            <MenuLinks>
                <UList>
                    <List>
                        <Anchor href="/home">HOME</Anchor>
                    </List>
                    <List>
                        <Anchor href="/home">MOVIES</Anchor>
                    </List>
                    <List>
                        <Anchor href="/home">CART</Anchor>
                    </List>
                </UList>
            </MenuLinks>
            {/* 3rd auth part */}
            <UserAuth>
                <Anchor href="/home">Register/Login</Anchor>
                <Hambergur href="/home"><RxHamburgerMenu /></Hambergur>
                {/* <Hambergur href="/home"><RxCross1 /></Hambergur> */}
            </UserAuth>
        </Main>
    )
}

export default Navbar;


const Main = styled.div`
  border: 1px solid red;
  width: 100%;
  height: 10rem;
  display: grid;
  grid-template-columns: 10rem 1fr 2fr 1fr 10rem;

  @media (max-width: 1080px) {
    height: 8rem;
    grid-template-columns: 2rem 1fr 1fr 2fr 2rem;
  }

  @media (max-width: 998px) {
    height: 7rem;
  }
`

const Logo = styled.div`
  height: 10rem;
  display: flex;
  justify-content: start;
  align-items: center;
  grid-column: 2/3;

  @media (max-width: 1080px) {
    height: 8rem;
  }

  @media (max-width: 998px) {
    height: 7rem;
  }
`

const Image = styled.img``

const MenuLinks = styled.div`
  grid-column: 3/4;
`

const UList = styled.ul`
  padding: 0;
  margin: 0;
  height: 10rem;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 1080px) {
    height: 8rem;
  }

  @media (max-width: 998px) {
    height: 7rem;
    display: none;
  }
`

const List = styled.li`
  list-style: none;
`

const Anchor = styled.a`
  text-decoration: none;
`

const UserAuth = styled.div`
  height: 10rem;
  display: flex;
  grid-column: 4/5;
  justify-content: end;
  align-items: center;

  @media (max-width: 1080px) {
    height: 8rem;
  }

  @media (max-width: 998px) {
    height: 7rem;
    display: flex;
    justify-content: space-between;
  }
`

const Hambergur = styled.a`
  text-decoration: none;
  display: none;

  @media (max-width: 998px) {
    display: block;
    font-size: 2.5rem;
  }
`