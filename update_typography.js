const fs = require('fs');
const path = 'c:/virratglobal.com/src/app/branding-printing/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// Section descriptions (body text): 18px / 400
content = content.replace(/fontSize: "16px", color: "#6B7280"/g, 'fontSize: "18px", fontWeight: 400, color: "#6B7280"');
content = content.replace(/fontSize: "17px", color: "#1F2937"/g, 'fontSize: "18px", fontWeight: 400, color: "#1F2937"');
content = content.replace(/fontSize: "17px", opacity: 0.9/g, 'fontSize: "18px", fontWeight: 400, opacity: 0.9');
content = content.replace(/fontSize: "14px", color: "#6B7280"/g, 'fontSize: "18px", fontWeight: 400, color: "#6B7280"');

// Card Titles: 28px / 600
content = content.replace(/fontSize: "20px", fontWeight: 800/g, 'fontSize: "28px", fontWeight: 600');
content = content.replace(/fontSize: "16px", fontWeight: 700/g, 'fontSize: "28px", fontWeight: 600');
content = content.replace(/fontSize: "15px", fontWeight: 700/g, 'fontSize: "28px", fontWeight: 600');
content = content.replace(/fontSize: "14px", fontWeight: 700/g, 'fontSize: "28px", fontWeight: 600');

// Small Text: 16px / 400
content = content.replace(/fontSize: "12px", fontWeight: 800/g, 'fontSize: "16px", fontWeight: 400');
content = content.replace(/fontSize: "13px"/g, 'fontSize: "16px"');
content = content.replace(/fontSize: "12px"/g, 'fontSize: "16px"');
content = content.replace(/fontSize: "11px"/g, 'fontSize: "16px"');
content = content.replace(/fontSize: "11.5px"/g, 'fontSize: "16px"');
content = content.replace(/fontSize: "13.5px"/g, 'fontSize: "16px"');

// Buttons: 18px / 600
// Get Free Consultation button
content = content.replace(/padding: "14px 30px", borderRadius: "10px", fontWeight: 700/g, 'padding: "14px 30px", borderRadius: "10px", fontSize: "18px", fontWeight: 600');

// Add the font-tasa class to the main wrapper
content = content.replace(/<main style={{ background: "#FFFFFF", color: "#1F2937" }}>/, '<main className="font-tasa" style={{ background: "#FFFFFF", color: "#1F2937" }}>');

fs.writeFileSync(path, content, 'utf8');
console.log('Typography updated successfully.');
