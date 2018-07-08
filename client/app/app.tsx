import * as React from 'react'
import * as ReactDOM from 'react-dom'

const PolarisApp: React.SFC<{ name: string, version: number}> = (props) => {
    return (
        <div>
            <h2> Hi, You're using {props.name} <small> version { props.version} </small> </h2>
        </div>
    )
}

ReactDOM.render(
    <PolarisApp name="Polaris: React Ecosystem of Present and Future" version={1} />,
    document.getElementById('root')
)