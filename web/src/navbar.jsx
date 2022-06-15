import {Navbar} from 'flowbite-react'
import {useAppContext} from './app-context'

export const AppNavbar = () => {
    const {loggedIn} = useAppContext()

    return <Navbar
        fluid={true}
        rounded={true}
    >
        <Navbar.Brand>
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
         Gamer Feud
        </span>
        </Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse>
            <Navbar.Link href="/">
                Home
            </Navbar.Link>
            <Navbar.Link href="/games">
                Games
            </Navbar.Link>
            {!loggedIn && <>
                <Navbar.Link href="/login">
                    Login
                </Navbar.Link>
                <Navbar.Link href="/register">
                    Register
                </Navbar.Link>
            </>}
        </Navbar.Collapse>
    </Navbar>
}
