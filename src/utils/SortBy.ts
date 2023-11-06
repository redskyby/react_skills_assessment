import {CoinData, CoinDataResponse} from "../redux/query/CoinQuery";

export default function SortBy(data: CoinDataResponse, sortItem: string) {
    switch (sortItem) {
        case '1' :
            const sortData_price = data.data.slice();
            sortData_price.sort((a : CoinData , b: CoinData) => parseFloat(b.priceUsd) - parseFloat(a.priceUsd));
            let obj = {
                data: sortData_price
            }
            return obj;
        case '2' :
            const sortData_marketCapUsd = data.data.slice();
            sortData_marketCapUsd.sort((a: CoinData, b: CoinData) => parseFloat(b.marketCapUsd) - parseFloat(a.marketCapUsd));
            // sortData_marketCapUsd.sort((a: any, b: any) => a.marketCapUsd.localeCompare(b.marketCapUsd));

            let obj2 = {
                data: sortData_marketCapUsd
            }
            return obj2;
        case '3' :
            const sortData_changePercent24Hr = data.data.slice();
            sortData_changePercent24Hr.sort((a: CoinData, b: CoinData) => parseFloat(b.changePercent24Hr) - parseFloat(a.changePercent24Hr));
            // sortData_changePercent24Hr.sort((a: any, b: any) => a.changePercent24Hr.localeCompare(b.changePercent24Hr));

            let obj3 = {
                data: sortData_changePercent24Hr
            }
            return obj3;
        default:
            console.log("sorting failure");
    }
}