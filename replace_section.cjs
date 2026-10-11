const fs = require('fs');
const content = fs.readFileSync('C:\\Users\\moham\\Desktop\\Students Project\\src\\App.jsx', 'utf8');

const oldSection = '                      ) : (\r\n' +
'                        /* 1. காட்டுக்குள்ளே கொண்டாட்டம்: Song Video Player */\r\n' +
'                        (() => {\r\n' +
'                          // ── PASTE YOUR GOOGLE DRIVE FILE ID BELOW ──────────────────\r\n' +
'                          // From share link: https://drive.google.com/file/d/FILE_ID/view\r\n' +
'                          const DRIVE_FILE_ID = \"PASTE_YOUR_FILE_ID_HERE\";\r\n' +
'                          const embedSrc = \https://drive.google.com/file/d//preview\`;\r\n' +
'                          return (\r\n' +
'                            <div className=\"rounded-[28px] bg-black overflow-hidden border-2 border-stone-800 border-b-[5px] border-b-stone-900 w-full\">\r\n' +
'                              <div className=\"relative w-full\" style={{ paddingTop: \"56.25%\" }}>\r\n' +
'                                <iframe\r\n' +
'                                  src={embedSrc}\r\n' +
'                                  className=\"absolute inset-0 w-full h-full\"\r\n' +
'                                  allow=\"autoplay\"\r\n' +
'                                  allowFullScreen\r\n' +
'                                  frameBorder=\"0\"\r\n' +
'                                  title=\"காட்டுக்குள்ளே கொண்டாட்டம் பாடல்\"\r\n' +
'                                />\r\n' +
'                              </div>\r\n' +
'                            </div>\r\n' +
'                          );\r\n' +
'                        })()\r\n' +
'                      )}\r\n' +
'\r\n' +
'                      {/* Interactive Q&A for Kids */}\r\n' +
'                      {topicContent.questions && topicContent.questions.length > 0 && (\r\n' +
'                        <div className=\"space-y-3 pt-2\">\r\n' +
'                          <h3 className=\"text-sm font-black text-[#78350f] px-1 flex items-center gap-1.5\">\r\n' +
'                            <span>⭐</span>\r\n' +
'                            <span>பயிற்சி வினாக்கள்</span>\r\n' +
'                          </h3>\r\n' +
'                          {topicContent.questions.map((qItem, qIdx) => {\r\n' +
'                            const selectedAns = blankAnswers[\c1_q_\`];\r\n' +
'                            return (\r\n' +
'                              <div\r\n' +
'                                key={qIdx}\r\n' +
'                                className=\"rounded-[20px] bg-white border border-amber-900/15 border-b-[4px] border-b-amber-900/25 p-4 sm:p-5 space-y-3 shadow-sm\"\r\n' +
'                              >\r\n' +
'                                <h4 className=\"text-xs sm:text-sm font-black text-[#78350f] leading-snug\">\r\n' +
'                                  {qIdx + 1}. {qItem.q}\r\n' +
'                                </h4>\r\n' +
'                                <div className=\"grid grid-cols-2 gap-2 pt-1\">\r\n' +
'                                  {qItem.options.map((opt, optIdx) => {\r\n' +
'                                    const isChosen = selectedAns === optIdx;\r\n' +
'                                    const isCorrect = optIdx === qItem.answer;\r\n' +
'                                    let btnStyle = \"bg-amber-50/60 text-[#78350f] border-amber-200 hover:border-amber-400\";\r\n' +
'                                    if (selectedAns !== undefined) {\r\n' +
'                                      if (isCorrect) btnStyle = \"bg-emerald-500 text-white border-emerald-600\";\r\n' +
'                                      else if (isChosen) btnStyle = \"bg-rose-500 text-white border-rose-600\";\r\n' +
'                                    }\r\n' +
'\r\n' +
'                                    return (\r\n' +
'                                      <button\r\n' +
'                                        key={optIdx}\r\n' +
'                                        onClick={() => {\r\n' +
'                                          setBlankAnswers(prev => ({ ...prev, [\c1_q_\`]: optIdx }));\r\n' +
'                                        }}\r\n' +
'                                        className={\p-2.5 rounded-xl border text-xs font-black transition-all duration-150 select-none \}\r\n' +
'                                      >\r\n' +
'                                        {opt}\r\n' +
'                                      </button>\r\n' +
'                                    );\r\n' +
'                                  })}\r\n' +
'                                </div>\r\n' +
'                                {selectedAns !== undefined && (\r\n' +
'                                  <div className=\"text-xs font-semibold text-[#92400e] bg-amber-50/50 p-2.5 rounded-xl border border-amber-200/50 leading-relaxed\">\r\n' +
'                                    💡 {qItem.explanation}\r\n' +
'                                  </div>\r\n' +
'                                )}\r\n' +
'                              </div>\r\n' +
'                            );\r\n' +
'                          })}\r\n' +
'                        </div>\r\n' +
'                      )}';

const newSection = '                      ) : (\r\n' +
'                        /* 1. காட்டுக்குள்ளே கொண்டாட்டம்: Topic name + Video Player */\r\n' +
'                        <>\r\n' +
'                          {/* Topic Heading: Just title with underline like other pages */}\r\n' +
'                          <div className=\"w-full px-1 pt-1 pb-1\">\r\n' +
'                            <h2 className=\"text-base sm:text-lg font-black tracking-tight leading-relaxed text-red-600\">\r\n' +
'                              <span className=\"underline underline-offset-[5px] decoration-red-600 decoration-1.5 leading-relaxed\">\r\n' +
'                                {topicContent.title}\r\n' +
'                              </span>\r\n' +
'                            </h2>\r\n' +
'                          </div>\r\n' +
'\r\n' +
'                          {/* Video Player - Replace with your Google Drive File ID */}\r\n' +
'                          <div className=\"space-y-3\">\r\n' +
'                            <VideoPlayer\r\n' +
'                              src=\"https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view\"\r\n' +
'                              title={topicContent.title}\r\n' +
'                              className=\"rounded-2xl shadow-lg\"\r\n' +
'                            />\r\n' +
'                          </div>\r\n' +
'                        </>\r\n' +
'                      )}';

if (content.includes(oldSection)) {
  const newContent = content.replace(oldSection, newSection);
  fs.writeFileSync('C:\\Users\\moham\\Desktop\\Students Project\\src\\App.jsx', newContent, 'utf8');
  console.log('Successfully replaced the section');
} else {
  console.log('Old section not found!');
  // Debug
  const idx = content.indexOf('காட்டுக்குள்ளே கொண்டாட்டம்: Song Video Player');
  console.log('Index:', idx);
  const actual = content.substring(idx - 30, idx + 200);
  console.log('Actual:', JSON.stringify(actual.substring(0, 100)));
  const expected = oldSection.substring(0, 100);
  console.log('Expected:', JSON.stringify(expected));
}
