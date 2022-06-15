import {useEffect, useState} from 'react'
import {Card, Button} from 'flowbite-react'
import {useNavigate} from 'react-router-dom'
import {GamesPagination} from './games-pagination'

const getPageSize = () => process.env.REACT_APP_PAGE_SIZE

const calculateOffset = currentPage => (currentPage - 1) * getPageSize()

const buildUrl = currentPage => {
    const base = `${process.env.REACT_APP_API_URL}/games`
    const params = new URLSearchParams()
    params.append('limit', getPageSize())
    params.append('offset', calculateOffset(currentPage))

    return `${base}?${params.toString()}`
}

const useGames = (setGames, currentPage) => {
    useEffect(() => {
        fetch(buildUrl(currentPage))
            .then(res => res.json())
            .then(({games}) => setGames(games))
    }, [setGames, currentPage])
}

const useTotalPages = setTotalPages => {
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/games_count`)
            .then(res => res.json())
            .then(({count}) => setTotalPages(Math.ceil(count / getPageSize())))
    }, [setTotalPages])
}

export const Games = () => {
    const [games, setGames] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const navigate = useNavigate()
    useGames(setGames, currentPage)
    useTotalPages(setTotalPages)

    return <div className={'flex items-center justify-center w-screen flex-col'} style={{minHeight: '70vh'}}>
        <GamesPagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages}/>
        <h1 className={'font-medium leading-tight text-5xl mt-0 mb-2'}>Games</h1>
        {games.map(game => <div key={game.id} className={'mt-10'}>
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