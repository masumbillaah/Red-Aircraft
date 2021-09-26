import React from 'react';
import './Team.css'
const Team = props => {
    const { team } = props;
    let totalCost = 0;
    for (const person of team) {
        totalCost += person.remuneration;
    };

    return (
        <div className="cart bg-danger">
            <table className="table table-striped my-3">
                <thead>
                    <tr>
                        <th scope="col" className="bg-danger text-white fw-normal">Total Person Added</th>
                        <th scope="col" className="bg-danger text-white fw-normal">Total Cost</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-white text-center bg-danger fw-bold">
                        <td>{team.length}</td>
                        <td>$ {totalCost}</td>
                    </tr>
                </tbody>
            </table>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col" className="bg-danger text-white text-center">Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        team.map(person => {
                            return (
                                <tr key={person.id + Math.random()}>
                                    <td className="text-white text-center fw-bold">
                                        {person.name}
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Team;