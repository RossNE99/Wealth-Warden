import React from 'react'
import { useState } from 'react'
import ReactApexChart from 'react-apexcharts'

function Graph() {
    const [chartData, setChartData] = useState({
          
        series: [{
          data: [
            [1327359600000,30.95],
            [1327446000000,31.34],
            [1327532400000,31.18],
            [1327618800000,31.05],
            [1327878000000,31.00],
            [1327964400000,30.95],
            [1328050800000,31.24],
            [1328137200000,31.29],
            [1328223600000,31.85],
            [1328482800000,31.86],
            [1328569200000,32.28],
            [1328655600000,32.10],
            [1328742000000,32.65],
            [1328828400000,32.21],
            [1329087600000,32.35],
          ]
        }],
        options: {
          chart: {
            id: 'area-datetime',
            type: 'area',
            //height: 350,
            zoom: {
              autoScaleYaxis: true
            },
            toolbar: {
                show:false
              }
          },
          dataLabels: {
            enabled: false
          },
          xaxis: {
            type: 'datetime',
            //min: new Date('01 Mar 2012').getTime(),
            tickAmount: 6,
          },
          tooltip: {
            x: {
              format: 'dd MMm yyyy'
            }
          },
          fill: {
            type: 'gradient',
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.7,
              opacityTo: 0.9,
              stops: [0, 100]
            }
          },
        },
      }) 
  return (
    <div className='mt-2 bg-gray-100 rounded-lg shadow-lg p-1' id="chart">
        <h2 className='text-2xl font-semibold m-3' style={{marginBottom:-13}}>Graph</h2>
            <ReactApexChart options={chartData.options} series={chartData.series} type="area"/>
    </div>
  )
}

export default Graph