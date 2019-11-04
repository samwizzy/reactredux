import React from 'react'

const Elem = (props) => {
    const foo = {children: "Hello Friends"}
    console.log(props, "Props")
    return (
        // <h2 {...props} />
        // <h2 {...foo} />
        <h2 children="Hello John doe" />
        // <h2>{props.children}</h2>
    )
}

export default Elem