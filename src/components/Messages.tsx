import React from 'react'

const Messages = ({messages}: {messages: string[]}) => {
    return(
        <div>
            {messages.map<any>((message, index) => (
                <div key={index}>
                    {message}
                </div>
            ))}
        </div>
    )
}

export default Messages