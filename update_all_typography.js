const fs = require('fs');
const path = require('path');

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // 1. Remove fontFamily inline completely (it will inherit global Syne)
    content = content.replace(/fontFamily:\s*[^,}]*,?\s*/g, '');

    // 2. Map font sizes
    content = content.replace(/fontSize:\s*"(?:72px|64px|60px|clamp[^"]+)"/g, 'fontSize: "2.5rem"');
    content = content.replace(/fontSize:\s*"(?:56px|48px|44px|40px|36px|32px)"/g, 'fontSize: "2.2rem"');
    content = content.replace(/fontSize:\s*"(?:28px|26px|24px|22px|20px)"/g, 'fontSize: "1.75rem"');
    content = content.replace(/fontSize:\s*"(?:19px|18px|17px|16px|15px|14px|13\.5px|13px|12px|11\.5px|11px|10px|9px)"/g, 'fontSize: "1rem"');

    // 3. Map font weights
    content = content.replace(/fontWeight:\s*(?:800|700|600)/g, 'fontWeight: 400');
    // For specific button fontWeight (500)
    // Assuming buttons often have "padding" and "borderRadius" along with text sizes. We can't safely target them easily, 
    // but the global CSS has button { fontWeight: 500 }, so if we strip inline fontWeight on buttons, it works!
    // But since buttons might be <a> or <div> acting as buttons, let's leave them as 400 for now. The global CSS will catch <button>.
    
    // 4. Update Line Heights
    content = content.replace(/lineHeight:\s*(?:1\.5|1\.6|1\.65|1\.7|1\.75)/g, 'lineHeight: 1.8');

    // 5. Update Colors
    content = content.replace(/color:\s*"(?:#1F2937|#374151|#000000|#111827)"/ig, 'color: "#313131"');
    content = content.replace(/color:\s*"(?:#6B7280|#4B5563|#9CA3AF)"/ig, 'color: "#666666"');

    // 6. Fix classNames with 'font-tasa' or 'font-inter'
    content = content.replace(/className="[^"]*font-(?:tasa|inter|syne)[^"]*"/g, (match) => {
        return match.replace(/font-(?:tasa|inter)/, 'font-syne');
    });

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log("Updated " + filePath);
    }
}

function traverseDir(dir) {
    fs.readdirSync(dir).forEach(file => {
        let fullPath = path.join(dir, file);
        if (fs.lstatSync(fullPath).isDirectory()) {
            traverseDir(fullPath);
        } else if (fullPath.endsWith('.tsx')) {
            processFile(fullPath);
        }
    });
}

traverseDir('c:/virratglobal.com/src');
console.log('Typography update script finished.');
