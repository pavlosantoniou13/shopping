import React from 'react'
import nineeleven from './assets/911.webp'
import cayenne from './assets/cayenne.png'
import boxster from './assets/boxster.png'

export default function Shop() {
  return (
    <div className='shop-container' >
        <div className="car-cards">
            <div className="card">
                <img src={nineeleven} alt="" />
                <div className="info">
                    <h1>Porsche 911 turbo s</h1>
                    <p>The Porsche 911 (pronounced Nine Eleven or in German: Neunelfer) is a two-door 2+2 high performance rear-engined sports car introduced in September 1964 by Porsche AG of Stuttgart, Germany. It has a rear-mounted flat-six engine and originally a torsion bar suspension. The car has been continuously enhanced through the years but the basic concept has remained unchanged.[1] The engines were air-cooled until the introduction of the 996 series in 1998.</p>
                </div>
            </div>
            <div className="card">
                <img src={cayenne} alt="" />
                <div className="info">
                    <h1>Porsche Cayenne</h1>
                    <p>The Porsche Cayenne is a series of mid-size luxury crossover sport utility vehicles manufactured by the German automaker Porsche since 2002 (Type 9PA or E1), with North American sales beginning in 2003. It is the first V8-engined vehicle built by Porsche since 1995, when the Porsche 928 was discontinued. It is also Porsche's first off-road variant vehicle since its Super and Junior tractors of the 1950s, and the first Porsche with four doors.</p>
                </div>
            </div>
            <div className="card">
                <img src={boxster} alt="" />
                <div className="info">
                    <h1>Porsche Boxster/Cayman</h1>
                    <p>The Porsche Boxster and Cayman are mid-engine two-seater sports cars manufactured and marketed by German automobile manufacturer Porsche across four generations—as a two-door, two-seater roadster (Boxster) and a three-door, two-seater fastback coupé (Cayman).</p>
                </div>
            </div>
        </div>
    </div>
  )
}
