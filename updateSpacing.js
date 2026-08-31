const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else {
      if (dirPath.endsWith('.tsx')) {
        callback(dirPath);
      }
    }
  });
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // 1. Standardize section padding
  content = content.replace(/<section[^>]+className=["']([^"']+)["'][^>]*>/g, (match, classNames) => {
    let newClasses = classNames.replace(/\b(py|pt|pb|my|mt)-\[?[0-9a-zA-Z]+\]?\b/g, '')
                               .replace(/\b(md|sm|lg|xl|2xl):(py|pt|pb|my|mt)-\[?[0-9a-zA-Z]+\]?\b/g, '')
                               .replace(/\s+/g, ' ').trim();
    newClasses += ' py-16 md:py-24';
    return match.replace(classNames, newClasses);
  });

  // 2. Standardize heading margins (h2 -> mb-5)
  content = content.replace(/<h2[^>]+className=["']([^"']+)["'][^>]*>/g, (match, classNames) => {
    if (!classNames.includes('mb-') && !classNames.includes('my-')) return match;
    let newClasses = classNames.replace(/\bmb-\[?[0-9a-zA-Z]+\]?\b/g, '')
                               .replace(/\b(md|sm|lg|xl|2xl):mb-\[?[0-9a-zA-Z]+\]?\b/g, '')
                               .replace(/\s+/g, ' ').trim();
    newClasses += ' mb-5';
    return match.replace(classNames, newClasses);
  });

  // 3. Standardize subheading/paragraph margins (h3, p -> mb-6)
  content = content.replace(/<(h3|p)[^>]+className=["']([^"']+)["'][^>]*>/g, (match, tag, classNames) => {
    if (!classNames.includes('mb-') && !classNames.includes('my-')) return match;
    let newClasses = classNames.replace(/\bmb-\[?[0-9a-zA-Z]+\]?\b/g, '')
                               .replace(/\b(md|sm|lg|xl|2xl):mb-\[?[0-9a-zA-Z]+\]?\b/g, '')
                               .replace(/\s+/g, ' ').trim();
    newClasses += ' mb-6';
    return match.replace(classNames, newClasses);
  });

  // 4. Header block container bottom gap
  content = content.replace(/<div[^>]+className=["']([^"']+)["'][^>]*>/g, (match, classNames) => {
    // Only target divs with a large bottom margin that look like structural containers
    if (classNames.includes('mb-16') || classNames.includes('mb-20') || classNames.includes('mb-24') || (classNames.includes('mb-') && classNames.includes('md:mb-'))) {
      let newClasses = classNames.replace(/\bmb-\[?[0-9a-zA-Z]+\]?\b/g, '')
                                 .replace(/\b(md|sm|lg|xl|2xl):mb-\[?[0-9a-zA-Z]+\]?\b/g, '')
                                 .replace(/\s+/g, ' ').trim();
      newClasses += ' mb-12';
      return match.replace(classNames, newClasses);
    }
    return match;
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated spacing in ${filePath}`);
  }
}

const dirsToProcess = [
  path.join(__dirname, 'src', 'components'),
  path.join(__dirname, 'src', 'app')
];

dirsToProcess.forEach(dir => {
  if (fs.existsSync(dir)) {
    walkDir(dir, processFile);
  }
});
