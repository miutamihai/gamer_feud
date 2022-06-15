import {useNavigate, useParams} from 'react-router-dom'
import {useCallback, useEffect, useState} from 'react'
import {Card, Rating, Label, Select} from 'flowbite-react'
import {useAppContext} from './app-context'
import {Comment} from './comment'
import {AddComment} from './add-comment'

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

const useReview = (userId, gameId) => {
    const navigate = useNavigate()

    return useCallback(value => {
        fetch(`${process.env.REACT_APP_API_URL}/add_review`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: userId,
                game_id: gameId,
                value
            })
        })
            .then(res => res.json())
            .then(({success}) => {
                if (success) {
                    navigate(0)
                }
            })
    }, [])
}

const useComments = setComments => {
    const {game_id} = useParams()

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/comments/${game_id}`)
            .then(res => res.json())
            .then(({comments}) => setComments(comments))
    }, [game_id, setComments])
}

export const Game = () => {
    const {game_id} = useParams()
    const [game, setGame] = useState({})
    const [gameRating, setGameRating] = useState(0)
    const [comments, setComments] = useState([])
    const {loggedIn, userId} = useAppContext()
    const review = useReview(userId, game_id)
    useSetGame(setGame, game_id)
    useSetGameRating(setGameRating, game_id)
    useComments(setComments)

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
                <Rating.Star/>
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
                onChange={e => review(e.target.value)}
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
        <AddComment/>
        {comments.map(comment => <Comment key={comment.id} id={comment.id} content={comment.content}
                                          user_id={comment.user_id} created_at={comment.created_at}
                                          email={comment.email}/>)}
    </div>
}