import React from 'react'
import { Table } from 'flowbite-react';

const moc = [
{name:"Test1", type:"Saving", ammount:2.21, timeStamp: 123453245}, 
{name:"Test2", type:"Spendibg", ammount:7.22, timeStamp: 123453245}, 
{name:"Test2", type:"Spendibg", ammount:7.22, timeStamp: 123453245}, 
{name:"Test1", type:"Saving", ammount:2.21, timeStamp: 123453245}, 
{name:"Test1", type:"Saving", ammount:2.21, timeStamp: 123453245}, 
{name:"Test2", type:"Spendibg", ammount:7.22, timeStamp: 123453245}, 
{name:"Test1", type:"Saving", ammount:2.21, timeStamp: 123453245}, 
{name:"Test2", type:"Spendibg", ammount:7.22, timeStamp: 123453245}, 
{name:"Test2", type:"Spendibg", ammount:7.22, timeStamp: 123453245}, 
{name:"Test1", type:"Saving", ammount:2.21, timeStamp: 123453245}, 
{name:"Test1", type:"Saving", ammount:2.21, timeStamp: 123453245}, 
{name:"Test2", type:"Spendibg", ammount:7.22, timeStamp: 123453245},
]

function Log({size}) {
  return (
    <>
    <h2 className='text-2xl font-semibold m-3'>Logs</h2>
    <div className={`overflow-x-auto ${size}`}>
    <Table>
      <Table.Head>
        <Table.HeadCell>Pot Name</Table.HeadCell>
        <Table.HeadCell>Type</Table.HeadCell>
        <Table.HeadCell>Ammoint</Table.HeadCell>
        {/* <Table.HeadCell>
          <span className="sr-only">Edit</span>
        </Table.HeadCell> */}
      </Table.Head>
      <Table.Body className="divide-y">
        {moc.map((transaction) => (
            <React.Fragment key={transaction.name}>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {transaction.name}
            </Table.Cell>
            <Table.Cell>{transaction.type}</Table.Cell>
            <Table.Cell>{transaction.ammount}</Table.Cell>
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