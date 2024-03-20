import React, { useEffect, useState } from 'react'
import { Table } from 'flowbite-react';
import { useMyContext } from '../Contexts/MyContext';

function Log({size}) {
  const {logs} = useMyContext();

  if (logs.length<1) return (
    <>
    <h2 className='text-2xl font-semibold mx-3 mb-3'>Logs</h2>
    <div className={`overflow-x-auto ${size}`}>
    <Table>
      <Table.Head>
        <Table.HeadCell className='bg-gray-300'>Pot Name</Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
            <Table.Row className="bg-gray-100 dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              There have been No transactions yet
            </Table.Cell>
            </Table.Row>
      </Table.Body>
    </Table>
  </div>
  </>
  )

  return (
    <>
    <h2 className='text-2xl font-semibold mx-3 mb-3'>Logs</h2>
    <div className={`overflow-x-auto ${size}`}>
    <Table>
      <Table.Head>
        <Table.HeadCell className='bg-gray-300'>Pot Name</Table.HeadCell>
        <Table.HeadCell className='bg-gray-300'>Type</Table.HeadCell>
        <Table.HeadCell className='bg-gray-300'>Amount</Table.HeadCell>
        {/* <Table.HeadCell>
          <span className="sr-only">Edit</span>
        </Table.HeadCell> */}
      </Table.Head>
      <Table.Body className="divide-y">
        {logs.map((transaction) => (
            <React.Fragment key={transaction.id}>
            <Table.Row className="bg-gray-100 dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {transaction.potName}
            </Table.Cell>
            <Table.Cell>{transaction.type}</Table.Cell>
            <Table.Cell>{transaction.type==="save" ? "+ " : transaction.type==="spend" ? "- " : null}£{transaction.amount}</Table.Cell>
            {/* <Table.Cell>
                <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit
                </a>
            </Table.Cell> */}
            </Table.Row>
            </React.Fragment>
        ))}
      </Table.Body>
    </Table>
  </div>
  </>
  )
}

export default Log