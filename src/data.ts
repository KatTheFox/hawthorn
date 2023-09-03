import {
  apostleForge,
  apostleGrail,
  apostleLantern,
} from "./shelves/legacies/apostles";
import {
  exileAllies,
  exileAssets,
  exileWeapons,
  exileWincons,
  exileYearsAndTraces,
  pentiments,
} from "./shelves/legacies/exile";
import { apostleMoon, soulementsShelf } from "./shelves/mods/apostlemoon";
import { bmapMisc, bmapWeapons, bmapWincons } from "./shelves/mods/bmap";
import {
  advancedPlantShelf,
  advancedSeedShelf,
  basicPlantShelf,
  basicSeedShelf,
  botanistEssentials,
  botanistPotions,
} from "./shelves/mods/botanist";
import { exorcistJob, exorcistTools } from "./shelves/mods/exorcist";
import {
  obdurantAllies,
  obdurantEnemies,
  obdurantInfrastructure,
  obdurantState,
  obdurantTechniques,
  obdurantToolsAndIngs,
  obdurantWeapons,
} from "./shelves/mods/obdurant";
import {
  ssAbilities,
  ssLore,
  ssRituls,
  ssStashes,
  ssWays,
} from "./shelves/mods/skinstealer";
import { upFromNowhere } from "./shelves/mods/upfromnowhere";
import {
  waifBothShelf,
  waifChoices,
  waifDesires,
  waifHourMems,
  waifLocations,
  waifOccultShelf,
  waifPracticalShelf,
} from "./shelves/mods/waif";
import { abilities } from "./shelves/vanilla/abilities";
import { cult } from "./shelves/vanilla/cult";
import { followers, jwfollowers } from "./shelves/vanilla/followers";
import { locations } from "./shelves/vanilla/locations";
import { lore, loreNoSH } from "./shelves/vanilla/lore";
import { pigments } from "./shelves/vanilla/pigments";
import { rites } from "./shelves/vanilla/rites";
import { patrons, spintria } from "./shelves/vanilla/spintria";
import { tools } from "./shelves/vanilla/tools";
import { waysThroughDream } from "./shelves/vanilla/ways";

export const shelves = {
  shelves: [
    exorcistTools,
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
    waifBothShelf,
    waifDesires,
    waifHourMems,
    waifOccultShelf,
    waifPracticalShelf,
    waifLocations,
    waifChoices,
    exorcistJob,
    patrons,
    upFromNowhere,
    apostleMoon,
    soulementsShelf,
    exileYearsAndTraces,
    bmapWincons,
    bmapWeapons,
    exileAssets,
    bmapMisc,
    basicPlantShelf,
    basicSeedShelf,
    advancedPlantShelf,
    advancedSeedShelf,
    botanistEssentials,
    botanistPotions,
    obdurantAllies,
    obdurantEnemies,
    obdurantInfrastructure,
    obdurantState,
    obdurantTechniques,
    obdurantWeapons,
    obdurantToolsAndIngs,
  ],
};
