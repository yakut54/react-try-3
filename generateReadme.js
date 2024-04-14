const fs = require('fs-extra');
const packageJson = require('./package.json');

const readmeContent = `
# ${packageJson.name}

${packageJson.description}

## Установка

1. Клонируйте репозиторий
2. Установите зависимости с помощью \`npm install\`

## Использование

Запустите проект с помощью:

\`\`\`bash
npm start
\`

## Лицензия

${packageJson.license}

## Автор

${packageJson.author}
`;

fs.writeFileSync('README.md', readmeContent);