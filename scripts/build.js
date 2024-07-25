const jetpack = require("fs-jetpack");
const glob = require("glob");
const sass = require("sass");

const sourceDir = jetpack.path("./src");
const targetDir = jetpack.path("./dist");

const filesToCopy = glob.sync(`${sourceDir}/**/*.!(scss)`);

filesToCopy.forEach(filePath => {
    filePath = jetpack.path(filePath);
    jetpack.copy(filePath, filePath.replace(sourceDir, targetDir), { overwrite: true });
});

jetpack.write(jetpack.path(targetDir, "style.css"), sass.compile(jetpack.path(sourceDir, "style.scss")).css);