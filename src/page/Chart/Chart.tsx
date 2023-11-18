import React from 'react';
import { useGetOneCoinHistoryQuery } from '../../redux/query/CoinQuery';
import { RingLoader } from 'react-spinners';
import { Line } from 'react-chartjs-2';
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

const Chart = ({ id, range }: { id: string; range: string }) => {
    const { data, isLoading, error } = useGetOneCoinHistoryQuery({ name: id!, range: range! });

    ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

    let labels = ['for init'];

    let priseUsd: string[] = [];

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: range === 'd1' ? 'График цены за день' : 'График цены за месяц',
            },
        },
    };

    if (data !== undefined) {
        labels = data.data.map((i) => new Date(i.time).toISOString());
        priseUsd = data.data.map((i) => i.priceUsd);
    }

    const data1 = {
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
            {error ? (
                <h1>Ошибка при загрузке данных, проверьте сетевое соединение.</h1>
            ) : isLoading ? (
                <RingLoader color={'#36d7b7'} size={'100px'} />
            ) : data ? (
                <Line options={options} data={data1} />
            ) : null}
        </div>
    );
};
export default Chart;
