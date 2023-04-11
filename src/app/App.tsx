import React, {useEffect, useState} from 'react';
import Input from "../input/Input";
import CurrencyReport from "../currency-report/CurrencyReport";
import {getData, RUBUZS, USDRUB} from "../services/services";

const App = () => {

    const [text, setText] = useState('')
    const [num, setNum] = useState(0)
    const [usdNum, setUsdNum] = useState(0)
    const [uzsNum, setUzsNum] = useState(0)

    const [USD_POLYGON, setUSDPolygon] = useState(0)
    const [UZS_POLYGON, setUZSPolygon] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            const result = await getData(USDRUB);
            setUSDPolygon(result);
        };
        fetchData();
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            const result = await getData(RUBUZS);
            setUZSPolygon(result);
        };
        fetchData();
    }, [])

    useEffect(() => {
        setUsdNum(+text * USD_POLYGON);
    }, [text])

    useEffect(() => {
        setUzsNum(+text * UZS_POLYGON);
    }, [text])

    const inputHandler = (s: string) => {
        setText(s)
    }

    return (
        <div>
            <Input callback={inputHandler}/>
            <CurrencyReport nameBank={"Polygon"}
                            nameCurrency={"Dollar USA"}
                            sellCurrency={usdNum}
            />
            <CurrencyReport nameBank={"Polygon"}
                            nameCurrency={"Uzbek SUM"}
                            sellCurrency={uzsNum}
            />
        </div>
    );
};

export default App;