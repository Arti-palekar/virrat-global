const fs = require('fs');
const path = require('path');

const dir = 'c:/virratglobal.com/src/app/services/packaging-design/components';

// Classes to remove
const classesToRemove = [
  /^text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl|\[.*?\])$/,
  /^sm:text-.*$/,
  /^md:text-.*$/,
  /^lg:text-.*$/,
  /^font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)$/,
  /^leading-.*$/,
  /^tracking-.*$/,
  /^mb-\d+$/,
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
  }
  
  return classes.join(' ');
}

// Read all files
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  let changed = false;

  // We need to target section titles (h2)
  content = content.replace(/<h2([^>]*?)className="([^"]+)"/g, (match, p1, p2) => {
    const newClasses = updateClasses(p2, true);
    changed = true;
    return `<h2${p1}className="${newClasses}"`;
  });

  // Target paragraphs that are section descriptions (usually follow h2 or have max-w/leading)
  // To be safe, let's only target paragraphs that are specifically for sections.
  // We can look for <p className="... text-zinc-..."> with max-w
  content = content.replace(/<p([^>]*?)className="([^"]+)"/g, (match, p1, p2) => {
    if (p2.includes('max-w-') && (p2.includes('text-zinc-') || p2.includes('text-[var(--color-secondary)]'))) {
      const newClasses = updateClasses(p2, false);
      changed = true;
      return `<p${p1}className="${newClasses}"`;
    }
    return match;
  });

  // Fix title casing inside <h2>...</h2>
  content = content.replace(/<h2([^>]*)>([\s\S]*?)<\/h2>/g, (match, attrs, innerText) => {
    // We only want to lowercase letters that are not the very first letter of the whole text content.
    // However, innerText can contain <br /> or <span>.
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

    return `<h2${attrs}>${newInner}</h2>`;
  });

  if (changed) {
     fs.writeFileSync(filePath, content, 'utf-8');
     console.log(`Updated ${file}`);
  }
}

// Also check PackagingClient.tsx and page.tsx
const parentFiles = [
  'c:/virratglobal.com/src/app/services/packaging-design/PackagingClient.tsx',
  'c:/virratglobal.com/src/app/services/packaging-design/page.tsx'
];

for (const filePath of parentFiles) {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let changed = false;

    // We need to target section titles (h2)
    content = content.replace(/<h2([^>]*?)className="([^"]+)"/g, (match, p1, p2) => {
      const newClasses = updateClasses(p2, true);
      changed = true;
      return `<h2${p1}className="${newClasses}"`;
    });

    content = content.replace(/<p([^>]*?)className="([^"]+)"/g, (match, p1, p2) => {
      if (p2.includes('max-w-') && (p2.includes('text-zinc-') || p2.includes('text-[var(--color-secondary)]'))) {
        const newClasses = updateClasses(p2, false);
        changed = true;
        return `<p${p1}className="${newClasses}"`;
      }
      return match;
    });

    content = content.replace(/<h2([^>]*)>([\s\S]*?)<\/h2>/g, (match, attrs, innerText) => {
      let newInner = innerText;
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
      return `<h2${attrs}>${newInner}</h2>`;
    });

    if (changed) {
       fs.writeFileSync(filePath, content, 'utf-8');
       console.log(`Updated ${path.basename(filePath)}`);
    }
  }
}

console.log("Done v2");
