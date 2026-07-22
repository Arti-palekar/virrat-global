const fs = require('fs');
const path = 'c:/virratglobal.com/src/app/home1/components/PremiumShowcase.tsx';
let content = fs.readFileSync(path, 'utf8');

// Small Text
content = content.replace(/fontSize: "9px",\s*fontWeight: 800,/g, 'fontSize: "16px", fontWeight: 400,');

// Card Title
content = content.replace(/fontSize: "15px",\s*fontWeight: 800,/g, 'fontSize: "28px", fontWeight: 600,');

// Body Text
content = content.replace(/fontSize: "12px",\s*color: "#6B7280",\s*lineHeight: 1.5,/g, 'fontSize: "18px", fontWeight: 400, color: "#6B7280", lineHeight: 1.5,');

// Button
content = content.replace(/fontSize: "11px",\s*fontWeight: 700,/g, 'fontSize: "18px", fontWeight: 600,');

// Section Description
content = content.replace(/fontSize: "15px",\s*color: "#6B7280",\s*lineHeight: 1.6,/g, 'fontSize: "18px", fontWeight: 400, color: "#6B7280", lineHeight: 1.6,');

// Add font-tasa class to section
content = content.replace(/<section\s+style={{/g, '<section className="font-tasa" style={{');

fs.writeFileSync(path, content, 'utf8');
console.log('PremiumShowcase typography updated successfully.');
