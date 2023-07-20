import styled from "styled-components";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const { auth } = useSelector((store) => store.AuthReducer);

  // console.log('data: ', auth);

  return (
    <Main style={showMenu ? {
      height: '11rem',
    } : {
      border: 'none'
    }}>
      {/* 1st logo part */}
      <Logo onClick={() => navigate('/')}>
        <Image src="" alt="logo" />
        <p>Logo</p>
      </Logo>
      {/* 2nd menu part */}
      {showMenu ?
        <MobileMenu>
          <ul>
            <List>
              <Anchor href="/">HOME</Anchor>
            </List>
            <List>
              <Anchor href="/">MOVIES</Anchor>
            </List>
            <List>
              <Anchor href="/">CART</Anchor>
            </List>
          </ul>
        </MobileMenu>
        :
        <MenuLinks>
          <UList>
            <List>
              <Anchor href="/">HOME</Anchor>
            </List>
            <List>
              <Anchor href="/">MOVIES</Anchor>
            </List>
            <List>
              <Anchor href="/">CART</Anchor>
            </List>
          </UList>
        </MenuLinks>
      }
      {/* 3rd auth part */}
      <UserAuth>
        {auth === null ?
          <Anchor href="/register">Register/Login</Anchor> :
          <UserInfo>
            <User src={auth[0].imgUrl} />
            {auth[0].name}
          </UserInfo>
        }
        {showMenu ?
          <Hambergur>
            <RxCross1 onClick={() => setShowMenu(!showMenu)} />
          </Hambergur> :
          <Hambergur>
            <RxHamburgerMenu onClick={() => setShowMenu(!showMenu)} />
          </Hambergur>
        }
      </UserAuth>
    </Main>
  )
}

export default Navbar;


const Main = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: grid;
  grid-template-columns: 5rem 1fr 2fr 1fr 5rem;

  @media (max-width: 1080px) {
    height: 5rem;
    grid-template-columns: 2rem 1fr 3fr 1fr 2rem;
  }

  @media (max-width: 998px) {
    height: 4rem;
  }

  @media (max-width: 410px) {
    grid-template-columns: 1rem 2fr 0fr 2fr 1rem;
  }
`

const Logo = styled.div`
  height: 5rem;
  display: flex;
  justify-content: start;
  align-items: center;
  grid-column: 2/3;
  cursor: pointer;

  @media (max-width: 1080px) {
    height: 5rem;
  }

  @media (max-width: 998px) {
    height: 4rem;
  }
`

const Image = styled.img``

const MenuLinks = styled.div`
  grid-column: 3/4;
`

const UList = styled.ul`
  padding: 0;
  margin: 0;
  height: 6rem;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 1080px) {
    height: 5rem;
  }

  @media (max-width: 998px) {
    height: 4rem;
    display: none;
  }
`

const List = styled.li`
  list-style: none;
`

const UserInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`

const User = styled.img`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
`

const Anchor = styled.a`
  text-decoration: none;
`

const UserAuth = styled.div`
  height: 5rem;
  display: flex;
  grid-column: 4/5;
  justify-content: end;
  align-items: center;

  @media (max-width: 1080px) {
    height: 5rem;
  }

  @media (max-width: 998px) {
    height: 4rem;
    display: flex;
    justify-content: space-between;
  }
`

const Hambergur = styled.a`
  text-decoration: none;
  display: none;

  @media (max-width: 998px) {
    display: block;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
  }
`



// mobile menu links

const MobileMenu = styled.div`
  margin-top: 3rem;
  text-align: center;
  line-height: 30px;
`