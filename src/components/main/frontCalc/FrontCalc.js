import React, { useState, useEffect } from 'react';
import Calc from '../../calc/Calc';

function FrontCalc() {
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        fetch('https://api-dolar-argentina.herokuapp.com/api/dolaroficial')
            .then(res => res.json())
            .then(res => {
                setPrice(res)
            });
    }, []);

    function onInput(evt) {
        setQuantity(evt.target.value);
    };

    return <>
        <div className="container" style={{ paddingTop: 20 }}>
            <div className="row justify-content-md-center">
                <div className="col-lg-6" id="formulario">
                    <div className="row justify-content-md-center text-center">
                        <h5>Calculá cuanto vas a tener que pagar finalmente 
                            al realizar compras en dólares con tu tarjeta de 
                            crédito, siempre y cuando abones el saldo pesificado.
                        </h5>
                    </div>
                    <form role="form">
                        <hr />
                        <div className="form-group row text-left">
                            <label className="col-lg-12 col-form-label">Ingresa el importe en dólares</label>
                            <div className="form-group input-group col-lg-12">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">USD$</span>
                                </div>
                                <input className="form-control" onInput={onInput} type="number" pattern="[0-9]+([\.,][0-9]+)?" step="0.01"/>
                            </div>
                        </div>
                    </form>
                    <hr />
                    <Calc quantity={quantity * price.venta}/>
                </div>
            </div>
        </div>
    </>
};

export default FrontCalc;