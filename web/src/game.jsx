import {useParams} from 'react-router-dom'

export const Game = () => {
    const {game_id} = useParams()

    return <div>
        GAME #{game_id}
    </div>
}