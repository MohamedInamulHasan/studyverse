import http from 'http';
import fs from 'fs';
import path from 'path';

const PORT = 8080;
const APK_PATH = path.resolve('StudyVerse.apk');

const server = http.createServer((req, res) => {
  if (!fs.existsSync(APK_PATH)) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    return res.end('StudyVerse.apk not found');
  }

  const stat = fs.statSync(APK_PATH);

  if (req.url === '/StudyVerse.apk' || req.url === '/download') {
    res.writeHead(200, {
      'Content-Type': 'application/vnd.android.package-archive',
      'Content-Disposition': 'attachment; filename="StudyVerse.apk"',
      'Content-Length': stat.size
    });
    fs.createReadStream(APK_PATH).pipe(res);
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
      <!DOCTYPE html>
      <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Download StudyVerse App</title>
        <style>
          body { font-family: system-ui, -apple-system, sans-serif; background: #f0fdf4; text-align: center; padding: 40px 20px; }
          .card { background: white; max-width: 400px; margin: 0 auto; border-radius: 24px; padding: 32px 24px; box-shadow: 0 10px 25px rgba(0,0,0,0.08); border: 1px solid #bbf7d0; }
          h1 { font-size: 24px; color: #166534; margin-bottom: 8px; }
          p { color: #4b5563; font-size: 14px; margin-bottom: 24px; }
          .btn { display: inline-block; background: #16a34a; color: white; text-decoration: none; font-weight: bold; font-size: 16px; padding: 16px 32px; border-radius: 16px; box-shadow: 0 4px 12px rgba(22, 163, 74, 0.35); }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>StudyVerse Android App</h1>
          <p>Class 10 Learning Platform & Quizzes</p>
          <a class="btn" href="/StudyVerse.apk">📥 Download APK (${(stat.size / (1024 * 1024)).toFixed(1)} MB)</a>
        </div>
      </body>
      </html>
    `);
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Download server running at http://0.0.0.0:${PORT}`);
});
