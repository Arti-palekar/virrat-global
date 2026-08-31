const fs = require('fs');
const path = require('path');

const dir = 'c:/virratglobal.com/src/app/services/packaging-design/components';

// Classes to remove
const classesToRemove = [
  /^text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)$/,
  /^text-\[.*\]$/,
  /^sm:text-.*$/,
  /^md:text-.*$/,
  /^lg:text-.*$/,
  /^font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)$/,
  /^leading-.*$/,
  /^tracking-.*$/,
  /^mb-\d+$/,
  /^mt-\d+$/,
  /^uppercase$/,
];

function updateClasses(classNameStr, isTitle) {
  let classes = classNameStr.split(/\s+/).filter(Boolean);
  
  // Remove matched classes
  classes = classes.filter(cls => !classesToRemove.some(regex => regex.test(cls)));
  
  // Add new classes
  if (isTitle) {
    classes.push('text-4xl', 'md:text-[54px]', 'font-bold', 'leading-[1.1]', 'tracking-tight', 'mb-5');
  } else {
    // For paragraphs
    classes.push('text-[18px]', 'font-semibold', 'leading-[1.5]', 'tracking-normal');
    // Ensure we have some top margin if it's typically after an H2, but maybe leave it to the existing mt-4/mt-6?
    // Wait, the regex removed mt-\d+. Let me not remove mt-\d+ for paragraphs, just mb-\d+.
  }
  
  return classes.join(' ');
}

// Read all files
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // We need to target section titles (h2) and their corresponding descriptions (p).
  // This is tricky. Let's just look for <h2 and <p that look like section headers.
  
  // Find all <h2 className="...">
  content = content.replace(/<h2([^>]*?)className="([^"]+)"/g, (match, p1, p2) => {
    const newClasses = updateClasses(p2, true);
    return `<h2${p1}className="${newClasses}"`;
  });

  // Find all <h2 className={...}>
  content = content.replace(/<h2([^>]*?)className=\{([^}]+)\}/g, (match, p1, p2) => {
     // if it has dynamic classes, it's harder, but usually it's static string.
     return match;
  });

  // Find paragraphs that are section descriptions. They usually have max-w, leading-relaxed, text-zinc/gray.
  content = content.replace(/<p([^>]*?)className="([^"]+)"/g, (match, p1, p2) => {
    // Only target paragraphs that are likely section descriptions
    if (p2.includes('max-w-') || p2.includes('leading-relaxed') || p2.includes('text-lg') || p2.includes('text-xl') || p2.includes('text-zinc-500') || p2.includes('text-zinc-600') || p2.includes('text-base')) {
      // Avoid targeting small paragraphs in cards
      if (!p2.includes('text-xs') && !p2.includes('text-sm')) {
        let classes = p2.split(/\s+/).filter(Boolean);
        classes = classes.filter(cls => !classesToRemove.some(regex => regex.test(cls) && !cls.startsWith('mt-'))); // keep mt-
        classes.push('text-[18px]', 'font-semibold', 'leading-[1.5]', 'tracking-normal');
        return `<p${p1}className="${classes.join(' ')}"`;
      }
    }
    return match;
  });

  // Fix title casing inside <h2>...</h2>
  // We need to capture the text inside H2.
  content = content.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/g, (match, innerText) => {
    // If it contains inner tags like <br /> or <span>, we should be careful.
    // Let's do a simple replace on text nodes.
    let newInner = innerText;
    
    // Split by tags
    let parts = newInner.split(/(<[^>]+>)/);
    let isFirstLetter = true;
    for (let i = 0; i < parts.length; i++) {
       if (!parts[i].startsWith('<')) {
          let text = parts[i];
          let newText = "";
          for (let char of text) {
             if (/[A-Za-z]/.test(char)) {
                if (isFirstLetter) {
                   newText += char.toUpperCase();
                   isFirstLetter = false;
                } else {
                   newText += char.toLowerCase();
                }
             } else {
                newText += char;
             }
          }
          parts[i] = newText;
       }
    }
    newInner = parts.join('');

    return match.replace(innerText, newInner);
  });

  fs.writeFileSync(filePath, content, 'utf-8');
}

console.log("Done");
