import React, { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'

function Calc({quantity}) {
    const [taxRg, setTaxRg] = useState(0);
    const [taxProduct, setTaxProduct] = useState(0);
    const [taxDigital, setTaxDigital] = useState(0);
    
    function Calcular() {
        setTaxRg(CalcTest(quantity, 0.35));
        setTaxProduct(CalcTest(quantity, 0.3));
        setTaxDigital(CalcTest(quantity, 0.08));
    };

    function CalcTest(quantity, tax) {
        return(quantity*tax)
    };

    function Round(value, decimals) {
        return Number(Math.round(value+'e'+decimals)+'e-'+decimals); //@Jack Moore's function
    }

    return <>

        <div className="form-group row justify-content-center">
            <button id="calculate" type="button" className="btn-calc btn" style={{ width: '15rem' }} onClick={Calcular}>
                <p style={{ float: 'left', marginLeft: '4rem', marginBottom: '0rem', }}>Calcular</p>
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </div>
        <hr/>

        <div>
            <div className="" id="result">
                <div className="row">
                    <div className="col"><label>Perc imp RG AFIP 4815 35%</label></div>
                    <div className="col"><p><strong>AR$ {Round(taxRg,2)}</strong></p><strong></strong></div>
                </div>
                <div className="row">
                    <div className="col"><label>Ley impuesto PAIS 30%</label></div>
                    <div className="col"><p><strong>AR$ {Round(taxProduct,2)}</strong></p><strong></strong></div>
                </div>
                <div className="row">
                    <div className="col"><label>Ley impuesto PAIS 8%</label></div>
                    <div className="col"><p><strong>AR$ {Round(taxDigital,2)}</strong></p><strong></strong></div>
                </div>
            </div>
            <hr />
            <div className="row" style={{ textAlign: 'center' }}>
                <h2>Vas a pagar</h2>
                <div className="col-6">
                    <label>Si es compra de productos o bienes</label>
                    <br />
                    <h2>AR$ {Round((quantity + taxRg + taxProduct),2)}</h2>
                </div>
                <div className="col-6">
                    <label>Si es compra de servicios digitales</label>
                    <br/>
                    <h2>AR$ {Round((quantity + taxRg + taxDigital),2)}</h2>
                </div>
            </div>
        </div>
    </>
}

export default Calc;