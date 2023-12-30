"use client";

import { useState } from "react"
import scenarios from "./constants/Scenarios/TLAOK_TOURNAMENT_SCENARIO_PACK_2023.json"

export default function Scenario() {
    const [rolledNumber, setRolledNumber] = useState(0);

    const imageSource = `/scenarios/scenario${rolledNumber}.png`


    function onClick() {

        setRolledNumber(Math.floor(Math.random() * 11) + 1)
    }

    return (
        <div className="flex flex-col justify-center ">
            <button className="ml-20 w-fit" onClick={onClick}>ROLL FOR CONQUEST!</button>
            {
                rolledNumber != 0 &&
                <div>
                    <h1>{scenarios[0].Name}</h1>
                    <div className="w-full flex justify-center ">
                        <img className="h-40 md:h-64 lg:h-96" src={imageSource}></img>
                    </div>
                    <div className="flex pl-20 flex-col place-content-evenly">
                        <div>
                            <h2>
                                Setting Up The Battlefield
                            </h2>
                            <p>{scenarios[0].Battlefield}</p>
                        </div>
                        <div>
                            <h2>
                                Victory Points
                            </h2>
                            <p>{scenarios[0].Scoring}</p>
                        </div>
                        <div>
                            <h2>
                                Game Length
                            </h2>
                            <p>{scenarios[0].Duration}</p>
                        </div>
                    </div>

                </div>
            }

        </div>
    )
}