import json from "./parser";
import read from "./reader";
import GameSaving from "./gameSaving";


// export default class GameSavingLoader {
//     static load() {
//         return read().then((data) => json(data)).then((response) => new GameSaving(JSON.parse(response)));
//     }
// }


export default class GameSavingLoader {
  static async load() {
    const response = await read();
    const result = await json(response);
    return new GameSaving(JSON.parse(result));
  }
}
