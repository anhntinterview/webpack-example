import * as React from 'react';

export default function ListErrors({ errors }) {
    return (
        <ul className="error-messages">
            {Object.keys(errors).map((key) => {
                return (
                    <li key={key}>
                        {key} {errors[key]}
                    </li>
                );
            })}
        </ul>
    );
}
