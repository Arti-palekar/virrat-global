const fs = require('fs');
const path = 'c:/virratglobal.com/src/app/branding-printing/HeroH1.tsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(/fontSize: "11px",\s*fontWeight: 700,/g, 'fontSize: "16px", fontWeight: 400,');

fs.writeFileSync(path, content, 'utf8');
console.log('HeroH1 typography updated successfully.');
