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
                    <img src={imagePathForPath(path.name)} alt={path.name} className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
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
      <div className="mt-24 border-t border-white/10 py-10 text-center">
        <p className="text-xs tracking-[0.35em] text-white/30">
          © PANN.
        </p>
      </div>
    </div>
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
        <img src={image} alt={title} className="h-full w-full object-cover" />
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
    <div className="rounded-[2rem] overflow-hidden border border-white/10 bg-black/25">
      <div className="aspect-[4/5] md:aspect-[3/4] bg-black overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>
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
