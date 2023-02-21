import React, {useState} from 'react'

const MessageInput = ({send}: {send: (val: string) => void}) => {
    const [value, setValue] = useState("")
    return(
        <>
            <input onChange={(e) => setValue(e.target.value)} placeholder='Type ur message' value={value} />
            <button onClick={() => send(value)}>Send</button>
        </>
    )
}

export default MessageInput