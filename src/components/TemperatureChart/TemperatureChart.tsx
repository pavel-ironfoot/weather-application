import React, { useMemo } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ScriptableContext,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { TemperatureChartProps, } from '../../common/types-and-interfaces';
import { celsiusToFahrenheit, colorGrOne, colorGrZero, } from '../../common/helpful-functions';
import { options } from '../../common/optionsChart';

import './TemperatureChart.scss';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const TemperatureChart: React.FC<TemperatureChartProps> = ({ celciusFahrenheit, dataForecast, temperature }) => {

   const labels = useMemo(() => {
    return dataForecast.map(item => {
      const date = new Date(item.dt);
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const formattedDate = `${day}.${month}`;
      return formattedDate;
    });
  }, [dataForecast]);

  const temperatures = useMemo(() => {
    if(!celciusFahrenheit){
      return dataForecast.map(item => item.temp).map((elem:number)=>celsiusToFahrenheit(elem));
    }  
    return dataForecast.map(item => item.temp);
  }, [dataForecast,celciusFahrenheit]);


const data = {
  labels,
  datasets: [
    {     
      label: 'Dataset 2',
      data: temperatures,
      fill: 'start',
      borderColor: 'rgb(53, 162, 235,0)',
      backgroundColor: (context: ScriptableContext<'line'>)=>{
        const ctx = context.chart.ctx
        const gradient = ctx.createLinearGradient(0,0,0,90)
        gradient.addColorStop(1,colorGrOne(temperature))
        gradient.addColorStop(0,colorGrZero(temperature))
        return gradient
      },
      tension: 0.4,
    },
  ],
};


  return (
    <div className="temperature-chart">
      <Line options={options} data={data} />
    </div>
  );
};


