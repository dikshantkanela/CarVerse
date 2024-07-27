// src/PieChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart } from 'chart.js';
import { Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
Chart.register(ChartDataLabels);

const PieChart = () => {
  const data = {
    labels: [
      'Maruti Suzuki',
      'Hyundai',
      'Tata Motors',
      'Mahindra',
      'Toyota',
      'Kia',
      'Honda',
      'MG',
      'Renault',
      'Volkswagen'
    ],
    datasets: [
      {
        label: 'Market Share In Percentage',
        data: [41.3, 14.1, 13.4, 12.4, 6.9, 5.6, 1.4, 1.4, 1.1, 0.9],
        backgroundColor: [
          'rgba(255, 0, 0, 0.7)', // Red
          'rgba(0, 51, 102, 0.7)', // Dark blue
          'rgba(153, 153, 0, 0.7)', // Dark yellow
          'rgba(0, 102, 102, 0.7)', // Dark teal
          'rgba(102, 0, 153, 0.7)', // Dark purple
          'rgba(204, 102, 0, 0.7)', // Dark orange
          'rgba(0, 51, 25, 0.7)', // Dark green
          'rgba(204, 51, 102, 0.7)', // Dark pink
          'rgba(102, 51, 102, 0.7)', // Dark violet
          'rgba(51, 51, 51, 0.7)' // Dark gray
        ]
      }
    ]
  };

  const options = {
    plugins: {
      datalabels: {
        formatter: (value, context) => {
          const sum = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
          const percentage = (value * 100 / sum).toFixed(2) + '%';
          return percentage;
        },
        color: '#fff',
        font: {
          weight: 'bold'
        }
      }
    }
  };

  return (
    <div className='flex flex-row'>
      <motion.div className='left flex flex-col ml-[50px]'initial={{ opacity: 1, x:-100,}}
          whileInView={{ opacity: 1, x: 0, }} transition={{ type:"tween", duration: 0.5 }} >

        <h1 className="text-5xl font-bold leading-[80px] text-center mt-[100px] ml-[30px]">
          <Text className="mb-[60px]" bgClip="text" bgGradient="linear(to-r, #1e3c72, #2a5298, #3b5998)">Market Share Of Indian Car Brands (May 2024)</Text>
        </h1>
        <p className='ml-[60px] w-[500px] font-semibold text-lg text-'>
          Stay updated with the latest sales figures and market shares of various car brands. Our analysis covers top automotive companies, showing who's leading and how trends are evolving. Discover the performance of major players like Maruti Suzuki and Hyundai, as well as emerging brands like MG and Kia. Whether you're a car enthusiast, buyer, or market analyst, our data keeps you informed on the automotive industry's dynamics.
        </p>
      </motion.div>

      <motion.div initial={{ opacity: 1, y:-100,}}
          whileInView={{ opacity: 1, y: 0, }} transition={{ type:"tween", duration: 0.5 }} className="w-full h-[calc(100vh-40px)] flex items-center justify-center">
        <div className="w-96 p-5 rounded-2xl border mt-[50px] bg-white border-gray-400">
          <Pie data={data} options={options} />
        </div>
      </motion.div>
    </div>
  );
};

export default PieChart;
