import {useState, useCallback} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import {Label, Textarea, Button} from 'flowbite-react'
import {useAppContext} from './app-context'

const useAddComment = content => {
    const {userId} = useAppContext()
    const {game_id} = useParams()
    const navigate = useNavigate()

    return useCallback(() => {
        fetch(`${process.env.REACT_APP_API_URL}/add_comment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: userId,
                game_id: game_id,
                content
            })
        })
            .then(res => res.json())
            .then(({success}) => {
                if (success) {
                    navigate(0)
                }
            })
    }, [userId, game_id, content])
}

export const AddComment = () => {
    const {loggedIn} = useAppContext()
    const [content, setContent] = useState('')
    const addComment = useAddComment(content)

    return <>
        <div id="textarea" className={'mt-5'}>
            <div className="mb-2 block">
                <Label
                    htmlFor="comment"
                    value="Your message"
                />
            </div>
            <Textarea
                onChange={e => setContent(e.target.value)}
                id="comment"
                placeholder="Leave a comment..."
                required={true}
                rows={4}
                disabled={!loggedIn}
            />
        </div>
        <div className={'mt-3'}>
            <Button onClick={addComment} disabled={!loggedIn}>
                Add comment
            </Button>
        </div>

    </>
}