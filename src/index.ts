import { writeFileSync } from "fs-extra";
import { shelves } from "./data";
import { homedir, machine, type } from "os";
import { join } from "path";

function updateJson() {
  if(type()=='Linux')
  writeFileSync(
    join(homedir(),".config","unity3d","Weather Factory","Cultist Simulator","mods","hawthorn","content","shelves.json"),
    JSON.stringify(shelves)
  );
  if(type()=='Windows')
  writeFileSync(
    join(homedir(),"AppData","LocalLow","Weather Factory","Cultist Simulator","mods","hawthorn","content","shelves.json"),
    JSON.stringify(shelves)
  );
}
updateJson();
