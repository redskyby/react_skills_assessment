import {CoinData, CoinDataResponse} from "../redux/query/CoinQuery";

export default function SortBy(data: CoinDataResponse, sortItem: string) {
    let sortData_price;
    let sortData_marketCapUsd;
    let sortData_changePercent24Hr;
    let obj;
    switch (sortItem) {
        case '1' :
            sortData_price = data.data.slice();
            sortData_price.sort((a: CoinData, b: CoinData) => parseFloat(b.priceUsd) - parseFloat(a.priceUsd));
            obj = {
                data: sortData_price
            }
            return obj;
        case '2' :
            sortData_marketCapUsd = data.data.slice();
            sortData_marketCapUsd.sort((a: CoinData, b: CoinData) => parseFloat(b.marketCapUsd) - parseFloat(a.marketCapUsd));
            // sortData_marketCapUsd.sort((a: any, b: any) => a.marketCapUsd.localeCompare(b.marketCapUsd));

            obj = {
                data: sortData_marketCapUsd
            }
            return obj;
        case '3' :
            sortData_changePercent24Hr = data.data.slice();
            sortData_changePercent24Hr.sort((a: CoinData, b: CoinData) => parseFloat(b.changePercent24Hr) - parseFloat(a.changePercent24Hr));
            // sortData_changePercent24Hr.sort((a: any, b: any) => a.changePercent24Hr.localeCompare(b.changePercent24Hr));

            obj = {
                data: sortData_changePercent24Hr
            }
            return obj;
        default:
            console.log("sorting failure");
    }
}