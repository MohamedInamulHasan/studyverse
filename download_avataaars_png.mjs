// download_avataaars_png.mjs
import fs from 'fs';
import path from 'path';

const outDir = './public/avatars';
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 12 Age-progressed student avatars (Age 6 to 18)
// Using Avataaars high-res transparent PNGs
const AVATARS = [
  {
    classNum: 1,
    url: 'https://api.dicebear.com/7.x/avataaars/png?seed=MimiKid&size=300&clothing=shirtCrewNeck&top=shortCurly&facialHairProbability=0'
  },
  {
    classNum: 2,
    url: 'https://api.dicebear.com/7.x/avataaars/png?seed=LeoChild&size=300&clothing=shirtCrewNeck&top=shortRound&facialHairProbability=0'
  },
  {
    classNum: 3,
    url: 'https://api.dicebear.com/7.x/avataaars/png?seed=ZoeKid&size=300&clothing=overall&top=bun&facialHairProbability=0'
  },
  {
    classNum: 4,
    url: 'https://api.dicebear.com/7.x/avataaars/png?seed=TobyJunior&size=300&clothing=shirtVNeck&top=shortFlat&facialHairProbability=0'
  },
  {
    classNum: 5,
    url: 'https://api.dicebear.com/7.x/avataaars/png?seed=MayaGrade5&size=300&clothing=shirtCrewNeck&top=straight01&facialHairProbability=0'
  },
  {
    classNum: 6,
    url: 'https://api.dicebear.com/7.x/avataaars/png?seed=SammyMiddle&size=300&clothing=hoodie&top=shortWaved&facialHairProbability=0'
  },
  {
    classNum: 7,
    url: 'https://api.dicebear.com/7.x/avataaars/png?seed=DaisyTeen&size=300&clothing=shirtScoopNeck&top=longButNotTooLong&facialHairProbability=0'
  },
  {
    classNum: 8,
    url: 'https://api.dicebear.com/7.x/avataaars/png?seed=KikiGrade8&size=300&clothing=collarAndSweater&top=curly&facialHairProbability=0'
  },
  {
    classNum: 9,
    url: 'https://api.dicebear.com/7.x/avataaars/png?seed=AlexGrade9&size=300&clothing=hoodie&top=frizzle&facialHairProbability=0'
  },
  {
    classNum: 10,
    url: 'https://api.dicebear.com/7.x/avataaars/png?seed=BellaGrade10&size=300&clothing=shirtCrewNeck&clothesColor=ff0000&top=straight02&hairColor=4a2810&facialHairProbability=0'
  },
  {
    classNum: 11,
    url: 'https://api.dicebear.com/7.x/avataaars/png?seed=LucasGrade11&size=300&clothing=hoodie&clothesColor=262e33&top=dreads01&facialHairProbability=0'
  },
  {
    classNum: 12,
    url: 'https://api.dicebear.com/7.x/avataaars/png?seed=OliverSenior&size=300&clothing=blazerAndShirt&top=shortDreads01&hairColor=2c1b18&facialHairProbability=0'
  }
];

async function run() {
  for (const a of AVATARS) {
    try {
      console.log(`Downloading Class ${a.classNum} PNG...`);
      const res = await fetch(a.url);
      if (res.ok) {
        const buffer = await res.arrayBuffer();
        fs.writeFileSync(path.join(outDir, `student_${a.classNum}.png`), Buffer.from(buffer));
        console.log(`✅ Saved student_${a.classNum}.png (${buffer.byteLength} bytes)`);
      } else {
        console.error(`Failed ${a.classNum}:`, res.statusText);
      }
    } catch (err) {
      console.error(`Error ${a.classNum}:`, err.message);
    }
  }
  console.log('🎉 Done downloading all 12 student avatar PNGs!');
}

run();
