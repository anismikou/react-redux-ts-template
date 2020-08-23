import React, { SFC } from 'react'

interface IErrorProps {
    message: string
}
const Error: SFC<IErrorProps> = ({ message }: IErrorProps) => (
    <div className="alert alert-danger">{message}</div>
)

Error.defaultProps = {
    message: 'Une erreur est survenue',
}

export default Error
