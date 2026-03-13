import React from 'react';
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
    Title,
    ChartOptions
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend, Title);

const SupplierClassificationModel = () => {
    const data = {
        datasets: [
            {
                label: 'Strategic',
                data: [{ x: 58, y: 58 }],
                backgroundColor: '#f69f99',
                pointRadius: 8,
                pointHoverRadius: 10,
            },
            {
                label: 'Bottleneck',
                data: [], 
                backgroundColor: '#fbc76d',
                pointRadius: 8,
                pointHoverRadius: 10,
            },
            {
                label: 'Leverage',
                data: [], 
                backgroundColor: '#8cd7b0',
                pointRadius: 8,
                pointHoverRadius: 10,
            },
            {
                label: 'Primary Category',
                data: [], 
                backgroundColor: '#3e3d49',
                pointRadius: 8,
                pointHoverRadius: 10,
            },
            {
                label: 'Routine',
                data: [{ x: 18, y: 18 }],
                backgroundColor: '#9abcf7',
                pointRadius: 8,
                pointHoverRadius: 10,
            },
        ],
    };

    const options: ChartOptions<'scatter'> = {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
            padding: {
                top: 20,
                right: 20,
                bottom: 20,
                left: 20
            }
        },
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    usePointStyle: true,
                    pointStyle: 'rectRounded',
                    font: {
                        size: 14,
                        weight: 'bold',
                        family: 'Arial, sans-serif'
                    },
                    padding: 25,
                    color: '#000',
                },
            },
            tooltip: {
                callbacks: {
                    label: (context) => {
                        return `${context.dataset.label}: (${context.parsed.x}, ${context.parsed.y})`;
                    },
                },
            },
        },
        scales: {
            x: {
                min: 0,
                max: 100,
                title: {
                    display: true,
                    text: 'Complexity of supply Matrix',
                    color: '#333',
                    font: {
                        size: 14,
                        weight: 'bold',
                        family: 'Arial, sans-serif'
                    },
                    padding: { top: 15 },
                },
                border: {
                    display: true,
                    color: '#333',
                    width: 2,
                },
                grid: {
                    display: true,
                    drawOnChartArea: true,
                    color: (context) => {
                        if (context.tick.value === 50 || context.tick.value === 100) return '#dcdcdc';
                        return 'transparent';
                    },
                    tickColor: '#333',
                    tickLength: 10,
                    tickWidth: 2,
                },
                ticks: {
                    callback: function (value) {
                        if (value === 0 || value === 50 || value === 100) {
                            return value;
                        }
                        return '';
                    },
                    stepSize: 16.6666,
                    font: {
                        size: 13,
                        family: 'Arial, sans-serif',
                    },
                    color: '#555',
                    autoSkip: false,
                    maxRotation: 0,
                },
            },
            y: {
                min: 0,
                max: 105, 
                title: {
                    display: true,
                    text: 'Business impact',
                    color: '#333',
                    font: {
                        size: 14,
                        weight: 'bold',
                        family: 'Arial, sans-serif'
                    },
                    padding: { bottom: 15 },
                },
                border: {
                    display: true,
                    color: '#333',
                    width: 2,
                },
                grid: {
                    display: true,
                    drawOnChartArea: true,
                    color: (context) => {
                        if (context.tick.value === 50 || context.tick.value === 100) return '#dcdcdc';
                        return 'transparent';
                    },
                    tickColor: '#333',
                    tickLength: 10,
                    tickWidth: 2,
                },
                ticks: {
                    stepSize: 20,
                    font: {
                        size: 13,
                        family: 'Arial, sans-serif',
                    },
                    color: '#555',
                },
            },
        },
    };

    return (
        <div className='chart-scatter'>
            <div className='chart-box'>
                <Scatter data={data} options={options} />
            </div>
        </div>
    );
};

export default SupplierClassificationModel;
