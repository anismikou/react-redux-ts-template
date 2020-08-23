import React, { FC } from 'react'
import styled from 'styled-components'

interface IErrorProps {
    className?: string
    title: string
    children: string
}

const Error: FC<IErrorProps> = ({ className, title, children }) => (
    <div className={className}>
        <h1>{title}</h1>
        <p>{children}</p>
    </div>
)

const StyledError = styled(Error)`
    color: red;
`

export default StyledError
