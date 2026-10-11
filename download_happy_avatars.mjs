// download_happy_avatars.mjs
import fs from 'fs';
import path from 'path';

const outDir = './public/avatars';

// 12 Happy smiling students matching grades 1 to 12
const HAPPY_STUDENTS = [
  { classNum: 1, seed: 'CuteKid1', clothing: 'shirtCrewNeck', top: 'shortCurly' },
  { classNum: 2, seed: 'HappyChild2', clothing: 'shirtCrewNeck', top: 'shortRound' },
  { classNum: 3, seed: 'JoyGirl3', clothing: 'overall', top: 'bun' },
  { classNum: 4, seed: 'SunnyBoy4', clothing: 'shirtVNeck', top: 'shortFlat' },
  { classNum: 5, seed: 'SmileGirl5', clothing: 'shirtCrewNeck', top: 'straight01' },
  { classNum: 6, seed: 'CheerfulBoy6', clothing: 'hoodie', top: 'shortWaved' },
  { classNum: 7, seed: 'BlondeHappy7', clothing: 'shirtScoopNeck', top: 'longButNotTooLong' },
  { classNum: 8, seed: 'CurlySmile8', clothing: 'collarAndSweater', top: 'curly' },
  { classNum: 9, seed: 'SpikyBoy9', clothing: 'hoodie', top: 'frizzle' },
  { classNum: 10, seed: 'RedDressGirl10', clothing: 'shirtCrewNeck', clothesColor: 'ff0000', top: 'straight02' },
  { classNum: 11, seed: 'HoodieSenior11', clothing: 'hoodie', clothesColor: '262e33', top: 'dreads01' },
  { classNum: 12, seed: 'GradSenior12', clothing: 'blazerAndShirt', top: 'shortFlat' }
];

async function run() {
  for (const s of HAPPY_STUDENTS) {
    const clothesParam = s.clothesColor ? `&clothesColor=${s.clothesColor}` : '';
    const topParam = s.top ? `&top=${s.top}` : '';
    const url = `https://api.dicebear.com/7.x/avataaars/png?seed=${s.seed}&size=320&mouth=smile&eyes=happy&clothing=${s.clothing}${topParam}${clothesParam}&facialHairProbability=0`;

    try {
      console.log(`Downloading Happy Class ${s.classNum} Avatar...`);
      const res = await fetch(url);
      if (res.ok) {
        const buffer = await res.arrayBuffer();
        fs.writeFileSync(path.join(outDir, `student_${s.classNum}.png`), Buffer.from(buffer));
        console.log(`✅ Saved happy student_${s.classNum}.png`);
      } else {
        console.error(`Failed ${s.classNum}: ${res.statusText}`);
      }
    } catch (e) {
      console.error(`Error ${s.classNum}: ${e.message}`);
    }
  }
  console.log('🎉 All 12 happy student avatars downloaded successfully!');
}

run();
