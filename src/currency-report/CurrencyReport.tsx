import React from 'react';
import './CurrencyReport.css'

type CurrencyReportPropsType = {
    nameBank: string
    rubToDollar: number
    uzsToDollar: number
    uzsToRub: number
}

const CurrencyReport = ({nameBank, rubToDollar, uzsToDollar, uzsToRub}: CurrencyReportPropsType) => {
    return (
        <>
            <div className='CurrencyReport'>{nameBank}</div>
            <div className='CurrencyReport'>{rubToDollar}</div>
            <div className='CurrencyReport'>{uzsToDollar}</div>
            <div className='CurrencyReport'>{uzsToRub}</div>
        </>
    );
};

export default CurrencyReport;