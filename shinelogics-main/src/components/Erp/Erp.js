import React from 'react';
import erp from "../../assets/erp.jpg"

import './Erp.css'

const Erp = () => {
  return (
    <div>
        <div class="container3">
            <h1 className='h1'>ERP Products</h1>
        <div class="contains3">
            <mat-card class="example-card3">
            <mat-card-content>
                <p className='p3'>This card has divider and indeterminate progress as footer</p>
                <img src={erp} alt="" className="img3"></img>
            </mat-card-content>
            </mat-card>

            <mat-card class="example-card3">
            <mat-card-content>
                <p className='p3'>This card has divider and indeterminate progress as footer</p>
                <img src={erp} alt="" className="img3"></img>
            </mat-card-content>
            </mat-card>
        </div><br></br>
        </div>
        <br></br>

    </div>
  )
}

export default Erp
