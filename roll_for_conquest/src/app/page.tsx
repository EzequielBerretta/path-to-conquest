"use client";
import { useState } from "react";
import { GameType } from "./constants/gametype";


import background from '../../public/next.svg'
import CDropdown from "./components/dropdown";
import Scenario from "./scenario";
import Legal from "./legal";

export default function Home(this: any) {

  const [game, setGame] = useState(GameType.tlaok);

  const PickGame = (gameString: string) => {
    setGame(gameString as unknown as GameType);
  }

  const keys = Object.keys(GameType).filter((v) => !isNaN(Number(v)));

  return (
    <div className="flex flex-col h-screen bg-cover bg-center overflow-auto" style={{ backgroundImage: `url(/battleground.png)` }}>
      <div className="flex p-20 text-black">
        <p>
          Choose game:
        </p>

        <select value={game}
          onChange={e => PickGame(e.target.value)}>
          {
            keys.map(item => (
              <option key={item} value={item} >{GameType[item as unknown as number]}</option>
            ))
          }
        </select>
      </div>
        <Scenario gametype= {game} ></Scenario>
        <div className="py-10 mt-auto">
          <Legal></Legal>
        </div>
    </div>
  )
}
