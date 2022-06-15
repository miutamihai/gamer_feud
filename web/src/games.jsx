import {useEffect, useState} from 'react'
import {Card, Button} from 'flowbite-react'
import {useNavigate} from 'react-router-dom'

const useGames = setGames => {
    useEffect(() => {
       fetch(`${process.env.REACT_APP_API_URL}/games`)
           .then(res => res.json())
           .then(({games}) => setGames(games))
    }, [setGames])
}

export const Games = () => {
    const [games, setGames] = useState([]);
    const navigate = useNavigate()
    useGames(setGames);

    return <div className={'flex items-center justify-center w-screen flex-col'} style={{minHeight: '70vh'}}>
        <h1 className={'font-medium leading-tight text-5xl mt-0 mb-2'}>Games</h1>
        {games.map(game => <div id={game.id} className={'mt-10'}>
            <Card>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {game.name} - {game.category}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {game.description}
                </p>
                <Button onClick={() => navigate(`/games/${game.id}`)}>
                    Details
                    <svg
                        className="ml-2 -mr-1 h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </Button>
            </Card>
        </div>)}
    </div>
}