export function Spagetti(){

    return (
        <div>
            <h3 className="mb-05em">Spaghetti code</h3>
            <p className="mb-05em">
                Spaghetti code has no pattern. It is unique to the author and shows how ingenious the author is. Unfortunately readers cannot fully understand the logic behind the code as its highly likely to contain a for loop in an if block contained by a while condition. Readers will then try to give alternative solutions, which is where arguments of code logic often begin. The solution has to declare what it solves, not how what is solved. You want to add 2 to each item, and not tell us you iterated through all items and added 2 on each item using the item's index value to identify its uniqueness. Hmmm... How ingenious.
            </p>
            <p className="mb-05em">
                In desperate times, we turn to regex, and come up with the following regex pattern |...| which has to identify the following characters ... as valid. If it validates true we forget about regex and commit our efforts. After a month, we come back for code review to find |...|and unintentionally ask the famous 'what the $@#% ?'. Luckily, regex has documentation explaining what |...| matches, answering that famous question. Spaghetti code is like regex, only its documentation is comments (if available) in its code. Comments that will not guide but misguide the reader to the wrong conclusions.
            </p>
            <p className="mb-05em">
                Solution? Declarative programming. Declarative programming addresses what should be done over how what should be done. And because it is declarative, it somehow becomes an intuitive solution which will be understood by readers as the right approach in solving the problem. It also eliminates the need for adding comments that add more confusion as the style is self-descriptive, i.e, declarative.
            </p>
        </div>
    )
}