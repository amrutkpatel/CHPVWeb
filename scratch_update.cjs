const fs = require('fs');
const path = require('path');

const map = {
  16: 2,
  15: 16,
  14: 15,
  13: 14,
  12: 13,
  11: 12,
  10: 11,
  9: 10,
  8: 9,
  7: 8,
  6: 7,
  5: 6,
  4: 5,
  3: 4,
  2: 3,
  1: 1
};

// Update translations
const transDirs = [
  path.join(__dirname, 'src/translations/en.json'),
  path.join(__dirname, 'src/translations/gu.json')
];

for (const file of transDirs) {
  let content = fs.readFileSync(file, 'utf8');
  const json = JSON.parse(content);
  const newJson = { ...json };
  for (let i = 2; i <= 16; i++) {
    // We want newJson[`ref_${map[i]}`] = json[`ref_${i}`]
  }
  // Actually, wait. If 16 -> 2, the new key 2 should have the old value of 16.
  for (let oldKey in map) {
    if (oldKey == 1) continue;
    newJson[`ref_${map[oldKey]}`] = json[`ref_${oldKey}`];
  }
  fs.writeFileSync(file, JSON.stringify(newJson, null, 2) + '\n');
}

// Update components
const componentsDir = path.join(__dirname, 'src/components');
const components = fs.readdirSync(componentsDir).filter(f => f.endsWith('.jsx'));

for (const comp of components) {
  const filePath = path.join(componentsDir, comp);
  let content = fs.readFileSync(filePath, 'utf8');
  let updated = false;

  // We need to replace things like `href="#ref-16"` -> `#ref-__2__` to avoid double replacement
  // then `__2__` -> `2`
  for (let oldKey in map) {
    if (oldKey == 1) continue;
    const oldRef = `href="#ref-${oldKey}"`;
    const tempRef = `href="#ref-__${map[oldKey]}__"`;
    if (content.includes(oldRef)) {
      content = content.replace(new RegExp(oldRef, 'g'), tempRef);
      updated = true;
    }
    
    const oldCite = `>[${oldKey}]<`;
    const tempCite = `>[__${map[oldKey]}__]<`;
    if (content.includes(oldCite)) {
      content = content.replace(new RegExp(`>\\[${oldKey}\\]<`, 'g'), tempCite);
      updated = true;
    }
  }

  if (updated) {
    content = content.replace(/__/g, '');
    fs.writeFileSync(filePath, content);
  }
}
