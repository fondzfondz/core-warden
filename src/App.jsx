import { useEffect, useMemo, useRef, useState } from "react";

const UI = {
  th: {
    lang: "ไทย",
    navWorld: "โลก",
    navPillars: "เสาหลัก",
    navBeasts: "บีช",
    navSpecial: "บีชพิเศษ",
    navLink: "Core Link",
    navOthers: "อื่นๆ",
    navArchive: "คลังตำนาน",
    navStory: "เนื้อเรื่อง",
    enterWorld: "เข้าสู่โลก",
    beastArchive: "คลังข้อมูลบีช",
    heroDesc: "คลังข้อมูลดาร์กแฟนตาซีของ Core Energy, เส้นทางต้องห้าม, Core Beast และสมดุลอันเปราะบางระหว่างระเบียบกับความบ้าคลั่ง",
    worldKicker: "WORLD ORIGIN",
    worldTitle: "โลกของ Core Warden",
    worldBody: "โลกใบนี้เต็มไปด้วย Core Energy พลังดิบที่ไหลเวียนอยู่ใต้ผืนดิน ท้องฟ้า สิ่งมีชีวิต และซากอารยธรรมเก่า หากพลังสะสมมากเกินไป โลกจะบิดเบี้ยว เกิด Madness และสิ่งมีชีวิตจะกลายพันธุ์ Core Warden จึงถือกำเนิดขึ้นเพื่อควบคุม ระบาย และรักษาสมดุลของพลังผ่านเส้นทางต่างๆ แต่คำถามที่ยังไม่มีใครตอบได้คือ โลกใบนี้เกี่ยวข้องกับโลกของเราอย่างไรกันแน่",
    readMore: "อ่านข้อมูลเพิ่มเติม",
    readMoreNote: "พื้นที่สำหรับใส่เนื้อเรื่องนิยายฉบับเต็มในอนาคต",
    systemStructure: "SYSTEM STRUCTURE",
    pillarsTitle: "5 เสาหลัก",
    pillarsDesc: "คลิกเสาหลัก แล้วกดการ์ดเส้นทางเพื่อเปิดหน้ารายละเอียด",
    selectedPillar: "เสาหลักที่เลือก",
    pathLabel: "เส้นทาง",
    explorePath: "เปิดดูเส้นทาง",
    pathDetail: "หน้ารายละเอียดเส้นทาง",
    examples: "ตัวอย่างพลัง",
    authority: "ขอบเขตอำนาจ",
    philosophy: "ปรัชญาแก่นพลัง",
    archiveStatus: "สถานะข้อมูล",
    close: "ปิด",
    beastsKicker: "BEAST ECOLOGY",
    beastsTitle: "Core Beast",
    beastsBody: "Core Beast ไม่ใช่มอนสเตอร์ธรรมดา แต่เป็นสิ่งมีชีวิตที่ถือกำเนิดจากอิทธิพลของ Core Energy เมื่อพลังของโลกแทรกซึมเข้าสู่สัตว์ ธรรมชาติ หรือสิ่งมีชีวิตโบราณ พวกมันจะวิวัฒน์เป็นบีชที่มีแก่นพลังของตนเอง โดยส่วนใหญ่อิงกับหนึ่งใน 22 เส้นทางหลักของโลกใบนี้",
    specialKicker: "SPECIAL BEAST",
    specialTitle: "Special Beast",
    specialBody: "Special Beast คือบีชหายากระดับพิเศษ บางตนไม่ได้โดดเด่นด้านการทำลาย แต่มีความสามารถในการปลอบประโลม ชะลอ Madness และทำให้ Core รอบตัวเสถียรขึ้นชั่วคราว หลายตนเป็นตัวตนที่ไม่ขึ้นกับ Path โดยตรง และจะเลือกยอมรับเฉพาะผู้ที่มันเห็นว่าสมควรเท่านั้น",
    comingSoon: "Coming Soon",
    linkKicker: "WARDEN × BEAST",
    linkTitle: "Core Link",
    linkBody: "Core Link คือพันธะเรโซแนนซ์ระหว่าง Warden และ Core Beast การลิงก์ไม่ได้เกิดจากพลังเพียงอย่างเดียว แต่ขึ้นกับเส้นทาง สัญชาตญาณ บุคลิก และสมดุลของพลัง บางพันธะคือความร่วมมือ บางพันธะคือการคัดเลือก และบางพันธะก็เป็นเรื่องที่ไม่อาจบังคับได้",
    othersKicker: "ITEMS · RELICS · FUTURE ARCHIVE",
    othersTitle: "อื่นๆ",
    othersBody: "นอกจากเส้นทางและบีช โลกนี้ยังมีไอเท็ม วัตถุคอร์ และภาพบันทึกอีกมากมายที่ยังไม่ถูกเปิดเผย ข้อมูลบางส่วนจะอยู่ในรูปภาพโดยตรง เพื่อให้สามารถขยายเพิ่มได้ในอนาคตโดยไม่ต้องเปลี่ยนโครงสร้างของเว็บมากนัก",
    archiveKicker: "LORE ARCHIVE",
    archiveTitle: "MADNESS EQUILIBRIUM",
    archiveBody: "พลังไม่เคยได้มาฟรี ทุกเส้นทางมอบอำนาจ แต่ก็เชื้อเชิญความบิดเบี้ยว ความหมกมุ่น การกลายพันธุ์ และ Madness สมดุลจึงเป็นแก่นของโลกนี้",
    sealed: "ข้อมูลถูกปิดผนึก",
    futureStory: "พื้นที่นี้สามารถใช้ลงเนื้อเรื่องฉบับนิยายเต็มได้ในอนาคต",
    storyKicker: "STORY ARCHIVE",
    storyTitle: "คลังเนื้อเรื่อง",
    storyBody: "อ่านเนื้อเรื่อง Core Warden แบบเป็นตอน พร้อมภาพสตอรี่บอร์ดแนวนอนสำหรับแต่ละตอน ระบบจะเปลี่ยนภาษาไทย/อังกฤษตามปุ่มภาษาของเว็บ",
    contactKicker: "CONTACT THE ARCHIVE",
    contactTitle: "ติดตามและเข้าร่วมชุมชน",
    contactBody: "ติดตามอัปเดตโลก Core Warden ผ่าน TikTok หรือเข้าร่วม Discord เพื่อพูดคุย ทฤษฎี แชร์ไอเดีย และติดตามข่าวสารของจักรวาลนี้",
    tiktokButton: "TikTok",
    discordButton: "Discord",
  },
  en: {
    lang: "EN",
    navWorld: "World",
    navPillars: "Pillars",
    navBeasts: "Beasts",
    navSpecial: "Special",
    navLink: "Core Link",
    navOthers: "Others",
    navArchive: "Archive",
    navStory: "Story",
    enterWorld: "Enter The World",
    beastArchive: "Beast Archive",
    heroDesc: "A dark fantasy codex of Core Energy, forbidden Paths, Core Beasts, and the fragile balance between order and madness.",
    worldKicker: "WORLD ORIGIN",
    worldTitle: "The World of Core Warden",
    worldBody: "This world is filled with Core Energy, a raw force flowing beneath the land, the sky, living beings, and the ruins of ancient civilizations. When that power accumulates beyond balance, the world distorts, Madness spreads, and living things begin to mutate. Core Wardens emerged to control, release, and preserve the balance of this force through different Paths. Yet one question still remains unanswered: how is this world connected to ours?",
    readMore: "Read More",
    readMoreNote: "Reserved space for the full novel story in the future",
    systemStructure: "SYSTEM STRUCTURE",
    pillarsTitle: "The Five Pillars",
    pillarsDesc: "Click a Pillar, then click a Path card to open its detail page.",
    selectedPillar: "Selected Pillar",
    pathLabel: "Path",
    explorePath: "Explore Path",
    pathDetail: "Path Detail Page",
    examples: "Power Examples",
    authority: "Path Authority",
    philosophy: "Core Philosophy",
    archiveStatus: "Archive Status",
    close: "Close",
    beastsKicker: "BEAST ECOLOGY",
    beastsTitle: "Core Beast",
    beastsBody: "Core Beasts are not ordinary monsters. They are creatures born from the influence of Core Energy. When the world's power seeps into animals, nature, or ancient lifeforms, they evolve into Beasts with their own Core identity, usually aligned with one of the world's 22 main Paths.",
    specialKicker: "SPECIAL BEAST",
    specialTitle: "Special Beast",
    specialBody: "Special Beasts are exceptionally rare entities. Some are not known for destruction, but for their ability to soothe, slow Madness, and temporarily stabilize nearby Core flow. Many of them do not belong to any Path directly, and will only accept those they deem worthy.",
    comingSoon: "Coming Soon",
    linkKicker: "WARDEN × BEAST",
    linkTitle: "Core Link",
    linkBody: "Core Link is a resonance bond between a Warden and a Core Beast. A link is not determined by power alone. It depends on Path affinity, instinct, personality, and balance of pressure. Some bonds are cooperation, some are selection, and some can never be forced.",
    othersKicker: "ITEMS · RELICS · FUTURE ARCHIVE",
    othersTitle: "Others",
    othersBody: "Beyond Paths and Beasts, this world also contains items, Core relics, and visual archives that are not yet fully revealed. Some of that information can live directly inside the images, making future expansion easier without changing the structure of the site too much.",
    archiveKicker: "LORE ARCHIVE",
    archiveTitle: "MADNESS EQUILIBRIUM",
    archiveBody: "Power is never free. Every Path grants authority, but also invites distortion, obsession, mutation, and Madness. Balance is the heart of this world.",
    sealed: "Data Sealed",
    futureStory: "This area can later be used for the full novel story and expanded lore.",
    storyKicker: "STORY ARCHIVE",
    storyTitle: "Story Archive",
    storyBody: "Read Core Warden in episode format with horizontal storyboard images for each chapter. The story automatically switches between Thai and English with the website language toggle.",
    contactKicker: "CONTACT THE ARCHIVE",
    contactTitle: "Follow & Join the Community",
    contactBody: "Follow Core Warden updates on TikTok or join the Discord community to discuss theories, share ideas, and follow future archive releases.",
    tiktokButton: "TikTok",
    discordButton: "Discord",
  },
};

const PILLARS = [
  { key: "Primordials", title: "The Primordials", thai: "เสาหลักปฐมธาตุ", color: "from-emerald-400/30 via-orange-400/20 to-cyan-400/20", paths: ["Flora", "Tides", "Flame", "Ice", "Gales", "Terra", "Thunder"] },
  { key: "Vitalities", title: "The Vitalities", thai: "เสาหลักชีวภาพ", color: "from-lime-300/30 via-white/10 to-yellow-200/20", paths: ["Flora Heal", "Restoration", "Spirit", "Holy Light"] },
  { key: "Abstracts", title: "The Abstracts", thai: "เสาหลักนามธรรม", color: "from-red-500/25 via-purple-500/25 to-slate-300/10", paths: ["Blood", "Wisdom", "Truth", "Darkness", "Illusion"] },
  { key: "Celestials", title: "The Celestials", thai: "เสาหลักดาราจักร", color: "from-blue-400/25 via-violet-400/25 to-yellow-300/20", paths: ["Time", "Astronomy", "Chaos-Space", "Fate"] },
  { key: "Constructs", title: "The Constructs", thai: "เสาหลักสิ่งสร้าง", color: "from-zinc-300/25 via-amber-300/15 to-purple-500/20", paths: ["Machinery", "Shadow"] },
];

const PATH_DATA = [{'name': 'Flora', 'thai': 'พฤกษา', 'pillar': 'Primordials', 'descTH': 'ควบคุมพืช เถาวัลย์ หนาม และระบบนิเวศ เหมาะกับการควบคุมพื้นที่', 'descEN': 'Controls plants, vines, thorns, and ecosystems for area control.', 'authority': 'Growth · Vines · Ecosystem', 'examplesTH': ['เถาวัลย์พันธนาการศัตรู', 'กำแพงหนามป้องกันพื้นที่', 'สปอร์รบกวนการรับรู้'], 'examplesEN': ['Bind enemies with vines', 'Raise thorn walls', 'Use spores to disrupt perception']}, {'name': 'Tides', 'thai': 'กระแสน้ำ', 'pillar': 'Primordials', 'descTH': 'พลังแห่งน้ำ คลื่น และกระแส ใช้ได้ทั้งโจมตี ป้องกัน และกักขัง', 'descEN': 'Power over water, waves, and currents for offense, defense, and restraint.', 'authority': 'Waves · Currents · Water Pressure', 'examplesTH': ['สร้างกระแสน้ำวน', 'อัดแรงดันน้ำเป็นเกราะ', 'ทำให้สนามรบลื่นไหล'], 'examplesEN': ['Create whirlpools', 'Compress water pressure as a shield', 'Turn the battlefield fluid']}, {'name': 'Flame', 'thai': 'เปลวเพลิง', 'pillar': 'Primordials', 'descTH': 'พลังแห่งเปลวไฟ การระเบิด และความร้อนสูง ตรงไปตรงมาและรุนแรง', 'descEN': 'Power of flame, explosion, and extreme heat. Direct and destructive.', 'authority': 'Fire · Combustion · Heat', 'examplesTH': ['เร่งอุณหภูมิให้ปะทุ', 'ปล่อยแรงระเบิดจากไฟ', 'เคลือบร่างกายด้วยเพลิง'], 'examplesEN': ['Ignite sudden combustion', 'Release explosive fire bursts', 'Coat the body in flame']}, {'name': 'Ice', 'thai': 'น้ำแข็ง', 'pillar': 'Primordials', 'descTH': 'หยุดยั้ง แช่แข็ง และลดการเคลื่อนไหว เหมาะกับการคุมจังหวะสนามรบ', 'descEN': 'Freezes, restrains, and slows movement. Excellent for control.', 'authority': 'Frost · Stillness · Crystal Ice', 'examplesTH': ['ผลึกน้ำแข็งตรึงเป้าหมาย', 'ลดอุณหภูมิเพื่อชะลอศัตรู', 'สร้างกำแพงน้ำแข็ง'], 'examplesEN': ['Freeze targets with crystal ice', 'Lower temperature to slow foes', 'Create ice walls']}, {'name': 'Gales', 'thai': 'สายลม', 'pillar': 'Primordials', 'descTH': 'ควบคุมลม แรงดัน และความเร็ว ความเร็วคืออาวุธหลัก', 'descEN': 'Controls wind, pressure, and speed. Speed is the main weapon.', 'authority': 'Wind · Speed · Pressure', 'examplesTH': ['พุ่งตัวด้วยแรงลม', 'ใบมีดลมระยะกลาง', 'เบี่ยงวิถีโจมตีด้วยแรงดัน'], 'examplesEN': ['Dash with wind force', 'Launch mid-range wind blades', 'Deflect attacks with pressure']}, {'name': 'Terra', 'thai': 'ปฐพี', 'pillar': 'Primordials', 'descTH': 'พลังแห่งหิน ดิน และแร่ แข็งแกร่ง หนักแน่น และเหมาะกับการป้องกัน', 'descEN': 'Power over stone, soil, and minerals. Heavy, durable, and defensive.', 'authority': 'Stone · Earth · Minerals', 'examplesTH': ['ยกกำแพงหิน', 'ยุบพื้นดินจับขาศัตรู', 'สร้างเกราะแร่บนร่างกาย'], 'examplesEN': ['Raise stone walls', 'Collapse the ground to trap foes', 'Form mineral armor']}, {'name': 'Thunder', 'thai': 'อสุนี', 'pillar': 'Primordials', 'descTH': 'สายฟ้า ความเร็ว และการกระตุ้นประสาท รวดเร็วและดุดัน', 'descEN': 'Lightning, speed, and nerve stimulation. Fast and aggressive.', 'authority': 'Lightning · Nerves · Burst Speed', 'examplesTH': ['ปล่อยสายฟ้าฉับพลัน', 'กระตุ้นประสาทให้ตอบสนองไว', 'รบกวนการเคลื่อนไหวด้วยสนามไฟฟ้า'], 'examplesEN': ['Release instant lightning strikes', 'Stimulate reflexes', 'Disrupt movement with electric fields']}, {'name': 'Flora Heal', 'thai': 'พฤกษาเยียวยา', 'pillar': 'Vitalities', 'descTH': 'ใช้พลังชีวิตของพืชเพื่อเยียวยา ฟื้นฟู และชำระพิษ', 'descEN': 'Uses plant life force to heal, restore, and cleanse toxins.', 'authority': 'Healing Flora · Purification · Recovery', 'examplesTH': ['ละอองพฤกษาฟื้นฟูบาดแผล', 'ดูดซับพิษออกจากร่างกาย', 'สร้างเขตเยียวยา'], 'examplesEN': ['Heal wounds with floral mist', 'Absorb toxins', 'Create healing zones']}, {'name': 'Restoration', 'thai': 'การฟื้นคืน', 'pillar': 'Vitalities', 'descTH': 'ฟื้นสภาพ ซ่อมแซม และคืนความสมบูรณ์ให้สิ่งที่เสียหาย', 'descEN': 'Restores, repairs, and returns damaged things toward wholeness.', 'authority': 'Repair · Reconstruction · Renewal', 'examplesTH': ['ซ่อมแซมวัตถุแตกหัก', 'เร่งการสมานแผล', 'คืนสภาพพื้นที่เสียหาย'], 'examplesEN': ['Repair broken objects', 'Accelerate healing', 'Restore damaged zones']}, {'name': 'Spirit', 'thai': 'วิญญาณ', 'pillar': 'Vitalities', 'descTH': 'เกี่ยวข้องกับวิญญาณ จิตสำนึก และตัวตนภายใน โจมตีจิตวิญญาณได้โดยตรง', 'descEN': 'Deals with souls, consciousness, and inner identity.', 'authority': 'Soul · Consciousness · Spirit Pressure', 'examplesTH': ['สัมผัสร่องรอยวิญญาณ', 'โจมตีระดับจิตใจ', 'สร้างม่านวิญญาณป้องกัน'], 'examplesEN': ['Sense soul traces', 'Attack the mind directly', 'Create spiritual barriers']}, {'name': 'Holy Light', 'thai': 'แสงศักดิ์สิทธิ์', 'pillar': 'Vitalities', 'descTH': 'แสงศักดิ์สิทธิ์ การชำระล้าง การปกป้อง และการลงทัณฑ์', 'descEN': 'Holy light for purification, protection, and judgment.', 'authority': 'Purification · Protection · Judgment', 'examplesTH': ['ลำแสงชำระล้าง', 'เกราะแสงป้องกัน', 'ลงทัณฑ์สิ่งชั่วร้าย'], 'examplesEN': ['Release purifying light', 'Create light shields', 'Judge evil with sacred radiance']}, {'name': 'Blood', 'thai': 'โลหิต', 'pillar': 'Abstracts', 'descTH': 'ควบคุมเลือด พลังชีวิต และการเสียสละ ยิ่งใช้หนักยิ่งเสี่ยงคลุ้มคลั่ง', 'descEN': 'Controls blood, life force, and sacrifice. Heavy use risks frenzy.', 'authority': 'Blood · Sacrifice · Life Force', 'examplesTH': ['ควบคุมเลือดเป็นอาวุธ', 'เร่งการไหลเวียนเพิ่มพละกำลัง', 'อ่านร่องรอยจากเลือด'], 'examplesEN': ['Shape blood into weapons', 'Boost strength via circulation', 'Read traces through blood']}, {'name': 'Wisdom', 'thai': 'ปัญญา', 'pillar': 'Abstracts', 'descTH': 'ความรู้ การวิเคราะห์ ความทรงจำ และความเข้าใจสิ่งลี้ลับ', 'descEN': 'Knowledge, analysis, memory, and understanding of mysteries.', 'authority': 'Analysis · Memory · Knowledge', 'examplesTH': ['วิเคราะห์รูปแบบการโจมตี', 'จดจำข้อมูลสนามรบอย่างแม่นยำ', 'อ่านโครงสร้างพลัง'], 'examplesEN': ['Analyze attack patterns', 'Store battlefield information', 'Read energy structures']}, {'name': 'Truth', 'thai': 'สัจธรรม', 'pillar': 'Abstracts', 'descTH': 'เส้นทางแห่งความจริง กฎ และการเปิดเผย ทำลายคำลวงได้', 'descEN': 'A Path of truth, law, and revelation that breaks deception.', 'authority': 'Law · Revelation · Judgment', 'examplesTH': ['มองทะลุภาพลวง', 'เปิดเผยเงื่อนไขที่ซ่อนอยู่', 'บังคับให้ความจริงปรากฏ'], 'examplesEN': ['See through illusions', 'Reveal hidden conditions', 'Force truth into the open']}, {'name': 'Darkness', 'thai': 'ความมืด', 'pillar': 'Abstracts', 'descTH': 'ควบคุมความมืด ช่องว่าง และความกลัว เหมาะกับการกลืนกินและซ่อนเร้น', 'descEN': 'Controls darkness, void, and fear for concealment and mental pressure.', 'authority': 'Darkness · Void · Fear', 'examplesTH': ['กลืนแสงในพื้นที่', 'ซ่อนการเคลื่อนไหวในความมืด', 'ปล่อยแรงกดดันแห่งความกลัว'], 'examplesEN': ['Swallow light in an area', 'Hide movement within darkness', 'Release fear pressure']}, {'name': 'Illusion', 'thai': 'มายา', 'pillar': 'Abstracts', 'descTH': 'บิดเบือนการรับรู้ สร้างภาพลวง และทำให้ศัตรูแยกความจริงไม่ออก', 'descEN': 'Distorts perception, creates illusions, and confuses truth and falsehood.', 'authority': 'Perception · Mirage · Misdirection', 'examplesTH': ['สร้างร่างลวง', 'บิดเบือนระยะและเสียง', 'ทำให้เป้าหมายเห็นสิ่งที่หวาดกลัว'], 'examplesEN': ['Create illusion bodies', 'Distort distance and sound', 'Show targets their deepest fear']}, {'name': 'Time', 'thai': 'กาลเวลา', 'pillar': 'Celestials', 'descTH': 'แตะต้องเวลา จังหวะ และความเสื่อมสลาย อันตรายต่อสติผู้ใช้มาก', 'descEN': 'Touches time, rhythm, and decay. Extremely dangerous to the mind.', 'authority': 'Time · Rhythm · Decay', 'examplesTH': ['ชะลอการเคลื่อนไหวชั่วคราว', 'เร่งการเสื่อมสภาพบางอย่าง', 'สัมผัสจังหวะเวลาที่ผิดปกติ'], 'examplesEN': ['Temporarily slow motion', 'Accelerate decay', 'Sense abnormal time rhythms']}, {'name': 'Astronomy', 'thai': 'ดาราศาสตร์', 'pillar': 'Celestials', 'descTH': 'พลังแห่งดาว วงโคจร แรงดึงดูด และปรากฏการณ์ท้องฟ้า', 'descEN': 'Power of stars, orbits, gravity, and celestial phenomena.', 'authority': 'Stars · Orbit · Cosmic Flow', 'examplesTH': ['อ่านทิศทาง Core Flow ผ่านตำแหน่งดาว', 'ใช้แรงดึงดูดจำลองดึงหรือผลัก', 'เห็นร่องรอยของดวงดาวที่ดับสูญ'], 'examplesEN': ['Read Core flow through stellar positions', 'Pull or repel with simulated gravity', 'See traces of fallen stars']}, {'name': 'Chaos-Space', 'thai': 'โกลาหลมิติ', 'pillar': 'Celestials', 'descTH': 'บิดเบือนมิติ ระยะทาง และความต่อเนื่องของพื้นที่ ทรงพลังแต่เสี่ยงเสียสติ', 'descEN': 'Distorts space, distance, and continuity. Powerful but mentally dangerous.', 'authority': 'Spatial Rift · Distortion · Warp', 'examplesTH': ['บิดระยะทางสั้นๆ', 'สร้างรอยแยกมิติหลบหลีก', 'ทำให้ทิศทางสนามรบสับสน'], 'examplesEN': ['Twist short distances', 'Create brief spatial rifts', 'Disorient spatial directions']}, {'name': 'Fate', 'thai': 'โชคชะตา', 'pillar': 'Celestials', 'descTH': 'เกี่ยวข้องกับเส้นด้ายของโชคชะตา ความน่าจะเป็น และจังหวะสำคัญ', 'descEN': 'Deals with threads of fate, probability, and decisive moments.', 'authority': 'Threads · Probability · Outcome', 'examplesTH': ['สัมผัสจังหวะที่เปลี่ยนผลลัพธ์', 'เบี่ยงความน่าจะเป็นเล็กน้อย', 'อ่านเส้นทางความเป็นไปได้'], 'examplesEN': ['Sense moments that alter outcomes', 'Slightly bend probability', 'Read branching possibilities']}, {'name': 'Machinery', 'thai': 'จักรกล', 'pillar': 'Constructs', 'descTH': 'จักรกล กลไก การดัดแปลง และวิวัฒนาการเชิงเครื่องจักร', 'descEN': 'Machines, mechanisms, modification, and mechanical evolution.', 'authority': 'Mechanism · Circuits · Augmentation', 'examplesTH': ['สร้างกลไก Core ช่วยต่อสู้', 'เสริมอุปกรณ์ด้วยวงจรพลังงาน', 'วิเคราะห์และควบคุมเครื่องจักร'], 'examplesEN': ['Build small Core mechanisms', 'Enhance tools with energy circuits', 'Analyze and control machinery']}, {'name': 'Shadow', 'thai': 'เงา', 'pillar': 'Constructs', 'descTH': 'ควบคุมเงา รูปร่างมืด และการซ่อนตัว เหมาะกับการลอบโจมตี', 'descEN': 'Controls shadows, dark forms, and concealment for ambush tactics.', 'authority': 'Shadow · Concealment · Ambush', 'examplesTH': ['เคลื่อนที่ผ่านเงาระยะสั้น', 'สร้างเงาโจมตีจากมุมอับ', 'ซ่อนตัวและเสียงในความมืด'], 'examplesEN': ['Move through shadows briefly', 'Attack from blind spots with shadow forms', 'Hide presence in darkness']}];

const CORE_BEASTS = [
  { file: "/images/beasts/beast-1.png", name: "CRYONIX OF ICE", path: "Ice", tagTH: "Core Beast · เส้นทางน้ำแข็ง", tagEN: "Core Beast · Path of Ice", descTH: "Core Beast แห่งเส้นทางน้ำแข็ง ผู้เป็นตัวแทนของความนิ่ง ความหนาว และความเงียบงัน ร่างกายของมันปกคลุมด้วยผลึกน้ำแข็ง Core ที่ดูดซับความร้อนและพลังงานรอบตัวอย่างต่อเนื่อง จนพื้นที่ที่มันอาศัยกลายเป็นดินแดนน้ำแข็งอันเงียบสงบและมี Madness ต่ำผิดธรรมชาติ", descEN: "A Core Beast of the Ice Path that embodies stillness, cold, and silence. Its crystalline Core ice continuously absorbs heat and surrounding energy, turning its territory into a silent frozen wasteland where Madness becomes unnaturally calm.", metaTH: "Nature: Cold • Silent • Territorial | Relation: Rare • Difficult to Link • Highly Stable", metaEN: "Nature: Cold • Silent • Territorial | Relation: Rare • Difficult to Link • Highly Stable" },
  { file: "/images/beasts/beast-2.png", name: "VORASTRIX OF ASTRONOMY", path: "Astronomy", tagTH: "Core Beast · เส้นทางดาราศาสตร์", tagEN: "Core Beast · Path of Astronomy", descTH: "สิ่งมีชีวิตขนาดมหึมาที่ล่องลอยท่ามกลางหมู่ดาว พายุจักรวาล และกระแสมิติที่แตกร้าว ร่องรอยของ Core แห่งดวงดาวโบราณภายในร่างทำให้พื้นที่รอบตัวบิดเบี้ยวเป็นรูปแบบคล้ายกาแล็กซี เสียงร้องของมันสามารถนำมาซึ่งภาพนิมิตของดาวที่ล่มสลายและอนาคตอันไกลโพ้น", descEN: "A colossal Beast drifting through starfields, cosmic storms, and fractured dimensional currents. Ancient stellar Core traces within its body distort nearby space into galaxy-like formations, and its song can trigger visions of collapsing stars and distant futures.", metaTH: "Nature: Ancient • Cosmic • Silent | Relation: Extremely Rare • Mentally Dangerous • Highly Intelligent", metaEN: "Nature: Ancient • Cosmic • Silent | Relation: Extremely Rare • Mentally Dangerous • Highly Intelligent" },
  { file: "/images/beasts/beast-3.png", name: "SYLVARION OF FLORA HEAL", path: "Flora Heal", tagTH: "Core Beast · เส้นทางพฤกษาเยียวยา", tagEN: "Core Beast · Path of Flora Heal", descTH: "Core Beast ศักดิ์สิทธิ์ผู้แผ่แสงเยียวยาอันอ่อนโยน ช่วยลดการสะสมของ Madness ฟื้นฟูสิ่งมีชีวิตใกล้เคียง และสร้างเขตสงบที่มนุษย์กับบีชสามารถอยู่ร่วมกันได้อย่างมั่นคง แม้สงบ แต่จะปกป้องผู้บาดเจ็บและพันธมิตรอย่างเด็ดขาด", descEN: "A sacred healing Beast that radiates gentle restorative light, reduces Madness accumulation, and creates peaceful zones where humans and Beasts can remain emotionally stable. Though peaceful, it fiercely protects the wounded and its allies.", metaTH: "Nature: Gentle • Protective • Sacred | Relation: Rare • High Compatibility with Support-Type Wardens • Difficult to Corrupt", metaEN: "Nature: Gentle • Protective • Sacred | Relation: Rare • High Compatibility with Support-Type Wardens • Difficult to Corrupt" },
  { file: "/images/beasts/beast-4.png", name: "PYROVYRN OF FLAME", path: "Flame", tagTH: "Core Beast · เส้นทางเปลวเพลิง", tagEN: "Core Beast · Path of Flame", descTH: "Core Beast ในตำนานแห่งไฟผู้เกิดจากเขตภูเขาไฟรุนแรง ปีกของมันสามารถเปลี่ยนสนามรบให้กลายเป็นทะเลลาวา และยิ่งแข็งแกร่งขึ้นเมื่ออุณหภูมิ ความโกรธ ความหวาดกลัว และสงครามในบริเวณนั้นทวีความรุนแรงขึ้น", descEN: "A legendary fire Beast born within violent volcanic regions. Its wings can turn battlefields into seas of molten flame, and it grows stronger as heat, anger, fear, and warfare intensify around it.", metaTH: "Nature: Violent • Prideful • Territorial | Relation: Rare • Extremely Difficult to Link • High Flame Resonance", metaEN: "Nature: Violent • Prideful • Territorial | Relation: Rare • Extremely Difficult to Link • High Flame Resonance" },
];

const SPECIAL_BEASTS = [
  { typeTH: "Luminae / Balance Entity", typeEN: "Luminae / Balance Entity", file: "/images/beasts/luminae-butterfly.png", name: "LUMINAE BUTTERFLY", descTH: "Luminae Butterfly คือ Special Beast ที่หายากมาก และไม่ได้สังกัดเส้นทางพลังใดโดยตรง มันจะเข้าใกล้เฉพาะผู้ที่มี Core Resonance สมดุล หรือยังรักษาสติและเจตจำนงไว้ได้ท่ามกลาง Madness มีความสามารถในการปลอบประโลม ลดแรงกระตุ้นของ Madness และทำให้ Core รอบตัวเสถียรขึ้นชั่วคราว", descEN: "Luminae Butterfly is an extremely rare Special Beast that does not belong to any specific Path. It approaches only those with balanced Core Resonance or those who can preserve their sanity amid Madness. It soothes unstable emotions, reduces Madness impulses, and temporarily stabilizes nearby Core flow.", metaTH: "Nature: Gentle • Calming • Balance | Relation: Extremely Rare • Chooses Its Own Warden • Cannot Be Forced", metaEN: "Nature: Gentle • Calming • Balance | Relation: Extremely Rare • Chooses Its Own Warden • Cannot Be Forced" },
  { typeTH: "Luminae / Sacred Support", typeEN: "Luminae / Sacred Support", file: "/images/beasts/special-beast-2.png", name: "LUMINAE PEGASUS", descTH: "หนึ่งใน Luminae ที่หายากที่สุด ว่ากันว่าเป็นผู้พิทักษ์ศักดิ์สิทธิ์แห่งดินแดนที่ Madness ยังไม่แผ่ซ่าน ปีกของมันปล่อยละอองแสง Core ที่ช่วยปลอบประโลมชีวิตรอบข้าง ลดการแพร่กระจายของ Core Madness และชำระล้างพื้นที่ที่ปนเปื้อนได้ชั่วคราว", descEN: "One of the rarest known Luminae, often described as a sacred guardian of lands untouched by Madness. Its wings release luminous Core particles that calm nearby lifeforms, reduce the spread of Core Madness, and temporarily purify corrupted zones.", metaTH: "Nature: Sacred • Intelligent • Peaceful | Relation: Extremely Rare • Emotionally Selective • High Anti-Madness Resonance", metaEN: "Nature: Sacred • Intelligent • Peaceful | Relation: Extremely Rare • Emotionally Selective • High Anti-Madness Resonance" },
  { typeTH: "Luminae / Emotional Harmony", typeEN: "Luminae / Emotional Harmony", file: "/images/beasts/special-beast-3.png", name: "NOCTILUMARIS", descTH: "โลมาศักดิ์สิทธิ์แห่งทะเลเงียบที่ปรากฏเฉพาะในมหาสมุทรซึ่งกระแส Core ยังสมดุลอย่างสมบูรณ์ คลื่นเรโซแนนซ์อันอ่อนโยนของมันช่วยให้สัญชาตญาณรุนแรงสงบลง ลดการสะสมของ Madness และปกป้องชีวิตใกล้เคียงผ่านการควบคุมกระแส Core รอบตัว", descEN: "A majestic Luminae dolphin that appears only in silent oceans where Core tides remain perfectly balanced. Its gentle resonance calms violent instincts, reduces Madness accumulation, and protects nearby life through subtle control of surrounding Core flow.", metaTH: "Nature: Intelligent • Gentle • Mysterious | Relation: Extremely Rare • Difficult to Approach • High Mental Resonance", metaEN: "Nature: Intelligent • Gentle • Mysterious | Relation: Extremely Rare • Difficult to Approach • High Mental Resonance" },
];

const STORY_EPISODES = [
  {
    "ep": 1,
    "titleTH": "ดวงดาวที่ร่วงหล่น",
    "titleEN": "The Fallen Star",
    "image": "/images/story/ep-1.png",
    "bodyTH": "ฝนเลือดสีเทาแดงกระหน่ำลงมาอย่างโหดร้าย\n\nหยดหนักๆ กระแทกพื้นถนนจนแตกกระจาย กลิ่นคาวเลือดผสมสนิมเหล็กและขยะเน่าคละคลุ้งจนแทบหายใจไม่ออก เรนยืนตัวสั่นอยู่ใต้ป้ายรถเมล์เก่าๆ ที่กำลังจะพัง รอบตัวเขาเต็มไปด้วยความตาย\n\nคนคนหนึ่งกรีดร้องก่อนร่างกายจะถูกแรงดึงจากฟ้า ฉีกขาดเป็นชิ้นๆ กลางอากาศ เลือดและเนื้อกระจายลงมาเหมือนฝน เด็กผู้หญิงคนหนึ่งหัวระเบิดด้วยเสียงกรีดร้องที่ขาดห้วง สมองและเลือดสาดใส่รถยนต์ที่จอดนิ่ง\n\nท้องฟ้ากำลังฉีกขาด\n\nรอยแหวะสีดำอมม่วงขนาดมหึมาเปิดออกเหนือเมือง ภายในเต็มไปด้วยดวงดาวที่ลุกไหม้และส่งเสียงร้องโหยหวนราวกับมีชีวิต\n\nเม็ดฝนหยุดนิ่งกลางอากาศ แล้วแสงฟ้าเงินก็ระเบิด ทุกอย่างในเมืองถูกกลืนกิน เสียงกรีดร้องดังก้องไปทั่วก่อนจะเงียบหายในพริบตา\n\n.\n\n.\n\n.\n\nอีกโลกหนึ่ง...\n\nหมู่บ้านชายป่าถูกทำลายล้างอย่างโหดเหี้ยม ฝนเลือดตกหนักจนพื้นกลายเป็นโคลนแดงเหนียวเหนอะ\n\nCore Beast งูยักษ์สีดำเลื้อยผ่านบ้านไม้ ทุกครั้งที่มันขยับ กลิ่นเน่าและเลือดก็ลอยคละคลุ้ง ชายคนหนึ่งถูกกัดครึ่ง ไส้ทะลักลงพื้น เขายังร้องลั่นด้วยความเจ็บปวดก่อนถูกกลืนทั้งเป็น\n\nแม่ของเด็กชายถูกหางงูฟาดกระเด็น กิ่งไม้แหลมแทงทะลุท้อง เลือดพุ่งเป็นสาย เธอใช้มือสุดแรงจิกแขนลูกชายไว้แน่น\n\n“วิ่ง… อย่าหยุด…!!”\n\nหางงูฟาดลงมาอีกครั้ง\n\nกร๊อบ!!\n\nกระดูกเด็กชายแตกหลายจุด ร่างกระเด็นกระแทกต้นไม้ เลือดไหลจากปาก หู ตา และจมูก เขานอนจมโคลนเลือด มองเห็นศพพ่อและแม่ที่ถูกฉีกขาดไม่ไกล ความเจ็บปวด ความสิ้นหวัง และกลิ่นความตายกลืนกินทุกอย่าง\n\n.\n\n.\n\n.\n\nในวินาทีนั้น...\n\nดวงวิญญาณของเรนตกลงผ่านรอยแยกมิติ ปะทะเข้ากับร่างที่กำลังจะตาย ความเจ็บปวดราวกับถูกฉีกวิญญาณเป็นพันชิ้น\n\n“ยินดีต้อนรับสู่นรกใบใหม่”\n\n.\n\n.\n\n.\n\nCore Beast คำรามก้อง!\n\nแต่ลำแสงสีทองพุ่งทะลุฝนเลือดลงมา วาร์คฟันงูยักษ์อย่างโหดเหี้ยมและรวดเร็ว เลือดดำฉีดพุ่ง เนื้อและเกล็ดกระจาย\n\nหลังสังหารเสร็จ เขาเดินผ่านซากศพมนุษย์ที่กระจัดกระจาย เขาหยุดมองศพพ่อแม่ของเด็กชาย ก่อนจะก้มลงยกร่างเด็กขึ้นพาดบ่า เลือดไหลเปื้อนเสื้อคลุมเขา\n\n“…ข้าไม่ได้ช่วยเพราะเมตตา” เสียงพึมพำแผ่วเบา “แต่เพราะข้าเคยได้รับจากพ่อของแก”\n\nบนท้องฟ้า ดวงดาวสีม่วงอมดำกะพริบแสงหิวโหย เสียงกระซิบดังขึ้นในความมืด...\n\n“Balance…”",
    "bodyEN": "A gray-red blood rain tears through the city as Ren stands beneath a ruined bus stop, watching the sky split open above him. A violet-black rift reveals burning stars that seem almost alive, and the entire world is swallowed by light.\n\nIn another world, a forest village is being destroyed by a giant black serpent Core Beast. A dying boy lies in mud and blood after seeing his parents torn apart. At that moment, Ren's soul falls through the dimensional rift and crashes into the boy's dying body.\n\nPain floods him like his spirit is being shredded into a thousand pieces.\n\n“Welcome to a new hell.”\n\nBefore the Beast can finish the slaughter, a golden blade descends through the blood rain. Vark kills the serpent with brutal speed, then lifts the wounded boy onto his shoulder. He does not save him out of mercy, but because he once owed the boy's father.\n\nAbove them, a dark violet star flickers hungrily.\n\nA whisper echoes in the dark.\n\n“Balance…”"
  },
  {
    "ep": 2,
    "titleTH": "ราคาของการเอาชีวิตรอด",
    "titleEN": "The Price of Survival",
    "image": "/images/story/ep-2.png",
    "bodyTH": "เสียงฝนเลือดยังคงตกกระทบหลังคาไม้เก่าๆ อย่างไม่ขาดสาย\n\nหยดสีแดงเข้มไหลย้อยลงตามขอบหน้าต่าง ราวกับบ้านทั้งหลังกำลังถูกแช่ในเลือด กลิ่นสมุนไพรฉุน กลิ่นเลือดแห้งคาว และกลิ่นเนื้อเน่าอ่อนๆ ลอยคละคลุ้งทั่วห้องแคบ\n\nนรันค่อยๆ ลืมตาขึ้นช้าๆ ความเจ็บปวดแล่นไปทั่วร่างทันที โดยเฉพาะหน้าอกและแขนซ้ายที่กระดูกยังแตกร้าว เขาพยายามลุกขึ้น แต่เพียงขยับตัว—\n\nกร๊อบ…\n\nความเจ็บจากกระดูกที่หักเล่นงานจนเขาก้มตัวลงแทบอาเจียน\n\n“…อย่าขยับ”\n\nเสียงเย็นชาไร้อารมณ์ดังขึ้นจากมุมห้อง นรันสะดุ้ง\n\nวาร์คนั่งลับมีดอยู่ข้างกำแพงไม้เก่า แกรก… แกรก… เสียงหินลับมีดเสียดสีกับใบดาบดังช้าๆ ดวงตาสีหม่นของเขามองมานรันเพียงครู่เดียวก่อนหันกลับไปลับดาบต่อ\n\n“แกยังไม่ตาย… ก็นับว่าโชคดีมากแล้ว”\n\nนรันเงียบ\n\nภาพสุดท้ายก่อนหมดสติย้อนกลับมา ศพพ่อถูกงูกัดครึ่ง ไส้ทะลัก แม่ถูกกิ่งไม้แทงทะลุท้อง เลือดพุ่งเป็นสาย และร่างของตัวเองที่กระเด็นกระแทกต้นไม้ แม้จะไม่ใช่พ่อแม่แท้ๆ ของเขา แต่ความเจ็บปวดยังคงแทงทะลุหัวใจ ราวกับความทรงจำของเด็กคนนี้ยังตกค้างอยู่ในร่าง\n\n“…ที่นี่ที่ไหน”\n\n“เมืองชายแดน” วาร์คตอบสั้นๆ “หมู่บ้านของแกหายไปแล้ว”\n\nวาร์คพูดต่อด้วยน้ำเสียงเรียบ\n\n“จำไว้ โลกนี้ไม่มีใครสนใจคนอ่อนแอ ถ้าแกยังอ่อนแอ… แกก็จะตายเหมือนพวกนั้น”\n\nนรันกัดฟันแน่น แต่วาร์คยังพูดต่อ\n\n“ไม่มีใครช่วยทัน ไม่มีปาฏิหาริย์ ไม่มีพระเจ้า มีแต่คนที่รอด…กับคนที่ตาย”\n\nสัปดาห์ต่อมา\n\nนรันถูกลากออกมานอกบ้านตั้งแต่ฟ้ายังไม่สว่าง อากาศเย็นยะเยือกจนหายใจเป็นไอ\n\n“วิ่ง”\n\nวาร์คโยนกระสอบทรายหนักๆ ใส่หน้าอกเขา นรันแทบล้มทันที\n\n“ไหวบ้าอะไร…”\n\n“ถ้าแค่นี้ยังไม่ไหว แกก็อยู่โลกนี้ไม่ได้” วาร์คพูดเรียบๆ ก่อนเดินนำออกไป\n\nนรันกัดฟันแบกกระสอบขึ้นหลัง เริ่มวิ่งตามอย่างทุลักทุเล\n\nโคลน หิน ฝนเลือด ทุกอย่างทำให้ร่างกายเด็กสิบสี่ปีแทบพัง เขาล้มหลายครั้ง หัวเข่าถลอกจนเลือดไหล ไหล่ช้ำจากน้ำหนักกระสอบ แต่ทุกครั้งที่ล้ม วาร์คจะพูดเพียงคำเดียว\n\n“ลุก”\n\nไม่มีคำช่วย ไม่มีคำปลอบ มีเพียงสายตาเย็นชาที่มองว่าเด็กคนนี้จะ “รอด” หรือไม่\n\n.\n\n.\n\n.\n\nกลางดึกของคืนหนึ่ง เสียงกรีดร้องดังลั่นจากถนนด้านนอก\n\nอ๊ากกกกกก!!!\n\nนรันสะดุ้งตื่น\n\n“Madness!! มี Warden คลั่ง!!”\n\nวาร์คลุกขึ้นทันที คว้าดาบก่อนเดินออกไป นรันรีบตามออกไป\n\nถนนกลางเมืองเต็มไปด้วยผู้คนที่วิ่งหนีตาย กลางลานดิน ชายคนหนึ่งกำลังกรีดร้องอย่างบ้าคลั่ง เส้นเลือดสีดำปูดโปนทั่วร่าง เนื้อที่แขนเริ่มเน่าเปื่อย กลิ่นเหม็นฉุนลอยคละคลุ้ง ดวงตาแดงก่ำ เขาฉีกเนื้อตัวเองด้วยเล็บจนเลือดไหล\n\n“มันอยู่ในหัวข้า!!”\n\n“มันกระซิบตลอดเวลา!!”\n\n“หยุด… หยุดที…!!”\n\nแล้วเขาก็พุ่งเข้าใส่หญิงคนหนึ่ง กัดคอเธอขาดในพริบตา เลือดพุ่งกระจาย\n\nวาร์คเดินผ่านผู้คนที่แตกตื่นอย่างเงียบๆ ดาบสีทองหม่นถูกชักออก\n\nฉัวะ!!\n\nหัวของ Warden ที่คลั่งกลิ้งตกลงพื้น เลือดพุ่งจากคอขาดเหมือนน้ำพุ ร่างไร้หัวยังกระตุกอยู่พักหนึ่งก่อนนิ่งสนิท วาร์คสะบัดเลือดออกจากดาบช้าๆ ก่อนพูดโดยไม่หันกลับมา\n\n“Core ไม่ใช่พร มันคือคำสาป”\n\nนรันยืนตัวสั่น มองศพที่ยังมีเลือดไหลไม่หยุด ไม่มีใครร้องไห้ ไม่มีใครตกใจ ราวกับทุกคนในเมืองนี้… คุ้นชินกับความตายไปแล้ว\n\nและในคืนนั้น นรันก็เริ่มเข้าใจจริงๆ\n\nโลกนี้ ไม่เคยเมตตาใคร",
    "bodyEN": "The blood rain still beats against the old wooden roof when Naran wakes in Vark's house. His body is broken, his chest and arm screaming with pain, and the last memories of the massacre return like a blade inside his skull.\n\nVark tells him the village is gone.\n\nNo one comfortingly explains this world. There is no miracle, no god, and no rescue waiting for the weak. There are only those who survive and those who die.\n\nA week later, Vark drags Naran into harsh training before dawn. Mud, stones, blood rain, and sandbags break his young body again and again. Every time he falls, Vark says only one word.\n\n“Get up.”\n\nOne night, screams erupt in the border town. A Warden has fallen into Madness. Black veins swell across his body, rotting flesh splits open, and he tears at himself while claiming something is whispering inside his head.\n\nWhen he attacks a woman, Vark cuts off his head without hesitation.\n\nAs blood sprays across the street, Vark says the truth Naran will never forget.\n\n“Core is not a blessing. It is a curse.”\n\nThat night, Naran begins to understand.\n\nThis world has never been kind to anyone."
  },
  {
    "ep": 3,
    "titleTH": "เมืองแห่งความคลุ้มคลั่ง",
    "titleEN": "City of Madness",
    "image": "/images/story/ep-3.png",
    "bodyTH": "ฝนเลือดหยุดตกแล้ว\n\nแต่กลิ่นของมันยังติดค้างอยู่ทั่วเมืองชายแดน กลิ่นคาวเหล็ก กลิ่นเนื้อเน่าเปื่อย กลิ่นโคลนชื้นผสมเลือดแห้ง ทุกครั้งที่นรันหายใจ เขารู้สึกเหมือนกำลังสูดกลิ่นความตายเข้าไปในปอด\n\nเขานั่งเงียบอยู่หน้าบ้านไม้เก่าๆ สายตาเหม่อมองผู้คนที่เดินผ่านถนนดินแดง เมืองชายแดนแห่งนี้ไม่มีชีวิต ไม่มีเสียงหัวเราะ ไม่มีตลาดคึกคัก มีเพียงผู้คนที่พยายาม “อยู่รอด” ไปวันต่อวัน\n\nชายแขนขาดคนหนึ่งเดินผ่าน ดวงตาว่างเปล่า แขนที่เหลือเต็มไปด้วยรอยแผลสีดำคล้ายเส้นเลือดที่กำลังเน่า ข้างหลังเขา เด็กผู้หญิงตัวเล็กกำลังลากเกวียนไม้ที่เต็มไปด้วยซาก Core Beast กลิ่นเลือดสดโชยผ่านจมูกนรัน บนเกวียนมีหัวของสัตว์บางอย่างที่ถูกตัดออก ดวงตามันยังเปิดค้าง เหมือนยังไม่รู้ตัวว่าตายแล้ว\n\nนรันเบือนหน้าหนีทันที\n\n“ชินไว้ซะ” เสียงวาร์คดังขึ้นจากด้านหลัง “ถ้ายังอาเจียนกับเลือดแค่นี้ แกคงอยู่ที่นี่ได้ไม่นาน”\n\nนรันกำมือแน่น\n\n“…ที่นี่มัน… เหมือนนรก”\n\nวาร์คหัวเราะในลำคอเบาๆ\n\n“ถ้าแค่เมืองชายแดนยังเรียกว่านรก แกคงไม่อยากเห็นโลกด้านนอก”\n\n.\n\n.\n\n.\n\nวาร์คพานรันเดินลึกเข้าไปในเมืองช่วงสาย ยิ่งเดินลึกเข้าไป เมืองยิ่งดูบิดเบี้ยว\n\nผู้คนจำนวนมากมีสภาพไม่ต่างจากศพเดินได้ บางคนมีผลึก Core งอกออกจากแขน บางคนมีดวงตาสีผิดปกติ บางคนนั่งพึมพำกับตัวเองอยู่ริมถนน\n\n“พวกนั้น…” นรันถามเสียงเบา\n\n“ผลข้างเคียงของ Core” วาร์คตอบทันที “บางคนใช้พลังมากเกินไป บางคน… แค่โชคร้าย”\n\nชายแก่คนหนึ่งที่นั่งหัวเราะคนเดียวอยู่ข้างกำแพง เงยหน้าขึ้น ดวงตาของเขาไม่มีตาดำเหลือแล้ว มีเพียงสีขาวขุ่นคล้ายศพแช่น้ำ\n\n“ดวงดาว…” เขาหัวเราะเสียงแหบ “ข้าได้ยินเสียงพวกมันทุกคืน… มันร้องอยู่บนฟ้า…”\n\nนรันตัวแข็ง แต่ก่อนเขาจะทันถามอะไร วาร์คก็เดินผ่านชายแก่ไปทันที\n\n“อย่าเข้าใกล้คนเสียสติ แกไม่มีวันรู้ว่าพวกมันจะคลั่งเมื่อไหร่”\n\n.\n\n.\n\n.\n\nตลาดกลางเมืองเต็มไปด้วยเสียงตะโกนซื้อขาย แต่สิ่งที่วางขายคือเขี้ยว Beast, ดวงตา Beast, กระดูกสีดำ และชิ้นเนื้อที่ยังมี Core energy ไหลเวียน\n\nชายร่างใหญ่ใช้มีดสับแขนสัตว์ประหลาดบนเขียงไม้ เลือดสีดำกระเซ็นเต็มพื้น\n\n“สดๆ จากป่าชั้นนอก! กินแล้วเพิ่มแรงได้!”\n\nนรันขมวดคิ้ว\n\n“คนกินของพวกนี้จริงเหรอ…”\n\n“ถ้าไม่กินก็อดตาย” วาร์คตอบเรียบๆ “เมืองชายแดนไม่มีทางเลือกมากนัก”\n\nทันใดนั้น เสียงโวยวายดังขึ้นจากอีกฝั่งของตลาด\n\n“จับมันไว้!!”\n\nผู้คนแตกฮือ ชายวัยกลางคนกำลังดิ้นรนบนพื้น เส้นเลือดสีดำลามขึ้นลำคอ เขากรีดร้องพลางใช้เล็บข่วนหน้าตัวเองจนเลือดไหลเต็มใบหน้า\n\n“มันอยู่ในหัวข้า…! เอามันออกไป!!”\n\nเขาเอาหัวโขกพื้นแรงๆ ปัง! ปัง! ปัง! เลือดกระเด็นเต็มพื้น ผู้คนถอยหนี ไม่มีใครเข้าไปช่วย\n\nนรันกำหมัดแน่น\n\n“…ไม่มีใครช่วยเขาเลยเหรอ”\n\nวาร์คมองภาพนั้นเงียบๆ ก่อนตอบด้วยน้ำเสียงเย็นชา\n\n“ช่วย? คนส่วนใหญ่ยังช่วยตัวเองไม่ได้ด้วยซ้ำ”\n\nชายคลั่งเงยหน้าขึ้น ดวงตาแดงฉาน ก่อนพุ่งเข้าใส่เด็กผู้หญิงที่ยืนร้องไห้อยู่ใกล้ๆ\n\nฉัวะ!!\n\nลูกธนูสีดำปักทะลุหัวเขาทันที ร่างทรุดลงกับพื้น เลือดไหลจากกะโหลก\n\nหญิงสาวในชุดหนังสีเทาเดินออกมา ใบหน้าไร้อารมณ์\n\n“เก็บศพไปเผา” เธอพูดสั้นๆ ก่อนเดินจากไป\n\nนรันยืนนิ่ง\n\n“…ทุกคนชินกับเรื่องแบบนี้แล้วเหรอ”\n\nวาร์คมองผู้คนที่เริ่มกลับไปซื้อขายกันตามปกติ\n\n“ถ้าไม่ชิน คนพวกนี้คงอยู่ที่นี่ไม่ได้”\n\n.\n\n.\n\n.\n\nช่วงเย็น วาร์คพานรันออกนอกกำแพงเมือง กลิ่นป่าชื้นและเลือดลอยปะทะหน้า\n\nไม่ไกลจากแนวต้นไม้ ซากศพมนุษย์หลายร่างนอนกระจัดกระจาย บางศพเหลือแค่ครึ่งตัว บางศพไม่มีใบหน้า บางศพถูกกินจนเห็นกระดูก แมลงสีดำจำนวนมากกำลังไต่กินเนื้อสด\n\nนรันหน้าซีด\n\n“นี่คืออะไร…”\n\n“ทีมล่า” วาร์คตอบสั้นๆ “ออกไปล่า Beast แล้วกลับมาไม่ครบ”\n\nวาร์คเดินไปหยุดหน้าศพชายคนหนึ่ง ครึ่งล่างหายไปทั้งหมด แต่ยังกำมีดแน่น เขามองอยู่อึดใจ\n\n“จำไว้ โลกนี้ไม่ได้สนใจว่าคนคนนั้นเคยเป็นใคร พออ่อนแอ… สุดท้ายก็กลายเป็นอาหารเหมือนกันหมด”\n\nนรันยืนนิ่งท่ามกลางกลิ่นศพ ท้องปั่นป่วน แต่ครั้งนี้เขาไม่ได้อาเจียน ดวงตาของเขาเปลี่ยนไปทีละนิด\n\nโลกใบนี้ไม่เปิดโอกาสให้ใครอ่อนแอ และถ้าเขายังอ่อนแออยู่ วันหนึ่ง… ศพที่นอนอยู่ตรงนี้ อาจกลายเป็นตัวเขาเอง",
    "bodyEN": "The blood rain has stopped, but its smell remains across the border town. Naran watches people move through muddy streets like walking corpses. Some are wounded, some are mutated, and some carry the marks of Core side effects beneath their skin.\n\nVark takes him deeper into the town, showing him a place where survival has replaced humanity.\n\nAt the market, people trade Beast fangs, Beast eyes, black bones, and still-warm flesh carrying traces of Core energy. Naran is horrified that people actually eat such things, but Vark tells him the truth: in a border town, choice is a luxury.\n\nA man suddenly collapses into Madness in the marketplace, black veins crawling up his neck as he claws at his face. No one moves to help. When he lunges at a crying child, a black arrow pierces his head.\n\nThe crowd returns to business as if nothing happened.\n\nLater, outside the wall, Naran sees the remains of a hunting team that never fully returned. Half-eaten bodies lie among the trees, already becoming food.\n\nFor the first time, he does not vomit.\n\nHe only stares.\n\nIf he stays weak, one day he may become nothing more than another corpse on the ground."
  },
  {
    "ep": 4,
    "titleTH": "เสียงกระซิบแห่งสมดุล",
    "titleEN": "The Whispers of Balance",
    "image": "/images/story/ep-4.png",
    "bodyTH": "หลายวันผ่านไปหลังจากนรันเริ่มคุ้นชินกับเมืองชายแดน หรืออย่างน้อย… เขาก็เริ่ม “ทำเหมือนว่าชินแล้ว”\n\nกลิ่นเลือดเริ่มไม่ทำให้คลื่นไส้อีก เสียงคนกรีดร้องยามค่ำคืนกลายเป็นเรื่องปกติ แม้แต่ตอนเดินผ่านศพข้างถนน หัวใจของเขาก็ไม่ได้สั่นแรงเหมือนวันแรก และนั่น… กลับทำให้นรันรู้สึกกลัวตัวเองมากกว่าเดิม\n\n.\n\n.\n\n.\n\nช่วงเย็นวันหนึ่ง วาร์คพานรันขึ้นไปบนกำแพงไม้ทางเหนือของเมือง ลมหนาวพัดผ่านช้าๆ ด้านนอกกำแพงคือป่าชั้นนอกที่มืดมิด ต้นไม้แห้งสูงตระหง่านราวกับเงาศพจำนวนมหาศาล\n\nนรันนั่งเงียบอยู่พักใหญ่ ก่อนถามขึ้นเบาๆ\n\n“…ทำไมคนถึงยังเลือกปลุก Core”\n\nวาร์คไม่ตอบทันที สายตาของเขามองออกไปไกลนอกกำแพง\n\n“เพราะมนุษย์กลัว กลัวจะอ่อนแอ กลัวจะถูกกิน กลัวจะไม่มีสิทธิ์เลือกชะตาตัวเอง” ลมเย็นพัดผ่านอีกครั้ง “แต่สุดท้าย… หลายคนกลับตายเพราะสิ่งที่ตัวเองเลือก”\n\nนรันเงียบไปทันที ภาพคนคลั่ง Madness ภาพทีมล่าที่เหลือแต่ซาก ภาพ Beast กินคนทั้งเป็น ยังติดอยู่ในหัวไม่หาย\n\n“…แล้วทำไมคนยังอยากเป็น Warden”\n\nครั้งนี้วาร์คหัวเราะเบาๆ แต่เสียงนั้นไม่มีความขำอยู่เลย\n\n“เพราะต่อให้โลกนี้โหดแค่ไหน… คนส่วนใหญ่ก็ยังไม่อยากเป็นเหยื่อ”\n\n.\n\n.\n\n.\n\nแกร๊งงงง!! เสียงกระดิ่งเหล็กจากหอเฝ้ายามดังสนั่น ผู้คนบนกำแพงเริ่มแตกตื่น\n\n“Beast!! ด้านเหนือ!!”\n\nนรันรีบลุกขึ้น ก่อนจะเห็นเงาร่างผิดรูปพุ่งออกมาจากป่า มันไม่ใหญ่เท่าบ้าน แต่ร่างกายบิดเบี้ยวจนน่าขยะแขยง ลำตัวคล้ายหมาป่า ขาหน้ายาวผิดปกติจนลากพื้น กรามแยกยาวถึงใบหู ฟันแตกบิ่นเต็มไปด้วยเลือดสด ขนหลุดร่วงจนเห็นผิวหนังสีคล้ำที่แตกปริ ทุกครั้งที่มันเดิน เสียงกระดูกดังกร๊อบๆ จากภายในร่าง\n\nกรรรรร… เสียงคำรามต่ำทำให้ทหารหลายคนหน้าซีด\n\n“ยิงมัน!!”\n\nลูกธนูหลายดอกพุ่งปัก แต่ Beast แทบไม่สะทกสะท้าน มันพุ่งชนแนวไม้ป้องกันจนแผ่นไม้แตกกระจาย ทหารสองคนพุ่งเข้าไปสกัด\n\nฉัวะ!! กรงเล็บตวัดเปิดหน้าอกชายคนหนึ่งจนเห็นกระดูก เลือดสาดเต็มพื้นกำแพง อีกคนแทงหอกใส่ท้องมัน แต่ Beast กลับกัดแขนเขาขาดทั้งแขนในคำเดียว เสียงกรีดร้องดังลั่น ผู้คนเริ่มถอยหนี\n\nBeast กระโจนทับร่างทหารที่ล้ม แล้วเริ่มกัดกินเนื้อสดทั้งเป็น เสียงกระดูกแตกดังลั่น เลือดไหลลงมาตามพื้นไม้เหมือนน้ำ นรันกำหมัดแน่น แม้เคยเห็นความตายมาแล้ว แต่การเห็นมนุษย์ถูก “กิน” ต่อหน้าต่อตา ยังทำให้หัวใจเย็นวาบ\n\n“ถอยไป” เสียงวาร์คดังขึ้นเรียบๆ\n\nเขาเดินผ่านทหารที่แตกตื่น ดาบสีทองหม่นถูกดึงออกจากฝัก แสงสีทองลุกขึ้นรอบใบดาบ แต่ไม่ใช่แสงอบอุ่น มันคือเปลวไฟที่พร้อมเผาทุกอย่าง\n\nBeast หันมาคำราม ก่อนพุ่งเข้าใส่\n\nฉัวะ!! ดาบฟันเปิดไหล่มันจนเนื้อแตก เสียงเนื้อไหม้ดังฉ่า กลิ่นเลือดเน่าถูกเผาลอยคลุ้ง แต่ Beast ยังไม่ล้ม มันกัดดาบของวาร์คไว้ทั้งปาก เขี้ยวแตกกระเด็น เลือดสีดำไหลทะลัก กรงเล็บตวัดใส่วาร์คอย่างรุนแรง\n\nเคร้ง!! วาร์คยกดาบรับ แรงปะทะหนักจนพื้นไม้แตก\n\nแม้เนื้อครึ่งตัวของ Beast จะถูกเผา แต่มันยังพยายามกัด พยายามฉีก พยายามฆ่า ราวกับ Madness ในตัวมันกำลังกรีดร้องให้ล่าเหยื่อต่อ วาร์คกระชากดาบออก ก่อนฟันอีกครั้ง\n\nฉัวะ!! ขาหน้าของ Beast ขาดกระเด็น เลือดสีดำสาดเต็มกำแพง เสียงกรีดร้องของมันเริ่มผิดรูป เหมือนทั้งสัตว์และสิ่งอื่นในตัวมันกำลังร้องพร้อมกัน แต่มันยังคลานเข้าหาวาร์ค กรงเล็บตะกุยพื้น\n\nวาร์คเดินเข้าหา ก่อนแทงดาบลงกลางหัวเต็มแรง\n\nฉัวะ!! แสงสีทองปะทุ เสียงกรีดร้องเงียบลง เหลือเพียงกลิ่นเนื้อไหม้กับเลือดที่ลอยอยู่ในอากาศ\n\nความเงียบปกคลุมกำแพงเมือง ทหารบางคนทรุดนั่ง บางคนห้ามเลือดให้เพื่อน และบางคน… ลากศพออกไปเงียบๆ\n\nชายทหารคนหนึ่งเดินเข้ามา ใช้มีดผ่าลำคอ Beast เลือดสีดำไหลทะลัก ไม่นานนัก ผลึกสีหม่นขนาดเล็กก็ถูกดึงออกมา\n\nนรันขมวดคิ้ว “…นั่นคืออะไร”\n\n“Core Fragment” วาร์คตอบเรียบๆ “บางส่วนเอาไปขายได้ บางส่วนใช้ทำอาวุธ และบางส่วน… ถ้าเป็น Beast ที่มีพลังของเส้นทาง ถูกวิหารเอาไปทำเครื่องรางปลุกพลัง นี่แค่ Beast ทั่วไป ยังดีที่ Beast พวกนั้นไม่ออกมาเดินเพ่นพ่าน ลองนึกภาพ Beast ไฟ พ่นไฟทำลายหมู่บ้านราบเป็นหน้ากลอง”\n\nทหารอีกคนเริ่มตัดเขี้ยวของ Beast แม้ข้างๆ จะยังมีศพเพื่อนตัวเองนอนอยู่ ราวกับเรื่องแบบนี้… เป็นเรื่องปกติไปแล้ว\n\nวาร์คเก็บดาบกลับเข้าฝัก ก่อนเดินลงจากกำแพงโดยไม่พูดอะไร\n\nนรันยืนมองเลือดบนพื้นเงียบๆ กลิ่นเลือด กลิ่นเนื้อไหม้ และเสียงร้องของผู้บาดเจ็บ ยังคงลอยอยู่ในอากาศไม่จางหาย",
    "bodyEN": "Days pass, and Naran begins to act as if he has grown used to the border town. Blood, screams, and corpses no longer make him tremble the way they once did. That change frightens him more than anything.\n\nOn the northern wall, he asks Vark why people still choose to awaken the Core.\n\nVark answers simply: because humans fear being weak. They fear being prey. They fear having no right to choose their own fate.\n\nThen the alarm bell rings.\n\nA twisted Beast bursts from the outer forest. It is wolf-like, deformed, rotting, and filled with Madness. Arrows fail to stop it. Soldiers are torn apart and eaten alive before Naran's eyes.\n\nVark steps forward with his dull golden blade.\n\nHis fire is not warm. It is a killing flame.\n\nHe cuts the Beast apart piece by piece until it finally dies. Soldiers then carve open its body to remove a Core Fragment, a resource that can be sold, forged into weapons, or used by temples to create awakening charms.\n\nNaran watches the blood, the burnt flesh, and the dead soldiers being dragged away.\n\nIn this world, even horror becomes routine."
  },
  {
    "ep": 5,
    "titleTH": "ก่อนการปลุกพลัง",
    "titleEN": "Before the Awakening",
    "image": "/images/story/ep-5.png",
    "bodyTH": "ฝนตกหนักตั้งแต่เช้ามืด พื้นดินรอบบ้านไม้กลายเป็นโคลนแดงเหนียวเหนอะ นรันหอบหายใจหนักขณะลากท่อนไม้ขนาดใหญ่ไปตามลานฝึกด้านหลังบ้าน เหงื่อไหลเข้าตา แขนทั้งสองข้างสั่นจนแทบยกไม่ขึ้น ปอดร้อนผ่าวราวกับถูกไฟลวก\n\nแต่เสียงของวาร์คยังดังขึ้นเหมือนเดิม เย็นชาและไร้ความเมตตา\n\n“เร็วอีก”\n\n“ช้ากว่านี้ ตอนโดน Beast ไล่ เอ็งตายแน่”\n\nนรันกัดฟันแน่น ก่อนฝืนลากท่อนไม้ต่อไป ร่างกายของเขาเปลี่ยนไปมากในช่วงหลายเดือนที่ผ่านมา ไหล่กว้างขึ้น กล้ามเนื้อเริ่มชัด ฝ่ามือเต็มไปด้วยรอยด้านและแผลแตก แต่สิ่งที่เปลี่ยนมากกว่า… คือสายตา เด็กธรรมดาที่เพิ่งมายังโลกนี้วันแรก ค่อยๆ หายไปทีละนิด\n\n.\n\n.\n\n.\n\nตึง!!\n\nวาร์คโยนกระสอบทรายใส่นรันทันที เขารับแทบไม่ทันจนล้มเข่ากระแทกพื้น\n\n“วะ…เล่นอะไรเนี่ย…”\n\nวาร์คเดินเข้ามาหยุดตรงหน้า สายตาเย็นชา\n\n“ถ้าแค่นี้ยังไม่ไหว ต่อให้ไม่เป็น Warden เอ็งก็อยู่ไม่ถึงโต”\n\nนรันหอบหนักอยู่พักหนึ่ง ก่อนเงยหน้าขึ้นมามองเขา\n\n“…แล้วที่ฝึกฉันหนักขนาดนี้ ไม่ใช่เพราะอยากให้ฉันเป็น Warden หรอกเหรอ”\n\nวาร์คเงียบไปครู่หนึ่ง สายตาของเขามองออกไปยังป่าด้านนอกเมืองที่เต็มไปด้วยความมืด\n\n“ข้าแค่ไม่อยากเห็นเอ็งตายง่ายๆ”\n\nลมหนาวพัดผ่านช้าๆ นรันกำหมัดแน่น ก่อนพูดออกมาชัดเจนเป็นครั้งแรก\n\n“…แต่ฉันตั้งใจแล้ว ฉันจะเป็น”\n\nวาร์คหันกลับมามองเขาเงียบๆ ไม่มีคำชม ไม่มีรอยยิ้ม มีเพียงสายตาที่เหมือนกำลังประเมินว่าเด็กคนนี้จะรอดหรือตาย ก่อนเขาจะโยนหนังสือเก่าๆ กองหนึ่งลงบนโต๊ะไม้\n\nตุบ!\n\nฝุ่นลอยขึ้นทันที นรันขมวดคิ้วเล็กน้อย\n\n“อะไรอีกเนี่ย…”\n\n“ข้อมูลของแต่ละ Path” วาร์คตอบเรียบๆ “ช่วงนี้ก็อ่านไปด้วย”\n\nนรันหยิบหนังสือเล่มบนสุดขึ้นมา\n\nCore warden of Flame\n\n……..Terra\n\n……..Flora\n\n“สามเส้นทางนี้พบเยอะสุดในแถบนี้” วาร์คพูดต่อช้าๆ “เพราะภูมิประเทศมันเอื้อ”\n\nนรันเปิดอ่านผ่านๆ เงียบๆ ในหนังสือมีทั้งข้อมูล Beast ลักษณะพลัง ผลข้างเคียงของ Core รวมถึงสถิติ Madness ของแต่ละ Path\n\n“…งั้นถ้าคนอยู่ที่นี่ ก็แทบจะได้สามเส้นทางนี้หมด?”\n\n“ไม่” วาร์คตอบทันที “มันแค่เพิ่มโอกาส ไม่ได้การันตี” เขานั่งลงบนเก้าอี้ไม้เก่าๆ ช้าๆ “ต่อให้ใช้เครื่องราง ใช้วิหารเฉพาะทาง หรือฝืนเปลี่ยนสภาพแวดล้อมก่อนปลุกพลัง สุดท้ายก็ไม่มีใครควบคุมผลได้ร้อยเปอร์เซ็นต์อยู่ดี”\n\nลมเย็นพัดเข้ามาจากหน้าต่าง นรันค่อยๆ ปิดหนังสือลงช้าๆ ก่อนถามขึ้นเบาๆ\n\n“…แล้วนายคิดว่าฉันจะได้ Path อะไร”\n\nวาร์คเงียบไปพักหนึ่ง ก่อนหยิบขวดเหล้าขึ้นมาดื่ม\n\n“ข้าไม่ใช่พวกนักพยากรณ์ แต่ถ้านายอยากรอดหลังปลุกพลัง… ก็ฝึกต่อไป”\n\nคืนนั้น แสงตะเกียงสลัวๆ ยังคงเปิดอยู่จนดึก นรันนั่งอ่านหนังสือเกี่ยวกับ Paths ต่อเงียบๆ คนเดียว ข้างนอกฝนยังคงตกไม่หยุด และเป็นครั้งแรก— ที่เขาเริ่มรู้สึกว่า วันปลุกพลังของตัวเอง กำลังใกล้เข้ามาจริงๆ\n\nและมันอาจเป็นวันแห่งความตาย หรือวันแห่งคำสาป",
    "bodyEN": "Heavy rain turns the training yard behind Vark's house into red mud. Naran drags a massive log across the ground while his body burns with exhaustion. Months of training have changed him. His shoulders are broader, his hands are covered in calluses, and his eyes no longer belong to the helpless boy who first arrived.\n\nWhen Naran finally says aloud that he intends to become a Warden, Vark does not praise him. Instead, he throws a stack of old books onto the table.\n\nThey contain information on Paths, Beast traits, Core side effects, and Madness statistics. In this region, Flame, Terra, and Flora are the most common Paths because the surrounding land increases their probability.\n\nBut probability is not certainty.\n\nTemples, charms, and controlled environments can only raise the chance of awakening a certain Path. No one can fully control the result.\n\nNaran asks what Path Vark thinks he will receive.\n\nVark only tells him to keep training if he wants to survive after awakening.\n\nThat night, Naran reads alone under dim lamplight.\n\nFor the first time, he feels the day of his own awakening drawing near.\n\nIt may be the day of his curse, or the day of his death."
  },
  {
    "ep": 6,
    "titleTH": "วันก่อนพิธีปลุกพลัง",
    "titleEN": "The Day Before Awakening",
    "image": "/images/story/ep-6.png",
    "bodyTH": "ฝนหยุดตกมาได้หลายวันแล้ว แต่กลิ่นเลือดและความชื้นยังติดค้างอยู่ทั่วเมืองชายแดน อากาศร้อนอบอ้าวจนหายใจลำบาก ช่วงใกล้พิธีปลุกพลัง ผู้คนจากหมู่บ้านรอบนอกเริ่มเดินทางเข้ามามากขึ้น บางคนมากับครอบครัว บางคนมาคนเดียว และบางคน… มาพร้อมสายตาที่เต็มไปด้วยความกลัวและสิ้นหวัง\n\n.\n\n.\n\n.\n\nนรันนั่งอยู่หน้าบ้านไม้เก่าๆ ในมือคือหนังสือเกี่ยวกับ Paths ที่อ่านมาหลายเดือนแล้ว หลายหน้าถูกขีดเขียนจนยับ\n\nวาร์คนั่งดื่มเหล้าอยู่ไม่ไกล ก่อนพูดขึ้นเรียบๆ\n\n“แล้วตกลง เลือก Path ไว้หรือยัง”\n\nนรันเงยหน้าขึ้นเล็กน้อย “…เลือก?”\n\n“วิหารเพลิง วิหารหิน วิหารผืนป่า” วาร์คพูดต่อช้าๆ “ข้าพอมีเส้นสายอยู่บ้าง ถ้าอยากเข้าไปปลุกในวิหารเฉพาะทาง ก็น่าจะช่วยเพิ่มโอกาสได้”\n\nลมเย็นพัดผ่านเบาๆ วาร์คยกขวดเหล้าขึ้นดื่มต่อ “แต่ก็ต้องแลกกับค่าใช้จ่าย หรือไม่ก็ข้อผูกมัด บางวิหารปลุกเสร็จแล้วต้องเข้าร่วมกับพวกมันเลยก็มี”\n\nนรันเงียบฟัง สายตามองลงไปยังหนังสือในมือตัวเอง\n\nPath of Flame\n\nPath of Terra\n\nPath of Flora\n\nสามเส้นทางหลักของพื้นที่นี้ สามเส้นทางที่ผู้คนส่วนใหญ่คาดหวังจะได้รับ ก่อนเขาจะปิดหนังสือลงช้าๆ\n\n“…ฉันไม่เลือกดีกว่า”\n\nวาร์คเลิกคิ้วนิดๆ “ไม่อยากเพิ่มโอกาส?”\n\nนรันส่ายหน้าเบาๆ “ทุก Path ก็มีความหมายของมัน ไม่มีเส้นทางไหนไร้ค่า ถ้ามันจะเลือก… ฉันก็อยากให้มันเลือกสิ่งที่เหมาะกับตัวฉันจริงๆ”\n\nความเงียบปกคลุมอยู่พักหนึ่ง ก่อนวาร์คจะหัวเราะเบาๆ “งั้นก็ดี แบบนี้จะปลุกเมื่อไหร่ก็ได้”\n\nนรันขมวดคิ้วนิดๆ “หมายความว่าไง”\n\n“ถ้าไม่เลือกวิหารเฉพาะทาง ก็ไปปลุกที่วิหารกลางธรรมดาได้เลย” วาร์ควางขวดเหล้าลงช้าๆ “ที่นั่นมีคนดูแลอยู่แล้ว พวก Holy Light ประจำวิหารก็มี”\n\nนรันเงียบฟังทันที วาร์คมองออกไปยังความมืดนอกบ้าน ก่อนพูดต่อช้าๆ “ช่วงปลุกพลัง… ถ้า Core เข้าร่างแล้วสมดุลพัง บางคนจะคลั่งทันที”\n\nลมหนาวพัดผ่านเบาๆ “แต่ถ้ายังเป็นระยะแรก… Holy Light ยังพอชำระมันได้ ก่อนที่ Madness จะฝังลึก”\n\nนรันมองแสงสีทองจางๆ ที่ลอยขึ้นรอบปลายนิ้วของวาร์ค ก่อนถามขึ้นเบาๆ “…แล้วคนที่ปลุกพลังไม่สำเร็จล่ะ”\n\nวาร์คเงียบไปพักหนึ่ง “บางคนรอด บางคนเสียสติ บางคนก็ตาย”\n\nคำตอบนั้นสั้นมาก แต่กลับหนักจนบรรยากาศรอบตัวเงียบลงทันที\n\n.\n\n.\n\n.\n\nวันต่อมา นรันเดินตามวาร์คเข้าไปในเขตกลางเมืองเป็นครั้งแรก ผู้คนจำนวนไม่น้อยกำลังเดินไปในทิศทางเดียวกัน\n\nด้านหน้าสุดคือวิหารหินสีเทาขนาดใหญ่ มันไม่หรูหรา แต่เต็มไปด้วยร่องรอยเก่าแก่ กำแพงหลายส่วนมีรอยแตก และมีคราบเลือดเก่าจางๆ ติดอยู่ตามพื้นบันไดหิน\n\nหน้าวิหารมีคนยืนรออยู่จำนวนหนึ่ง วัยใกล้เคียงกับนรันแทบทั้งหมด บางคนพยายามทำตัวเข้มแข็ง บางคนกำมือแน่นจนสั่น และบางคน… กำลังร้องไห้อยู่เงียบๆ ข้างครอบครัวตัวเอง\n\nนรันมองภาพตรงหน้าเงียบๆ ก่อนเริ่มรู้สึกได้จริงๆ ว่า พิธีปลุกพลัง— ไม่ใช่พิธีแห่งความหวังสำหรับทุกคน แต่งานนี้คือวันที่บางคน จะสูญเสียทุกอย่างไปตลอดกาล",
    "bodyEN": "With the blood rain gone, people from outer villages begin arriving in the border town for the awakening ceremony. Some come with family, some alone, and some with eyes full of fear.\n\nVark asks Naran if he has chosen a Path to pursue. He can use connections to help Naran enter a specialized temple for Flame, Terra, or Flora, increasing his chances of awakening one of those common regional Paths.\n\nNaran refuses.\n\nHe believes every Path has meaning, and if a Path is going to choose him, he wants it to be the one truly suited to him.\n\nVark laughs softly and tells him that if he will not choose a specialized temple, he can awaken at the central temple instead. There, Holy Light Wardens can help cleanse early Madness if the Core destabilizes during awakening.\n\nBut not everyone survives.\n\nSome awaken. Some lose their minds. Some die.\n\nThe next day, Naran follows Vark to the gray stone central temple. Many children his age wait outside with trembling hands and frightened families.\n\nOnly then does Naran truly understand.\n\nThe awakening ceremony is not a day of hope for everyone.\n\nFor some, it is the day they lose everything."
  },
  {
    "ep": 7,
    "titleTH": "การปลุกพลัง",
    "titleEN": "The Awakening",
    "image": "/images/story/ep-7.png",
    "bodyTH": "แสงเช้าสีหม่นสาดลงบนกำแพงหินเก่าของวิหารกลาง อากาศด้านในเย็นยะเยือกและชื้น กลิ่นเลือดแห้งเก่าๆ ปะปนกับกลิ่นคาวเนื้อเน่า ลอยคละคลุ้งจนน่าคลื่นไส้\n\nนรันเดินตามวาร์คเข้าไปด้านในเงียบๆ ภายในวิหารไม่ได้หรูหรา เสาหินหลายต้นมีรอยแตก พื้นหินซีดและเต็มไปด้วยคราบเลือดแห้งดำเกรอะกรัง เหมือนผ่านการใช้งานมานานหลายสิบปี\n\nและตรงกลางสุดของวิหาร— คือแท่นปลุกพลังสีดำหม่น ร่องลึกคล้ายเส้นเลือดแตกแขนงออกไปทั่วพื้นผิว บางส่วนยังมีคราบเลือดเก่าแห้งติดอยู่ เพียงแค่มอง ก็ทำให้นรันรู้สึกอึดอัดและหนาวเย็นขึ้นมาแปลกๆ\n\n.\n\n.\n\n.\n\nผู้คนภายในวิหารมีอยู่ราวสิบกว่าคน ส่วนใหญ่เป็นเด็กวัยใกล้เคียงกับนรัน บางคนพยายามนั่งตัวตรงให้ดูมั่นใจ บางคนก้มหน้าเงียบ และบางคน… กำมือสั่นจนขาว อยู่ข้างครอบครัวตัวเอง ไม่มีใครพูดเสียงดัง ราวกับทุกคนรู้ดีว่า สถานที่แห่งนี้ไม่ใช่ที่สำหรับความหวัง แต่เป็นสถานที่ที่บางคนอาจสูญเสียทุกอย่าง\n\n.\n\n.\n\n.\n\n“หืม…”\n\nเสียงหนึ่งดังขึ้นจากด้านในวิหาร ชายในชุดคลุมสีขาวทองเดินออกมาช้าๆ สัญลักษณ์ Holy Light สีทองอ่อนถูกปักอยู่บริเวณหน้าอก ทันทีที่เห็นวาร์ค สีหน้าของชายคนนั้นเปลี่ยนไปเล็กน้อย\n\n“…ไม่คิดว่าจะเจอนายที่นี่”\n\nวาร์คเหลือบมองอีกฝ่ายนิ่งๆ “ข้ามาส่งเด็ก”\n\nHoly Light คนนั้นพยักหน้าช้าๆ ก่อนถอนหายใจเบาๆ “…ยังอยู่เมืองนี้อีกสินะ”\n\nวาร์คไม่ตอบ อีกฝ่ายหัวเราะแห้งๆ เล็กน้อย ก่อนสายตาจะเหลือบมองนรัน\n\n“เด็กคนนี้จะปลุกวันนี้?”\n\n“อือ”\n\nHoly Light ระดับ 7 มองนรันเงียบๆ อยู่ครู่หนึ่ง ก่อนพูดเรียบๆ “งั้นก็ตั้งสติให้ดี Core ไม่ได้ใจดีกับทุกคน”\n\nนรันพยักหน้ารับเบาๆ\n\n.\n\n.\n\n.\n\nระหว่างนั่งรอ สายตาของนรันเหลือบไปเห็นเด็กผู้หญิงคนหนึ่งที่นั่งอยู่ไม่ไกล อายุพอๆ กับเขา ผมสีเข้มยาวประบ่า ในมือกำลังกำเครื่องรางรูปใบไม้เก่าๆ เอาไว้แน่น นิ้วของเธอสั่นเล็กน้อย เธอเงยหน้าขึ้นมาสบตากับนรันเพียงชั่วครู่ ก่อนรีบหลบสายตาหนี\n\n.\n\n.\n\n.\n\n“คนแรก เตรียมตัว”\n\nเด็กผู้ชายร่างอ้วนคนหนึ่งเดินตัวแข็งเข้าไปยังแท่นปลุกพลัง บรรยากาศในวิหารเงียบลงทันที Holy Light ระดับ 7 เดินเข้าไปยืนข้างแท่น ก่อนยื่นมีดสั้นเล่มเล็กให้เด็กคนนั้น\n\n“กรีดฝ่ามือ”\n\nเด็กคนนั้นลังเลอยู่ครู่หนึ่ง ก่อนกัดฟันกรีดลงบนฝ่ามือตัวเอง เลือดสีแดงสดหยดลงบนแท่นปลุกพลังสีดำหม่น\n\nฟ้าววว—\n\nลวดลายทั่วแท่นเริ่มสว่างขึ้นทันที ไม่นานนัก— เศษหินบริเวณรอบแท่นเริ่มลอยขึ้นจากพื้น Holy Light ระดับ 7 มองภาพนั้นนิ่งๆ ก่อนพูดเบาๆ\n\n“Warden of Terra…”\n\nเด็กคนนั้นลืมตาขึ้นด้วยสีหน้างุนงง ก่อนจะมองมือของตัวเองเหมือนไม่อยากเชื่อ ครอบครัวของเขารีบร้องไห้ออกมาทันทีด้วยความโล่งอก แต่ก่อนที่บรรยากาศจะผ่อนคลายลง เสียงเจ้าหน้าที่ก็ดังขึ้นอีกครั้ง\n\n“คนถัดไป”",
    "bodyEN": "The central temple is cold, damp, and stained with old blood. At its center stands the black awakening altar, its surface carved with vein-like grooves and dark marks that make Naran feel uneasy just by looking at it.\n\nA Holy Light Warden recognizes Vark and asks if Naran will awaken today.\n\nVark answers simply.\n\nInside the temple, children wait in silence. Some pretend to be brave. Others shake beside their families. A dark-haired girl near Naran grips an old leaf-shaped charm, and their eyes meet for a brief moment before she looks away.\n\nThe first child steps onto the altar and cuts his palm. Blood touches the black stone.\n\nThe altar glows.\n\nSmall stones rise from the ground.\n\nThe Holy Light Warden speaks.\n\n“Warden of Terra.”\n\nThe boy opens his eyes in disbelief, and his family cries in relief. But the ceremony does not stop. The temple official immediately calls the next child.\n\nFor everyone still waiting, hope and fear now stand side by side."
  },
  {
    "ep": 8,
    "titleTH": "การตื่นขึ้นของดาราศาสตร์",
    "titleEN": "The Awakening of Astronomy",
    "image": "/images/story/ep-8.png",
    "bodyTH": "“คนถัดไป” เสียงเจ้าหน้าที่ของวิหารดังขึ้นอีกครั้ง เสียงแหบพร่าและเหนื่อยล้า\n\nเด็กผู้ชายร่างผอมคนหนึ่งเดินเข้าไปยังแท่นปลุกพลังด้วยสีหน้าซีดเผือด ขาของเขาสั่นจนแทบยืนไม่ไหว ผู้ดูแลยื่นมีดสั้นให้เขาช้าๆ\n\n“กรีดฝ่ามือ”\n\nเด็กคนนั้นพยักหน้าสั่นๆ ก่อนกรีดลงบนฝ่ามือตัวเองอย่างแรงเกินไป เลือดหยดลงบนแท่นสีดำหม่นทันที\n\nฟ้าววว—\n\nลวดลายทั่วแท่นเริ่มสว่างขึ้นด้วยแสงสีแดงคล้ำ ตอนแรกทุกอย่างดูปกติ แต่เพียงไม่กี่วินาทีต่อมา—\n\n“อ๊ากกกกกก!!!”\n\nเด็กคนนั้นกรีดร้องลั่นทันที เส้นเลือดสีดำเริ่มลามขึ้นมาตามแขนอย่างรวดเร็ว ร่างทั้งร่างกระตุกจนล้มลงกับพื้น ผู้คนในวิหารเริ่มแตกตื่นทันที\n\nแม่ของเด็กคนนั้นร้องไห้ออกมาเสียงดัง Holy Light ผู้ดูแลรีบกดมือลงบนหน้าอกของเด็กคนนั้นทันที แสงสีทองสว่างขึ้นทั่วมือของเขา\n\nฟ้าววว—\n\nเส้นเลือดสีดำค่อยๆ หยุดลาม แต่เสียงกรีดร้องยังคงดังไม่หยุด เด็กคนนั้นดิ้นกระตุกเหมือนถูกไฟฟ้าช็อต ปัสสาวะและเลือดไหลทะลักจากกางเกง\n\nHoly Light ถอนหายใจหนักๆ ก่อนพูดเสียงต่ำ “พาออกไปพัก”\n\nเจ้าหน้าที่วิหารรีบช่วยกันหามร่างออกไปทันที ภายในวิหารเงียบลงกว่าเดิม เด็กหลายคนเริ่มหน้าซีดอย่างเห็นได้ชัด กลิ่นเลือดและเนื้อไหม้ยังลอยคละคลุ้งไม่จางหาย\n\n.\n\n.\n\n.\n\n“คนถัดไป”\n\nเด็กผู้หญิงผมสีเข้มคนนั้นค่อยๆ ลุกขึ้นช้าๆ เครื่องรางใบไม้ในมือยังถูกกำเอาไว้แน่น นิ้วของเธอสั่นเล็กน้อย เธอเดินผ่านนรันไปใกล้ๆ สายตาทั้งคู่สบกันชั่วขณะก่อนเธอจะหันไปขึ้นแท่นหิน\n\nเลือดหยดลงบนแท่น\n\nฟ้าววว—\n\nแสงสีเขียวหม่นค่อยๆ แผ่ออกมาช้าๆ เถาวัลย์เส้นเล็กๆ เริ่มงอกขึ้นมาตามรอยแตกของพื้นหิน Holy Light ระดับ 7 มองภาพนั้นนิ่งๆ ก่อนพูดเบาๆ\n\n“…Flora พลังออร่าดูนุ่มนวลสงบ มีโอกาสเป็น Flora heal นะเนี่ย”\n\nเด็กผู้หญิงคนนั้นลืมตาขึ้นช้าๆ ใบหน้าซีดลงเล็กน้อย เธอมองมือของตัวเองอยู่ครู่หนึ่ง ก่อนสายตาจะเหลือบมาทางนรันอีกครั้ง แล้วรีบหลบสายตาทันที\n\n.\n\n.\n\n.\n\n“คนถัดไป”\n\nเด็กผู้ชายอีกคนเดินเข้าไปอย่างรีบร้อน ในมือกำเครื่องรางสีแดงคล้ำเอาไว้แน่น ตั้งแต่วินาทีแรก Holy Light ระดับ 7 ก็ขมวดคิ้วทันที แต่ไม่ทันแล้ว\n\nเด็กคนนั้นกรีดฝ่ามือตัวเองทันที เลือดไหลลงบนแท่นปลุกพลังอย่างรวดเร็ว\n\nตูมมม!!\n\nพลังสีแดงรุนแรงปะทุขึ้นทันที เสียงกรีดร้องดังลั่นทั่ววิหาร ผิวหนังของเด็กคนนั้นเริ่มแตก เลือดไหลออกจากตาทั้งสองข้าง ร่างทั้งร่างชักกระตุกอย่างรุนแรง\n\n“ช่วยด้วย!!” แม่ของเด็กคนนั้นร้องไห้ทันที\n\nผู้ดูแลรีบพุ่งเข้ากดร่างเด็กคนนั้นเอาไว้ แสงสีทองสว่างขึ้นทั่วทั้งวิหาร เส้นเลือดสีดำหยุดลามอย่างช้าๆ แต่ดวงตาของเด็กคนนั้นยังคงเลื่อนลอย ปากพึมพำอะไรบางอย่างไม่หยุด\n\n“…ร้อน… …ไฟ… …ร้อนมาก…”\n\nเจ้าหน้าที่วิหารหลายคนรีบเข้ามาช่วยกันจับตัวเขาไว้ แม่ของเด็กคนนั้นทรุดลงร้องไห้ทันที Holy Light ระดับ 7 มองเด็กคนนั้นอยู่พักหนึ่ง ก่อนพูดเสียงต่ำ\n\n“…พาออกไป”\n\nไม่มีใครพูดอะไรอีก ภายในวิหารเงียบลงกว่าเดิม ความหวังก่อนหน้านี้ เริ่มถูกแทนที่ด้วยความกลัวอย่างชัดเจน\n\n.\n\n.\n\n.\n\n“คนถัดไป” เสียงเจ้าหน้าที่ดังขึ้นอีกครั้ง\n\nครั้งนี้— คือชื่อนรัน\n\nหัวใจของเขาเต้นแรงขึ้นทันที ทุกสายตาในวิหารค่อยๆ หันมามอง วาร์คยังคงยืนเงียบอยู่ด้านหลัง ไม่มีคำพูดให้กำลังใจ มีเพียงสายตานิ่งๆ ของเขาเท่านั้น\n\nนรันสูดหายใจลึก ก่อนเดินเข้าไปยังแท่นปลุกพลังช้าๆ ทุกย่างก้าวหนักขึ้นเรื่อยๆ ผู้ดูแลยื่นมีดสั้นให้เขา\n\n“ตั้งสติไว้”\n\nนรันพยักหน้าช้าๆ ก่อนกรีดลงบนฝ่ามือตัวเอง เลือดสีแดงสดหยดลงบนแท่นปลุกพลังสีดำหม่น\n\nทันใดนั้น—\n\nครืนนนนนน—\n\nทั้งวิหารสั่นสะเทือนทันที ผู้ดูแลเบิกตากว้าง\n\n“เดี๋ยวก่อน…นี่มัน…”\n\nลวดลายทั่วแท่นเริ่มสว่างขึ้นอย่างรุนแรง แต่ไม่ใช่สีแดง ไม่ใช่สีเขียว มันเป็นแสงสีดำเข้มปนประกายสีม่วงหม่น คล้ายท้องฟ้ายามค่ำคืนที่เต็มไปด้วยดวงดาว\n\nอากาศทั่วทั้งวิหารหนักขึ้นทันที แม้แต่เปลวไฟจากตะเกียงบนกำแพงก็เริ่มสั่นไหวรุนแรง เสียงรอบข้างค่อยๆ เงียบลงอย่างผิดปกติ ราวกับทุกอย่างกำลังถูกกลืนหายไปในความมืด\n\nนรันรู้สึกเหมือนร่างทั้งร่างกำลังถูกฉีกออกจากด้านใน ภาพดวงดาวนับไม่ถ้วนไหลเข้ามาในหัวอย่างรุนแรง บางดวงสว่างเจิดจ้า บางดวงดับมอดและส่งเสียงร้องโหยหวน\n\nเลือดเริ่มไหลออกจากมุมปากของนรัน พื้นหินใต้แท่นเริ่มแตกร้าว แรงสั่นสะเทือนรุนแรงขึ้นเรื่อยๆ Holy Light ระดับ 7 รีบพุ่งเข้ามาทันที\n\n“วาร์ค!!”\n\nวาร์คขยับเข้ามาข้างแท่นทันทีเช่นกัน สีหน้าที่ปกตินิ่งเฉยของเขา เปลี่ยนไปเป็นครั้งแรก\n\n“นี่มัน…”\n\nครืนนนนนนน—\n\nแรงสั่นสะเทือนรุนแรงขึ้นอีกครั้ง ก่อนที่ทุกอย่างจะดับวูบลงทันที\n\nร่างของนรันล้มลงข้างแท่นปลุกพลัง สติของเขาดับลงในความมืดทันที แต่ก่อนที่ภาพสุดท้ายจะหายไป เขาเห็นเพียง— ดวงดาวจำนวนมหาศาล กำลังส่องแสงอยู่เหนือความมืดอันไร้จุดสิ้นสุด",
    "bodyEN": "The next child does not awaken safely. After cutting his palm, red light spreads across the altar, then Madness surges through his body. Black veins crawl up his arms, and he collapses screaming as Holy Light energy struggles to contain the corruption.\n\nThe girl with the leaf charm goes next. Soft green light spreads across the altar, and tiny vines emerge from the cracks in the stone. The Holy Light Warden notes that her aura is gentle enough that she may develop toward Flora Heal.\n\nThen another boy uses a red charm recklessly. Flame energy erupts, blood pours from his eyes, and he begins muttering about heat and fire as his mind nearly breaks.\n\nBy the time Naran is called, the temple is filled with fear.\n\nHe steps onto the altar and cuts his palm.\n\nThe entire temple shakes.\n\nThe altar does not glow red, green, or gold. It burns with a dark violet-black light like a night sky filled with stars. The air becomes heavy, the lamps flicker, and sound itself seems to vanish into darkness.\n\nCountless stars flood Naran's mind. Some shine. Some die. Some scream.\n\nBlood runs from his mouth.\n\nVark and the Holy Light Warden rush toward him, their calm shattered.\n\nThen everything goes dark.\n\nNaran falls beside the altar, unconscious beneath a vision of endless stars."
  },
  {
    "ep": 9,
    "titleTH": "ดวงดาวที่ตื่นขึ้น",
    "titleEN": "The Star That Awakened",
    "image": "/images/story/ep-9.png",
    "bodyTH": "เสียงกรีดร้องภายในวิหารเงียบหายไปแล้ว เหลือเพียงเสียงหอบหายใจหนักๆ ของผู้คน และแรงสั่นสะเทือนที่ยังคงหลงเหลืออยู่ในอากาศ\n\nร่างของนรันนอนหมดสติอยู่ข้างแท่นปลุกพลัง เลือดสีแดงสดยังไหลซึมจากฝ่ามือช้าๆ ทั่วทั้งวิหารเงียบสนิท ไม่มีใครกล้าพูดอะไร แม้แต่ Holy Light ระดับ 7 ก็ยังคงจ้องไปที่แท่นปลุกพลังด้วยสีหน้าไม่อยากเชื่อ รอยแตกร้าวจำนวนมากกระจายอยู่ทั่วพื้นหินรอบแท่น ลวดลายสีดำหม่นบนแท่นยังคงเรืองแสงจางๆ เหมือนพลังบางอย่างยังไม่ยอมสงบลง\n\n.\n\nด้านนอกวิหาร ท้องฟ้าที่เดิมควรเป็นช่วงบ่ายสว่าง กลับค่อยๆ มืดลงอย่างผิดปกติ กลุ่มเมฆสีดำหนาทึบรวมตัวกันเหนือเมือง ลมเย็นพัดแรงขึ้นเรื่อยๆ ผู้คนด้านนอกเริ่มเงยหน้ามองท้องฟ้าด้วยความหวาดกลัว\n\n“จะฝนตกอีกแล้วเหรอ…”\n\nแต่ Holy Light ระดับ 7 รู้ทันทีว่า มันไม่ใช่เรื่องปกติ เขาหันกลับมามองร่างของนรัน ก่อนขมวดคิ้วแน่น “…พลังยังไม่สงบ?”\n\nวาร์คที่ยืนอยู่ข้างแท่นยังคงเงียบ สายตาของเขาจับจ้องไปที่ร่างของนรันไม่ละไปไหน\n\n.\n\n.\n\n.\n\nหลายชั่วโมงต่อมา นรันยังไม่ฟื้น เจ้าหน้าที่วิหารช่วยกันพาร่างของเขากลับมาที่บ้านของวาร์ค ฝนเริ่มตกลงมาอีกครั้งในช่วงเย็น แต่สิ่งที่แปลกคือ— ท้องฟ้ายังคงมืดผิดปกติอยู่นานหลายชั่วโมง ราวกับบางสิ่งกำลังปกคลุมเมืองไว้\n\n.\n\n.\n\nสามวันผ่านไป นรันลืมตาขึ้นช้าๆ แสงจากหน้าต่างส่องเข้ามาภายในห้องไม้เก่า ร่างกายของเขาหนักอึ้งจนแทบขยับไม่ได้ ลมหายใจร้อนผ่าว หัวเหมือนถูกกดทับจากด้านใน เขาพยายามลุกขึ้น แต่เพียงขยับตัวเล็กน้อย ความเจ็บแปลบก็แล่นขึ้นทั่วร่าง\n\n“อย่าฝืน” เสียงของวาร์คดังขึ้นจากมุมห้อง\n\nนรันหันไปมองช้าๆ วาร์คนั่งอยู่บนเก้าอี้ไม้ตัวเดิม ขวดเหล้าถูกวางอยู่ข้างเท้า\n\n“ฉัน…สลบไปนานแค่ไหน”\n\n“สามวัน” คำตอบนั้นทำให้นรันนิ่งไปเล็กน้อย\n\nด้านนอกหน้าต่าง ท้องฟ้ายามเย็นกำลังค่อยๆ เปลี่ยนเป็นสีส้มหม่น และดวงดาวดวงแรกเริ่มปรากฏขึ้น ทันทีที่สายตาของนรันมองไปยังมัน หัวใจของเขากลับสั่นขึ้นแปลกๆ เหมือนมีบางอย่างกำลังเชื่อมต่อกันอยู่\n\n.\n\n.\n\n.\n\nเสียงฝีเท้าดังขึ้นหน้าบ้าน Holy Light ระดับ 7 มาหาวาร์คพอดี ทันทีที่เห็นนรันลืมตา สีหน้าของเขาเปลี่ยนไปเล็กน้อย\n\n“ฟื้นกลับมาได้สินะ”\n\nนรันพยายามขยับตัว แต่ Holy Light ยกมือห้ามทันที “ไม่ต้องรีบลุก ร่างกายนายตอนนี้ยังไม่เสถียร”\n\nความเงียบปกคลุมอยู่พักหนึ่ง ก่อน Holy Light จะหันไปมองวาร์ค “…นายรู้ไหมว่าเด็กนี่ได้ Path อะไร”\n\nวาร์คเงียบไปครู่หนึ่ง ก่อนตอบสั้นๆ “…ไม่”\n\nHoly Light ระดับ 7 ขมวดคิ้วช้าๆ “แต่ข้าไม่เคยเห็นแท่นปลุกตอบสนองรุนแรงขนาดนั้นมาก่อน ต่อให้เป็น Path หายาก… มันก็ไม่ควรทำให้สภาพอากาศเปลี่ยน”\n\nวาร์คยังคงเงียบ สายตาของเขาเพียงมองไปทางนรันเท่านั้น\n\n.\n\nหลังจาก Holy Light กลับออกไป ภายในบ้านก็เงียบลงอีกครั้ง ลมเย็นพัดเข้ามาจากหน้าต่างเบาๆ นรันค่อยๆ หันมองออกไปด้านนอก ตอนนี้ท้องฟ้ามืดลงแล้ว ดวงดาวหลายดวงเริ่มปรากฏชัดขึ้นเหนือเมืองชายแดน\n\nและทันทีที่เขามองไปยังพวกมัน— ความรู้สึกประหลาดก็ไหลเข้ามาทันที เหมือนเขารับรู้ “ตำแหน่ง” ของดวงดาวแต่ละดวงได้ บางดวงกำลังเคลื่อนผ่านกันอย่างช้าๆ บางดวงให้ความรู้สึกสงบ และบางดวง… ให้ความรู้สึกอันตรายอย่างประหลาด\n\nนรันขมวดคิ้วเล็กน้อย ก่อนพูดขึ้นช้าๆ “…ฉันรู้สึกแปลกๆ”\n\nวาร์คเงยหน้ามองทันที “ยังไง”\n\nนรันเงียบไปพักหนึ่ง ก่อนตอบช้าๆ “…ฉันเหมือนรับรู้ตำแหน่งของดวงดาวได้ แล้วก็… เหมือนพวกมันกำลังขยับอยู่ตลอดเวลา”\n\nความเงียบปกคลุมห้องทันที วาร์คมองเขานิ่งอยู่พักหนึ่ง ก่อนสีหน้าที่ปกตินิ่งเฉย เริ่มเปลี่ยนไปเล็กน้อยเป็นครั้งแรก\n\n“…Astronomy?”\n\nนรันนิ่งไปทันที “…เส้นทางดารา?” สายตายังคงมองไปยังท้องฟ้ายามค่ำคืนด้านนอก “…มันหายากขนาดนั้นเลยเหรอ”\n\nวาร์คเงียบไปครู่หนึ่ง ก่อนตอบเสียงต่ำ “…ในจักรวรรดิแถบนี้ แทบไม่มีใครปลุกมันได้”",
    "bodyEN": "The screams in the temple fade, leaving only stunned silence. Naran lies unconscious beside the shattered altar while dark patterns continue to glow faintly across the stone.\n\nOutside, the afternoon sky darkens unnaturally.\n\nThe Holy Light Warden realizes the power has not fully settled.\n\nFor hours, Naran remains asleep. By evening, Vark and the temple officials take him back to Vark's house. The sky stays strangely dark over the border town, as if something vast still presses down from above.\n\nThree days later, Naran wakes.\n\nHis body is weak, but when he looks at the first star of the evening, something inside him trembles. It feels like a connection.\n\nA Holy Light Warden visits and admits that even rare Paths should not have changed the weather like that. After he leaves, Naran stares at the night sky and realizes he can sense the positions of the stars. Some feel calm. Some feel dangerous. All of them seem to be moving.\n\nVark finally says the name of the Path.\n\n“Astronomy.”\n\nIn this region of the empire, almost no one awakens it.\n\nNaran's true path has begun."
  },
  {
    "ep": 10,
    "titleTH": "วอร์เดนอิสระ",
    "titleEN": "The Free Warden",
    "image": "/images/story/ep-10.png",
    "bodyTH": "สามวันหลังพิธีปลุกพลัง ข่าวลือเรื่อง “เด็กที่ทำให้วิหารสั่น” ยังคงถูกพูดถึงไปทั่วเมืองชายแดน บางคนบอกว่าเป็น Path หายาก บางคนเชื่อว่าเป็นลางร้าย และบางคน… ถึงขั้นพูดว่าแท่นปลุกพลังกำลัง “ตอบสนอง” ต่อบางสิ่งที่ไม่ควรมีอยู่\n\nแม้แต่ตอนนี้ แท่นปลุกภายในวิหารก็ยังถูกปิดเอาไว้ชั่วคราว รอยแตกร้าวบนพื้นหินรอบแท่นยังไม่ถูกซ่อม และ Holy Light ระดับ 7 ก็ยังไม่อธิบายอะไรกับใคร\n\n.\n\n.\n\nนรันนั่งอยู่หน้าบ้านไม้เงียบๆ สายตาของเขามองขึ้นไปบนท้องฟ้ายามเย็น ตั้งแต่ฟื้นขึ้นมา โลกของเขาก็เปลี่ยนไปอย่างชัดเจน โดยเฉพาะตอนกลางคืน เขาเริ่มมองเห็นตำแหน่งของดวงดาวชัดขึ้นเรื่อยๆ\n\nบางครั้ง— แค่เงยหน้าขึ้นมอง เขาก็รู้สึกเหมือนเข้าใจ “ทิศทาง” ของบางสิ่งโดยไม่รู้ตัว มันไม่ใช่ภาพลวงตา และไม่ใช่ความฝัน มันเหมือนสัญชาตญาณใหม่ ที่ถูกฝังเข้ามาในร่างกาย\n\n.\n\nเสียงประตูไม้เปิดดังขึ้นช้าๆ วาร์คเดินเข้ามาภายในบ้าน ในมือมีหนังสือเก่าๆ กองหนึ่ง เขาวางมันลงบนโต๊ะเสียงดังตุบ ฝุ่นเก่าลอยขึ้นทันที นรันเหลือบมองชื่อบนปก ส่วนใหญ่เป็นหนังสือเกี่ยวกับ Core และประวัติของ Paths ต่างๆ แต่แทบไม่มีเล่มไหนพูดถึง Astronomy แบบละเอียดเลย\n\nวาร์คนั่งลงตรงข้ามช้าๆ ก่อนพูดเรียบๆ “…Astronomy ข้าเองก็รู้เรื่องมันไม่มาก”\n\nนรันเงยหน้าขึ้นทันที “แม้แต่นายก็ไม่รู้?”\n\nวาร์คพ่นลมหายใจเบาๆ “คนใช้เส้นทางนี้มีน้อย โดยเฉพาะแถวชายแดนแบบนี้” ความเงียบปกคลุมอยู่พักหนึ่ง ลมเย็นพัดเข้ามาจากหน้าต่างช้าๆ ก่อนวาร์คจะพูดต่อ “เพราะงั้นนายต้องไปเรียนรู้จากคนอื่น คนที่รู้เรื่อง Core มากกว่าข้า”\n\nนรันนิ่งฟังเงียบๆ วาร์คหยิบขวดเหล้าขึ้นดื่มเล็กน้อย ก่อนพูดต่อเรียบๆ “อีกอย่าง… ตอนนี้ชื่อนายน่าจะถูกส่งเข้าไปยังทางการแล้ว”\n\nนรันขมวดคิ้วทันที “…ทางการ?”\n\n“Warden ทุกคนที่ปลุกพลังสำเร็จ จะถูกขึ้นทะเบียน อย่างน้อยก็ต้องมีข้อมูลว่าใครปลุกพลังที่ไหน” นรันเงียบไปพักหนึ่ง ก่อนถามต่อ “…แล้วหลังจากนั้นล่ะ”\n\n“ส่วนใหญ่ก็เข้าสังกัด วิหาร หน่วยรบ หรือองค์กรของเมือง” วาร์ควางขวดเหล้าลงช้าๆ ก่อนสายตาจะมองตรงมาที่นรัน “…แต่นายยังไม่ถูกผูกมัด ตอนนี้ยังเป็น Warden อิสระ เหมือนข้า”\n\nนรันนิ่งไปเล็กน้อย “แล้วมันต่างกันยังไง”\n\nวาร์คหัวเราะแห้งๆ เบาๆ “อิสระกว่า แต่ก็ตายง่ายกว่าเหมือนกัน”\n\nลมเย็นพัดผ่านเข้ามาอีกครั้ง ความเงียบปกคลุมอยู่พักหนึ่ง ก่อนนรันจะพูดขึ้นช้าๆ “…แล้วข้าต้องทำยังไงต่อ”\n\nวาร์คเอนตัวพิงเก้าอี้ไม้เก่า สายตามองออกไปยังท้องฟ้ายามค่ำคืนด้านนอก “นายก้าวเข้ามาในโลกของ Warden แล้ว ต่อจากนี้… นายต้องได้รับการฝึก”\n\nนรันเงียบฟังทันที วาร์คพูดต่อเรียบๆ “ข้าจะส่งนายเข้าไปที่หน่วยฝึกเด็กใหม่ของเมือง มันไม่ใช่หน่วยใหญ่ แต่คนที่นั่นพอจะมีความรู้เรื่อง Core มากกว่าข้า อย่างน้อย… อาจมีคนเคยได้ยินเรื่อง Astronomy มาก่อน”\n\nนรันมองวาร์คนิ่งๆ ก่อนถามขึ้นเบาๆ “…แล้วนายใช้เส้นสายอีกแล้ว?”\n\nวาร์คหัวเราะในลำคอเบาๆ “โลกนี้มันไม่ใจดีพอจะให้คนไร้เส้นสายอยู่รอดหรอก”\n\nนรันหลุดหัวเราะเบาๆ ออกมานิดเดียวเป็นครั้งแรก ก่อนสายตาของเขาจะค่อยๆ มองขึ้นไปบนท้องฟ้าอีกครั้ง ดวงดาวหลายดวงกำลังส่องแสงอยู่เหนือเมืองชายแดน และเป็นครั้งแรก— ที่เขารู้สึกว่า เส้นทางของตัวเอง กำลังเริ่มต้นขึ้นจริงๆ แล้ว",
    "bodyEN": "Three days after the ceremony, rumors spread through the border town about the child who made the temple tremble. Some call it a rare Path. Some call it an omen. Others whisper that the altar responded to something that should not exist.\n\nNaran's world has changed. At night, he can sense the positions of stars with unnatural clarity, as if a new instinct has been carved into his body.\n\nVark brings old books about Core and Paths, but even he knows little about Astronomy. There are too few users of that Path, especially in a remote border town.\n\nNaran will need people who understand Core better than Vark does.\n\nVark also explains that every awakened Warden is registered by the authorities. Most join temples, military units, or city organizations. But Naran is not bound to anyone yet.\n\nFor now, he is a Free Warden.\n\nFree means more freedom.\n\nIt also means dying more easily.\n\nVark decides to send him to the border training unit, a place where new Wardens learn Core control and survival.\n\nFor the first time since arriving in this world, Naran feels that his path is truly beginning."
  },
  {
    "ep": 11,
    "titleTH": "หน่วยฝึกชายแดน",
    "titleEN": "The Border Training Unit",
    "image": "/images/story/ep-11.png",
    "bodyTH": "เช้าวันต่อมา วาร์คพานรันเดินเข้ามายังเขตตะวันตกของเมืองชายแดน ยิ่งเดินลึกเข้าไป บรรยากาศรอบตัวก็ยิ่งเปลี่ยนไปอย่างน่าอึดอัด\n\nเสียงเหล็กกระทบกันดังเป็นระยะ กลิ่นเลือดจางๆ ปะปนอยู่ในอากาศ ผู้คนจำนวนมากสวมอุปกรณ์ต่อสู้เดินสวนกันไปมา บางคนมีรอยแผลเต็มแขน บางคนมีผ้าพันแผลคลุมดวงตา และบางคน… มีเส้นสีดำจางๆ ลามอยู่ใต้ผิวหนังเหมือนเส้นเลือดเน่า\n\nนรันมองภาพเหล่านั้นเงียบๆ ก่อนขมวดคิ้วเล็กน้อย “…พวกนั้นคืออะไร”\n\n“ร่องรอย Madness” วาร์คตอบเรียบๆ “บางคนควบคุมมันได้ บางคนก็ได้แค่อยู่กับมันไปจนตาย”\n\nลมเย็นพัดผ่านช้าๆ ก่อนทั้งคู่จะหยุดอยู่หน้าอาคารหินขนาดใหญ่ บนกำแพงมีตราสัญลักษณ์สีดำหม่นของหน่วยฝึกติดอยู่ ผู้คนเข้าออกตลอดเวลา เด็กวัยใกล้เคียงกับนรันหลายคนกำลังนั่งรออยู่ภายในโถงกว้าง บางคนหน้าซีด บางคนกำเอกสารแน่นจนมือสั่น และบางคนพยายามทำเป็นเข้มแข็ง\n\n.\n\n.\n\n.\n\n“ชื่อ” เจ้าหน้าที่หญิงด้านหน้าถามเรียบๆ\n\n“นรัน”\n\nเธอก้มลงเขียนอะไรบางอย่างทันที ก่อนเงยหน้ามองวาร์คเล็กน้อย “…ผู้รับรองคือวาร์ค?”\n\n“อือ”\n\nหญิงคนนั้นเงียบไปครู่หนึ่ง เหมือนจะจำชื่อได้ แต่สุดท้ายก็ไม่ได้พูดอะไรต่อ เพียงยื่นเอกสารแผ่นหนึ่งมาให้\n\n“เด็กใหม่ทุกคนต้องผ่านการตรวจ Core Stability ก่อนเข้า training หลังจากนี้จะมีการตรวจ Madness ทุกเดือน ถ้าค่าผิดปกติ หน่วยมีสิทธิ์กักกันทันที”\n\nนรันพยักหน้ารับเงียบๆ ก่อนมองไปรอบโถงกว้าง เด็กใหม่จำนวนมากกำลังนั่งรอเรียกชื่ออยู่ตามจุดต่างๆ เสียงเจ้าหน้าที่ก็ดังขึ้นอีกครั้ง\n\n“นรัน ห้องตรวจสาม”\n\n.\n\n.\n\n.\n\nภายในห้องตรวจเงียบสนิท ผนังหินสีเทาหม่นถูกสลักลวดลาย Core เอาไว้ทั่วห้อง ตรงกลางมีอุปกรณ์ทรงกลมสีดำวางอยู่บนแท่นเหล็ก เจ้าหน้าที่ชายวัยกลางคนกำลังเปิดเอกสารอ่านช้าๆ\n\n“…นรัน …Astronomy”\n\nปลายปากกาของเขาหยุดชะงักไปชั่วครู่ แม้เพียงวินาทีเดียว แต่นรันก็สังเกตเห็นทันที เจ้าหน้าที่คนนั้นเงยหน้าขึ้นช้าๆ “…วางมือบนอุปกรณ์”\n\nนรันเดินเข้าไปช้าๆ ก่อนวางฝ่ามือลงบนพื้นผิวสีดำหม่นของอุปกรณ์\n\nฟ้าววว—\n\nลวดลายทั่วลูกทรงกลมเริ่มสว่างขึ้นทันที ตอนแรกทุกอย่างดูปกติ แต่ไม่กี่วินาทีต่อมา—\n\nครืนนนน—\n\nอุปกรณ์เริ่มสั่นเบาๆ เจ้าหน้าที่เงยหน้าขึ้นทันที “…เดี๋ยว—”\n\nแสงสีดำหม่นปนม่วงเริ่มไหลขึ้นตามลวดลายอย่างรวดเร็ว\n\n.\n\n.\n\n.\n\nด้านนอกโถงตรวจ เด็กใหม่หลายคนเริ่มหันมองรอบตัว ลมเย็นพัดผ่านเข้ามาช้าๆ ทั้งที่เมื่อครู่ยังไม่มีลมแม้แต่น้อย ผู้คนภายในโถงเริ่มมองออกไปยังด้านนอกอาคาร ท้องฟ้ายามเช้าค่อยๆ มืดลงอย่างผิดปกติ ไม่มีสายฟ้า ไม่มีพายุ ไม่มีแม้แต่เสียงฝน แต่บรรยากาศทั้งหมดกลับหนักขึ้นเรื่อยๆ ราวกับท้องฟ้าทั้งผืนกำลังกดทับลงมาเหนือเมือง\n\nเด็กหลายคนเริ่มขมวดคิ้วด้วยความสับสน บางคนพึมพำว่าอากาศแปลกๆ แต่ไม่มีใครรู้ว่าเกิดอะไรขึ้น\n\n.\n\n.\n\n.\n\nฟีโอน่าที่นั่งอยู่เงียบๆ ตรงมุมโถง ค่อยๆ เงยหน้าขึ้นช้าๆ หัวใจของเธอสั่นขึ้นทันที ความรู้สึกนี้… เหมือนกับวันที่วิหารสั่นไม่มีผิด สายตาของเธอค่อยๆ มองไปยังห้องตรวจด้านในสุดของโถงช้าๆ\n\n“…เขาอยู่ที่นี่”\n\n.\n\n.\n\n.\n\nครืนนนน— กระจกหน้าต่างภายในห้องตรวจเริ่มสั่นเบาๆ แต่ต่างจากวันที่ปลุกพลังครั้งแรก— นรันยังคงยืนอยู่เงียบๆ ลมหายใจมั่นคง ร่างกายไม่มีอาการสั่น มีเพียงดวงตาของเขา— ที่กำลังมองออกไปนอกหน้าต่างราวกับรับรู้อะไรบางอย่างอยู่\n\nเจ้าหน้าที่ค่อยๆ ลดมือลงจากเอกสารช้าๆ สีหน้าของเขาเริ่มตึงขึ้นเรื่อยๆ\n\n“…Core activity สูงผิดปกติ …แต่ค่าความเสถียรกลับนิ่ง” เขามองนรันเงียบๆ อยู่พักหนึ่ง ก่อนพูดเสียงต่ำ “…ข้าไม่เคยเห็นอะไรแบบนี้มาก่อน”\n\nนรันเงียบ สายตายังคงมองออกไปยังท้องฟ้าที่มืดลงเรื่อยๆ ด้านนอก ราวกับเขากำลัง “รับรู้” อะไรบางอย่างจากดวงดาวเหนือเมฆเหล่านั้น",
    "bodyEN": "The next morning, Vark takes Naran to the western district of the border town. The air smells faintly of blood, and the sound of clashing metal echoes through the streets. Fighters pass by with scars, bandages, and black Madness traces beneath their skin.\n\nThis is where new Wardens are trained.\n\nAt the registration desk, Naran's name is recorded under Vark's guarantee. He is told that every trainee must pass a Core Stability test before entering training, and Madness checks will happen every month. If his readings become abnormal, the unit has the right to isolate him immediately.\n\nIn the testing room, Naran places his hand on a black spherical device.\n\nAt first, the patterns glow normally.\n\nThen the device begins to tremble.\n\nDark violet-black light flows through it, and outside the building, the morning sky begins to dim. No storm arrives. No lightning. No rain. Yet the pressure in the air grows heavier, as if the sky itself is descending.\n\nFiona, the girl from the awakening temple, senses it immediately.\n\n“He is here.”\n\nInside the room, Naran stands calmly, unlike the first awakening. His body no longer shakes. Only his eyes seem fixed on something beyond the window.\n\nThe examiner stares at the readings.\n\nCore activity is abnormally high.\n\nBut his stability remains steady.\n\n“I have never seen anything like this before.”"
  }
];

function slugify(name) {
  return name.toLowerCase().replaceAll(" ", "-");
}

function imagePathForPath(pathName) {
  return `/images/paths/${slugify(pathName)}.png`;
}

function videoPathForPath(pathName) {
  return `/videos/paths/${slugify(pathName)}.mp4`;
}

export default function CoreWardenWebsite() {
  const [lang, setLang] = useState("th");
  const [activePillar, setActivePillar] = useState("Primordials");
  const [selectedPath, setSelectedPath] = useState(null);
  const [musicOn, setMusicOn] = useState(false);
  const audioRef = useRef(null);
  const t = UI[lang];

  useEffect(() => {
    if (!audioRef.current) return;

    if (musicOn) {
      audioRef.current.volume = 0.22;
      audioRef.current.play().catch(() => setMusicOn(false));
    } else {
      audioRef.current.pause();
    }
  }, [musicOn]);

  const activePillarData = PILLARS.find((pillar) => pillar.key === activePillar) || PILLARS[0];
  const activePaths = useMemo(() => {
    return PATH_DATA
      .filter((path) => path.pillar === activePillar)
      .sort((a, b) => activePillarData.paths.indexOf(a.name) - activePillarData.paths.indexOf(b.name));
  }, [activePillar, activePillarData]);

  return (
    <div className="min-h-screen bg-[#03030a] text-white overflow-hidden">
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_50%_0%,rgba(132,92,255,.28),transparent_38%),radial-gradient(circle_at_15%_65%,rgba(0,255,200,.09),transparent_26%)]" />

      <audio ref={audioRef} loop src="/audio/core-warden-ambient.mp3" />

      <button
        type="button"
        onClick={() => setMusicOn((value) => !value)}
        className="fixed bottom-5 right-5 z-[200] rounded-full border border-white/15 bg-black/70 px-5 py-3 text-sm font-bold backdrop-blur-xl hover:bg-white/10"
      >
        {musicOn ? "Music ON" : "Music OFF"}
      </button>

      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/45 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-5 py-4 flex items-center justify-between gap-4">
          <div className="font-black tracking-[0.35em] text-sm">CORE WARDEN</div>
          <div className="hidden lg:flex gap-6 text-sm text-white/60">
            <a href="#world" className="hover:text-white">{t.navWorld}</a>
            <a href="#pillars" className="hover:text-white">{t.navPillars}</a>
            <a href="#beasts" className="hover:text-white">{t.navBeasts}</a>
            <a href="#special-beasts" className="hover:text-white">{t.navSpecial}</a>
            <a href="#core-link" className="hover:text-white">{t.navLink}</a>
            <a href="#others" className="hover:text-white">{t.navOthers}</a>
            <a href="#archive" className="hover:text-white">{t.navArchive}</a>
            <a href="#story" className="hover:text-white">{t.navStory}</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
          <div className="flex gap-2">
            {["th", "en"].map((code) => (
              <button key={code} onClick={() => setLang(code)} className={`rounded-full border px-3 py-2 text-xs ${lang === code ? "border-violet-200 bg-violet-300/20" : "border-white/15 bg-white/5 text-white/60"}`}>
                {UI[code].lang}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <header className="relative min-h-screen flex items-center justify-center px-5 pt-24 pb-16 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero/hero-bg.png"
            alt="Core Warden Background"
            className="h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#03030a]" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="relative mx-auto mb-10 max-w-6xl">
            <div className="absolute -inset-10 rounded-full bg-violet-500/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-violet-200/20 bg-black/40 p-5 md:p-8 shadow-[0_0_90px_rgba(168,85,247,.22)]">
              <img src="/images/logo/core-warden-logo.png" alt="Core Warden Logo" className="w-full object-contain drop-shadow-[0_0_35px_rgba(168,85,247,.45)]" />
              <div className="mt-6 text-[10px] md:text-xs tracking-[0.45em] text-white/35 text-center">ORDER · CORE · MADNESS · BALANCE</div>
            </div>
          </div>
          <p className="mt-8 max-w-3xl mx-auto text-lg md:text-2xl text-white/65 leading-relaxed">{t.heroDesc}</p>
          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <a href="#world" className="px-8 py-4 rounded-2xl bg-white text-black font-black hover:scale-105 transition">{t.enterWorld}</a>
            <a href="#beasts" className="px-8 py-4 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 transition">{t.beastArchive}</a>
          </div>
        </div>
      </header>

      <SectionBlock id="world" kicker={t.worldKicker} title={t.worldTitle} text={t.worldBody} bgImage="/images/backgrounds/world-bg.png">
        <div className="mt-8 rounded-3xl border border-violet-200/20 bg-black/35 p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
            <div>
              <h3 className="text-2xl font-black">{t.readMore}</h3>
              <p className="text-white/50 mt-2">{t.readMoreNote}</p>
            </div>
            <a href="#archive" className="inline-flex items-center justify-center rounded-2xl bg-white text-black font-black px-6 py-4 hover:scale-105 transition">{t.readMore}</a>
          </div>
        </div>
      </SectionBlock>

      <section
        id="pillars"
        className="max-w-7xl mx-auto px-5 py-24 rounded-[2rem] bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(3,3,10,.88), rgba(3,3,10,.88)), url('/images/backgrounds/pillars-bg.png')",
        }}
      >
        <p className="text-violet-200/70 tracking-[0.35em] text-xs uppercase mb-4">{t.systemStructure}</p>
        <h2 className="text-5xl md:text-7xl font-black">{t.pillarsTitle}</h2>
        <p className="mt-5 mb-12 max-w-3xl text-white/60 leading-relaxed">{t.pillarsDesc}</p>
        <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-8 items-start">
          <div className="grid gap-4">
            {PILLARS.map((pillar) => (
              <button key={pillar.key} onClick={() => setActivePillar(pillar.key)} className={`text-left rounded-3xl border p-5 transition ${activePillar === pillar.key ? "border-violet-200/60 bg-white/12" : "border-white/10 bg-white/[0.04] hover:bg-white/[0.08]"}`}>
                <h3 className="text-2xl font-bold">{lang === "th" ? pillar.thai : pillar.title}</h3>
                <p className="text-sm text-white/45 mt-1">{pillar.key}</p>
              </button>
            ))}
          </div>
          <div className={`rounded-[2rem] border border-white/10 bg-gradient-to-br ${activePillarData.color} p-6 md:p-8 shadow-[0_0_80px_rgba(0,0,0,.35)]`}>
            <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center mb-8">
              <div>
                <p className="text-violet-200/70 tracking-[0.28em] text-xs uppercase mb-3">{t.selectedPillar}</p>
                <h3 className="text-4xl md:text-5xl font-black">{lang === "th" ? activePillarData.thai : activePillarData.title}</h3>
              </div>
              <div className="h-36 w-36 rounded-full border border-white/15 bg-black/20 grid place-items-center text-6xl">✦</div>
            </div>
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {activePaths.map((path) => (
                <button key={path.name} onClick={() => setSelectedPath(path)} className="group rounded-3xl border border-white/10 bg-black/25 overflow-hidden hover:border-violet-200/40 transition hover:-translate-y-1">
                  <div className="aspect-[9/16] overflow-hidden bg-black">
                    <img src={imagePathForPath(path.name)} alt={path.name} className="h-full w-full object-cover object-top group-hover:scale-105 transition duration-500" />
                  </div>
                  <div className="p-5 text-left">
                    <p className="text-xs tracking-[0.25em] uppercase text-white/40">{t.pathLabel}</p>
                    <h4 className="text-2xl font-black mt-1">{lang === "th" ? path.thai : path.name}</h4>
                    <p className="text-sm text-white/60 leading-relaxed mt-3">{lang === "th" ? path.descTH : path.descEN}</p>
                    <div className="mt-5 inline-flex items-center gap-2 text-sm text-violet-200"><span>{t.explorePath}</span><span>→</span></div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionBlock id="beasts" kicker={t.beastsKicker} title={t.beastsTitle} text={t.beastsBody}>
        <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {CORE_BEASTS.map((beast) => (
            <LoreImageCard key={beast.name} image={beast.file} title={beast.name} tag={lang === "th" ? beast.tagTH : beast.tagEN} body={lang === "th" ? beast.descTH : beast.descEN} meta={lang === "th" ? beast.metaTH : beast.metaEN} />
          ))}
        </div>
        <ComingSoonBar text={t.comingSoon} />
      </SectionBlock>

      <SectionBlock id="special-beasts" kicker={t.specialKicker} title={t.specialTitle} text={t.specialBody}>
        <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {SPECIAL_BEASTS.map((beast) => (
            <LoreImageCard key={beast.name} image={beast.file} title={beast.name} tag={lang === "th" ? beast.typeTH : beast.typeEN} body={lang === "th" ? beast.descTH : beast.descEN} meta={lang === "th" ? beast.metaTH : beast.metaEN} />
          ))}
          <SealedLoreCard title="UNKNOWN ABYSS BEAST" tag="Unknown / Abyss-Type Special Beast" body={lang === "th" ? "Unknown Abyss Beast คือ Special Beast ปริศนาที่มีข้อมูลน้อยมาก เชื่อกันว่าเกี่ยวข้องกับ Core Energy ที่เสื่อมสลายจนตกสู่สภาวะ Abyss และ Madness ระดับลึก ไม่มีใครยืนยันรูปลักษณ์ที่แท้จริงของมันได้แน่ชัด และข้อมูลส่วนใหญ่ยังถูกปิดผนึกไว้ใน Core Archive" : "Unknown Abyss Beast is a mysterious Special Beast with very little confirmed data. It is believed to be connected to Core Energy that has decayed into the Abyss and deep Madness. Its true appearance has never been reliably confirmed, and most of its information remains sealed within the Core Archive."} meta="Nature: Unknown • Abyssal • Dangerous | Relation: Forbidden • Extremely Dangerous • Link Not Recommended" sealedLabel={t.sealed} />
        </div>
        <ComingSoonBar text={t.comingSoon} />
      </SectionBlock>

      <SectionBlock id="core-link" kicker={t.linkKicker} title={t.linkTitle} text={t.linkBody}>
        <div className="mt-10 grid lg:grid-cols-2 gap-6">
          <FullImagePanel image="/images/link/core-link-1.png" title="Warden" />
          <FullImagePanel image="/images/link/core-link-2.png" title="Beast" />
        </div>
      </SectionBlock>

      <SectionBlock id="others" kicker={t.othersKicker} title={t.othersTitle} text={t.othersBody}>
        <div className="mt-10 grid lg:grid-cols-2 gap-6">
          <FullImagePanel image="/images/archive/item-1.png" title="Item Archive" />
          <FullImagePanel image="/images/archive/archive-art-1.png" title="World Archive" />
        </div>
      </SectionBlock>

      <SectionBlock id="archive" kicker={t.archiveKicker} title={t.archiveTitle} text={t.archiveBody}>
        <div className="mt-8 rounded-3xl border border-white/10 bg-black/30 p-6 text-white/55 leading-relaxed">{t.futureStory}</div>
      </SectionBlock>


      <SectionBlock id="story" kicker={t.storyKicker} title={t.storyTitle} text={t.storyBody}>
        <div className="mt-10 space-y-10">
          {STORY_EPISODES.map((episode) => (
            <StoryEpisodeCard key={episode.ep} episode={episode} lang={lang} />
          ))}
        </div>
      </SectionBlock>

      {selectedPath && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-xl overflow-y-auto">
          <div className="min-h-screen max-w-6xl mx-auto px-5 py-16">
            <button onClick={() => setSelectedPath(null)} className="fixed top-6 right-6 z-50 rounded-full border border-white/15 bg-black/40 px-5 py-3 hover:bg-white/10">{t.close}</button>
            <div className="rounded-[2rem] overflow-hidden border border-white/10 bg-[#06060f]">
              <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 p-8">
                <div className="rounded-[2rem] overflow-hidden border border-white/10 bg-black aspect-[9/16] max-w-sm mx-auto w-full">
                  <video src={videoPathForPath(selectedPath.name)} poster={imagePathForPath(selectedPath.name)} autoPlay muted loop playsInline controls className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="tracking-[0.35em] uppercase text-xs text-white/40 mb-3">{t.pathDetail}</p>
                  <h2 className="text-5xl md:text-7xl font-black">{lang === "th" ? selectedPath.thai : selectedPath.name}</h2>
                  <p className="text-white/45 mt-2 mb-6">{selectedPath.name}</p>
                  <p className="text-lg text-white/70 leading-relaxed mb-8">{lang === "th" ? selectedPath.descTH : selectedPath.descEN}</p>
                  <div className="grid md:grid-cols-2 gap-5">
                    <InfoCard title={t.authority} text={selectedPath.authority} />
                    <InfoCard title={t.philosophy} text={lang === "th" ? "พลังที่ไร้สมดุลจะเชื้อเชิญการล่มสลาย" : "Power without balance invites collapse."} />
                    <PowerExamples title={t.examples} examples={lang === "th" ? selectedPath.examplesTH : selectedPath.examplesEN} />
                    <InfoCard title={t.archiveStatus} text={lang === "th" ? "ข้อมูล Sequence 9–1 ยังถูกปิดผนึก" : "Sequence 9–1 data remains sealed."} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="border-t border-white/10 px-6 py-10 text-center text-white/35 text-sm tracking-[0.3em]">© PANN.</footer>

      <section id="contact" className="max-w-7xl mx-auto px-5 py-24">
        <div className="rounded-[2rem] border border-violet-200/20 bg-white/[0.035] p-8 md:p-10 text-center">
          <p className="text-violet-200/70 tracking-[0.35em] text-xs uppercase mb-4">{t.contactKicker}</p>
          <h2 className="text-4xl md:text-6xl font-black mb-6">{t.contactTitle}</h2>
          <p className="mx-auto max-w-3xl text-white/65 leading-relaxed text-lg">{t.contactBody}</p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://www.tiktok.com/@core.warden"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-white px-8 py-4 font-black text-black transition hover:scale-105"
            >
              {t.tiktokButton}
            </a>
            <a
              href="https://discord.gg/QwkXdtKF"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/20 bg-white/5 px-8 py-4 font-black text-white transition hover:bg-white/10 hover:scale-105"
            >
              {t.discordButton}
            </a>
          </div>
        </div>
      </section>

      <div className="mt-24 border-t border-white/10 py-10 text-center">
        <p className="text-xs tracking-[0.35em] text-white/30">
          © PANN.
        </p>
      </div>
    </div>
  );
}


function StoryEpisodeCard({ episode, lang }) {
  const title = lang === "th" ? episode.titleTH : episode.titleEN;
  const body = lang === "th" ? episode.bodyTH : episode.bodyEN;

  return (
    <article className="rounded-[2rem] border border-white/10 bg-black/35 p-5 md:p-8 shadow-[0_0_60px_rgba(0,0,0,.25)]">
      <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-violet-200/60">
            Episode {String(episode.ep).padStart(2, "0")}
          </p>
          <h3 className="mt-2 text-3xl md:text-4xl font-black">{title}</h3>
        </div>
        <p className="text-sm text-white/35">CORE WARDEN: MADNESS EQUILIBRIUM</p>
      </div>

      <div className="overflow-hidden rounded-3xl border border-white/10 bg-black">
        <img
          src={episode.image}
          alt={`Episode ${episode.ep} Storyboard`}
          className="w-full h-auto object-contain bg-black"
        />
      </div>

      <div className="mt-7 whitespace-pre-line rounded-3xl border border-white/10 bg-white/[0.035] p-6 text-base leading-8 text-white/72 md:text-lg md:leading-9">
        {body}
      </div>
    </article>
  );
}

function SectionBlock({ id, kicker, title, text, children, bgImage }) {
  return (
    <section id={id} className="max-w-7xl mx-auto px-5 py-24">
      <div
        className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 md:p-10"
        style={
          bgImage
            ? {
                backgroundImage: `linear-gradient(rgba(3,3,10,.78), rgba(3,3,10,.78)), url('${bgImage}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : undefined
        }
      >
        <p className="text-violet-200/70 tracking-[0.35em] text-xs uppercase mb-4">{kicker}</p>
        <h2 className="text-5xl md:text-7xl font-black mb-6">{title}</h2>
        <p className="text-white/65 leading-relaxed text-lg max-w-5xl">{text}</p>
        {children}
      </div>
    </section>
  );
}

function LoreImageCard({ image, title, tag, body, meta }) {
  return (
    <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/[0.04]">
      <div className="aspect-[9/16] bg-black overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover object-top" />
      </div>
      <div className="p-5">
        <p className="text-xs uppercase tracking-[0.25em] text-violet-200/60 mb-2">{tag}</p>
        <h3 className="text-2xl font-black mb-3">{title}</h3>
        <p className="text-sm text-white/70 leading-relaxed mb-4">{body}</p>
        <p className="text-xs text-white/45 leading-relaxed">{meta}</p>
      </div>
    </div>
  );
}

function SealedLoreCard({ title, tag, body, meta, sealedLabel }) {
  return (
    <div className="rounded-3xl overflow-hidden border border-violet-200/20 bg-gradient-to-b from-violet-500/10 to-black/40">
      <div className="aspect-[9/16] grid place-items-center bg-[radial-gradient(circle_at_50%_35%,rgba(139,92,246,.35),transparent_30%),radial-gradient(circle_at_50%_60%,rgba(255,255,255,.06),transparent_35%)] border-b border-white/10">
        <div className="text-center px-6">
          <div className="mx-auto h-28 w-28 rounded-full border border-violet-200/20 bg-black/40 grid place-items-center text-4xl">?</div>
          <p className="mt-5 tracking-[0.35em] text-xs uppercase text-violet-200/75">{sealedLabel}</p>
          <h4 className="mt-2 text-2xl font-black text-white/90">Unknown Abyss Beast</h4>
        </div>
      </div>
      <div className="p-5">
        <p className="text-xs uppercase tracking-[0.25em] text-violet-200/60 mb-2">{tag}</p>
        <h3 className="text-2xl font-black mb-3">{title}</h3>
        <p className="text-sm text-white/70 leading-relaxed mb-4">{body}</p>
        <p className="text-xs text-white/45 leading-relaxed">{meta}</p>
      </div>
    </div>
  );
}

function FullImagePanel({ image, title }) {
  return (
    <div className="rounded-[2rem] overflow-hidden border border-white/10 bg-black/70">
      <img
        src={image}
        alt={title}
        className="w-full h-auto object-contain bg-black"
      />
    </div>
  );
}

function ComingSoonBar({ text }) {
  return (
    <div className="mt-8 flex items-center justify-end gap-3 text-violet-200/80">
      <span className="text-3xl">→</span>
      <span className="tracking-[0.25em] text-xs uppercase">{text}</span>
    </div>
  );
}

function InfoCard({ title, text }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
      <h3 className="text-xl font-black mb-3">{title}</h3>
      <p className="text-white/65 leading-relaxed">{text}</p>
    </div>
  );
}

function PowerExamples({ title, examples }) {
  return (
    <div className="rounded-3xl border border-violet-200/20 bg-violet-500/[0.06] p-6">
      <h3 className="text-xl font-black mb-3">{title}</h3>
      <ul className="space-y-2 text-white/65 leading-relaxed">
        {examples.map((example) => (
          <li key={example} className="flex gap-2"><span className="text-violet-200">✦</span><span>{example}</span></li>
        ))}
      </ul>
    </div>
  );
}
