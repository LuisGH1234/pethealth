import React, { useState } from 'react';
import { Table } from 'reactstrap';

interface IInscription {
    name: string;
    email: string;
    date?: string;
}
interface IProps {
    inscriptions: IInscription[];
    clean?: boolean;
}
export default function CustomTable(props: IProps) {

    const { clean = false, inscriptions } = props;
    function renderRow(item: IInscription, index: number) {
        return (
            <tr key={index}>
                <td scope="row">{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                { clean && <td>{item.date}</td>}
            </tr>
        );
    }

    return (
        <Table striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    { clean && <th>Date</th>}
                </tr>
            </thead>
            <tbody>
                {
                    (inscriptions).map(renderRow)
                }
            </tbody>
        </Table>
    );
}