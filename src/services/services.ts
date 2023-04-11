import axios from 'axios';
import {polygonClient, restClient, websocketClient} from "@polygon.io/client-js";
import {API_KEY_POLYGON} from "./credentials";

const rest = restClient(API_KEY_POLYGON);
export const USDRUB = "C:USDRUB";
export const USDUZS= "C:USDUZS";
export type OptionType = typeof USDRUB | typeof USDUZS;

export const getData = async (option: OptionType): Promise<number> => {
    let USD: number | undefined = 0

    try {
        const data = await rest.forex.previousClose(option);
        if (data.results && data.results[0]) {
            USD = data?.results?.[0].c;
            console.log(USD);
            return Number(USD);
        }
    } catch (error) {
        // ваш обработчик ошибок
    }
    return 0;
};
