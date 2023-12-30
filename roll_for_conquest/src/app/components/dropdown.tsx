"use client";
import React, { useState } from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { GameType } from "../constants/gametype";

interface DropdownProps {
    OnClick: (a:GameType) => void;
  }

export default function CDropDown({OnClick}:DropdownProps) {
    const [selectedGame, setSelectedGame] = useState(GameType.firstblood); 

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="bordered" 
        >
          {GameType[selectedGame]}
        </Button>
      </DropdownTrigger>
      <DropdownMenu 
        onAction={(key) => {
            setSelectedGame(key as GameType);
            OnClick(key as GameType)}
        }
      >
        <DropdownItem key={GameType.firstblood}>First Blood</DropdownItem>
        <DropdownItem key={GameType.tlaok}>The Last Argument of Kings</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}