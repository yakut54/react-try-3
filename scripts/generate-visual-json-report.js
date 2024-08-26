const { promisify } = require('util')
const { readdir, writeFile } = require('fs')
const { join: joinPath, relative } = require('path')

const asyncReaddir = promisify(readdir)
const writeFileAsync = promisify(writeFile)

const lokiDir = joinPath(__dirname, '..', '.loki')
const actualDir = joinPath(lokiDir, 'current')
const expectedDir = joinPath(lokiDir, 'reference')
const diffDir = joinPath(lokiDir, 'difference');

(async function main() {
  const actualScreenshots = await asyncReaddir(actualDir)
  const expectedScreenshots = await asyncReaddir(expectedDir)
  const diffs = await asyncReaddir(diffDir)

  const newItems = actualScreenshots.filter((item) => !expectedScreenshots.includes(item))
  const deletedItems = expectedScreenshots.filter((item) => !actualScreenshots.includes(item))

  await writeFileAsync(joinPath(lokiDir, 'report.json'), JSON.stringify({
    newItems, // Скриншоты, которых нет в reference
    deletedItems, // Скриншоты, которых нет в current
    passedItems: actualScreenshots.filter((item) => !diffs.includes(item)), // Прошедшие проверку
    failedItems: diffs, // Не прошедшие проверку
    expectedItems: expectedScreenshots,
    actualItems: actualScreenshots,
    diffItems: diffs,
    actualDir: relative(lokiDir, actualDir),
    expectedDir: relative(lokiDir, expectedDir),
    diffDir: relative(lokiDir, diffDir),
  }))
}())
