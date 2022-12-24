import fs from "fs";

if (process.argv[2]) {
    try {
        const dayName = `day${process.argv[2]}`;
        const filename = `./src/${dayName}/solution.js`;

        if (await fileExists(filename)) {
            const data = await loadData(dayName);
            const { default: run } = await import(filename);
            run(data);
        } else {
            console.log('The provided day does not exist or is not yet implemented. Please specify the day as a number with two digits like "node index.js 01"');
        }
    } catch (e) {
        console.log(e);
        error();
    }
} else {
    error();
    process.exit(1);
}

function error() {
    console.log('Please specify the day as a number with two digits like "node index.js 01"');
}

async function loadData(day) {
    const filename = process.argv[3] ? 'sample.txt' : 'input.txt';
    const data = await fs.readFileSync(`./src/${day}/${filename}`, "utf-8");
    return data.split("\n");
}

async function fileExists(filename) {
    try {
        const result = await fs.existsSync(filename);
        return result;
    } catch (err) {
        return false;
    }
}