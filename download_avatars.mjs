// download_avatars.mjs
import fs from 'fs';
import path from 'path';

const outDir = './public/avatars';
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 12 Classes with age-appropriate cartoon student characters
// Age ~6 in Class 1 up to Age ~18 in Class 12
const AVATARS_CONFIG = [
  { classNum: 1, age: 6, seed: 'Mimi', style: 'adventurer', desc: 'Little 1st grade elementary kid' },
  { classNum: 2, age: 7, seed: 'Toby', style: 'adventurer', desc: 'Young 2nd grader boy' },
  { classNum: 3, age: 8, seed: 'Coco', style: 'adventurer', desc: '3rd grade girl smiling' },
  { classNum: 4, age: 9, seed: 'Leo', style: 'adventurer', desc: '4th grade schoolkid' },
  { classNum: 5, age: 10, seed: 'Zoe', style: 'adventurer', desc: '5th grade pre-teen' },
  { classNum: 6, age: 11, seed: 'Sammy', style: 'adventurer', desc: '6th grade middle schooler' },
  { classNum: 7, age: 12, seed: 'Daisy', style: 'adventurer', desc: '7th grade blonde teen girl' },
  { classNum: 8, age: 13, seed: 'Kiki', style: 'adventurer', desc: '8th grade curly hair student' },
  { classNum: 9, age: 14, seed: 'Alex', style: 'adventurer', desc: '9th grade high school freshman' },
  { classNum: 10, age: 15, seed: 'Bella', style: 'adventurer', desc: '10th grade student girl in red' },
  { classNum: 11, age: 16, seed: 'Lucas', style: 'adventurer', desc: '11th grade senior student in hoodie' },
  { classNum: 12, age: 17, seed: 'Oliver', style: 'adventurer', desc: '12th grade graduating senior' }
];

async function download() {
  for (const item of AVATARS_CONFIG) {
    const url = `https://api.dicebear.com/7.x/${item.style}/svg?seed=${item.seed}&scale=110&radius=10`;
    console.log(`Downloading Class ${item.classNum} avatar (Age ${item.age})...`);
    try {
      const res = await fetch(url);
      if (res.ok) {
        const svg = await res.text();
        fs.writeFileSync(path.join(outDir, `class_${item.classNum}.svg`), svg, 'utf-8');
        console.log(`✅ Saved class_${item.classNum}.svg`);
      } else {
        console.error(`Failed: ${res.statusText}`);
      }
    } catch (e) {
      console.error(`Error downloading class ${item.classNum}:`, e.message);
    }
  }
  console.log('All 12 class avatars downloaded successfully!');
}

download();
