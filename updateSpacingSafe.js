const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    if (fs.statSync(dirPath).isDirectory()) {
      walkDir(dirPath, callback);
    } else if (dirPath.endsWith('.tsx')) {
      callback(dirPath);
    }
  });
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Helper to safely strip spacing classes
  function stripSpacing(classNames, properties) {
    let regexPrefixed = new RegExp(`\\b(md|sm|lg|xl|2xl):(${properties.join('|')})-\\[?[0-9a-zA-Z]+\\]?\\b`, 'g');
    let regexUnprefixed = new RegExp(`\\b(${properties.join('|')})-\\[?[0-9a-zA-Z]+\\]?\\b`, 'g');
    return classNames.replace(regexPrefixed, '').replace(regexUnprefixed, '').replace(/\s+/g, ' ').trim();
  }

  // 1. Standardize section padding
  content = content.replace(/<section[^>]+className=["']([^"']+)["'][^>]*>/g, (match, classNames) => {
    let newClasses = stripSpacing(classNames, ['py', 'pt', 'pb', 'my', 'mt']);
    newClasses += ' py-16 md:py-24';
    return match.replace(classNames, newClasses);
  });

  // 2. Standardize heading margins (h1, h2)
  content = content.replace(/<(h1|h2)[^>]+className=["']([^"']+)["'][^>]*>/g, (match, tag, classNames) => {
    let newClasses = stripSpacing(classNames, ['mb']);
    newClasses += ' mb-5';
    return match.replace(classNames, newClasses);
  });

  // 3. Standardize subheading/paragraph margins (h3, p)
  content = content.replace(/<(h3|p)[^>]+className=["']([^"']+)["'][^>]*>/g, (match, tag, classNames) => {
    if (classNames.match(/\bmb-[0-9]+\b/) || classNames.match(/\bmd:mb-[0-9]+\b/)) {
        let newClasses = stripSpacing(classNames, ['mb']);
        newClasses += ' mb-6';
        return match.replace(classNames, newClasses);
    }
    return match;
  });

  // 4. Header block container bottom gap
  content = content.replace(/<div[^>]+className=["']([^"']+)["'][^>]*>/g, (match, classNames) => {
    if (classNames.includes('text-center') && (classNames.includes('mb-10') || classNames.includes('mb-12') || classNames.includes('mb-16') || classNames.includes('mb-20') || classNames.includes('mb-24') || (classNames.includes('mb-') && classNames.includes('md:mb-')))) {
      let newClasses = stripSpacing(classNames, ['mb']);
      newClasses += ' mb-12';
      return match.replace(classNames, newClasses);
    }
    return match;
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
}

const dirsToProcess = [
  path.join(__dirname, 'src', 'components'),
  path.join(__dirname, 'src', 'app')
];

dirsToProcess.forEach(dir => {
  if (fs.existsSync(dir)) walkDir(dir, processFile);
});
