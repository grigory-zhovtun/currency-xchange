import React, {useEffect, useState} from 'react';
import Input from "../input/Input";
import CurrencyReport from "../currency-report/CurrencyReport";
import {getData, USDUZS, USDRUB} from "../services/services";
import './App.css'

const App = () => {

    const [text, setText] = useState('')

    const [usdNum, setUsdNum] = useState(0)
    const [uzsNum, setUzsNum] = useState(0)
    const [uzsToRub, setUzsToRub] = useState(0)

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
            const result = await getData(USDUZS);
            setUZSPolygon(result);
        };
        fetchData();
    }, [])

    useEffect(() => {
        setUsdNum(+(+text * USD_POLYGON).toFixed(2));
    }, [text])

    useEffect(() => {
        setUzsNum(+(+text * UZS_POLYGON).toFixed(2));
    }, [text])

    useEffect(() => {
        setUzsToRub(+((uzsNum / usdNum) * +text).toFixed(2));
    }, [uzsNum])

    const inputHandler = (s: string) => {
        setText(s)
    }

    return (
        <div>
            <h3>input count $:</h3>
            <Input callback={inputHandler}/>
            <div className="Wrapper">
                <div className={"title"}>Sourse API</div>
                <div className={"title"}>RUB to Dollars</div>
                <div className={"title"}>UZS to Dollars</div>
                <div className={"title"}>UZS to Rubles</div>
                <CurrencyReport nameBank={"Polygon"}
                                rubToDollar={usdNum}
                                uzsToDollar={uzsNum}
                                uzsToRub={uzsToRub}
                />
            </div>
        </div>
    );
};

export default App;