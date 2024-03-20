import { Button, Modal } from 'flowbite-react';
import React, { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import AddWithdrawModal from '../AddAndWithdrawModal/Index';

function HomePot({id, potName, ammountInInPot, totalAllocated, type}) {

    const [showAddWithdrawModal, setShowAddWithdrawModal] = useState(false);

    const AmmountLeftToSave = totalAllocated-ammountInInPot
    const [potChartData, setPotChartData] = useState({ //this inital state is needed to trigger a rerender when the actual data is loaded
      series: [ammountInInPot, AmmountLeftToSave],     //this is to fix a apex chart bug where sometimes the intial render of the chart will be the wrong size
            options: {
              chart: {
                type: 'donut',
              },
          }
        }
    )

      const CreatePotChartData = () => {
        const chartColor = type==="save" ? '#2BD169' : type==="spend" ? '#FF4C4C' : null
        const saveOrSpendLable = type==="save" ? `Saved` : type==="spend" ? `Spent` : null
        setPotChartData({
            series: [ammountInInPot, AmmountLeftToSave],
            options: {
              chart: {
                type: 'donut',
              },
              labels: [saveOrSpendLable, `Left`],
              colors: [chartColor, '#A1A1A1'],
              plotOptions: {
                pie: {
                  donut: {
                    labels: {
                      show: true,
                        total: {
                        color: chartColor,
                        show: true,
                        offsetY: -50,
                        formatter: () => potName
                      },
                        value: {
                          offsetY: -10,
                          formatter: () => potName
                        },
                        name:{
                        show: true,
                        offsetY: 30,
                        formatter: () =>`£${ammountInInPot}/£${totalAllocated} ${saveOrSpendLable}`
                        //something needs done here to make the "£10/£20 saved" lables look better/smaller on mobile
                        },
                    }
                  }
                }
              },
              dataLabels: {
                formatter(val, opts) {
                  const potName = opts.w.globals.labels[opts.seriesIndex]
                  return [`%${Math.floor(val)} ${potName}`]
                }
              },
              legend: {
                show: false
              }
            },
          })
      }
      
    useEffect(() => {
        CreatePotChartData()
    },[potName, ammountInInPot, totalAllocated])
  
    return (
    <>
    <div  onClick={() => setShowAddWithdrawModal(true)} style={{minWidth:"45%", maxWidth:"100%"}} className="rounded-lg m-1 relative bg-gray-100 shadow">
    <Button gradientDuoTone="purpleToBlue" className='m-3 absolute top-0 right-0 size-6 rounded-lg flex justify-center items-center shadow-lg'>
     {
     type==="save" ? 
     <FaPlus className='' /> : 
     type==="spend" ? <FaMinus className='' />
     : null}
     </Button>
     <ReactApexChart options={potChartData.options} series={potChartData.series} type="donut" />
    </div>
    <Modal  show={showAddWithdrawModal} size="md" popup  onClose={() => setShowAddWithdrawModal(false)}>
        <Modal.Header />
        <Modal.Body>
        <AddWithdrawModal id={id} name={potName} ammountInInPot={ammountInInPot} totalAllocated={totalAllocated} type={type} setShowAddWithdrawModal={setShowAddWithdrawModal} />
        </Modal.Body>
      </Modal>
    </>
  )
}

export default HomePot