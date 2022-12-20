import { render } from "@testing-library/react";
import { Table } from "antd";
import Item from "./Item";
import React, { useState } from "react";


const List = () => {

    // console.log(Item())

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (record) => {
                return (
                    <>
                        <a onClick={() => deleteItem(record)}>Delete</a>,
                    </>
                )
            },
        },
    ];

    let [delets, setDelets] = useState(Item())

    const deleteItem = (record) => {

        console.log(record.key)
        setDelets(prevData => {
            let some = prevData.filter(product => product.key !== record.key)
            console.log(some)
            return some
        })
    }

    return (
        <>
            <Table
                columns={columns}
                expandable={{
                    expandedRowRender: (record) => (
                        <p
                            style={{
                                margin: 0,
                            }}
                        >
                            {record.description}
                        </p>

                    ),
                    rowExpandable: (record) => record.name !== 'Not Expandable',
                }}
                dataSource={delets}
            />
        </>
    )
}

export default List