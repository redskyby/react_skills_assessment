import React from 'react';
import { useGetOneCoinHistoryQuery } from '../../redux/query/CoinQuery';
import { RingLoader } from 'react-spinners';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

const Chart = (id) => {
    const { data, isLoading, error } = useGetOneCoinHistoryQuery(id.id);

    ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

    const timestamp = 1530403200000; // Ваша метка времени
    const date2 = new Date(timestamp);

    console.log(date2);

    let options;

    let labels;

    let data1;
    let priseUsd;

    options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },
        },
    };
    labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    if (data !== undefined) {
        labels = data.data.map((i) => new Date(i.time));
        priseUsd = data.data.map((i) => i.priceUsd);
    }

    data1 = {
        labels,
        datasets: [
            {
                label: 'Prise USD',
                data: priseUsd,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    return (
        <div>
            {/*{error ? (*/}
            {/*    <h1>Ошибка при загрузке данных, проверьте сетевое соединение.</h1>*/}
            {/*) : isLoading ? (*/}
            {/*    <RingLoader color={'#36d7b7'} size={'100px'} />*/}
            {/*) : data ? (*/}

            <Line options={options} data={data1} />
            {/*) : null}*/}
        </div>
    );
};
export default Chart;
