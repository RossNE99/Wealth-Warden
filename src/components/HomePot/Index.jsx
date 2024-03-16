import React, { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

function HomePot({name, ammountInInPot, totalAllocated, type}) {
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
                        formatter: () => name
                      },
                        value: {
                          offsetY: -10,
                          formatter: () => name
                        },
                        name:{
                        show: true,
                        offsetY: 30,
                        formatter: () =>`£${ammountInInPot}/${totalAllocated} ${saveOrSpendLable}`
                        //something needs done here to make the "£10/£20 saved" lables look better/smaller on mobile
                        },
                    }
                  }
                }
              },
              dataLabels: {
                formatter(val, opts) {
                  const name = opts.w.globals.labels[opts.seriesIndex]
                  return [`£${val} ${name}`]
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
    },[name, ammountInInPot, totalAllocated])
  
    return (
    <div style={{minWidth:"45%", maxWidth:"46%", backgroundColor:"#F0F0F0"}} className="rounded-lg m-1 relative">
    <button className='m-3 absolute top-0 right-0 size-6 rounded-lg bg-blue-500 flex justify-center items-center'>
     {
     type==="save" ? 
     <FaPlus className='' /> : 
     type==="spend" ? <FaMinus className='' />
     : null}
     </button>
     <ReactApexChart options={potChartData.options} series={potChartData.series} type="donut" />
    </div>
  )
}

export default HomePot