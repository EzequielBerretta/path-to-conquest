"use client";

import { useState } from "react";
import tlaokScenarios from "./constants/scenarios/TLAOK_TOURNAMENT_SCENARIO_PACK_2023.json";
import fbScenarios from "./constants/scenarios/First-Blood-Scenario-Pack.json"
import { PrefetchKind } from "next/dist/client/components/router-reducer/router-reducer-types";
import { GameType } from "./constants/gametype";

interface ScenarioProps {
    gametype: GameType;
  }


export default function Scenario({ gametype }:ScenarioProps) {
    const [rolledNumber, setRolledNumber] = useState(0);
    const scenarios = (gametype == GameType.firstblood)? fbScenarios : tlaokScenarios;
    const pathGameMode = (gametype == GameType.firstblood)? "firstblood" : "tlaok";
    const imageSource = `/Scenarios/${pathGameMode}/scenario${rolledNumber}.png`;


    function onClick() {
        console.log(rolledNumber)
        setRolledNumber(Math.floor(Math.random() * 11) + 1)
    }

    return (
        <div className="flex flex-col justify-center ">
            <button className="ml-20 w-fit" onClick={onClick}>ROLL FOR CONQUEST!</button>
            {
                rolledNumber != 0 &&
                <div>
                    <h1>{scenarios[rolledNumber -1].Name}</h1>
                    <div className="w-full flex justify-center ">
                        <img className="h-40 md:h-64 lg:h-96" src={imageSource}></img>
                    </div>
                    <div className="flex flex-col place-content-evenly">
                        <div>
                            <h2>
                                Setting Up The Battlefield
                            </h2>
                            <pre>{scenarios[rolledNumber -1].Battlefield}</pre>
                        </div>
                        {scenarios[rolledNumber -1].SpecialRules != null && 
                        <div>
                            <h2>
                                Special Rules
                            </h2>
                            <pre>{scenarios[rolledNumber -1].SpecialRules}</pre>
                        </div>
                        }
                        <div>
                            <h2>
                                Victory Points
                            </h2>
                            <pre>{scenarios[rolledNumber -1].Scoring}</pre>
                        </div>
                        <div>
                            <h2>
                                Game Length
                            </h2>
                            <pre>{scenarios[rolledNumber -1].Duration}</pre>
                        </div>
                    </div>

                </div>
            }

        </div>
    )
}