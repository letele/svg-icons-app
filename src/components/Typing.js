
export function Typing({ text, width }) {
    
    return (
        <>
            <style>{`
                .typing{
                    overflow: hidden;
                    white-space: nowrap;
                    letter-spacing:0.1em;
                    animation: 
                        typing 3.5s steps(40,end);
                }

                @keyframes typing {
                    from { width: 0 }
                    to {  width: ${width} }
                }
            `}</style>
            <div className="typing">{text}</div>
        </>
    );
};


