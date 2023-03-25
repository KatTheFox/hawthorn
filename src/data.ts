import {
  apostleForge,
  apostleGrail,
  apostleLantern,
} from "./shelves/legacies/apostles";
import {
  exileAllies,
  exileWeapons,
  exileWincons,
  pentiments,
} from "./shelves/legacies/exile";
import {
  ssAbilities,
  ssLore,
  ssRituls,
  ssStashes,
  ssWays,
} from "./shelves/mods/skinstealer";
import { abilities } from "./shelves/vanilla/abilities";
import { cult } from "./shelves/vanilla/cult";
import { followers, jwfollowers } from "./shelves/vanilla/followers";
import { locations } from "./shelves/vanilla/locations";
import { lore, loreNoSH } from "./shelves/vanilla/lore";
import { pigments } from "./shelves/vanilla/pigments";
import { rites } from "./shelves/vanilla/rites";
import { spintria } from "./shelves/vanilla/spintria";
import { tools } from "./shelves/vanilla/tools";
import { waysThroughDream } from "./shelves/vanilla/ways";

export const shelves = {
  shelves: [
    abilities,
    locations,
    spintria,
    lore,
    ssLore,
    tools,
    ssAbilities,
    jwfollowers,
    ssStashes,
    rites,
    followers,
    loreNoSH,
    pentiments,
    waysThroughDream,
    apostleLantern,
    pigments,
    apostleGrail,
    apostleForge,
    cult,
    exileAllies,
    exileWeapons,
    exileWincons,
    ssRituls,
    ssWays,
  ],
};
