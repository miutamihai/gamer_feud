import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import {Card, Rating, Label, Select} from 'flowbite-react'
import {useAppContext} from './app-context'

const useSetGame = (setGame, gameId) => {
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/games`)
            .then(res => res.json())
            .then(({games}) => games.filter(({id}) => id === parseInt(gameId))[0])
            .then(game => setGame(game))
    }, [setGame, gameId])
}

const useSetGameRating = (setGameRating, gameId) => {
    useEffect(() => {
       fetch(`${process.env.REACT_APP_API_URL}/average_reviews/${gameId}`)
           .then(res => res.json())
              .then(({average_reviews}) => setGameRating(average_reviews))
    }, [setGameRating, gameId])
}

export const Game = () => {
    const {game_id} = useParams()
    const [game, setGame] = useState({})
    const [gameRating, setGameRating] = useState(0)
    const {loggedIn} = useAppContext()
    useSetGame(setGame, game_id)
    useSetGameRating(setGameRating, game_id)

    return <div className={'flex items-center justify-center w-screen flex-col'} style={{minHeight: '70vh'}}>
        <Card>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {game.name} - {game.category}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                {game.description}
            </p>
        </Card>
        <div className={'mt-10'}>
            <Rating>
                <Rating.Star />
                <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
                    {gameRating}
                </p>
                {' '}
                <p className="ml-2 text-sm text-gray-900 dark:text-white">
                    average score
                </p>
            </Rating>
        </div>
        <div id="select" className={'mt-5'}>
            <div className="mb-2 block">
                <Label
                    htmlFor="rating"
                    value="Rate this game"
                />
            </div>
            <Select
                id="rating"
                required={true}
                onChange={e => console.log(e.target.value)}
                disabled={!loggedIn}
            >
                <option>
                    0
                </option>
                <option>
                    1
                </option>
                <option>
                    2
                </option>
                <option>
                    3
                </option>
                <option>
                    4
                </option>
                <option>
                    5
                </option>
            </Select>
        </div>
    </div>
}