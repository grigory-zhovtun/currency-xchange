import React from 'react';

type CurrencyReportPropsType = {
    nameBank: string
    nameCurrency: string
    sellCurrency: number
}

const CurrencyReport = ({nameBank, nameCurrency, sellCurrency}: CurrencyReportPropsType) => {
    return (
        <div>
            <div>{nameBank}</div>
            <div>{nameCurrency}</div>
            <div>{sellCurrency}</div>
        </div>
    );
};

export default CurrencyReport;