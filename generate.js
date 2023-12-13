const AMOUNT = 1000;
const TICK_OFFSET = 20;
const AMOUNT_STEP = 2;

const PATH = "./data/damagetick/functions/tick_convert.mcfunction";

const fs = require('fs');
const path = require('path');

let data = "# Generated mcfunction\n\n";

for (let i = 1; i <= AMOUNT - TICK_OFFSET; i++) {
    const offset = (i * AMOUNT_STEP) + TICK_OFFSET; // 20 is the first tick

    const command = `execute if score main damagecount matches ${offset} run tick rate ${offset}`;
    data += command + "\n";
}

fs.writeFileSync(path.join(__dirname, PATH), data);
