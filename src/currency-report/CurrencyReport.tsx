import React from 'react';

type CurrencyReportPropsType = {
    nameBank: string
    rubToDollar: number
    uzsToDollar: number
    uzsToRub: number
}

const CurrencyReport = ({nameBank, rubToDollar, uzsToDollar, uzsToRub}: CurrencyReportPropsType) => {
    return (
        <div>
            <div>{nameBank}</div>
            <div>{rubToDollar}</div>
            <div>{uzsToDollar}</div>
            <div>{uzsToRub}</div>
        </div>
    );
};

export default CurrencyReport;