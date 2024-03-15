import React, { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts';

function HomePot({name, ammountInInPot, totalAllocated, type}) {
    const AmmountLeftToSave = totalAllocated-ammountInInPot
    const [potChartData, setPotChartData] = useState()

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
    },[])

    useEffect(() => {
        CreatePotChartData()
    },[name, ammountInInPot, totalAllocated])
    
    if(!potChartData) return
  
    return (
    <div style={{minWidth:"45%", maxWidth:"50%", minHeight:"10vh", backgroundColor:"#F0F0F0"}} className="rounded-lg">
     <ReactApexChart options={potChartData.options} series={potChartData.series} type="donut" />
    </div>
  )
}

export default HomePot