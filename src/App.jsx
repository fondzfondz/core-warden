
/* UMBRAL COVENANT PATCH READY */
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
    navCharacters: "ตัวละครหลัก",
    charactersKicker: "MAIN CHARACTERS OF ARC I",
    charactersTitle: "ตัวละครหลักของภาคแรก",
    charactersBody: "สมาชิกหลักทั้งห้าคนของ Umbral Covenant กลุ่ม Warden ที่เป็นศูนย์กลางของ Arc I",
    viewCharacter: "เปิดข้อมูลตัวละคร",
    viewPathArchive: "เปิดคลังเส้นทาง",
    characterRole: "บทบาท",
    characterPath: "เส้นทาง",
    characterStatus: "สถานะเนื้อเรื่อง",
    currentSequence: "ลำดับปัจจุบัน",
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
    contactTitle: "CONTACT THE ARCHIVE",
    contactBody: "Records may be incomplete. If you discover inconsistencies within the Archive, submit a correction request.",
    tiktokButton: "TikTok Archive: [REDACTED]",
    discordButton: "Discord Archive: [REDACTED]",
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
    navCharacters: "Characters",
    charactersKicker: "MAIN CHARACTERS OF ARC I",
    charactersTitle: "Main Characters of Arc I",
    charactersBody: "The five core members of Umbral Covenant, the Warden team at the center of Arc I.",
    viewCharacter: "View Character",
    viewPathArchive: "Open Path Archive",
    characterRole: "Role",
    characterPath: "Path",
    characterStatus: "Story Status",
    currentSequence: "Current Sequence",
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
    contactTitle: "CONTACT THE ARCHIVE",
    contactBody: "Records may be incomplete. If you discover inconsistencies within the Archive, submit a correction request.",
    tiktokButton: "TikTok Archive: [REDACTED]",
    discordButton: "Discord Archive: [REDACTED]",
  },
};

const PILLARS = [
  { key: "Primordials", title: "The Primordials", thai: "เสาหลักปฐมธาตุ", color: "from-emerald-400/30 via-orange-400/20 to-cyan-400/20", paths: ["Flora", "Tides", "Flame", "Ice", "Gales", "Terra", "Thunder"] },
  { key: "Vitalities", title: "The Vitalities", thai: "เสาหลักชีวภาพ", color: "from-lime-300/30 via-white/10 to-yellow-200/20", paths: ["Flora Heal", "Restoration", "Spirit", "Holy Light"] },
  { key: "Abstracts", title: "The Abstracts", thai: "เสาหลักนามธรรม", color: "from-red-500/25 via-purple-500/25 to-slate-300/10", paths: ["Blood", "Wisdom", "Truth", "Darkness", "Illusion"] },
  { key: "Celestials", title: "The Celestials", thai: "เสาหลักดาราจักร", color: "from-blue-400/25 via-violet-400/25 to-yellow-300/20", paths: ["Time", "Astronomy", "Chaos-Space", "Fate"] },
  { key: "Constructs", title: "The Constructs", thai: "เสาหลักสิ่งสร้าง", color: "from-zinc-300/25 via-amber-300/15 to-purple-500/20", paths: ["Machinery", "Shadow"] },
];

const PATH_DATA = [{'name': 'Flora', 'thai': 'พฤกษา', 'pillar': 'Primordials', 'descTH': 'ควบคุมพืช เถาวัลย์ หนาม และระบบนิเวศ เหมาะกับการควบคุมพื้นที่', 'descEN': 'Controls plants, vines, thorns, and ecosystems for area control.', 'authority': 'Growth · Vines · Ecosystem', 'examplesTH': ['เถาวัลย์พันธนาการศัตรู', 'กำแพงหนามป้องกันพื้นที่', 'สปอร์รบกวนการรับรู้'], 'examplesEN': ['Bind enemies with vines', 'Raise thorn walls', 'Use spores to disrupt perception']}, {'name': 'Tides', 'thai': 'กระแสน้ำ', 'pillar': 'Primordials', 'descTH': 'พลังแห่งน้ำ คลื่น และกระแส ใช้ได้ทั้งโจมตี ป้องกัน และกักขัง', 'descEN': 'Power over water, waves, and currents for offense, defense, and restraint.', 'authority': 'Waves · Currents · Water Pressure', 'examplesTH': ['สร้างกระแสน้ำวน', 'อัดแรงดันน้ำเป็นเกราะ', 'ทำให้สนามรบลื่นไหล'], 'examplesEN': ['Create whirlpools', 'Compress water pressure as a shield', 'Turn the battlefield fluid']}, {'name': 'Flame', 'thai': 'เปลวเพลิง', 'pillar': 'Primordials', 'descTH': 'พลังแห่งเปลวไฟ การระเบิด และความร้อนสูง ตรงไปตรงมาและรุนแรง', 'descEN': 'Power of flame, explosion, and extreme heat. Direct and destructive.', 'authority': 'Fire · Combustion · Heat', 'examplesTH': ['เร่งอุณหภูมิให้ปะทุ', 'ปล่อยแรงระเบิดจากไฟ', 'เคลือบร่างกายด้วยเพลิง'], 'examplesEN': ['Ignite sudden combustion', 'Release explosive fire bursts', 'Coat the body in flame']}, {'name': 'Ice', 'thai': 'น้ำแข็ง', 'pillar': 'Primordials', 'descTH': 'หยุดยั้ง แช่แข็ง และลดการเคลื่อนไหว เหมาะกับการคุมจังหวะสนามรบ', 'descEN': 'Freezes, restrains, and slows movement. Excellent for control.', 'authority': 'Frost · Stillness · Crystal Ice', 'examplesTH': ['ผลึกน้ำแข็งตรึงเป้าหมาย', 'ลดอุณหภูมิเพื่อชะลอศัตรู', 'สร้างกำแพงน้ำแข็ง'], 'examplesEN': ['Freeze targets with crystal ice', 'Lower temperature to slow foes', 'Create ice walls']}, {'name': 'Gales', 'thai': 'สายลม', 'pillar': 'Primordials', 'descTH': 'ควบคุมลม แรงดัน และความเร็ว ความเร็วคืออาวุธหลัก', 'descEN': 'Controls wind, pressure, and speed. Speed is the main weapon.', 'authority': 'Wind · Speed · Pressure', 'examplesTH': ['พุ่งตัวด้วยแรงลม', 'ใบมีดลมระยะกลาง', 'เบี่ยงวิถีโจมตีด้วยแรงดัน'], 'examplesEN': ['Dash with wind force', 'Launch mid-range wind blades', 'Deflect attacks with pressure']}, {'name': 'Terra', 'thai': 'ปฐพี', 'pillar': 'Primordials', 'descTH': 'พลังแห่งหิน ดิน และแร่ แข็งแกร่ง หนักแน่น และเหมาะกับการป้องกัน', 'descEN': 'Power over stone, soil, and minerals. Heavy, durable, and defensive.', 'authority': 'Stone · Earth · Minerals', 'examplesTH': ['ยกกำแพงหิน', 'ยุบพื้นดินจับขาศัตรู', 'สร้างเกราะแร่บนร่างกาย'], 'examplesEN': ['Raise stone walls', 'Collapse the ground to trap foes', 'Form mineral armor']}, {'name': 'Thunder', 'thai': 'อสุนี', 'pillar': 'Primordials', 'descTH': 'สายฟ้า ความเร็ว และการกระตุ้นประสาท รวดเร็วและดุดัน', 'descEN': 'Lightning, speed, and nerve stimulation. Fast and aggressive.', 'authority': 'Lightning · Nerves · Burst Speed', 'examplesTH': ['ปล่อยสายฟ้าฉับพลัน', 'กระตุ้นประสาทให้ตอบสนองไว', 'รบกวนการเคลื่อนไหวด้วยสนามไฟฟ้า'], 'examplesEN': ['Release instant lightning strikes', 'Stimulate reflexes', 'Disrupt movement with electric fields']}, {'name': 'Flora Heal', 'thai': 'พฤกษาเยียวยา', 'pillar': 'Vitalities', 'descTH': 'ใช้พลังชีวิตของพืชเพื่อเยียวยา ฟื้นฟู และชำระพิษ', 'descEN': 'Uses plant life force to heal, restore, and cleanse toxins.', 'authority': 'Healing Flora · Purification · Recovery', 'examplesTH': ['ละอองพฤกษาฟื้นฟูบาดแผล', 'ดูดซับพิษออกจากร่างกาย', 'สร้างเขตเยียวยา'], 'examplesEN': ['Heal wounds with floral mist', 'Absorb toxins', 'Create healing zones']}, {'name': 'Restoration', 'thai': 'การฟื้นคืน', 'pillar': 'Vitalities', 'descTH': 'ฟื้นสภาพ ซ่อมแซม และคืนความสมบูรณ์ให้สิ่งที่เสียหาย', 'descEN': 'Restores, repairs, and returns damaged things toward wholeness.', 'authority': 'Repair · Reconstruction · Renewal', 'examplesTH': ['ซ่อมแซมวัตถุแตกหัก', 'เร่งการสมานแผล', 'คืนสภาพพื้นที่เสียหาย'], 'examplesEN': ['Repair broken objects', 'Accelerate healing', 'Restore damaged zones']}, {'name': 'Spirit', 'thai': 'วิญญาณ', 'pillar': 'Vitalities', 'descTH': 'เกี่ยวข้องกับวิญญาณ จิตสำนึก และตัวตนภายใน โจมตีจิตวิญญาณได้โดยตรง', 'descEN': 'Deals with souls, consciousness, and inner identity.', 'authority': 'Soul · Consciousness · Spirit Pressure', 'examplesTH': ['สัมผัสร่องรอยวิญญาณ', 'โจมตีระดับจิตใจ', 'สร้างม่านวิญญาณป้องกัน'], 'examplesEN': ['Sense soul traces', 'Attack the mind directly', 'Create spiritual barriers']}, {'name': 'Holy Light', 'thai': 'แสงศักดิ์สิทธิ์', 'pillar': 'Vitalities', 'descTH': 'แสงศักดิ์สิทธิ์ การชำระล้าง การปกป้อง และการลงทัณฑ์', 'descEN': 'Holy light for purification, protection, and judgment.', 'authority': 'Purification · Protection · Judgment', 'examplesTH': ['ลำแสงชำระล้าง', 'เกราะแสงป้องกัน', 'ลงทัณฑ์สิ่งชั่วร้าย'], 'examplesEN': ['Release purifying light', 'Create light shields', 'Judge evil with sacred radiance']}, {'name': 'Blood', 'thai': 'โลหิต', 'pillar': 'Abstracts', 'descTH': 'ควบคุมเลือด พลังชีวิต และการเสียสละ ยิ่งใช้หนักยิ่งเสี่ยงคลุ้มคลั่ง', 'descEN': 'Controls blood, life force, and sacrifice. Heavy use risks frenzy.', 'authority': 'Blood · Sacrifice · Life Force', 'examplesTH': ['ควบคุมเลือดเป็นอาวุธ', 'เร่งการไหลเวียนเพิ่มพละกำลัง', 'อ่านร่องรอยจากเลือด'], 'examplesEN': ['Shape blood into weapons', 'Boost strength via circulation', 'Read traces through blood']}, {'name': 'Wisdom', 'thai': 'ปัญญา', 'pillar': 'Abstracts', 'descTH': 'ความรู้ การวิเคราะห์ ความทรงจำ และความเข้าใจสิ่งลี้ลับ', 'descEN': 'Knowledge, analysis, memory, and understanding of mysteries.', 'authority': 'Analysis · Memory · Knowledge', 'examplesTH': ['วิเคราะห์รูปแบบการโจมตี', 'จดจำข้อมูลสนามรบอย่างแม่นยำ', 'อ่านโครงสร้างพลัง'], 'examplesEN': ['Analyze attack patterns', 'Store battlefield information', 'Read energy structures']}, {'name': 'Truth', 'thai': 'สัจธรรม', 'pillar': 'Abstracts', 'descTH': 'เส้นทางแห่งความจริง กฎ และการเปิดเผย ทำลายคำลวงได้', 'descEN': 'A Path of truth, law, and revelation that breaks deception.', 'authority': 'Law · Revelation · Judgment', 'examplesTH': ['มองทะลุภาพลวง', 'เปิดเผยเงื่อนไขที่ซ่อนอยู่', 'บังคับให้ความจริงปรากฏ'], 'examplesEN': ['See through illusions', 'Reveal hidden conditions', 'Force truth into the open']}, {'name': 'Darkness', 'thai': 'ความมืด', 'pillar': 'Abstracts', 'descTH': 'เส้นทางแห่งความว่าง การลบเลือน และการไม่มีอยู่ ไม่ใช่แค่เงามืด แต่คือการกัดกร่อนการมีอยู่', 'descEN': 'A Path of void, erasure, and non-existence. Not mere shadow, but the erosion of being itself.', 'authority': 'Erasure · Absence · Void', 'examplesTH': ['กลืนแสงในพื้นที่', 'ซ่อนการเคลื่อนไหวในความมืด', 'ปล่อยแรงกดดันแห่งความกลัว'], 'examplesEN': ['Swallow light in an area', 'Hide movement within darkness', 'Release fear pressure']}, {'name': 'Illusion', 'thai': 'มายา', 'pillar': 'Abstracts', 'descTH': 'บิดเบือนการรับรู้ ความเชื่อ และตรรกะ ทำให้สิ่งที่ผู้คนเชื่อเริ่มกลายเป็นความจริงเทียม', 'descEN': 'Distorts perception, belief, and logic until what people believe begins to become false reality.', 'authority': 'Belief · Perception · Deception', 'examplesTH': ['สร้างร่างลวง', 'บิดเบือนระยะและเสียง', 'ทำให้เป้าหมายเห็นสิ่งที่หวาดกลัว'], 'examplesEN': ['Create illusion bodies', 'Distort distance and sound', 'Show targets their deepest fear']}, {'name': 'Time', 'thai': 'กาลเวลา', 'pillar': 'Celestials', 'descTH': 'แตะต้องเวลา จังหวะ และความเสื่อมสลาย อันตรายต่อสติผู้ใช้มาก', 'descEN': 'Touches time, rhythm, and decay. Extremely dangerous to the mind.', 'authority': 'Time · Rhythm · Decay', 'examplesTH': ['ชะลอการเคลื่อนไหวชั่วคราว', 'เร่งการเสื่อมสภาพบางอย่าง', 'สัมผัสจังหวะเวลาที่ผิดปกติ'], 'examplesEN': ['Temporarily slow motion', 'Accelerate decay', 'Sense abnormal time rhythms']}, {'name': 'Astronomy', 'thai': 'ดาราศาสตร์', 'pillar': 'Celestials', 'descTH': 'พลังแห่งดาว วงโคจร แรงดึงดูด และปรากฏการณ์ท้องฟ้า', 'descEN': 'Power of stars, orbits, gravity, and celestial phenomena.', 'authority': 'Stars · Orbit · Cosmic Flow', 'examplesTH': ['อ่านทิศทาง Core Flow ผ่านตำแหน่งดาว', 'ใช้แรงดึงดูดจำลองดึงหรือผลัก', 'เห็นร่องรอยของดวงดาวที่ดับสูญ'], 'examplesEN': ['Read Core flow through stellar positions', 'Pull or repel with simulated gravity', 'See traces of fallen stars']}, {'name': 'Chaos-Space', 'thai': 'โกลาหลมิติ', 'pillar': 'Celestials', 'descTH': 'บิดเบือนมิติ ระยะทาง และความต่อเนื่องของพื้นที่ ทรงพลังแต่เสี่ยงเสียสติ', 'descEN': 'Distorts space, distance, and continuity. Powerful but mentally dangerous.', 'authority': 'Spatial Rift · Distortion · Warp', 'examplesTH': ['บิดระยะทางสั้นๆ', 'สร้างรอยแยกมิติหลบหลีก', 'ทำให้ทิศทางสนามรบสับสน'], 'examplesEN': ['Twist short distances', 'Create brief spatial rifts', 'Disorient spatial directions']}, {'name': 'Fate', 'thai': 'โชคชะตา', 'pillar': 'Celestials', 'descTH': 'เกี่ยวข้องกับเส้นด้ายของโชคชะตา ความน่าจะเป็น และจังหวะสำคัญ', 'descEN': 'Deals with threads of fate, probability, and decisive moments.', 'authority': 'Threads · Probability · Outcome', 'examplesTH': ['สัมผัสจังหวะที่เปลี่ยนผลลัพธ์', 'เบี่ยงความน่าจะเป็นเล็กน้อย', 'อ่านเส้นทางความเป็นไปได้'], 'examplesEN': ['Sense moments that alter outcomes', 'Slightly bend probability', 'Read branching possibilities']}, {'name': 'Machinery', 'thai': 'จักรกล', 'pillar': 'Constructs', 'descTH': 'จักรกล กลไก การดัดแปลง และวิวัฒนาการเชิงเครื่องจักร', 'descEN': 'Machines, mechanisms, modification, and mechanical evolution.', 'authority': 'Mechanism · Circuits · Augmentation', 'examplesTH': ['สร้างกลไก Core ช่วยต่อสู้', 'เสริมอุปกรณ์ด้วยวงจรพลังงาน', 'วิเคราะห์และควบคุมเครื่องจักร'], 'examplesEN': ['Build small Core mechanisms', 'Enhance tools with energy circuits', 'Analyze and control machinery']}, {'name': 'Shadow', 'thai': 'เงา', 'pillar': 'Constructs', 'descTH': 'ควบคุมเงา รูปร่างมืด และการซ่อนตัว เหมาะกับการลอบโจมตี', 'descEN': 'Controls shadows, dark forms, and concealment for ambush tactics.', 'authority': 'Shadow · Concealment · Ambush', 'examplesTH': ['เคลื่อนที่ผ่านเงาระยะสั้น', 'สร้างเงาโจมตีจากมุมอับ', 'ซ่อนตัวและเสียงในความมืด'], 'examplesEN': ['Move through shadows briefly', 'Attack from blind spots with shadow forms', 'Hide presence in darkness']}];

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
    "bodyEN": "The sky bled.\n\nGray-red rain crashed against the streets hard enough to burst into crimson mist. Rust, rot, and blood choked the air until breathing itself felt filthy. Ren stood trembling beneath a collapsing bus stop while the world around him died screaming.\n\nA man was ripped apart midair by an unseen force descending from the heavens. Flesh and blood rained down across shattered cars. A little girl's skull burst open between one heartbeat and the next.\n\nAbove the city, the sky split apart.\n\nA vast violet-black wound opened across the heavens, filled with burning stars that screamed like living things.\n\nThen the silver light came.\n\nAnd the city vanished.\n\nIn another world, a forest village drowned beneath blood rain.\n\nA colossal black serpent Core Beast crawled through burning homes, crushing bodies beneath its scales. A dying boy lay half-buried in mud and blood after watching his parents torn apart before his eyes.\n\nThen Ren's soul fell through the dimensional fracture.\n\nIt slammed into the boy's dying body.\n\nAgony tore through him like his spirit was being ripped into a thousand wet pieces.\n\n“Welcome to your new hell.”\n\nBefore the serpent could finish the slaughter, golden light descended through the storm.\n\nVark carved the Beast apart with brutal precision. Black blood flooded the mud. Torn flesh and shattered scales scattered across the corpses.\n\nHe lifted the dying child onto his shoulder.\n\n“I did not save you out of mercy,” he muttered.\n“I owed your father a debt.”\n\nFar above them, a dark star pulsed hungrily in the endless sky.\n\nAnd from somewhere beyond the void, a whisper echoed.\n\n“Balance…”"
  },
  {
    "ep": 2,
    "titleTH": "ราคาของการเอาชีวิตรอด",
    "titleEN": "The Price of Survival",
    "image": "/images/story/ep-2.png",
    "bodyTH": "เสียงฝนเลือดยังคงตกกระทบหลังคาไม้เก่าๆ อย่างไม่ขาดสาย\n\nหยดสีแดงเข้มไหลย้อยลงตามขอบหน้าต่าง ราวกับบ้านทั้งหลังกำลังถูกแช่ในเลือด กลิ่นสมุนไพรฉุน กลิ่นเลือดแห้งคาว และกลิ่นเนื้อเน่าอ่อนๆ ลอยคละคลุ้งทั่วห้องแคบ\n\nนรันค่อยๆ ลืมตาขึ้นช้าๆ ความเจ็บปวดแล่นไปทั่วร่างทันที โดยเฉพาะหน้าอกและแขนซ้ายที่กระดูกยังแตกร้าว เขาพยายามลุกขึ้น แต่เพียงขยับตัว—\n\nกร๊อบ…\n\nความเจ็บจากกระดูกที่หักเล่นงานจนเขาก้มตัวลงแทบอาเจียน\n\n“…อย่าขยับ”\n\nเสียงเย็นชาไร้อารมณ์ดังขึ้นจากมุมห้อง นรันสะดุ้ง\n\nวาร์คนั่งลับมีดอยู่ข้างกำแพงไม้เก่า แกรก… แกรก… เสียงหินลับมีดเสียดสีกับใบดาบดังช้าๆ ดวงตาสีหม่นของเขามองมานรันเพียงครู่เดียวก่อนหันกลับไปลับดาบต่อ\n\n“แกยังไม่ตาย… ก็นับว่าโชคดีมากแล้ว”\n\nนรันเงียบ\n\nภาพสุดท้ายก่อนหมดสติย้อนกลับมา ศพพ่อถูกงูกัดครึ่ง ไส้ทะลัก แม่ถูกกิ่งไม้แทงทะลุท้อง เลือดพุ่งเป็นสาย และร่างของตัวเองที่กระเด็นกระแทกต้นไม้ แม้จะไม่ใช่พ่อแม่แท้ๆ ของเขา แต่ความเจ็บปวดยังคงแทงทะลุหัวใจ ราวกับความทรงจำของเด็กคนนี้ยังตกค้างอยู่ในร่าง\n\n“…ที่นี่ที่ไหน”\n\n“เมืองชายแดน” วาร์คตอบสั้นๆ “หมู่บ้านของแกหายไปแล้ว”\n\nวาร์คพูดต่อด้วยน้ำเสียงเรียบ\n\n“จำไว้ โลกนี้ไม่มีใครสนใจคนอ่อนแอ ถ้าแกยังอ่อนแอ… แกก็จะตายเหมือนพวกนั้น”\n\nนรันกัดฟันแน่น แต่วาร์คยังพูดต่อ\n\n“ไม่มีใครช่วยทัน ไม่มีปาฏิหาริย์ ไม่มีพระเจ้า มีแต่คนที่รอด…กับคนที่ตาย”\n\nสัปดาห์ต่อมา\n\nนรันถูกลากออกมานอกบ้านตั้งแต่ฟ้ายังไม่สว่าง อากาศเย็นยะเยือกจนหายใจเป็นไอ\n\n“วิ่ง”\n\nวาร์คโยนกระสอบทรายหนักๆ ใส่หน้าอกเขา นรันแทบล้มทันที\n\n“ไหวบ้าอะไร…”\n\n“ถ้าแค่นี้ยังไม่ไหว แกก็อยู่โลกนี้ไม่ได้” วาร์คพูดเรียบๆ ก่อนเดินนำออกไป\n\nนรันกัดฟันแบกกระสอบขึ้นหลัง เริ่มวิ่งตามอย่างทุลักทุเล\n\nโคลน หิน ฝนเลือด ทุกอย่างทำให้ร่างกายเด็กสิบสี่ปีแทบพัง เขาล้มหลายครั้ง หัวเข่าถลอกจนเลือดไหล ไหล่ช้ำจากน้ำหนักกระสอบ แต่ทุกครั้งที่ล้ม วาร์คจะพูดเพียงคำเดียว\n\n“ลุก”\n\nไม่มีคำช่วย ไม่มีคำปลอบ มีเพียงสายตาเย็นชาที่มองว่าเด็กคนนี้จะ “รอด” หรือไม่\n\n.\n\n.\n\n.\n\nกลางดึกของคืนหนึ่ง เสียงกรีดร้องดังลั่นจากถนนด้านนอก\n\nอ๊ากกกกกก!!!\n\nนรันสะดุ้งตื่น\n\n“Madness!! มี Warden คลั่ง!!”\n\nวาร์คลุกขึ้นทันที คว้าดาบก่อนเดินออกไป นรันรีบตามออกไป\n\nถนนกลางเมืองเต็มไปด้วยผู้คนที่วิ่งหนีตาย กลางลานดิน ชายคนหนึ่งกำลังกรีดร้องอย่างบ้าคลั่ง เส้นเลือดสีดำปูดโปนทั่วร่าง เนื้อที่แขนเริ่มเน่าเปื่อย กลิ่นเหม็นฉุนลอยคละคลุ้ง ดวงตาแดงก่ำ เขาฉีกเนื้อตัวเองด้วยเล็บจนเลือดไหล\n\n“มันอยู่ในหัวข้า!!”\n\n“มันกระซิบตลอดเวลา!!”\n\n“หยุด… หยุดที…!!”\n\nแล้วเขาก็พุ่งเข้าใส่หญิงคนหนึ่ง กัดคอเธอขาดในพริบตา เลือดพุ่งกระจาย\n\nวาร์คเดินผ่านผู้คนที่แตกตื่นอย่างเงียบๆ ดาบสีทองหม่นถูกชักออก\n\nฉัวะ!!\n\nหัวของ Warden ที่คลั่งกลิ้งตกลงพื้น เลือดพุ่งจากคอขาดเหมือนน้ำพุ ร่างไร้หัวยังกระตุกอยู่พักหนึ่งก่อนนิ่งสนิท วาร์คสะบัดเลือดออกจากดาบช้าๆ ก่อนพูดโดยไม่หันกลับมา\n\n“Core ไม่ใช่พร มันคือคำสาป”\n\nนรันยืนตัวสั่น มองศพที่ยังมีเลือดไหลไม่หยุด ไม่มีใครร้องไห้ ไม่มีใครตกใจ ราวกับทุกคนในเมืองนี้… คุ้นชินกับความตายไปแล้ว\n\nและในคืนนั้น นรันก็เริ่มเข้าใจจริงๆ\n\nโลกนี้ ไม่เคยเมตตาใคร",
    "bodyEN": "Blood rain hammered the rotten roof long after the massacre ended.\n\nNaran awoke inside Vark's ruined wooden house with pain crawling through every bone in his body. The memory of torn flesh, shattered screams, and his parents dying in the mud still clawed at the inside of his skull.\n\nThe village was gone.\n\nNo gods came to save anyone.\n\nNo miracles waited for the weak.\n\nThere were only survivors.\n\nAnd corpses.\n\nDays later, Vark began dragging him through merciless training before dawn. Mud swallowed his legs. Sandbags ripped open his shoulders. Blood filled his mouth every time he collapsed.\n\nWhenever Naran fell, Vark spoke only one word.\n\n“Stand.”\n\nOne night, screams erupted through the border town.\n\nA Warden had fallen into Madness.\n\nBlack veins crawled beneath the man's skin while he tore chunks of flesh from his own arms, screaming that something inside his head would not stop whispering.\n\nWhen the maddened Warden lunged at a terrified woman, Vark cut his head from his shoulders without hesitation.\n\nBlood painted the street.\n\nThe corpse twitched in the rain.\n\n“Core is not a blessing,” Vark said coldly.\n“It is a curse wearing the face of power.”\n\nThat night, Naran finally understood.\n\nThis world had buried mercy long ago."
  },
  {
    "ep": 3,
    "titleTH": "เมืองแห่งความคลุ้มคลั่ง",
    "titleEN": "City of Madness",
    "image": "/images/story/ep-3.png",
    "bodyTH": "ฝนเลือดหยุดตกแล้ว\n\nแต่กลิ่นของมันยังติดค้างอยู่ทั่วเมืองชายแดน กลิ่นคาวเหล็ก กลิ่นเนื้อเน่าเปื่อย กลิ่นโคลนชื้นผสมเลือดแห้ง ทุกครั้งที่นรันหายใจ เขารู้สึกเหมือนกำลังสูดกลิ่นความตายเข้าไปในปอด\n\nเขานั่งเงียบอยู่หน้าบ้านไม้เก่าๆ สายตาเหม่อมองผู้คนที่เดินผ่านถนนดินแดง เมืองชายแดนแห่งนี้ไม่มีชีวิต ไม่มีเสียงหัวเราะ ไม่มีตลาดคึกคัก มีเพียงผู้คนที่พยายาม “อยู่รอด” ไปวันต่อวัน\n\nชายแขนขาดคนหนึ่งเดินผ่าน ดวงตาว่างเปล่า แขนที่เหลือเต็มไปด้วยรอยแผลสีดำคล้ายเส้นเลือดที่กำลังเน่า ข้างหลังเขา เด็กผู้หญิงตัวเล็กกำลังลากเกวียนไม้ที่เต็มไปด้วยซาก Core Beast กลิ่นเลือดสดโชยผ่านจมูกนรัน บนเกวียนมีหัวของสัตว์บางอย่างที่ถูกตัดออก ดวงตามันยังเปิดค้าง เหมือนยังไม่รู้ตัวว่าตายแล้ว\n\nนรันเบือนหน้าหนีทันที\n\n“ชินไว้ซะ” เสียงวาร์คดังขึ้นจากด้านหลัง “ถ้ายังอาเจียนกับเลือดแค่นี้ แกคงอยู่ที่นี่ได้ไม่นาน”\n\nนรันกำมือแน่น\n\n“…ที่นี่มัน… เหมือนนรก”\n\nวาร์คหัวเราะในลำคอเบาๆ\n\n“ถ้าแค่เมืองชายแดนยังเรียกว่านรก แกคงไม่อยากเห็นโลกด้านนอก”\n\n.\n\n.\n\n.\n\nวาร์คพานรันเดินลึกเข้าไปในเมืองช่วงสาย ยิ่งเดินลึกเข้าไป เมืองยิ่งดูบิดเบี้ยว\n\nผู้คนจำนวนมากมีสภาพไม่ต่างจากศพเดินได้ บางคนมีผลึก Core งอกออกจากแขน บางคนมีดวงตาสีผิดปกติ บางคนนั่งพึมพำกับตัวเองอยู่ริมถนน\n\n“พวกนั้น…” นรันถามเสียงเบา\n\n“ผลข้างเคียงของ Core” วาร์คตอบทันที “บางคนใช้พลังมากเกินไป บางคน… แค่โชคร้าย”\n\nชายแก่คนหนึ่งที่นั่งหัวเราะคนเดียวอยู่ข้างกำแพง เงยหน้าขึ้น ดวงตาของเขาไม่มีตาดำเหลือแล้ว มีเพียงสีขาวขุ่นคล้ายศพแช่น้ำ\n\n“ดวงดาว…” เขาหัวเราะเสียงแหบ “ข้าได้ยินเสียงพวกมันทุกคืน… มันร้องอยู่บนฟ้า…”\n\nนรันตัวแข็ง แต่ก่อนเขาจะทันถามอะไร วาร์คก็เดินผ่านชายแก่ไปทันที\n\n“อย่าเข้าใกล้คนเสียสติ แกไม่มีวันรู้ว่าพวกมันจะคลั่งเมื่อไหร่”\n\n.\n\n.\n\n.\n\nตลาดกลางเมืองเต็มไปด้วยเสียงตะโกนซื้อขาย แต่สิ่งที่วางขายคือเขี้ยว Beast, ดวงตา Beast, กระดูกสีดำ และชิ้นเนื้อที่ยังมี Core energy ไหลเวียน\n\nชายร่างใหญ่ใช้มีดสับแขนสัตว์ประหลาดบนเขียงไม้ เลือดสีดำกระเซ็นเต็มพื้น\n\n“สดๆ จากป่าชั้นนอก! กินแล้วเพิ่มแรงได้!”\n\nนรันขมวดคิ้ว\n\n“คนกินของพวกนี้จริงเหรอ…”\n\n“ถ้าไม่กินก็อดตาย” วาร์คตอบเรียบๆ “เมืองชายแดนไม่มีทางเลือกมากนัก”\n\nทันใดนั้น เสียงโวยวายดังขึ้นจากอีกฝั่งของตลาด\n\n“จับมันไว้!!”\n\nผู้คนแตกฮือ ชายวัยกลางคนกำลังดิ้นรนบนพื้น เส้นเลือดสีดำลามขึ้นลำคอ เขากรีดร้องพลางใช้เล็บข่วนหน้าตัวเองจนเลือดไหลเต็มใบหน้า\n\n“มันอยู่ในหัวข้า…! เอามันออกไป!!”\n\nเขาเอาหัวโขกพื้นแรงๆ ปัง! ปัง! ปัง! เลือดกระเด็นเต็มพื้น ผู้คนถอยหนี ไม่มีใครเข้าไปช่วย\n\nนรันกำหมัดแน่น\n\n“…ไม่มีใครช่วยเขาเลยเหรอ”\n\nวาร์คมองภาพนั้นเงียบๆ ก่อนตอบด้วยน้ำเสียงเย็นชา\n\n“ช่วย? คนส่วนใหญ่ยังช่วยตัวเองไม่ได้ด้วยซ้ำ”\n\nชายคลั่งเงยหน้าขึ้น ดวงตาแดงฉาน ก่อนพุ่งเข้าใส่เด็กผู้หญิงที่ยืนร้องไห้อยู่ใกล้ๆ\n\nฉัวะ!!\n\nลูกธนูสีดำปักทะลุหัวเขาทันที ร่างทรุดลงกับพื้น เลือดไหลจากกะโหลก\n\nหญิงสาวในชุดหนังสีเทาเดินออกมา ใบหน้าไร้อารมณ์\n\n“เก็บศพไปเผา” เธอพูดสั้นๆ ก่อนเดินจากไป\n\nนรันยืนนิ่ง\n\n“…ทุกคนชินกับเรื่องแบบนี้แล้วเหรอ”\n\nวาร์คมองผู้คนที่เริ่มกลับไปซื้อขายกันตามปกติ\n\n“ถ้าไม่ชิน คนพวกนี้คงอยู่ที่นี่ไม่ได้”\n\n.\n\n.\n\n.\n\nช่วงเย็น วาร์คพานรันออกนอกกำแพงเมือง กลิ่นป่าชื้นและเลือดลอยปะทะหน้า\n\nไม่ไกลจากแนวต้นไม้ ซากศพมนุษย์หลายร่างนอนกระจัดกระจาย บางศพเหลือแค่ครึ่งตัว บางศพไม่มีใบหน้า บางศพถูกกินจนเห็นกระดูก แมลงสีดำจำนวนมากกำลังไต่กินเนื้อสด\n\nนรันหน้าซีด\n\n“นี่คืออะไร…”\n\n“ทีมล่า” วาร์คตอบสั้นๆ “ออกไปล่า Beast แล้วกลับมาไม่ครบ”\n\nวาร์คเดินไปหยุดหน้าศพชายคนหนึ่ง ครึ่งล่างหายไปทั้งหมด แต่ยังกำมีดแน่น เขามองอยู่อึดใจ\n\n“จำไว้ โลกนี้ไม่ได้สนใจว่าคนคนนั้นเคยเป็นใคร พออ่อนแอ… สุดท้ายก็กลายเป็นอาหารเหมือนกันหมด”\n\nนรันยืนนิ่งท่ามกลางกลิ่นศพ ท้องปั่นป่วน แต่ครั้งนี้เขาไม่ได้อาเจียน ดวงตาของเขาเปลี่ยนไปทีละนิด\n\nโลกใบนี้ไม่เปิดโอกาสให้ใครอ่อนแอ และถ้าเขายังอ่อนแออยู่ วันหนึ่ง… ศพที่นอนอยู่ตรงนี้ อาจกลายเป็นตัวเขาเอง",
    "bodyEN": "The blood rain stopped.\n\nIts smell did not.\n\nRot and iron still lingered across the border town like something dead refusing to stay buried. Naran walked through streets filled with hollow-eyed survivors, mutated beggars, and Wardens carrying Madness beneath their skin like a slow disease.\n\nVark showed him what life truly looked like beyond the illusion of survival.\n\nAt the market, people traded Beast eyes, broken fangs, blackened organs, and strips of flesh still carrying traces of Core energy. Hunger mattered more than disgust.\n\nA man suddenly collapsed into Madness in the middle of the crowd.\n\nBlack veins spread across his throat while he clawed chunks of skin from his own face. Nobody moved to help him.\n\nWhen he lunged toward a crying child, an arrow pierced his skull.\n\nThe market returned to normal before the corpse even stopped twitching.\n\nLater, outside the walls, Naran saw what remained of a hunting party.\n\nHalf-eaten bodies rotted beneath the trees while insects fed openly on exposed organs.\n\nFor the first time since arriving in this world, he did not vomit.\n\nHe only stared.\n\nBecause somewhere deep inside himself, he already knew the truth.\n\nIf he stayed weak long enough, the world would eventually devour him too."
  },
  {
    "ep": 4,
    "titleTH": "เสียงกระซิบแห่งสมดุล",
    "titleEN": "The Whispers of Balance",
    "image": "/images/story/ep-4.png",
    "bodyTH": "หลายวันผ่านไปหลังจากนรันเริ่มคุ้นชินกับเมืองชายแดน หรืออย่างน้อย… เขาก็เริ่ม “ทำเหมือนว่าชินแล้ว”\n\nกลิ่นเลือดเริ่มไม่ทำให้คลื่นไส้อีก เสียงคนกรีดร้องยามค่ำคืนกลายเป็นเรื่องปกติ แม้แต่ตอนเดินผ่านศพข้างถนน หัวใจของเขาก็ไม่ได้สั่นแรงเหมือนวันแรก และนั่น… กลับทำให้นรันรู้สึกกลัวตัวเองมากกว่าเดิม\n\n.\n\n.\n\n.\n\nช่วงเย็นวันหนึ่ง วาร์คพานรันขึ้นไปบนกำแพงไม้ทางเหนือของเมือง ลมหนาวพัดผ่านช้าๆ ด้านนอกกำแพงคือป่าชั้นนอกที่มืดมิด ต้นไม้แห้งสูงตระหง่านราวกับเงาศพจำนวนมหาศาล\n\nนรันนั่งเงียบอยู่พักใหญ่ ก่อนถามขึ้นเบาๆ\n\n“…ทำไมคนถึงยังเลือกปลุก Core”\n\nวาร์คไม่ตอบทันที สายตาของเขามองออกไปไกลนอกกำแพง\n\n“เพราะมนุษย์กลัว กลัวจะอ่อนแอ กลัวจะถูกกิน กลัวจะไม่มีสิทธิ์เลือกชะตาตัวเอง” ลมเย็นพัดผ่านอีกครั้ง “แต่สุดท้าย… หลายคนกลับตายเพราะสิ่งที่ตัวเองเลือก”\n\nนรันเงียบไปทันที ภาพคนคลั่ง Madness ภาพทีมล่าที่เหลือแต่ซาก ภาพ Beast กินคนทั้งเป็น ยังติดอยู่ในหัวไม่หาย\n\n“…แล้วทำไมคนยังอยากเป็น Warden”\n\nครั้งนี้วาร์คหัวเราะเบาๆ แต่เสียงนั้นไม่มีความขำอยู่เลย\n\n“เพราะต่อให้โลกนี้โหดแค่ไหน… คนส่วนใหญ่ก็ยังไม่อยากเป็นเหยื่อ”\n\n.\n\n.\n\n.\n\nแกร๊งงงง!! เสียงกระดิ่งเหล็กจากหอเฝ้ายามดังสนั่น ผู้คนบนกำแพงเริ่มแตกตื่น\n\n“Beast!! ด้านเหนือ!!”\n\nนรันรีบลุกขึ้น ก่อนจะเห็นเงาร่างผิดรูปพุ่งออกมาจากป่า มันไม่ใหญ่เท่าบ้าน แต่ร่างกายบิดเบี้ยวจนน่าขยะแขยง ลำตัวคล้ายหมาป่า ขาหน้ายาวผิดปกติจนลากพื้น กรามแยกยาวถึงใบหู ฟันแตกบิ่นเต็มไปด้วยเลือดสด ขนหลุดร่วงจนเห็นผิวหนังสีคล้ำที่แตกปริ ทุกครั้งที่มันเดิน เสียงกระดูกดังกร๊อบๆ จากภายในร่าง\n\nกรรรรร… เสียงคำรามต่ำทำให้ทหารหลายคนหน้าซีด\n\n“ยิงมัน!!”\n\nลูกธนูหลายดอกพุ่งปัก แต่ Beast แทบไม่สะทกสะท้าน มันพุ่งชนแนวไม้ป้องกันจนแผ่นไม้แตกกระจาย ทหารสองคนพุ่งเข้าไปสกัด\n\nฉัวะ!! กรงเล็บตวัดเปิดหน้าอกชายคนหนึ่งจนเห็นกระดูก เลือดสาดเต็มพื้นกำแพง อีกคนแทงหอกใส่ท้องมัน แต่ Beast กลับกัดแขนเขาขาดทั้งแขนในคำเดียว เสียงกรีดร้องดังลั่น ผู้คนเริ่มถอยหนี\n\nBeast กระโจนทับร่างทหารที่ล้ม แล้วเริ่มกัดกินเนื้อสดทั้งเป็น เสียงกระดูกแตกดังลั่น เลือดไหลลงมาตามพื้นไม้เหมือนน้ำ นรันกำหมัดแน่น แม้เคยเห็นความตายมาแล้ว แต่การเห็นมนุษย์ถูก “กิน” ต่อหน้าต่อตา ยังทำให้หัวใจเย็นวาบ\n\n“ถอยไป” เสียงวาร์คดังขึ้นเรียบๆ\n\nเขาเดินผ่านทหารที่แตกตื่น ดาบสีทองหม่นถูกดึงออกจากฝัก แสงสีทองลุกขึ้นรอบใบดาบ แต่ไม่ใช่แสงอบอุ่น มันคือเปลวไฟที่พร้อมเผาทุกอย่าง\n\nBeast หันมาคำราม ก่อนพุ่งเข้าใส่\n\nฉัวะ!! ดาบฟันเปิดไหล่มันจนเนื้อแตก เสียงเนื้อไหม้ดังฉ่า กลิ่นเลือดเน่าถูกเผาลอยคลุ้ง แต่ Beast ยังไม่ล้ม มันกัดดาบของวาร์คไว้ทั้งปาก เขี้ยวแตกกระเด็น เลือดสีดำไหลทะลัก กรงเล็บตวัดใส่วาร์คอย่างรุนแรง\n\nเคร้ง!! วาร์คยกดาบรับ แรงปะทะหนักจนพื้นไม้แตก\n\nแม้เนื้อครึ่งตัวของ Beast จะถูกเผา แต่มันยังพยายามกัด พยายามฉีก พยายามฆ่า ราวกับ Madness ในตัวมันกำลังกรีดร้องให้ล่าเหยื่อต่อ วาร์คกระชากดาบออก ก่อนฟันอีกครั้ง\n\nฉัวะ!! ขาหน้าของ Beast ขาดกระเด็น เลือดสีดำสาดเต็มกำแพง เสียงกรีดร้องของมันเริ่มผิดรูป เหมือนทั้งสัตว์และสิ่งอื่นในตัวมันกำลังร้องพร้อมกัน แต่มันยังคลานเข้าหาวาร์ค กรงเล็บตะกุยพื้น\n\nวาร์คเดินเข้าหา ก่อนแทงดาบลงกลางหัวเต็มแรง\n\nฉัวะ!! แสงสีทองปะทุ เสียงกรีดร้องเงียบลง เหลือเพียงกลิ่นเนื้อไหม้กับเลือดที่ลอยอยู่ในอากาศ\n\nความเงียบปกคลุมกำแพงเมือง ทหารบางคนทรุดนั่ง บางคนห้ามเลือดให้เพื่อน และบางคน… ลากศพออกไปเงียบๆ\n\nชายทหารคนหนึ่งเดินเข้ามา ใช้มีดผ่าลำคอ Beast เลือดสีดำไหลทะลัก ไม่นานนัก ผลึกสีหม่นขนาดเล็กก็ถูกดึงออกมา\n\nนรันขมวดคิ้ว “…นั่นคืออะไร”\n\n“Core Fragment” วาร์คตอบเรียบๆ “บางส่วนเอาไปขายได้ บางส่วนใช้ทำอาวุธ และบางส่วน… ถ้าเป็น Beast ที่มีพลังของเส้นทาง ถูกวิหารเอาไปทำเครื่องรางปลุกพลัง นี่แค่ Beast ทั่วไป ยังดีที่ Beast พวกนั้นไม่ออกมาเดินเพ่นพ่าน ลองนึกภาพ Beast ไฟ พ่นไฟทำลายหมู่บ้านราบเป็นหน้ากลอง”\n\nทหารอีกคนเริ่มตัดเขี้ยวของ Beast แม้ข้างๆ จะยังมีศพเพื่อนตัวเองนอนอยู่ ราวกับเรื่องแบบนี้… เป็นเรื่องปกติไปแล้ว\n\nวาร์คเก็บดาบกลับเข้าฝัก ก่อนเดินลงจากกำแพงโดยไม่พูดอะไร\n\nนรันยืนมองเลือดบนพื้นเงียบๆ กลิ่นเลือด กลิ่นเนื้อไหม้ และเสียงร้องของผู้บาดเจ็บ ยังคงลอยอยู่ในอากาศไม่จางหาย",
    "bodyEN": "Days passed, and Naran learned how to wear indifference like armor.\n\nBlood no longer made him flinch the way it once did. Screams in the night became part of the town's breathing. Even corpses at the roadside no longer shook him as violently as they should have.\n\nThat was what frightened him most.\n\nOn the northern wall, beneath a cold evening wind, he asked Vark why anyone would still choose to awaken the Core.\n\nVark looked beyond the wooden barricades, toward the dead forest outside.\n\n“Because humans are afraid,” he said.\n“Afraid of being weak. Afraid of being eaten. Afraid of having no right to choose how they die.”\n\nThen the warning bell screamed.\n\nA malformed Beast burst from the outer forest. It was shaped like a wolf only in the cruelest sense. Its forelimbs dragged across the ground. Its jaw split too far across its face. Rot crawled beneath its skin, and every movement sounded like bones breaking from the inside.\n\nArrows struck it.\n\nIt kept coming.\n\nSoldiers were torn open. One man's chest split wide enough to show bone. Another lost his arm between the Beast's teeth while still screaming. The creature pinned a fallen soldier and began eating him alive.\n\nNaran's heart turned cold.\n\nThen Vark stepped forward.\n\nHis dull golden blade left its sheath.\n\nThe flame that rose around it was not holy. It was not warm. It was the kind of fire that existed only to erase flesh.\n\nThe Beast lunged.\n\nVark carved it apart.\n\nBlack blood soaked the wall. Burnt meat filled the air. Even after half its body had been cut and scorched, the Beast still crawled forward, driven by Madness too deep to understand pain.\n\nVark drove his blade through its skull.\n\nSilence fell.\n\nThen the soldiers began cutting the corpse open.\n\nA Core Fragment was pulled from its throat. Others harvested teeth, claws, and meat while their dead comrades still lay bleeding beside them.\n\nNaran watched without speaking.\n\nIn this world, horror was not an exception.\n\nIt was routine."
  },
  {
    "ep": 5,
    "titleTH": "ก่อนการปลุกพลัง",
    "titleEN": "Before the Awakening",
    "image": "/images/story/ep-5.png",
    "bodyTH": "ฝนตกหนักตั้งแต่เช้ามืด พื้นดินรอบบ้านไม้กลายเป็นโคลนแดงเหนียวเหนอะ นรันหอบหายใจหนักขณะลากท่อนไม้ขนาดใหญ่ไปตามลานฝึกด้านหลังบ้าน เหงื่อไหลเข้าตา แขนทั้งสองข้างสั่นจนแทบยกไม่ขึ้น ปอดร้อนผ่าวราวกับถูกไฟลวก\n\nแต่เสียงของวาร์คยังดังขึ้นเหมือนเดิม เย็นชาและไร้ความเมตตา\n\n“เร็วอีก”\n\n“ช้ากว่านี้ ตอนโดน Beast ไล่ เอ็งตายแน่”\n\nนรันกัดฟันแน่น ก่อนฝืนลากท่อนไม้ต่อไป ร่างกายของเขาเปลี่ยนไปมากในช่วงหลายเดือนที่ผ่านมา ไหล่กว้างขึ้น กล้ามเนื้อเริ่มชัด ฝ่ามือเต็มไปด้วยรอยด้านและแผลแตก แต่สิ่งที่เปลี่ยนมากกว่า… คือสายตา เด็กธรรมดาที่เพิ่งมายังโลกนี้วันแรก ค่อยๆ หายไปทีละนิด\n\n.\n\n.\n\n.\n\nตึง!!\n\nวาร์คโยนกระสอบทรายใส่นรันทันที เขารับแทบไม่ทันจนล้มเข่ากระแทกพื้น\n\n“วะ…เล่นอะไรเนี่ย…”\n\nวาร์คเดินเข้ามาหยุดตรงหน้า สายตาเย็นชา\n\n“ถ้าแค่นี้ยังไม่ไหว ต่อให้ไม่เป็น Warden เอ็งก็อยู่ไม่ถึงโต”\n\nนรันหอบหนักอยู่พักหนึ่ง ก่อนเงยหน้าขึ้นมามองเขา\n\n“…แล้วที่ฝึกฉันหนักขนาดนี้ ไม่ใช่เพราะอยากให้ฉันเป็น Warden หรอกเหรอ”\n\nวาร์คเงียบไปครู่หนึ่ง สายตาของเขามองออกไปยังป่าด้านนอกเมืองที่เต็มไปด้วยความมืด\n\n“ข้าแค่ไม่อยากเห็นเอ็งตายง่ายๆ”\n\nลมหนาวพัดผ่านช้าๆ นรันกำหมัดแน่น ก่อนพูดออกมาชัดเจนเป็นครั้งแรก\n\n“…แต่ฉันตั้งใจแล้ว ฉันจะเป็น”\n\nวาร์คหันกลับมามองเขาเงียบๆ ไม่มีคำชม ไม่มีรอยยิ้ม มีเพียงสายตาที่เหมือนกำลังประเมินว่าเด็กคนนี้จะรอดหรือตาย ก่อนเขาจะโยนหนังสือเก่าๆ กองหนึ่งลงบนโต๊ะไม้\n\nตุบ!\n\nฝุ่นลอยขึ้นทันที นรันขมวดคิ้วเล็กน้อย\n\n“อะไรอีกเนี่ย…”\n\n“ข้อมูลของแต่ละ Path” วาร์คตอบเรียบๆ “ช่วงนี้ก็อ่านไปด้วย”\n\nนรันหยิบหนังสือเล่มบนสุดขึ้นมา\n\nCore warden of Flame\n\n……..Terra\n\n……..Flora\n\n“สามเส้นทางนี้พบเยอะสุดในแถบนี้” วาร์คพูดต่อช้าๆ “เพราะภูมิประเทศมันเอื้อ”\n\nนรันเปิดอ่านผ่านๆ เงียบๆ ในหนังสือมีทั้งข้อมูล Beast ลักษณะพลัง ผลข้างเคียงของ Core รวมถึงสถิติ Madness ของแต่ละ Path\n\n“…งั้นถ้าคนอยู่ที่นี่ ก็แทบจะได้สามเส้นทางนี้หมด?”\n\n“ไม่” วาร์คตอบทันที “มันแค่เพิ่มโอกาส ไม่ได้การันตี” เขานั่งลงบนเก้าอี้ไม้เก่าๆ ช้าๆ “ต่อให้ใช้เครื่องราง ใช้วิหารเฉพาะทาง หรือฝืนเปลี่ยนสภาพแวดล้อมก่อนปลุกพลัง สุดท้ายก็ไม่มีใครควบคุมผลได้ร้อยเปอร์เซ็นต์อยู่ดี”\n\nลมเย็นพัดเข้ามาจากหน้าต่าง นรันค่อยๆ ปิดหนังสือลงช้าๆ ก่อนถามขึ้นเบาๆ\n\n“…แล้วนายคิดว่าฉันจะได้ Path อะไร”\n\nวาร์คเงียบไปพักหนึ่ง ก่อนหยิบขวดเหล้าขึ้นมาดื่ม\n\n“ข้าไม่ใช่พวกนักพยากรณ์ แต่ถ้านายอยากรอดหลังปลุกพลัง… ก็ฝึกต่อไป”\n\nคืนนั้น แสงตะเกียงสลัวๆ ยังคงเปิดอยู่จนดึก นรันนั่งอ่านหนังสือเกี่ยวกับ Paths ต่อเงียบๆ คนเดียว ข้างนอกฝนยังคงตกไม่หยุด และเป็นครั้งแรก— ที่เขาเริ่มรู้สึกว่า วันปลุกพลังของตัวเอง กำลังใกล้เข้ามาจริงๆ\n\nและมันอาจเป็นวันแห่งความตาย หรือวันแห่งคำสาป",
    "bodyEN": "Rain turned the yard behind Vark's house into a pit of red mud.\n\nNaran dragged a massive log through it until his lungs burned and his arms shook like broken branches. His palms were split open. His knees were bruised. Every breath tasted of iron.\n\nVark's voice came coldly from behind him.\n\n“Faster.”\n\nMonths had changed Naran. His shoulders had broadened. His hands had hardened. The softness of the boy who first arrived in this world had been scraped away piece by piece.\n\nWhat remained was still fragile.\n\nBut no longer untouched.\n\nWhen Vark threw a sandbag at him, Naran barely caught it before collapsing to one knee.\n\n“If this is enough to break you,” Vark said, “then you will never live long enough to grow old.”\n\nNaran looked up, breathing hard.\n\n“I'm going to become a Warden.”\n\nThere was no praise.\n\nNo encouragement.\n\nVark only stared at him as if measuring whether he was looking at a survivor or another corpse waiting for its turn.\n\nThen he threw a stack of old books onto the table.\n\nThey were records of Paths, Beasts, Core side effects, and Madness rates. Flame. Terra. Flora. The three Paths most often born in the lands surrounding the border town.\n\nNot because destiny favored them.\n\nBecause geography did.\n\nTemples, charms, and prepared environments could tilt the odds. They could bait the Core. They could tempt a Path closer.\n\nBut they could not command it.\n\nNo one controlled awakening completely.\n\nThat night, Naran read until the lamp nearly died.\n\nOutside, the rain kept falling.\n\nFor the first time, the day of awakening no longer felt distant.\n\nIt waited ahead like a blade.\n\nAnd when it came, it would either give him power—\n\nor bury him beneath the curse that wore power's name."
  },
  {
    "ep": 6,
    "titleTH": "วันก่อนพิธีปลุกพลัง",
    "titleEN": "The Day Before Awakening",
    "image": "/images/story/ep-6.png",
    "bodyTH": "ฝนหยุดตกมาได้หลายวันแล้ว แต่กลิ่นเลือดและความชื้นยังติดค้างอยู่ทั่วเมืองชายแดน อากาศร้อนอบอ้าวจนหายใจลำบาก ช่วงใกล้พิธีปลุกพลัง ผู้คนจากหมู่บ้านรอบนอกเริ่มเดินทางเข้ามามากขึ้น บางคนมากับครอบครัว บางคนมาคนเดียว และบางคน… มาพร้อมสายตาที่เต็มไปด้วยความกลัวและสิ้นหวัง\n\n.\n\n.\n\n.\n\nนรันนั่งอยู่หน้าบ้านไม้เก่าๆ ในมือคือหนังสือเกี่ยวกับ Paths ที่อ่านมาหลายเดือนแล้ว หลายหน้าถูกขีดเขียนจนยับ\n\nวาร์คนั่งดื่มเหล้าอยู่ไม่ไกล ก่อนพูดขึ้นเรียบๆ\n\n“แล้วตกลง เลือก Path ไว้หรือยัง”\n\nนรันเงยหน้าขึ้นเล็กน้อย “…เลือก?”\n\n“วิหารเพลิง วิหารหิน วิหารผืนป่า” วาร์คพูดต่อช้าๆ “ข้าพอมีเส้นสายอยู่บ้าง ถ้าอยากเข้าไปปลุกในวิหารเฉพาะทาง ก็น่าจะช่วยเพิ่มโอกาสได้”\n\nลมเย็นพัดผ่านเบาๆ วาร์คยกขวดเหล้าขึ้นดื่มต่อ “แต่ก็ต้องแลกกับค่าใช้จ่าย หรือไม่ก็ข้อผูกมัด บางวิหารปลุกเสร็จแล้วต้องเข้าร่วมกับพวกมันเลยก็มี”\n\nนรันเงียบฟัง สายตามองลงไปยังหนังสือในมือตัวเอง\n\nPath of Flame\n\nPath of Terra\n\nPath of Flora\n\nสามเส้นทางหลักของพื้นที่นี้ สามเส้นทางที่ผู้คนส่วนใหญ่คาดหวังจะได้รับ ก่อนเขาจะปิดหนังสือลงช้าๆ\n\n“…ฉันไม่เลือกดีกว่า”\n\nวาร์คเลิกคิ้วนิดๆ “ไม่อยากเพิ่มโอกาส?”\n\nนรันส่ายหน้าเบาๆ “ทุก Path ก็มีความหมายของมัน ไม่มีเส้นทางไหนไร้ค่า ถ้ามันจะเลือก… ฉันก็อยากให้มันเลือกสิ่งที่เหมาะกับตัวฉันจริงๆ”\n\nความเงียบปกคลุมอยู่พักหนึ่ง ก่อนวาร์คจะหัวเราะเบาๆ “งั้นก็ดี แบบนี้จะปลุกเมื่อไหร่ก็ได้”\n\nนรันขมวดคิ้วนิดๆ “หมายความว่าไง”\n\n“ถ้าไม่เลือกวิหารเฉพาะทาง ก็ไปปลุกที่วิหารกลางธรรมดาได้เลย” วาร์ควางขวดเหล้าลงช้าๆ “ที่นั่นมีคนดูแลอยู่แล้ว พวก Holy Light ประจำวิหารก็มี”\n\nนรันเงียบฟังทันที วาร์คมองออกไปยังความมืดนอกบ้าน ก่อนพูดต่อช้าๆ “ช่วงปลุกพลัง… ถ้า Core เข้าร่างแล้วสมดุลพัง บางคนจะคลั่งทันที”\n\nลมหนาวพัดผ่านเบาๆ “แต่ถ้ายังเป็นระยะแรก… Holy Light ยังพอชำระมันได้ ก่อนที่ Madness จะฝังลึก”\n\nนรันมองแสงสีทองจางๆ ที่ลอยขึ้นรอบปลายนิ้วของวาร์ค ก่อนถามขึ้นเบาๆ “…แล้วคนที่ปลุกพลังไม่สำเร็จล่ะ”\n\nวาร์คเงียบไปพักหนึ่ง “บางคนรอด บางคนเสียสติ บางคนก็ตาย”\n\nคำตอบนั้นสั้นมาก แต่กลับหนักจนบรรยากาศรอบตัวเงียบลงทันที\n\n.\n\n.\n\n.\n\nวันต่อมา นรันเดินตามวาร์คเข้าไปในเขตกลางเมืองเป็นครั้งแรก ผู้คนจำนวนไม่น้อยกำลังเดินไปในทิศทางเดียวกัน\n\nด้านหน้าสุดคือวิหารหินสีเทาขนาดใหญ่ มันไม่หรูหรา แต่เต็มไปด้วยร่องรอยเก่าแก่ กำแพงหลายส่วนมีรอยแตก และมีคราบเลือดเก่าจางๆ ติดอยู่ตามพื้นบันไดหิน\n\nหน้าวิหารมีคนยืนรออยู่จำนวนหนึ่ง วัยใกล้เคียงกับนรันแทบทั้งหมด บางคนพยายามทำตัวเข้มแข็ง บางคนกำมือแน่นจนสั่น และบางคน… กำลังร้องไห้อยู่เงียบๆ ข้างครอบครัวตัวเอง\n\nนรันมองภาพตรงหน้าเงียบๆ ก่อนเริ่มรู้สึกได้จริงๆ ว่า พิธีปลุกพลัง— ไม่ใช่พิธีแห่งความหวังสำหรับทุกคน แต่งานนี้คือวันที่บางคน จะสูญเสียทุกอย่างไปตลอดกาล",
    "bodyEN": "The rain stopped, but the town did not feel cleaner.\n\nBlood, damp wood, and old fear still clung to the border streets. As the awakening ceremony approached, people from outer villages began entering the town in quiet lines. Some came with family. Some came alone. Some carried charms.\n\nSome carried nothing but desperation.\n\nVark asked Naran if he had chosen a Path.\n\nFlame. Terra. Flora.\n\nThe temples could increase his chances. Vark still had enough connections to push him toward one of them, if Naran was willing to pay the price.\n\nCoin.\n\nService.\n\nObligation.\n\nSometimes a temple did not simply awaken you.\n\nIt claimed you.\n\nNaran closed the book in his hands.\n\n“I won't choose.”\n\nVark raised an eyebrow.\n\nNaran looked down at the names of the Paths.\n\n“Every Path has meaning. If one is going to choose me, I want it to be the one that truly fits me.”\n\nFor a moment, the room went silent.\n\nThen Vark laughed under his breath.\n\n“Then the central temple will do.”\n\nThere would be Holy Light Wardens there. If the Core destabilized during awakening, they might cleanse the first signs of Madness before it rooted too deeply.\n\nMight.\n\nThat word carried more death than comfort.\n\n“What happens to those who fail?” Naran asked.\n\nVark's answer was brief.\n\n“Some live. Some lose their minds. Some die.”\n\nThe next day, Naran stood before the gray stone temple among other children his age. Some clenched their fists until they trembled. Some cried silently beside their families. Some tried to look brave and failed.\n\nOnly then did Naran understand.\n\nThe awakening ceremony was not a celebration.\n\nIt was a threshold.\n\nAnd for some, the other side was ruin."
  },
  {
    "ep": 7,
    "titleTH": "การปลุกพลัง",
    "titleEN": "The Awakening",
    "image": "/images/story/ep-7.png",
    "bodyTH": "แสงเช้าสีหม่นสาดลงบนกำแพงหินเก่าของวิหารกลาง อากาศด้านในเย็นยะเยือกและชื้น กลิ่นเลือดแห้งเก่าๆ ปะปนกับกลิ่นคาวเนื้อเน่า ลอยคละคลุ้งจนน่าคลื่นไส้\n\nนรันเดินตามวาร์คเข้าไปด้านในเงียบๆ ภายในวิหารไม่ได้หรูหรา เสาหินหลายต้นมีรอยแตก พื้นหินซีดและเต็มไปด้วยคราบเลือดแห้งดำเกรอะกรัง เหมือนผ่านการใช้งานมานานหลายสิบปี\n\nและตรงกลางสุดของวิหาร— คือแท่นปลุกพลังสีดำหม่น ร่องลึกคล้ายเส้นเลือดแตกแขนงออกไปทั่วพื้นผิว บางส่วนยังมีคราบเลือดเก่าแห้งติดอยู่ เพียงแค่มอง ก็ทำให้นรันรู้สึกอึดอัดและหนาวเย็นขึ้นมาแปลกๆ\n\n.\n\n.\n\n.\n\nผู้คนภายในวิหารมีอยู่ราวสิบกว่าคน ส่วนใหญ่เป็นเด็กวัยใกล้เคียงกับนรัน บางคนพยายามนั่งตัวตรงให้ดูมั่นใจ บางคนก้มหน้าเงียบ และบางคน… กำมือสั่นจนขาว อยู่ข้างครอบครัวตัวเอง ไม่มีใครพูดเสียงดัง ราวกับทุกคนรู้ดีว่า สถานที่แห่งนี้ไม่ใช่ที่สำหรับความหวัง แต่เป็นสถานที่ที่บางคนอาจสูญเสียทุกอย่าง\n\n.\n\n.\n\n.\n\n“หืม…”\n\nเสียงหนึ่งดังขึ้นจากด้านในวิหาร ชายในชุดคลุมสีขาวทองเดินออกมาช้าๆ สัญลักษณ์ Holy Light สีทองอ่อนถูกปักอยู่บริเวณหน้าอก ทันทีที่เห็นวาร์ค สีหน้าของชายคนนั้นเปลี่ยนไปเล็กน้อย\n\n“…ไม่คิดว่าจะเจอนายที่นี่”\n\nวาร์คเหลือบมองอีกฝ่ายนิ่งๆ “ข้ามาส่งเด็ก”\n\nHoly Light คนนั้นพยักหน้าช้าๆ ก่อนถอนหายใจเบาๆ “…ยังอยู่เมืองนี้อีกสินะ”\n\nวาร์คไม่ตอบ อีกฝ่ายหัวเราะแห้งๆ เล็กน้อย ก่อนสายตาจะเหลือบมองนรัน\n\n“เด็กคนนี้จะปลุกวันนี้?”\n\n“อือ”\n\nHoly Light ระดับ 7 มองนรันเงียบๆ อยู่ครู่หนึ่ง ก่อนพูดเรียบๆ “งั้นก็ตั้งสติให้ดี Core ไม่ได้ใจดีกับทุกคน”\n\nนรันพยักหน้ารับเบาๆ\n\n.\n\n.\n\n.\n\nระหว่างนั่งรอ สายตาของนรันเหลือบไปเห็นเด็กผู้หญิงคนหนึ่งที่นั่งอยู่ไม่ไกล อายุพอๆ กับเขา ผมสีเข้มยาวประบ่า ในมือกำลังกำเครื่องรางรูปใบไม้เก่าๆ เอาไว้แน่น นิ้วของเธอสั่นเล็กน้อย เธอเงยหน้าขึ้นมาสบตากับนรันเพียงชั่วครู่ ก่อนรีบหลบสายตาหนี\n\n.\n\n.\n\n.\n\n“คนแรก เตรียมตัว”\n\nเด็กผู้ชายร่างอ้วนคนหนึ่งเดินตัวแข็งเข้าไปยังแท่นปลุกพลัง บรรยากาศในวิหารเงียบลงทันที Holy Light ระดับ 7 เดินเข้าไปยืนข้างแท่น ก่อนยื่นมีดสั้นเล่มเล็กให้เด็กคนนั้น\n\n“กรีดฝ่ามือ”\n\nเด็กคนนั้นลังเลอยู่ครู่หนึ่ง ก่อนกัดฟันกรีดลงบนฝ่ามือตัวเอง เลือดสีแดงสดหยดลงบนแท่นปลุกพลังสีดำหม่น\n\nฟ้าววว—\n\nลวดลายทั่วแท่นเริ่มสว่างขึ้นทันที ไม่นานนัก— เศษหินบริเวณรอบแท่นเริ่มลอยขึ้นจากพื้น Holy Light ระดับ 7 มองภาพนั้นนิ่งๆ ก่อนพูดเบาๆ\n\n“Warden of Terra…”\n\nเด็กคนนั้นลืมตาขึ้นด้วยสีหน้างุนงง ก่อนจะมองมือของตัวเองเหมือนไม่อยากเชื่อ ครอบครัวของเขารีบร้องไห้ออกมาทันทีด้วยความโล่งอก แต่ก่อนที่บรรยากาศจะผ่อนคลายลง เสียงเจ้าหน้าที่ก็ดังขึ้นอีกครั้ง\n\n“คนถัดไป”",
    "bodyEN": "Morning light fell weakly across the old stone temple.\n\nInside, the air was cold, damp, and heavy with old blood. The floor was stained black in places where too many failed awakenings had been scrubbed and scrubbed until the stone itself seemed diseased.\n\nAt the center stood the awakening altar.\n\nBlack. Veined. Waiting.\n\nIts grooves spread across the surface like old wounds that had never closed.\n\nNaran followed Vark inside without speaking.\n\nThe children waiting there were all close to his age. Some sat straight and pretended courage was enough. Some stared at the floor. Some shook beside their families in silence.\n\nThis was not a hall of hope.\n\nIt was a room where futures were weighed against madness.\n\nA Holy Light Warden in white and gold recognized Vark. His expression changed for a moment, then hardened again.\n\n“Core is not kind to everyone,” he told Naran.\n\nNaran nodded.\n\nWhile waiting, he noticed a dark-haired girl gripping an old leaf-shaped charm. Her fingers trembled. Their eyes met for only a breath before she looked away.\n\nThen the first child was called.\n\nA heavy boy walked stiffly to the altar. The temple attendant handed him a small knife.\n\n“Cut your palm.”\n\nBlood fell onto the black stone.\n\nThe altar answered.\n\nStone fragments rose from the floor.\n\nThe Holy Light Warden watched calmly before speaking.\n\n“Warden of Terra.”\n\nThe boy stared at his own hands as if they belonged to someone else. His family wept with relief.\n\nBut relief did not belong to everyone.\n\nThe next name was called before the blood had dried."
  },
  {
    "ep": 8,
    "titleTH": "การตื่นขึ้นของดาราศาสตร์",
    "titleEN": "The Awakening of Astronomy",
    "image": "/images/story/ep-8.png",
    "bodyTH": "“คนถัดไป” เสียงเจ้าหน้าที่ของวิหารดังขึ้นอีกครั้ง เสียงแหบพร่าและเหนื่อยล้า\n\nเด็กผู้ชายร่างผอมคนหนึ่งเดินเข้าไปยังแท่นปลุกพลังด้วยสีหน้าซีดเผือด ขาของเขาสั่นจนแทบยืนไม่ไหว ผู้ดูแลยื่นมีดสั้นให้เขาช้าๆ\n\n“กรีดฝ่ามือ”\n\nเด็กคนนั้นพยักหน้าสั่นๆ ก่อนกรีดลงบนฝ่ามือตัวเองอย่างแรงเกินไป เลือดหยดลงบนแท่นสีดำหม่นทันที\n\nฟ้าววว—\n\nลวดลายทั่วแท่นเริ่มสว่างขึ้นด้วยแสงสีแดงคล้ำ ตอนแรกทุกอย่างดูปกติ แต่เพียงไม่กี่วินาทีต่อมา—\n\n“อ๊ากกกกกก!!!”\n\nเด็กคนนั้นกรีดร้องลั่นทันที เส้นเลือดสีดำเริ่มลามขึ้นมาตามแขนอย่างรวดเร็ว ร่างทั้งร่างกระตุกจนล้มลงกับพื้น ผู้คนในวิหารเริ่มแตกตื่นทันที\n\nแม่ของเด็กคนนั้นร้องไห้ออกมาเสียงดัง Holy Light ผู้ดูแลรีบกดมือลงบนหน้าอกของเด็กคนนั้นทันที แสงสีทองสว่างขึ้นทั่วมือของเขา\n\nฟ้าววว—\n\nเส้นเลือดสีดำค่อยๆ หยุดลาม แต่เสียงกรีดร้องยังคงดังไม่หยุด เด็กคนนั้นดิ้นกระตุกเหมือนถูกไฟฟ้าช็อต ปัสสาวะและเลือดไหลทะลักจากกางเกง\n\nHoly Light ถอนหายใจหนักๆ ก่อนพูดเสียงต่ำ “พาออกไปพัก”\n\nเจ้าหน้าที่วิหารรีบช่วยกันหามร่างออกไปทันที ภายในวิหารเงียบลงกว่าเดิม เด็กหลายคนเริ่มหน้าซีดอย่างเห็นได้ชัด กลิ่นเลือดและเนื้อไหม้ยังลอยคละคลุ้งไม่จางหาย\n\n.\n\n.\n\n.\n\n“คนถัดไป”\n\nเด็กผู้หญิงผมสีเข้มคนนั้นค่อยๆ ลุกขึ้นช้าๆ เครื่องรางใบไม้ในมือยังถูกกำเอาไว้แน่น นิ้วของเธอสั่นเล็กน้อย เธอเดินผ่านนรันไปใกล้ๆ สายตาทั้งคู่สบกันชั่วขณะก่อนเธอจะหันไปขึ้นแท่นหิน\n\nเลือดหยดลงบนแท่น\n\nฟ้าววว—\n\nแสงสีเขียวหม่นค่อยๆ แผ่ออกมาช้าๆ เถาวัลย์เส้นเล็กๆ เริ่มงอกขึ้นมาตามรอยแตกของพื้นหิน Holy Light ระดับ 7 มองภาพนั้นนิ่งๆ ก่อนพูดเบาๆ\n\n“…Flora พลังออร่าดูนุ่มนวลสงบ มีโอกาสเป็น Flora heal นะเนี่ย”\n\nเด็กผู้หญิงคนนั้นลืมตาขึ้นช้าๆ ใบหน้าซีดลงเล็กน้อย เธอมองมือของตัวเองอยู่ครู่หนึ่ง ก่อนสายตาจะเหลือบมาทางนรันอีกครั้ง แล้วรีบหลบสายตาทันที\n\n.\n\n.\n\n.\n\n“คนถัดไป”\n\nเด็กผู้ชายอีกคนเดินเข้าไปอย่างรีบร้อน ในมือกำเครื่องรางสีแดงคล้ำเอาไว้แน่น ตั้งแต่วินาทีแรก Holy Light ระดับ 7 ก็ขมวดคิ้วทันที แต่ไม่ทันแล้ว\n\nเด็กคนนั้นกรีดฝ่ามือตัวเองทันที เลือดไหลลงบนแท่นปลุกพลังอย่างรวดเร็ว\n\nตูมมม!!\n\nพลังสีแดงรุนแรงปะทุขึ้นทันที เสียงกรีดร้องดังลั่นทั่ววิหาร ผิวหนังของเด็กคนนั้นเริ่มแตก เลือดไหลออกจากตาทั้งสองข้าง ร่างทั้งร่างชักกระตุกอย่างรุนแรง\n\n“ช่วยด้วย!!” แม่ของเด็กคนนั้นร้องไห้ทันที\n\nผู้ดูแลรีบพุ่งเข้ากดร่างเด็กคนนั้นเอาไว้ แสงสีทองสว่างขึ้นทั่วทั้งวิหาร เส้นเลือดสีดำหยุดลามอย่างช้าๆ แต่ดวงตาของเด็กคนนั้นยังคงเลื่อนลอย ปากพึมพำอะไรบางอย่างไม่หยุด\n\n“…ร้อน… …ไฟ… …ร้อนมาก…”\n\nเจ้าหน้าที่วิหารหลายคนรีบเข้ามาช่วยกันจับตัวเขาไว้ แม่ของเด็กคนนั้นทรุดลงร้องไห้ทันที Holy Light ระดับ 7 มองเด็กคนนั้นอยู่พักหนึ่ง ก่อนพูดเสียงต่ำ\n\n“…พาออกไป”\n\nไม่มีใครพูดอะไรอีก ภายในวิหารเงียบลงกว่าเดิม ความหวังก่อนหน้านี้ เริ่มถูกแทนที่ด้วยความกลัวอย่างชัดเจน\n\n.\n\n.\n\n.\n\n“คนถัดไป” เสียงเจ้าหน้าที่ดังขึ้นอีกครั้ง\n\nครั้งนี้— คือชื่อนรัน\n\nหัวใจของเขาเต้นแรงขึ้นทันที ทุกสายตาในวิหารค่อยๆ หันมามอง วาร์คยังคงยืนเงียบอยู่ด้านหลัง ไม่มีคำพูดให้กำลังใจ มีเพียงสายตานิ่งๆ ของเขาเท่านั้น\n\nนรันสูดหายใจลึก ก่อนเดินเข้าไปยังแท่นปลุกพลังช้าๆ ทุกย่างก้าวหนักขึ้นเรื่อยๆ ผู้ดูแลยื่นมีดสั้นให้เขา\n\n“ตั้งสติไว้”\n\nนรันพยักหน้าช้าๆ ก่อนกรีดลงบนฝ่ามือตัวเอง เลือดสีแดงสดหยดลงบนแท่นปลุกพลังสีดำหม่น\n\nทันใดนั้น—\n\nครืนนนนนน—\n\nทั้งวิหารสั่นสะเทือนทันที ผู้ดูแลเบิกตากว้าง\n\n“เดี๋ยวก่อน…นี่มัน…”\n\nลวดลายทั่วแท่นเริ่มสว่างขึ้นอย่างรุนแรง แต่ไม่ใช่สีแดง ไม่ใช่สีเขียว มันเป็นแสงสีดำเข้มปนประกายสีม่วงหม่น คล้ายท้องฟ้ายามค่ำคืนที่เต็มไปด้วยดวงดาว\n\nอากาศทั่วทั้งวิหารหนักขึ้นทันที แม้แต่เปลวไฟจากตะเกียงบนกำแพงก็เริ่มสั่นไหวรุนแรง เสียงรอบข้างค่อยๆ เงียบลงอย่างผิดปกติ ราวกับทุกอย่างกำลังถูกกลืนหายไปในความมืด\n\nนรันรู้สึกเหมือนร่างทั้งร่างกำลังถูกฉีกออกจากด้านใน ภาพดวงดาวนับไม่ถ้วนไหลเข้ามาในหัวอย่างรุนแรง บางดวงสว่างเจิดจ้า บางดวงดับมอดและส่งเสียงร้องโหยหวน\n\nเลือดเริ่มไหลออกจากมุมปากของนรัน พื้นหินใต้แท่นเริ่มแตกร้าว แรงสั่นสะเทือนรุนแรงขึ้นเรื่อยๆ Holy Light ระดับ 7 รีบพุ่งเข้ามาทันที\n\n“วาร์ค!!”\n\nวาร์คขยับเข้ามาข้างแท่นทันทีเช่นกัน สีหน้าที่ปกตินิ่งเฉยของเขา เปลี่ยนไปเป็นครั้งแรก\n\n“นี่มัน…”\n\nครืนนนนนนน—\n\nแรงสั่นสะเทือนรุนแรงขึ้นอีกครั้ง ก่อนที่ทุกอย่างจะดับวูบลงทันที\n\nร่างของนรันล้มลงข้างแท่นปลุกพลัง สติของเขาดับลงในความมืดทันที แต่ก่อนที่ภาพสุดท้ายจะหายไป เขาเห็นเพียง— ดวงดาวจำนวนมหาศาล กำลังส่องแสงอยู่เหนือความมืดอันไร้จุดสิ้นสุด",
    "bodyEN": "The next child failed almost immediately.\n\nBlood touched the altar, and red light spread through the grooves. At first, it looked like awakening.\n\nThen the boy screamed.\n\nBlack veins crawled up his arms. His body convulsed so violently it struck the stone floor again and again. Urine and blood spilled beneath him while his mother sobbed from the side of the chamber.\n\nThe Holy Light Warden pressed glowing hands against his chest, fighting to hold back the Madness before it could swallow him whole.\n\nThe boy lived.\n\nIf that could still be called living.\n\nThen the dark-haired girl with the leaf charm stepped onto the altar.\n\nGreen light rose gently from the stone. Thin vines emerged through the cracks in the floor. Her aura was soft, almost quiet.\n\n“Flora,” the Holy Light Warden said.\n“Perhaps Flora Heal, if it develops that way.”\n\nShe looked briefly toward Naran, then turned away.\n\nAnother boy came after her.\n\nHe clutched a red charm too tightly.\n\nThe Holy Light Warden frowned, but it was too late.\n\nThe moment blood fell, flame-colored power erupted through the altar. The boy's skin split. Blood poured from both eyes. His mouth kept moving around the same broken words.\n\n“Hot… fire… too hot…”\n\nHope curdled into fear.\n\nThen Naran's name was called.\n\nEvery eye in the temple turned toward him.\n\nHe stepped onto the altar and cut his palm.\n\nBlood touched the stone.\n\nThe temple shook.\n\nThe light was not red. Not green. Not gold.\n\nIt was black-violet, like a night sky filled with dying stars.\n\nThe air grew heavy. Lamps trembled. Sound faded as if the room itself was being dragged into a void.\n\nStars flooded Naran's mind.\n\nCountless lights. Countless deaths. Countless screams traveling through cold eternity.\n\nBlood slipped from his mouth.\n\nThe altar cracked beneath him.\n\nVark moved.\n\nThe Holy Light Warden shouted.\n\nAnd then all light vanished.\n\nNaran fell into darkness beneath a sky that had no end."
  },
  {
    "ep": 9,
    "titleTH": "ดวงดาวที่ตื่นขึ้น",
    "titleEN": "The Star That Awakened",
    "image": "/images/story/ep-9.png",
    "bodyTH": "เสียงกรีดร้องภายในวิหารเงียบหายไปแล้ว เหลือเพียงเสียงหอบหายใจหนักๆ ของผู้คน และแรงสั่นสะเทือนที่ยังคงหลงเหลืออยู่ในอากาศ\n\nร่างของนรันนอนหมดสติอยู่ข้างแท่นปลุกพลัง เลือดสีแดงสดยังไหลซึมจากฝ่ามือช้าๆ ทั่วทั้งวิหารเงียบสนิท ไม่มีใครกล้าพูดอะไร แม้แต่ Holy Light ระดับ 7 ก็ยังคงจ้องไปที่แท่นปลุกพลังด้วยสีหน้าไม่อยากเชื่อ รอยแตกร้าวจำนวนมากกระจายอยู่ทั่วพื้นหินรอบแท่น ลวดลายสีดำหม่นบนแท่นยังคงเรืองแสงจางๆ เหมือนพลังบางอย่างยังไม่ยอมสงบลง\n\n.\n\nด้านนอกวิหาร ท้องฟ้าที่เดิมควรเป็นช่วงบ่ายสว่าง กลับค่อยๆ มืดลงอย่างผิดปกติ กลุ่มเมฆสีดำหนาทึบรวมตัวกันเหนือเมือง ลมเย็นพัดแรงขึ้นเรื่อยๆ ผู้คนด้านนอกเริ่มเงยหน้ามองท้องฟ้าด้วยความหวาดกลัว\n\n“จะฝนตกอีกแล้วเหรอ…”\n\nแต่ Holy Light ระดับ 7 รู้ทันทีว่า มันไม่ใช่เรื่องปกติ เขาหันกลับมามองร่างของนรัน ก่อนขมวดคิ้วแน่น “…พลังยังไม่สงบ?”\n\nวาร์คที่ยืนอยู่ข้างแท่นยังคงเงียบ สายตาของเขาจับจ้องไปที่ร่างของนรันไม่ละไปไหน\n\n.\n\n.\n\n.\n\nหลายชั่วโมงต่อมา นรันยังไม่ฟื้น เจ้าหน้าที่วิหารช่วยกันพาร่างของเขากลับมาที่บ้านของวาร์ค ฝนเริ่มตกลงมาอีกครั้งในช่วงเย็น แต่สิ่งที่แปลกคือ— ท้องฟ้ายังคงมืดผิดปกติอยู่นานหลายชั่วโมง ราวกับบางสิ่งกำลังปกคลุมเมืองไว้\n\n.\n\n.\n\nสามวันผ่านไป นรันลืมตาขึ้นช้าๆ แสงจากหน้าต่างส่องเข้ามาภายในห้องไม้เก่า ร่างกายของเขาหนักอึ้งจนแทบขยับไม่ได้ ลมหายใจร้อนผ่าว หัวเหมือนถูกกดทับจากด้านใน เขาพยายามลุกขึ้น แต่เพียงขยับตัวเล็กน้อย ความเจ็บแปลบก็แล่นขึ้นทั่วร่าง\n\n“อย่าฝืน” เสียงของวาร์คดังขึ้นจากมุมห้อง\n\nนรันหันไปมองช้าๆ วาร์คนั่งอยู่บนเก้าอี้ไม้ตัวเดิม ขวดเหล้าถูกวางอยู่ข้างเท้า\n\n“ฉัน…สลบไปนานแค่ไหน”\n\n“สามวัน” คำตอบนั้นทำให้นรันนิ่งไปเล็กน้อย\n\nด้านนอกหน้าต่าง ท้องฟ้ายามเย็นกำลังค่อยๆ เปลี่ยนเป็นสีส้มหม่น และดวงดาวดวงแรกเริ่มปรากฏขึ้น ทันทีที่สายตาของนรันมองไปยังมัน หัวใจของเขากลับสั่นขึ้นแปลกๆ เหมือนมีบางอย่างกำลังเชื่อมต่อกันอยู่\n\n.\n\n.\n\n.\n\nเสียงฝีเท้าดังขึ้นหน้าบ้าน Holy Light ระดับ 7 มาหาวาร์คพอดี ทันทีที่เห็นนรันลืมตา สีหน้าของเขาเปลี่ยนไปเล็กน้อย\n\n“ฟื้นกลับมาได้สินะ”\n\nนรันพยายามขยับตัว แต่ Holy Light ยกมือห้ามทันที “ไม่ต้องรีบลุก ร่างกายนายตอนนี้ยังไม่เสถียร”\n\nความเงียบปกคลุมอยู่พักหนึ่ง ก่อน Holy Light จะหันไปมองวาร์ค “…นายรู้ไหมว่าเด็กนี่ได้ Path อะไร”\n\nวาร์คเงียบไปครู่หนึ่ง ก่อนตอบสั้นๆ “…ไม่”\n\nHoly Light ระดับ 7 ขมวดคิ้วช้าๆ “แต่ข้าไม่เคยเห็นแท่นปลุกตอบสนองรุนแรงขนาดนั้นมาก่อน ต่อให้เป็น Path หายาก… มันก็ไม่ควรทำให้สภาพอากาศเปลี่ยน”\n\nวาร์คยังคงเงียบ สายตาของเขาเพียงมองไปทางนรันเท่านั้น\n\n.\n\nหลังจาก Holy Light กลับออกไป ภายในบ้านก็เงียบลงอีกครั้ง ลมเย็นพัดเข้ามาจากหน้าต่างเบาๆ นรันค่อยๆ หันมองออกไปด้านนอก ตอนนี้ท้องฟ้ามืดลงแล้ว ดวงดาวหลายดวงเริ่มปรากฏชัดขึ้นเหนือเมืองชายแดน\n\nและทันทีที่เขามองไปยังพวกมัน— ความรู้สึกประหลาดก็ไหลเข้ามาทันที เหมือนเขารับรู้ “ตำแหน่ง” ของดวงดาวแต่ละดวงได้ บางดวงกำลังเคลื่อนผ่านกันอย่างช้าๆ บางดวงให้ความรู้สึกสงบ และบางดวง… ให้ความรู้สึกอันตรายอย่างประหลาด\n\nนรันขมวดคิ้วเล็กน้อย ก่อนพูดขึ้นช้าๆ “…ฉันรู้สึกแปลกๆ”\n\nวาร์คเงยหน้ามองทันที “ยังไง”\n\nนรันเงียบไปพักหนึ่ง ก่อนตอบช้าๆ “…ฉันเหมือนรับรู้ตำแหน่งของดวงดาวได้ แล้วก็… เหมือนพวกมันกำลังขยับอยู่ตลอดเวลา”\n\nความเงียบปกคลุมห้องทันที วาร์คมองเขานิ่งอยู่พักหนึ่ง ก่อนสีหน้าที่ปกตินิ่งเฉย เริ่มเปลี่ยนไปเล็กน้อยเป็นครั้งแรก\n\n“…Astronomy?”\n\nนรันนิ่งไปทันที “…เส้นทางดารา?” สายตายังคงมองไปยังท้องฟ้ายามค่ำคืนด้านนอก “…มันหายากขนาดนั้นเลยเหรอ”\n\nวาร์คเงียบไปครู่หนึ่ง ก่อนตอบเสียงต่ำ “…ในจักรวรรดิแถบนี้ แทบไม่มีใครปลุกมันได้”",
    "bodyEN": "When the screams stopped, the silence was worse.\n\nNaran lay unconscious beside the altar, his blood still wet on the black stone. Cracks spread outward like a wound through the temple floor, and the dark patterns carved into the altar continued to glow as if whatever had answered him had not truly left.\n\nOutside, the sky darkened.\n\nIt should have been afternoon.\n\nInstead, clouds gathered above the border town like a funeral shroud.\n\nThe Holy Light Warden knew at once that this was not weather.\n\nThe power had not yet settled.\n\nHours passed. Naran did not wake. By evening, Vark and the temple officials brought him back to the old wooden house. Rain began again, but the wrongness in the sky lingered long after sunset.\n\nFor three days, Naran slept.\n\nWhen he finally opened his eyes, his body felt heavier than stone. His breath burned. His skull felt as if something vast had pressed its thumb against the inside of it.\n\nVark told him he had been unconscious for three days.\n\nThen Naran looked out the window.\n\nThe first evening star appeared.\n\nAnd something inside him answered.\n\nIt was not sight.\n\nNot hearing.\n\nIt was recognition.\n\nThe Holy Light Warden visited soon after. Even he could not explain what had happened. Rare Paths did not normally shake temples. They did not darken the sky.\n\nAfter he left, Naran watched the night deepen.\n\nThe stars became clearer.\n\nNot only visible.\n\nKnowable.\n\nHe could feel where they were, sense their slow movement, their distance, and their strange emotional weight. Some felt calm. Some felt ancient. Some felt dangerous.\n\nVark watched him in silence.\n\nThen he spoke the word.\n\n“Astronomy.”\n\nIn this corner of the empire, almost no one awakened that Path.\n\nNaran kept staring at the stars.\n\nThe universe had opened one eye.\n\nAnd it had looked back."
  },
  {
    "ep": 10,
    "titleTH": "วอร์เดนอิสระ",
    "titleEN": "The Free Warden",
    "image": "/images/story/ep-10.png",
    "bodyTH": "สามวันหลังพิธีปลุกพลัง ข่าวลือเรื่อง “เด็กที่ทำให้วิหารสั่น” ยังคงถูกพูดถึงไปทั่วเมืองชายแดน บางคนบอกว่าเป็น Path หายาก บางคนเชื่อว่าเป็นลางร้าย และบางคน… ถึงขั้นพูดว่าแท่นปลุกพลังกำลัง “ตอบสนอง” ต่อบางสิ่งที่ไม่ควรมีอยู่\n\nแม้แต่ตอนนี้ แท่นปลุกภายในวิหารก็ยังถูกปิดเอาไว้ชั่วคราว รอยแตกร้าวบนพื้นหินรอบแท่นยังไม่ถูกซ่อม และ Holy Light ระดับ 7 ก็ยังไม่อธิบายอะไรกับใคร\n\n.\n\n.\n\nนรันนั่งอยู่หน้าบ้านไม้เงียบๆ สายตาของเขามองขึ้นไปบนท้องฟ้ายามเย็น ตั้งแต่ฟื้นขึ้นมา โลกของเขาก็เปลี่ยนไปอย่างชัดเจน โดยเฉพาะตอนกลางคืน เขาเริ่มมองเห็นตำแหน่งของดวงดาวชัดขึ้นเรื่อยๆ\n\nบางครั้ง— แค่เงยหน้าขึ้นมอง เขาก็รู้สึกเหมือนเข้าใจ “ทิศทาง” ของบางสิ่งโดยไม่รู้ตัว มันไม่ใช่ภาพลวงตา และไม่ใช่ความฝัน มันเหมือนสัญชาตญาณใหม่ ที่ถูกฝังเข้ามาในร่างกาย\n\n.\n\nเสียงประตูไม้เปิดดังขึ้นช้าๆ วาร์คเดินเข้ามาภายในบ้าน ในมือมีหนังสือเก่าๆ กองหนึ่ง เขาวางมันลงบนโต๊ะเสียงดังตุบ ฝุ่นเก่าลอยขึ้นทันที นรันเหลือบมองชื่อบนปก ส่วนใหญ่เป็นหนังสือเกี่ยวกับ Core และประวัติของ Paths ต่างๆ แต่แทบไม่มีเล่มไหนพูดถึง Astronomy แบบละเอียดเลย\n\nวาร์คนั่งลงตรงข้ามช้าๆ ก่อนพูดเรียบๆ “…Astronomy ข้าเองก็รู้เรื่องมันไม่มาก”\n\nนรันเงยหน้าขึ้นทันที “แม้แต่นายก็ไม่รู้?”\n\nวาร์คพ่นลมหายใจเบาๆ “คนใช้เส้นทางนี้มีน้อย โดยเฉพาะแถวชายแดนแบบนี้” ความเงียบปกคลุมอยู่พักหนึ่ง ลมเย็นพัดเข้ามาจากหน้าต่างช้าๆ ก่อนวาร์คจะพูดต่อ “เพราะงั้นนายต้องไปเรียนรู้จากคนอื่น คนที่รู้เรื่อง Core มากกว่าข้า”\n\nนรันนิ่งฟังเงียบๆ วาร์คหยิบขวดเหล้าขึ้นดื่มเล็กน้อย ก่อนพูดต่อเรียบๆ “อีกอย่าง… ตอนนี้ชื่อนายน่าจะถูกส่งเข้าไปยังทางการแล้ว”\n\nนรันขมวดคิ้วทันที “…ทางการ?”\n\n“Warden ทุกคนที่ปลุกพลังสำเร็จ จะถูกขึ้นทะเบียน อย่างน้อยก็ต้องมีข้อมูลว่าใครปลุกพลังที่ไหน” นรันเงียบไปพักหนึ่ง ก่อนถามต่อ “…แล้วหลังจากนั้นล่ะ”\n\n“ส่วนใหญ่ก็เข้าสังกัด วิหาร หน่วยรบ หรือองค์กรของเมือง” วาร์ควางขวดเหล้าลงช้าๆ ก่อนสายตาจะมองตรงมาที่นรัน “…แต่นายยังไม่ถูกผูกมัด ตอนนี้ยังเป็น Warden อิสระ เหมือนข้า”\n\nนรันนิ่งไปเล็กน้อย “แล้วมันต่างกันยังไง”\n\nวาร์คหัวเราะแห้งๆ เบาๆ “อิสระกว่า แต่ก็ตายง่ายกว่าเหมือนกัน”\n\nลมเย็นพัดผ่านเข้ามาอีกครั้ง ความเงียบปกคลุมอยู่พักหนึ่ง ก่อนนรันจะพูดขึ้นช้าๆ “…แล้วข้าต้องทำยังไงต่อ”\n\nวาร์คเอนตัวพิงเก้าอี้ไม้เก่า สายตามองออกไปยังท้องฟ้ายามค่ำคืนด้านนอก “นายก้าวเข้ามาในโลกของ Warden แล้ว ต่อจากนี้… นายต้องได้รับการฝึก”\n\nนรันเงียบฟังทันที วาร์คพูดต่อเรียบๆ “ข้าจะส่งนายเข้าไปที่หน่วยฝึกเด็กใหม่ของเมือง มันไม่ใช่หน่วยใหญ่ แต่คนที่นั่นพอจะมีความรู้เรื่อง Core มากกว่าข้า อย่างน้อย… อาจมีคนเคยได้ยินเรื่อง Astronomy มาก่อน”\n\nนรันมองวาร์คนิ่งๆ ก่อนถามขึ้นเบาๆ “…แล้วนายใช้เส้นสายอีกแล้ว?”\n\nวาร์คหัวเราะในลำคอเบาๆ “โลกนี้มันไม่ใจดีพอจะให้คนไร้เส้นสายอยู่รอดหรอก”\n\nนรันหลุดหัวเราะเบาๆ ออกมานิดเดียวเป็นครั้งแรก ก่อนสายตาของเขาจะค่อยๆ มองขึ้นไปบนท้องฟ้าอีกครั้ง ดวงดาวหลายดวงกำลังส่องแสงอยู่เหนือเมืองชายแดน และเป็นครั้งแรก— ที่เขารู้สึกว่า เส้นทางของตัวเอง กำลังเริ่มต้นขึ้นจริงๆ แล้ว",
    "bodyEN": "Three days after the awakening, the rumor had already grown teeth.\n\nThe child who shook the temple.\n\nThe boy who cracked the altar.\n\nThe omen from the border.\n\nSome called him blessed. Others called him cursed. A few whispered that the altar had answered something that should never have existed in a human body.\n\nThe temple remained closed.\n\nThe cracks around the awakening altar had not been repaired.\n\nNo official explanation was given.\n\nNaran sat outside Vark's house beneath the evening sky, trying to understand what had changed inside him. Since waking, the night no longer looked the same. The stars were not distant lights anymore. They were positions. Movements. Warnings.\n\nA map written in cold fire.\n\nVark brought him old books on Core and Paths. Most contained almost nothing on Astronomy.\n\nEven Vark knew little.\n\n“There are too few users,” he said. “Especially out here.”\n\nThat meant Naran would have to learn from people who understood Core better than a drunk swordsman in a dying border town.\n\nThere was another problem.\n\nEvery awakened Warden was registered.\n\nMost were bound quickly to temples, armies, city units, or private organizations. Power did not remain unclaimed for long.\n\nBut Naran had not joined anyone.\n\nNot yet.\n\nFor now, he was a Free Warden.\n\nVark explained the meaning with a dry laugh.\n\n“More freedom.”\n\nThen he looked Naran in the eye.\n\n“And far more ways to die.”\n\nThe next step was training.\n\nVark would send him to the border training unit, where new Wardens learned control, survival, and the price of carrying Core inside their bodies.\n\nNaran looked up at the stars.\n\nFor the first time since falling into this world, his path no longer felt like something that had happened to him.\n\nIt felt like something beginning to move beneath his feet."
  },
  {
    "ep": 11,
    "titleTH": "หน่วยฝึกชายแดน",
    "titleEN": "The Border Training Unit",
    "image": "/images/story/ep-11.png",
    "bodyTH": "เช้าวันต่อมา วาร์คพานรันเดินเข้ามายังเขตตะวันตกของเมืองชายแดน ยิ่งเดินลึกเข้าไป บรรยากาศรอบตัวก็ยิ่งเปลี่ยนไปอย่างน่าอึดอัด\n\nเสียงเหล็กกระทบกันดังเป็นระยะ กลิ่นเลือดจางๆ ปะปนอยู่ในอากาศ ผู้คนจำนวนมากสวมอุปกรณ์ต่อสู้เดินสวนกันไปมา บางคนมีรอยแผลเต็มแขน บางคนมีผ้าพันแผลคลุมดวงตา และบางคน… มีเส้นสีดำจางๆ ลามอยู่ใต้ผิวหนังเหมือนเส้นเลือดเน่า\n\nนรันมองภาพเหล่านั้นเงียบๆ ก่อนขมวดคิ้วเล็กน้อย “…พวกนั้นคืออะไร”\n\n“ร่องรอย Madness” วาร์คตอบเรียบๆ “บางคนควบคุมมันได้ บางคนก็ได้แค่อยู่กับมันไปจนตาย”\n\nลมเย็นพัดผ่านช้าๆ ก่อนทั้งคู่จะหยุดอยู่หน้าอาคารหินขนาดใหญ่ บนกำแพงมีตราสัญลักษณ์สีดำหม่นของหน่วยฝึกติดอยู่ ผู้คนเข้าออกตลอดเวลา เด็กวัยใกล้เคียงกับนรันหลายคนกำลังนั่งรออยู่ภายในโถงกว้าง บางคนหน้าซีด บางคนกำเอกสารแน่นจนมือสั่น และบางคนพยายามทำเป็นเข้มแข็ง\n\n.\n\n.\n\n.\n\n“ชื่อ” เจ้าหน้าที่หญิงด้านหน้าถามเรียบๆ\n\n“นรัน”\n\nเธอก้มลงเขียนอะไรบางอย่างทันที ก่อนเงยหน้ามองวาร์คเล็กน้อย “…ผู้รับรองคือวาร์ค?”\n\n“อือ”\n\nหญิงคนนั้นเงียบไปครู่หนึ่ง เหมือนจะจำชื่อได้ แต่สุดท้ายก็ไม่ได้พูดอะไรต่อ เพียงยื่นเอกสารแผ่นหนึ่งมาให้\n\n“เด็กใหม่ทุกคนต้องผ่านการตรวจ Core Stability ก่อนเข้า training หลังจากนี้จะมีการตรวจ Madness ทุกเดือน ถ้าค่าผิดปกติ หน่วยมีสิทธิ์กักกันทันที”\n\nนรันพยักหน้ารับเงียบๆ ก่อนมองไปรอบโถงกว้าง เด็กใหม่จำนวนมากกำลังนั่งรอเรียกชื่ออยู่ตามจุดต่างๆ เสียงเจ้าหน้าที่ก็ดังขึ้นอีกครั้ง\n\n“นรัน ห้องตรวจสาม”\n\n.\n\n.\n\n.\n\nภายในห้องตรวจเงียบสนิท ผนังหินสีเทาหม่นถูกสลักลวดลาย Core เอาไว้ทั่วห้อง ตรงกลางมีอุปกรณ์ทรงกลมสีดำวางอยู่บนแท่นเหล็ก เจ้าหน้าที่ชายวัยกลางคนกำลังเปิดเอกสารอ่านช้าๆ\n\n“…นรัน …Astronomy”\n\nปลายปากกาของเขาหยุดชะงักไปชั่วครู่ แม้เพียงวินาทีเดียว แต่นรันก็สังเกตเห็นทันที เจ้าหน้าที่คนนั้นเงยหน้าขึ้นช้าๆ “…วางมือบนอุปกรณ์”\n\nนรันเดินเข้าไปช้าๆ ก่อนวางฝ่ามือลงบนพื้นผิวสีดำหม่นของอุปกรณ์\n\nฟ้าววว—\n\nลวดลายทั่วลูกทรงกลมเริ่มสว่างขึ้นทันที ตอนแรกทุกอย่างดูปกติ แต่ไม่กี่วินาทีต่อมา—\n\nครืนนนน—\n\nอุปกรณ์เริ่มสั่นเบาๆ เจ้าหน้าที่เงยหน้าขึ้นทันที “…เดี๋ยว—”\n\nแสงสีดำหม่นปนม่วงเริ่มไหลขึ้นตามลวดลายอย่างรวดเร็ว\n\n.\n\n.\n\n.\n\nด้านนอกโถงตรวจ เด็กใหม่หลายคนเริ่มหันมองรอบตัว ลมเย็นพัดผ่านเข้ามาช้าๆ ทั้งที่เมื่อครู่ยังไม่มีลมแม้แต่น้อย ผู้คนภายในโถงเริ่มมองออกไปยังด้านนอกอาคาร ท้องฟ้ายามเช้าค่อยๆ มืดลงอย่างผิดปกติ ไม่มีสายฟ้า ไม่มีพายุ ไม่มีแม้แต่เสียงฝน แต่บรรยากาศทั้งหมดกลับหนักขึ้นเรื่อยๆ ราวกับท้องฟ้าทั้งผืนกำลังกดทับลงมาเหนือเมือง\n\nเด็กหลายคนเริ่มขมวดคิ้วด้วยความสับสน บางคนพึมพำว่าอากาศแปลกๆ แต่ไม่มีใครรู้ว่าเกิดอะไรขึ้น\n\n.\n\n.\n\n.\n\nฟีโอน่าที่นั่งอยู่เงียบๆ ตรงมุมโถง ค่อยๆ เงยหน้าขึ้นช้าๆ หัวใจของเธอสั่นขึ้นทันที ความรู้สึกนี้… เหมือนกับวันที่วิหารสั่นไม่มีผิด สายตาของเธอค่อยๆ มองไปยังห้องตรวจด้านในสุดของโถงช้าๆ\n\n“…เขาอยู่ที่นี่”\n\n.\n\n.\n\n.\n\nครืนนนน— กระจกหน้าต่างภายในห้องตรวจเริ่มสั่นเบาๆ แต่ต่างจากวันที่ปลุกพลังครั้งแรก— นรันยังคงยืนอยู่เงียบๆ ลมหายใจมั่นคง ร่างกายไม่มีอาการสั่น มีเพียงดวงตาของเขา— ที่กำลังมองออกไปนอกหน้าต่างราวกับรับรู้อะไรบางอย่างอยู่\n\nเจ้าหน้าที่ค่อยๆ ลดมือลงจากเอกสารช้าๆ สีหน้าของเขาเริ่มตึงขึ้นเรื่อยๆ\n\n“…Core activity สูงผิดปกติ …แต่ค่าความเสถียรกลับนิ่ง” เขามองนรันเงียบๆ อยู่พักหนึ่ง ก่อนพูดเสียงต่ำ “…ข้าไม่เคยเห็นอะไรแบบนี้มาก่อน”\n\nนรันเงียบ สายตายังคงมองออกไปยังท้องฟ้าที่มืดลงเรื่อยๆ ด้านนอก ราวกับเขากำลัง “รับรู้” อะไรบางอย่างจากดวงดาวเหนือเมฆเหล่านั้น",
    "bodyEN": "The next morning, Vark took Naran into the western district of the border town.\n\nThe deeper they walked, the more the air changed. Metal rang against metal. Blood lingered faintly beneath the smell of stone and sweat. Fighters passed with scarred arms, missing eyes, wrapped wounds, and thin black Madness traces crawling under their skin like rot that had learned patience.\n\nThis was the border training unit.\n\nA place where new Wardens were not celebrated.\n\nThey were measured.\n\nSorted.\n\nTested.\n\nAnd watched for signs of becoming something that needed to be put down.\n\nAt the front desk, Naran gave his name. Vark's name served as his guarantee. The officer explained the rules without emotion. Every new trainee needed a Core Stability test before entry. Madness checks would follow every month.\n\nIf the readings became abnormal, the unit had the right to isolate him immediately.\n\nIn the testing room, a black spherical device waited on a metal stand.\n\nNaran placed his hand on it.\n\nAt first, the patterns lit normally.\n\nThen the device began to tremble.\n\nDark violet-black light crawled through the engraved lines, faster and faster.\n\nOutside the room, the morning sky began to dim.\n\nThere was no storm.\n\nNo thunder.\n\nNo rain.\n\nOnly pressure.\n\nAs if the heavens themselves were lowering over the town.\n\nIn the outer hall, Fiona lifted her head.\n\nShe remembered this feeling.\n\nThe trembling temple.\n\nThe impossible sky.\n\n“He is here,” she whispered.\n\nInside the testing room, Naran did not collapse. He did not scream. His breathing remained steady. Only his eyes drifted toward the window, as though something beyond the clouds had called his name.\n\nThe examiner stared at the readings until the blood drained from his face.\n\nCore activity: abnormally high.\n\nStability: unnaturally steady.\n\nHe lowered his pen.\n\n“I have never seen anything like this before.”"
  }
];

const 
RELEASED_EPISODES = 8;
const RELEASED_STORIES = STORY_EPISODES.slice(0, RELEASED_EPISODES);
const SEALED_STORY_COUNT = STORY_EPISODES.length - RELEASED_EPISODES;


const FEATURED_CHARACTERS = [
  {
    key: "naran",
    name: "NARAN",
    nameTH: "นรัน",
    path: "ASTRONOMY",
    pathTH: "ดาราศาสตร์",
    image: "/images/characters/naran.png",
    accent: "from-indigo-500/25 via-violet-500/20 to-sky-400/10",
    titleTH: "Sequence 7 · Star Node Creator",
    titleEN: "Sequence 7 · Star Node Creator",
    roleTH: "สมองหลัก / วางแผน / รับรู้สถานการณ์",
    roleEN: "Strategist / Tactical Planning / Battlefield Awareness",
    statusTH: "หนึ่งในสมาชิกหลักของ Umbral Covenant ช่วงเปิด Arc I",
    statusEN: "One of the core members of Umbral Covenant at the opening of Arc I.",
    sequenceTH: "Sequence 7",
    sequenceEN: "Sequence 7",
    quoteTH: "ดวงดาวไม่เคยสูญสลาย มันเพียงเปลี่ยนรูป และรอเวลากลับมาอีกครั้ง",
    quoteEN: "Stars never truly perish. They merely change form and wait for the time to return.",
    conceptTH: "เส้นทางดาราศาสตร์คือพลังแห่ง Star Nodes การรับรู้สนามรบ และการเชื่อมโยงพื้นที่ผ่านเครือข่ายดารา",
    conceptEN: "Astronomy is the Path of Star Nodes, battlefield awareness, and territorial connection through stellar networks.",
    tags: ["Astronomy", "Star Nodes", "Cosmic Energy"],
  },
  {
    key: "seren",
    name: "SEREN",
    nameTH: "เซเรน",
    path: "BLOOD",
    pathTH: "โลหิต",
    image: "/images/characters/seren.png",
    accent: "from-red-600/30 via-rose-500/20 to-black/20",
    titleTH: "Sequence 7 · Blood Controller",
    titleEN: "Sequence 7 · Blood Controller",
    roleTH: "ต่อสู้ระยะประชิด / ควบคุมเลือด",
    roleEN: "Close Combat / Blood Control",
    statusTH: "หนึ่งในสมาชิกหลักของ Umbral Covenant ช่วงเปิด Arc I",
    statusEN: "One of the core members of Umbral Covenant at the opening of Arc I.",
    sequenceTH: "Sequence 7",
    sequenceEN: "Sequence 7",
    quoteTH: "เลือดไม่เคยโกหก และพลังทุกหยดต้องแลกมาด้วยตัวตนของเจ้าเอง",
    quoteEN: "Blood never lies. Every drop of power must be paid for with your own existence.",
    conceptTH: "เส้นทางโลหิตคือการควบคุมเลือด พลังชีวิต และการแลกเปลี่ยน ยิ่งเสียสละมาก พลังยิ่งรุนแรง",
    conceptEN: "Blood is the Path of blood control, life force, and crimson exchange. The greater the sacrifice, the greater the power.",
    tags: ["Blood", "Sacrifice", "Domination"],
  },
  {
    key: "lavian",
    name: "LAVIAN",
    nameTH: "ลาเวียน",
    path: "ILLUSION",
    pathTH: "มายา",
    image: "/images/characters/lavian.png",
    accent: "from-fuchsia-500/25 via-violet-500/20 to-black/20",
    titleTH: "Sequence 7 · Illusion Controller",
    titleEN: "Sequence 7 · Illusion Controller",
    roleTH: "ลอบเร้น / ภาพลวง / เล่เหลี่ยม",
    roleEN: "Stealth / Illusion / Deception",
    statusTH: "หนึ่งในสมาชิกหลักของ Umbral Covenant ช่วงเปิด Arc I",
    statusEN: "One of the core members of Umbral Covenant at the opening of Arc I.",
    sequenceTH: "Sequence 7",
    sequenceEN: "Sequence 7",
    quoteTH: "สิ่งที่เจ้ามองเห็น อาจเป็นเพียงสิ่งที่ข้าอยากให้เจ้าเชื่อ",
    quoteEN: "What you see may only be what I want you to believe.",
    conceptTH: "เส้นทางมายาคือการบิดเบือนการรับรู้ ภาพลวง และการควบคุมความจริงในสายตาของศัตรู",
    conceptEN: "Illusion is the Path of distorted perception, mirages, and the manipulation of what enemies believe to be real.",
    tags: ["Illusion", "Deception", "Perception"],
  },
  {
    key: "lucier",
    name: "LUCIER",
    nameTH: "ลูเซียร์",
    path: "DARKNESS",
    pathTH: "ความมืด",
    image: "/images/characters/lucier.png",
    accent: "from-purple-700/30 via-slate-900/30 to-black/30",
    titleTH: "Sequence 7 · Existence Eroder",
    titleEN: "Sequence 7 · Existence Eroder",
    roleTH: "ลบสิ่งมีอยู่ / ป้องกัน / กดดันศัตรู",
    roleEN: "Erasure / Defense / Suppression",
    statusTH: "หนึ่งในสมาชิกหลักของ Umbral Covenant ช่วงเปิด Arc I",
    statusEN: "One of the core members of Umbral Covenant at the opening of Arc I.",
    sequenceTH: "Sequence 7",
    sequenceEN: "Sequence 7",
    quoteTH: "สิ่งใดมีอยู่ สิ่งนั้นย่อมถูกลบได้",
    quoteEN: "Whatever exists can be erased.",
    conceptTH: "เส้นทางความมืดคือพลังแห่งการซ่อนเร้น ช่องว่าง ความกลัว และการกัดกร่อนการดำรงอยู่",
    conceptEN: "Darkness is the Path of concealment, void, fear, and the erosion of existence.",
    tags: ["Darkness", "Void", "Erasure"],
  },
  {
    key: "selver",
    name: "SELVER",
    nameTH: "เซลเวอร์",
    path: "HOLY LIGHT",
    pathTH: "แสงศักดิ์สิทธิ์",
    image: "/images/characters/selver.png",
    accent: "from-yellow-300/25 via-amber-500/20 to-white/10",
    titleTH: "Sequence 6 · Holy Light Mage",
    titleEN: "Sequence 6 · Holy Light Mage",
    roleTH: "หัวหน้าทีม / รักษา / โจมตีแสง",
    roleEN: "Team Leader / Healing / Light-Based Offense",
    statusTH: "หัวหน้าทีม Umbral Covenant ช่วงเปิด Arc I",
    statusEN: "Leader of Umbral Covenant at the opening of Arc I.",
    sequenceTH: "Sequence 6",
    sequenceEN: "Sequence 6",
    quoteTH: "แสงไม่ได้อ่อนโยนเสมอไป บางครั้งมันเกิดมาเพื่อลงทัณฑ์",
    quoteEN: "Light is not always gentle. Sometimes it exists to punish.",
    conceptTH: "เส้นทางแสงศักดิ์สิทธิ์คือพลังแห่งการชำระล้าง การรักษา การปกป้อง และการลงทัณฑ์ด้วยแสง",
    conceptEN: "Holy Light is the Path of purification, healing, protection, and judgment through sacred radiance.",
    tags: ["Holy Light", "Healing", "Judgment"],
  },
];



const SACRED_REALMS = {
  FLORA: "Worldroot Expanse",
  "FLORA HEAL": "Eden of Rebirth",
  TIDES: "Abyssal Tidemarch",
  ICE: "Frozen Evernight",
  FLAME: "Eternal Pyre",
  GALES: "Skybreak Expanse",
  TERRA: "Titanheart Dominion",
  THUNDER: "Stormcrown Ascendant",
  RESTORATION: "Everlasting Sanctuary",
  SPIRIT: "Veil of Eternal Souls",
  "HOLY LIGHT": "Empyrean Radiance",
  BLOOD: "Crimson Eternity",
  WISDOM: "Infinite Codex",
  TRUTH: "Throne of Absolute Law",
  DARKNESS: "Eternal Abyss",
  ILLUSION: "Eternal Mirage",
  TIME: "Chronos Dominion",
  ASTRONOMY: "Celestial Infinity",
  "CHAOS-SPACE": "Fractured Cosmos",
  FATE: "Loom of Destiny",
  MACHINERY: "Eternal Forge",
  SHADOW: "Umbral Sovereignty",
};

const PATH_ARCHIVES = {
  Astronomy: {
    image: "/images/paths/astronomy-banner.png",
    video: "/videos/paths/astronomy.mp4",
    accent: "from-indigo-500/25 via-violet-500/20 to-sky-400/10",
    level0Name: "ASTRONOMY",
    titleTH: "เส้นทางแห่งดาราศาสตร์",
    titleEN: "Path of Astronomy",
    subtitleTH: "โหนดดวงดาวและพลังงานจักรวาล",
    subtitleEN: "Star Nodes and cosmic energy",
    quoteTH: "ดวงดาวไม่เคยสูญสลาย มันเพียงเปลี่ยนรูป และรอเวลาจะกลับมาอีกครั้ง",
    quoteEN: "Stars never truly perish. They merely change form and wait for the time to return.",
    authority: "Stars • Star Nodes • Cosmic Energy • Gravity • Constellations",
    conceptTitle: "Star Node Network",
    conceptTH: "Star Node คือจุดพลังดาราที่ผู้ใช้เส้นทาง Astronomy สร้างขึ้นและเชื่อมต่อกันเป็นเครือข่าย ยิ่งระดับสูง เครือข่ายยิ่งครอบคลุมพื้นที่กว้างขึ้น ตั้งแต่สนามรบ เมือง ภูมิภาค ไปจนถึงขอบเขตมหาศาล ทุก Node ส่งข้อมูลกลับหากัน ทำให้ผู้ใช้รับรู้การเคลื่อนไหว การใช้พลัง และความเปลี่ยนแปลงในพื้นที่ราวกับมองสนามรบผ่านดวงดาวนับไม่ถ้วน ในระดับสูง Star Node ยังเป็นเส้นทางเชื่อมต่อสำหรับเดินทางผ่านดวงดาว ไม่ใช่การฉีกมิติ ไม่ใช่วาร์ป แต่เป็นทางลับของดาราที่เสถียรกว่า แม้อาจใช้เวลานานกว่าเทเลพอร์ตโดยตรง",
    conceptEN: "Star Nodes are stellar energy points created by Astronomy users and linked into a network. As the user rises, the network expands from battlefields to cities, regions, and eventually enormous territories. Every Node exchanges information, allowing the user to sense movement, energy use, and changes across the area as if observing the battlefield through countless stars. At higher levels, Star Nodes also become routes for stellar travel. This is not dimensional tearing or teleportation, but a stable hidden pathway between stars, often slower than direct teleportation yet far safer.",
    sequences: [
      [9, "ผู้สังเกตดารา", "STAR OBSERVER", "อ่านตำแหน่งดวงดาว / รับรู้ทิศทางพลังจักรวาล / เพิ่มสัญชาตญาณการต่อสู้", "Observe stellar positions / sense cosmic energy flow / enhance combat instincts"],
      [8, "ผู้ปรับจังหวะดารา", "STAR ATTUNER", "ปรับจังหวะพลังให้สอดคล้องกับจักรวาล / เพิ่มความแม่นยำ / เพิ่มเสถียรภาพ / ใช้พลังได้ต่อเนื่องขึ้น", "Synchronize with cosmic rhythm / increase precision / improve stability / sustain power more efficiently"],
      [7, "ผู้สร้างจุดดารา", "STAR NODE CREATOR", "สร้าง Star Node จุดแรก / เคลื่อนที่ระยะสั้น / เริ่มเชื่อมโยงเครือข่ายดารา / Meteor Fragment เรียกเศษดาวตกโจมตีพื้นที่เป้าหมาย", "Create the first Star Node / short-range traversal / begin a stellar network / Meteor Fragment calls down shattered meteor fragments"],
      [6, "จอมเวทดารา", "ASTRAL MAGE", "สร้างหลาย Star Node / เคลื่อนที่ข้ามพื้นที่ / ยิงแสงดารา / Star Pulse ทำลายวัตถุและเครื่องจักร", "Create multiple Star Nodes / traverse wider areas / wield stellar light / Star Pulse damages objects and machinery"],
      [5, "ผู้ครองดารา", "STAR DOMINATOR", "สร้างเครือข่ายดารา / เคลื่อนที่อิสระในพื้นที่ / Orbit Crush บีบแรงโน้มถ่วงจำลองทำลายโครงสร้าง", "Build a stellar network / move freely within the area / Orbit Crush simulates gravity to destroy structures"],
      [4, "ทูตแห่งดารา", "ANGEL OF STARS", "ร่างกายกึ่งพลังดารา / เคลื่อนที่ผ่าน Star Node / ปรากฏและหายตัวอย่างไร้ร่องรอย / Star Step เดินทางผ่าน Star Node อย่างรวดเร็ว / สามารถทำลายคำสาปที่อ่อนแอกว่า ทำลายพันธะพลังงาน และรบกวนอาคมที่เชื่อมต่อกับแหล่งพลังภายนอก", "A partially stellar body / travel through Star Nodes / appear and vanish without trace / Star Step allows rapid traversal through Star Nodes / can destroy weaker curses, break energy pacts, and disrupt rituals connected to external power sources"],
      [3, "ผู้คุมกลุ่มดาว", "SOVEREIGN OF CONSTELLATION", "เชื่อม Star Node เป็นกลุ่มดาว / ควบคุมพื้นที่ในระดับกว้าง / รวมพลังดาราหลายจุด / Node Collapse รวมพลังหลาย Star Node เพื่อทำลายล้างระดับเมือง / สามารถทำลายเครือข่ายพลังงาน สนามพลังที่เชื่อมโยงกัน และโครงสร้างอาคมขนาดใหญ่", "Link Star Nodes into constellations / control vast territories / combine power from multiple Nodes / Node Collapse gathers multiple Star Nodes into a city-level strike / can break energy networks, linked power fields, and large ritual structures"],
      [2, "เจ้าแห่งดาราโลก", "WORLD STAR LORD", "สร้าง Star Node ระดับภูมิภาค / เคลื่อนที่ข้ามระยะทางหลายกิโลเมตร / ควบคุมดาราทั้งฟ้าในพื้นที่ / Stellar Descent เรียกพลังดาราถล่มพื้นที่ขนาดใหญ่ / เปิดเผยพลังที่ถูกซ่อน มองเห็นการไหลเวียนของอำนาจ รบกวนคำสาปและอาคมระดับสูง และเจาะทะลุการปกปิดที่อ่อนแอกว่า", "Establish regional Star Node networks / travel across enormous distances / command the sky of stars within the area / Stellar Descent calls down overwhelming stellar power upon a large area / reveal hidden powers, perceive the flow of authority, disrupt high-level curses and rituals, and pierce weaker concealment"],
      [1, "เทพแห่งดารา", "PRIMORDIAL STAR DEITY", "ร่างคือส่วนหนึ่งของจักรวาล / ทุกจุดในจักรวาลสามารถเป็น Star Node / Eternal Return ฟื้นคืนจาก Star Node อื่น / Cosmic Traverse เดินทางผ่านดวงดาวจริง ข้ามโลก มิติ และจักรวาล / ทำลายต้นกำเนิดของคำสาป ตัดขาดการคงอยู่ของอาคม บั่นทอนพลังของศัตรูในอาณาเขต และดวงดาวสามารถเผาผลาญแนวคิดที่อ่อนแอกว่าได้", "Become part of the cosmos itself / any point in the universe may become a Star Node / Eternal Return allows return through another Star Node / Cosmic Traverse travels through real stars across worlds, dimensions, and universes / destroy the source of curses, sever the existence of rituals, weaken enemy powers within the domain, and burn away weaker concepts"],
    ],
    ascensionTH: "Level 0 คือ ASTRONOMY — ตัวเส้นทางเอง ไม่ใช่ Warden ไม่ใช่ผู้ใช้พลัง และไม่ใช่สิ่งมีชีวิตอีกต่อไป แต่เป็นแนวคิดแห่งดาราศาสตร์ที่ดำรงอยู่ในจักรวาล Madness ไม่สามารถกัดกินได้อีก และในหนึ่งเส้นทางมีตัวตนระดับนี้ได้เพียงหนึ่งเดียว",
    ascensionEN: "Level 0 is ASTRONOMY — the Path itself. They are no longer a Warden, no longer a wielder of power, and no longer a living being, but the Astronomical Concept existing within the cosmos. Madness can no longer corrupt them, and only one such existence may exist per Path.",
  },
  Blood: {
    image: "/images/paths/blood-banner.png",
    video: "/videos/paths/blood.mp4",
    accent: "from-red-700/30 via-rose-600/20 to-black/20",
    level0Name: "BLOOD",
    titleTH: "เส้นทางแห่งโลหิต",
    titleEN: "Path of Blood",
    subtitleTH: "พลังแห่งการแลกเปลี่ยนโลหิต",
    subtitleEN: "The power of crimson exchange",
    quoteTH: "เลือดไม่เคยโกหก และพลังทุกหยดต้องแลกมาด้วยตัวตนของเจ้าเอง",
    quoteEN: "Blood never lies. Every drop of power must be paid for with your own existence.",
    authority: "Blood • Sacrifice • Exchange • Domination • Life Force",
    conceptTitle: "Crimson Exchange",
    conceptTH: "Blood คือเส้นทางของการแลกเปลี่ยน การไหลเวียน และการแทรกซึม ผู้ใช้ยิ่งเสียสละมากเท่าไร พลังยิ่งรุนแรงมากขึ้นเท่านั้น เลือดไม่ใช่แค่ของเหลวในร่างกาย แต่เป็นตัวตน ชีวิต และสัญญาที่จารึกด้วยการสูญเสีย เมื่อเลือดแทรกซึมสิ่งใด สิ่งนั้นจะเริ่มเข้าใกล้การถูกครอบงำ",
    conceptEN: "Blood is the Path of exchange, circulation, and infiltration. The greater the sacrifice, the greater the power. Blood is not merely a fluid within the body, but identity, life, and a pact written through loss. Whatever blood infiltrates moves closer to domination.",
    sequences: [
      [9, "ผู้รับรู้โลหิต", "BLOOD SENSOR", "รับรู้การไหลเวียนโลหิต / เพิ่มการฟื้นตัวเล็กน้อย / ตรวจจับสิ่งมีชีวิตใกล้ตัว / ควบคุมเลือดตัวเองพื้นฐาน", "Sense blood flow / slightly enhance recovery / detect nearby living beings / basic control over one's own blood"],
      [8, "ผู้ควบคุมโลหิต", "BLOOD CONTROLLER", "ควบคุมเลือดในร่างกายตัวเอง / เร่งหรือชะลอการไหล / เพิ่มพลังกายชั่วคราว / เริ่มใช้เลือดเป็นพลัง", "Control blood within the body / accelerate or slow circulation / temporarily enhance physical strength / begin using blood as power"],
      [7, "ผู้หล่อหลอมโลหิต", "BLOOD SHAPER", "สร้างอาวุธจากเลือด / เปลี่ยนเลือดเป็นรูปแบบต่างๆ / โจมตีระยะกลาง / เริ่มเสียเลือดเพื่อพลัง", "Shape blood into weapons / transform blood into different forms / attack at mid range / begin bleeding in exchange for power"],
      [6, "จอมเวทโลหิต", "BLOOD MAGE", "ควบคุมเลือดนอกตัว / ดูดเลือดศัตรู / เสริมพลังมหาศาล / การแลกเปลี่ยนเริ่มชัดเจน", "Control blood outside the body / drain enemy blood / greatly enhance power / exchange becomes more explicit"],
      [5, "ผู้ครอบงำโลหิต", "BLOOD DOMINATOR", "เลือดแทรกซึมและเกาะติดวัตถุ / ควบคุมสิ่งที่โดนเลือด / บิดเบือนพลังงานหรือกลไก / ทำให้สิ่งที่ถูกเลือดคลั่ง", "Blood infiltrates and clings to objects / control what the blood touches / distort energy or mechanisms / drive affected targets into frenzy"],
      [4, "ทูตแห่งโลหิต", "ANGEL OF CRIMSON PACT", "ร่างกายเชื่อมกับโลหิต / ใช้เลือดเป็นพลังโดยตรง / พันธะด้วยการเสียสละ / การต่อสู้คือสัญญา / แลกเปลี่ยนชีวิตเพื่อพลัง / จารึกพันธะผ่านโลหิต เชื่อมชะตากรรมของเป้าหมาย และแบ่งปันบาดแผลผ่านสายเลือด", "Body connects directly with blood / use blood as raw power / form pacts through sacrifice / battle becomes a contract / exchange life for power / inscribe pacts through blood, bind the target's fate, and share wounds through bloodlines"],
      [3, "ผู้คุมสายโลหิต", "SOVEREIGN OF BLOODLINE", "ควบคุมเลือดจำนวนมาก / ควบคุมศัตรูผ่านสายเลือด / สร้างสนามโลหิต / ทุกคนในพื้นที่อยู่ภายใต้แรงกดดันของโลหิต / ครอบงำเจตจำนงที่อ่อนแอกว่า บิดเบือนความทรงจำผ่านสายเลือด และทำให้เป้าหมายสูญเสียการควบคุมตนเอง", "Control massive amounts of blood / control enemies through bloodlines / create a blood field / everyone within the area falls under blood pressure / dominate weaker wills, distort memories through bloodlines, and make targets lose control of themselves"],
      [2, "เจ้าแห่งโลหิตโลก", "WORLD BLOOD LORD", "ควบคุมพลังชีวิตระดับพื้นที่ / ดูดพลังชีวิตจำนวนมหาศาล / เสริมตัวเองแบบสุดขีด / สนามรบคือแหล่งพลังของตน / ดูดกลืนตัวตนของเป้าหมาย กลืนกินร่องรอยการดำรงอยู่ และเปลี่ยนพลังชีวิตของผู้อื่นให้เป็นของตน", "Control life force across an area / drain enormous amounts of life force / empower oneself to the extreme / the battlefield becomes one's source of power / absorb the target's identity, consume traces of existence, and convert others' life force into one's own"],
      [1, "เทพโลหิต", "PRIMORDIAL BLOOD DEITY", "ควบคุมแก่นของชีวิต / สร้างหรือลบชีวิตผ่านเลือด / ทุกพลังแลกด้วยตัวตน / การโจมตีคือการพรากตัวตน / ลบร่องรอยการดำรงอยู่ ทำลายความทรงจำ และกลืนกินตัวตนเข้าสู่สายโลหิตของตน", "Control the essence of life / create or erase life through blood / every power is paid for with identity / each attack steals the target's selfhood / erase traces of existence, destroy memories, and consume identity into one's own bloodline"],
    ],
    specialTitle: "CRIMSON ASSIMILATION",
    specialTH: "เลือดของข้าแทรกซึมทุกสิ่งที่มันสัมผัส สิ่งนั้นจะกลายเป็นส่วนหนึ่งของข้า และข้าจะเป็นผู้กำหนดมัน",
    specialEN: "My blood shall infiltrate all that it touches. What it claims becomes part of me, and I shall become its master.",
    ascensionTH: "Level 0 คือ BLOOD — ตัวเส้นทางเอง ไม่ใช่ผู้ควบคุมเลือดอีกต่อไป แต่เป็นแนวคิดแห่งโลหิต การแลกเปลี่ยน และตัวตนที่จารึกอยู่ในสายเลือด ในหนึ่งเส้นทางมีตัวตนระดับนี้ได้เพียงหนึ่งเดียว",
    ascensionEN: "Level 0 is BLOOD — the Path itself. They no longer control blood; they become the concept of blood, exchange, and identity written within the bloodstream. Only one such existence may exist within each Path.",
  },
  Flora: {
    image: "/images/paths/flora-banner.png",
    video: "/videos/paths/flora.mp4",
    accent: "from-emerald-700/30 via-green-600/20 to-lime-400/10",
    level0Name: "FLORA",
    titleTH: "เส้นทางแห่งพฤกษา",
    titleEN: "Path of Flora",
    subtitleTH: "การเติบโต การควบคุมพฤกษา และการกลืนกิน",
    subtitleEN: "Growth, plant control, and consumption",
    quoteTH: "พฤกษาไม่เร่งรีบ แต่มันจะเติบโตจนไม่มีสิ่งใดหยุดมันได้",
    quoteEN: "Flora does not rush. It grows until nothing can stop it.",
    authority: "Seeds • Vines • Roots • Growth • Consumption • Natural Dominion",
    conceptTitle: "Endless Growth",
    conceptTH: "Flora ไม่ใช่เส้นทางแห่งการรักษา แต่คือธรรมชาติในรูปแบบดิบที่สุด เมล็ดพันธุ์หนึ่งเมล็ดสามารถกลายเป็นราก เถาวัลย์ ป่า และอาณาจักรที่กลืนกินทุกสิ่งรอบตัวได้ ยิ่งระดับสูง พฤกษาจะยิ่งแผ่ขยายจากการควบคุมพืชเล็กๆ ไปสู่การเปลี่ยนเมือง ภูมิภาค และโลกทั้งใบให้กลายเป็นป่าของตนเอง การเติบโตของ Flora ไม่ได้อ่อนโยน มันคือการแย่งทรัพยากร การครอบงำพื้นที่ และการกลืนกินเพื่อเติบโตต่อไป เมื่อก้าวสู่ลำดับ 7 ผู้ใช้บางคนจะเริ่มแสดงออร่าพลังชีวิตที่อ่อนโยน นุ่มนวล และเน้นการหล่อเลี้ยงมากกว่าการครอบครอง ผู้ที่มีคุณสมบัตินี้สามารถเลือกก้าวสู่เส้นทาง Flora Heal ได้",
    conceptEN: "Flora is not the Path of healing. It is nature in its rawest form. A single seed can become roots, vines, forests, and eventually a kingdom that consumes everything around it. As the user rises, Flora expands from controlling small plants to transforming cities, regions, and entire worlds into their own forest. Its growth is not gentle. It is the seizure of resources, domination of territory, and consumption in order to continue growing. At Sequence 7, some users manifest a gentler life aura focused on nourishment rather than domination. Those who meet this condition may branch into Flora Heal.",
    sequences: [
      [9, "ผู้กระซิบเมล็ด", "SEED WHISPERER", "รับรู้พลังชีวิตผ่านพืช / เร่งการงอกของเมล็ด / สร้างเถาวัลย์อ่อนและรากเล็ก", "Sense life force through plants / accelerate seed germination / create young vines and small roots"],
      [8, "นักพฤกษา", "HERBALIST", "ควบคุมพืชได้หลากหลายชนิด / สร้างพิษจากพฤกษาเป็นอาวุธ / เพิ่มความแข็งแกร่งและเร่งการเติบโตของพืช", "Control many kinds of plants / create plant-based toxins as weapons / strengthen and accelerate plant growth"],
      [7, "ผู้ถักทอเถาวัลย์", "VINE WEAVER", "ควบคุมเถาวัลย์จำนวนมากพร้อมกัน / รัด ตรึง และโจมตีจากระยะไกล / สร้างเกราะหรือกำแพงเถาวัลย์ / เริ่มสร้างพื้นที่พฤกษาของตน", "Control many vines at once / bind, restrain, and strike from range / form vine armor or walls / begin creating a personal flora zone"],
      [6, "จอมเวทพฤกษา", "WOODLAND MAGE", "เปลี่ยนพื้นที่รอบตัวให้เป็นป่าชั่วคราว / พืชโจมตีตามคำสั่งทางจิตหรือสายตา / ศัตรูเคลื่อนไหวช้าลงและอ่อนแอลง / ควบคุมสนามรบอย่างแท้จริง", "Turn the surroundings into a temporary forest / plants attack through mental or visual commands / enemies become slower and weaker / truly control the battlefield"],
      [5, "ผู้พิทักษ์รากแก้ว", "ROOT GUARDIAN", "รากใต้ดินแผ่ขยายในวงกว้าง / ดูดพลังชีวิตจากพืชในพื้นที่เพื่อรักษาตนเอง / สร้างผู้พิทักษ์พฤกษา / ยับยั้งพลังและการเติบโตของศัตรู", "Underground roots spread across a wide area / draw life force from local plants to recover / create plant guardians / suppress enemy power and growth"],
      [4, "ภูตพฤกษาพราว", "ANGEL OF VERDANT BLOOM", "ร่างกายกลายเป็นพฤกษา / สร้างป่าขนาดใหญ่ได้ทันที / ฟื้นคืนพลังจากชีวิตรอบตัว / ดูดซับพลังชีวิตจากศัตรู / การโจมตีเป็นวงกว้างและทำลายล้างสูง / หยั่งรากในพลังของศัตรู เปลี่ยนพลังเป็นสารอาหาร และดูดกลืนพลังผ่านการเจริญเติบโต", "Body becomes flora / instantly create a great forest / recover power from surrounding life / absorb life force from enemies / wide-area destructive attacks / take root in enemy power, convert it into nourishment, and absorb power through growth"],
      [3, "ผู้คุมวัฏจักร", "HARVESTER OF SEASONS", "ควบคุมวัฏจักรการเติบโตและเหี่ยวเฉา / ทำให้พืชของศัตรูเหี่ยวเฉาในพริบตา / เร่งวงจรชีวิตเพื่อทำลายทุกสิ่ง / เปลี่ยนทั้งเมืองให้เป็นป่ากลืนกิน / เร่งการเสื่อมสลายของพลัง ทำให้อาคมเข้าสู่ฤดูเหี่ยวเฉา และลดประสิทธิภาพความสามารถของศัตรู", "Control the cycle of growth and withering / make enemy plants wither instantly / accelerate life cycles to destroy all things / turn entire cities into devouring forests / accelerate the decay of power, force rituals into a withering season, and reduce enemy ability effectiveness"],
      [2, "จ้าวแห่งพฤกษาโลก", "LORD OF THE WORLD TREE", "เชื่อมต่อกับพฤกษาทั่วทั้งภูมิภาค / รากครอบคลุมแผ่นดินและเมืองใหญ่ / ดูดกลืนพลังชีวิตมหาศาลอย่างต่อเนื่อง / สร้างภัยพิบัติพฤกษาได้ตามใจนึก / รากหยั่งลึกเข้าสู่อำนาจของศัตรู ดูดกลืนพลังจากเส้นทางอื่น และเปลี่ยนทุกสิ่งเป็นส่วนหนึ่งของระบบนิเวศ", "Connect with flora across an entire region / roots cover lands and great cities / continuously absorb enormous life force / create flora disasters at will / roots dig into enemy authority, absorb power from other Paths, and convert everything into part of the ecosystem"],
      [1, "ผู้หยั่งรากสู่โลก", "ROOTED WORLD SOVEREIGN", "ต้นกำเนิดของพลังพฤกษาทั้งปวง / สร้างหรือทำลายชีวิตได้ตามต้องการ / เปลี่ยนโลกทั้งใบให้เป็นอาณาจักรพฤกษา / การโจมตีคือการกลืนกินทุกสรรพสิ่ง / กลืนกินการดำรงอยู่ เปลี่ยนทุกสิ่งให้กลายเป็นส่วนหนึ่งของป่า และดูดกลืนอำนาจเข้าสู่วัฏจักรแห่งพฤกษา", "Origin of all flora power / create or destroy life at will / turn the entire world into a flora kingdom / each attack devours all things / consume existence, turn everything into part of the forest, and absorb authority into the cycle of Flora"],
    ],
    ascensionTH: "Level 0 คือ FLORA — ตัวเส้นทางเอง ไม่ใช่ผู้ควบคุมพืชอีกต่อไป แต่เป็นป่า การเติบโต การแผ่ขยาย และการกลืนกินที่ไม่มีวันหยุด ตราบใดที่ยังมีเมล็ดพันธุ์ ราก หรือชีวิตพฤกษาหลงเหลืออยู่ การดำรงอยู่ของ FLORA จะไม่สิ้นสุด ในหนึ่งเส้นทางมีตัวตนระดับนี้ได้เพียงหนึ่งเดียว",
    ascensionEN: "Level 0 is FLORA — the Path itself. They no longer control plants; they become the forest, endless growth, expansion, and consumption without pause. As long as a seed, root, or trace of plant life remains, FLORA does not truly end. Only one such existence may exist within each Path.",
  },
  "Flora Heal": {
    image: "/images/paths/flora-heal-banner.png",
    video: "/videos/paths/flora-heal.mp4",
    accent: "from-emerald-600/30 via-lime-500/20 to-yellow-300/10",
    level0Name: "FLORA HEAL",
    titleTH: "เส้นทางแห่งพฤกษาเยียวยา",
    titleEN: "Path of Flora Heal",
    subtitleTH: "การเยียวยา การหล่อเลี้ยง และวัฏจักรชีวิต",
    subtitleEN: "Healing, nourishment, and the cycle of life",
    quoteTH: "พฤกษาไม่เพียงเติบโต แต่มันยังนำชีวิตกลับคืนมาอีกครั้ง",
    quoteEN: "Flora does not merely grow. It brings life back once more.",
    authority: "Life • Growth • Vitality • Regeneration • Life Cycle",
    conceptTitle: "Forest of Renewal",
    conceptTH: "Flora Heal แตกแขนงจาก Flora เมื่อก้าวสู่ลำดับ 7 ผู้ใช้ที่มีออร่าพลังชีวิตอ่อนโยน นุ่มนวล และเน้นการหล่อเลี้ยง สามารถเลือกเส้นทางนี้ได้ พลังจะเปลี่ยนจากการเติบโต การแผ่ขยาย และการกลืนกินของพฤกษา ไปสู่การเยียวยา การฟื้นฟู และการค้ำจุนชีวิต ยิ่งระดับสูง ผู้ใช้ยิ่งเข้าใกล้อำนาจของวัฏจักรชีวิต การเกิด การเติบโต ความเสื่อมสลาย และการผลิบานครั้งใหม่",
    conceptEN: "Flora Heal branches from Flora at Sequence 7. Users whose life aura becomes gentle, soft, and focused on nourishment may choose this Path. Their power shifts from Flora's growth, expansion, and consumption into healing, restoration, and the support of life. As they rise, they approach authority over the life cycle: birth, growth, decay, and renewed blooming.",
    sequences: [
      [9, "ผู้กระซิบเมล็ด", "SEED WHISPERER", "รับรู้พลังชีวิตผ่านพืช / เร่งการงอกของเมล็ด / สร้างเถาวัลย์อ่อนและรากเล็ก", "Sense life force through plants / accelerate seed germination / create young vines and small roots"],
      [8, "นักพฤกษา", "HERBALIST", "ควบคุมพืชได้หลากหลายชนิด / สร้างพิษจากพฤกษาเป็นอาวุธ / เพิ่มความแข็งแกร่งและเร่งการเติบโตของพืช", "Control many kinds of plants / create plant-based toxins as weapons / strengthen and accelerate plant growth"],
      [7, "ผู้ปลูกชีวิต", "LIFE PLANTER", "ปลูกพลังชีวิตลงในพื้นที่ / ฟื้นฟูคนหลายคนพร้อมกัน / เร่งการฟื้นตัวอย่างมาก / สร้างโซนรักษา", "Plant life force into an area / heal multiple people at once / greatly accelerate recovery / create healing zones"],
      [6, "ผู้หล่อเลี้ยง", "VITALITY WEAVER", "เชื่อมชีวิตของพันธมิตรเข้าด้วยกัน / กระจายพลังฟื้นฟู / เพิ่มความทนทาน / ป้องกันการตายเฉียบพลัน", "Link allied life forces together / distribute healing energy / increase endurance / prevent sudden death"],
      [5, "ผู้พิทักษ์ชีวิต", "LIFE GUARDIAN", "สร้างอาณาเขตฟื้นฟู / ฟื้นฟูต่อเนื่องขนาดใหญ่ / ปกป้องวิญญาณไม่ให้ดับง่าย / เริ่มดึงคนกลับจากใกล้ตาย", "Create a restoration territory / provide large-scale continuous healing / protect souls from fading easily / begin pulling the dying back from the edge"],
      [4, "ทูตพฤกษาแห่งชีวิต", "ANGEL OF VERDANT LIFE", "ร่างกึ่งพืชแห่งการเยียวยา / ฟื้นฟูระดับกองทัพ / สร้างป่าศักดิ์สิทธิ์ / ล้างสิ่งมีชีวิตทั้งพื้นที่ด้วยการดูดพลังชีวิต", "A half-plant body of healing / heal at army scale / create sacred forests / cleanse living beings across an area by draining life force"],
      [3, "ผู้คุมวัฏจักรชีวิต", "HARVESTER OF LIFE CYCLE", "ควบคุมเกิด เติบโต และตาย / ฟื้นฟูชีวิตระดับสูง / เร่งความตายของศัตรู / เปลี่ยนสนามรบเป็นพื้นที่ชีวิตและความตาย", "Control birth, growth, and death / perform high-level life restoration / accelerate an enemy's death / turn the battlefield into a zone of life and death"],
      [2, "จ้าวแห่งชีวิตโลก", "LORD OF WORLD LIFE", "เชื่อมกับพลังชีวิตของทั้งพื้นที่ / ฟื้นคืนคนจำนวนมาก / ดูดพลังชีวิตมหาศาล / ฆ่าหรือรักษาได้ในระดับเมือง", "Connect with the life force of an entire area / restore large numbers of people / absorb enormous life force / kill or heal at city scale"],
      [1, "เทพพฤกษาแห่งการกำเนิด", "ORIGIN LIFE DEITY", "ควบคุมการเกิดของชีวิต / สร้างชีวิตใหม่ / ฟื้นคืนชีพอย่างสมบูรณ์ / ลบชีวิตทั้งหมดในพื้นที่", "Command the birth of life / create new life / perform complete resurrection / erase all life within an area"],
    ],
    ascensionTH: "Level 0 คือ FLORA HEAL — ตัวเส้นทางเอง ผู้ครอบครองเส้นทางไม่ได้เพียงรักษาชีวิตอีกต่อไป แต่กลายเป็นป่าแห่งการฟื้นคืน พวกเขาควบคุมวัฏจักรของชีวิตทั้งหมด การเกิด การเติบโต ความเสื่อมสลาย และการผลิบานครั้งใหม่ ทุกชีวิตภายใต้อาณาเขตของพวกเขาจะถูกผูกเข้ากับวัฏจักรนี้ ไม่มีสิ่งใดคงอยู่ตลอดไป และไม่มีสิ่งใดตายจากไปอย่างแท้จริง ในหนึ่งเส้นทางมีตัวตนระดับนี้ได้เพียงหนึ่งเดียว",
    ascensionEN: "Level 0 is FLORA HEAL — the Path itself. They no longer merely heal life, but become the forest of renewal. They command the entire life cycle: birth, growth, decay, and renewed blooming. Every life within their territory is bound to this cycle. Nothing remains forever, and nothing truly dies. Only one such existence may exist within each Path.",
  },
  Tides: {
    image: "/images/paths/tides-banner.png",
    video: "/videos/paths/tides.mp4",
    accent: "from-cyan-700/30 via-blue-600/20 to-slate-900/20",
    level0Name: "TIDES",
    titleTH: "เส้นทางแห่งกระแสน้ำ",
    titleEN: "Path of Tides",
    subtitleTH: "การไหล แรงดัน การปรับเปลี่ยน และวัฏจักรแห่งวารี",
    subtitleEN: "Flow, pressure, adaptation, and the cycle of water",
    quoteTH: "น้ำไม่เคยหยุดนิ่ง และทุกสิ่งที่ขวางมัน...จะถูกเปลี่ยนไปตามมัน",
    quoteEN: "Water never stands still. Everything that blocks it will be changed by its flow.",
    authority: "Flow • Pressure • Adaptation • Change • Consumption • Water Cycle",
    conceptTitle: "Endless Flow",
    conceptTH: "Tides ไม่ใช่เพียงการควบคุมน้ำ แต่คือการไหลที่ไม่มีวันหยุด น้ำเปลี่ยนรูปร่างตามสิ่งกีดขวาง กัดเซาะทุกสิ่งอย่างต่อเนื่อง และกลืนทุกอย่างเข้าสู่วัฏจักรของมัน ยิ่งระดับสูง ผู้ใช้ยิ่งเปลี่ยนสนามรบ เมือง ภูมิภาค และโลกให้กลายเป็นส่วนหนึ่งของกระแสน้ำ",
    conceptEN: "Tides is not merely water control. It is endless flow. Water adapts to obstacles, erodes everything over time, and draws all things into its cycle. As the user rises, battlefields, cities, regions, and eventually the world itself can be transformed into part of the current.",
    sequences: [
      [9, "ผู้รับกระแสน้ำ", "WATER LISTENER", "รับรู้การไหลของน้ำ / ควบคุมน้ำปริมาณเล็กน้อย / สร้างคลื่นพื้นฐาน / ตรวจจับศัตรูผ่านสายน้ำ", "Sense water flow / control small amounts of water / create basic waves / detect enemies through water"],
      [8, "ผู้ควบคุมสายน้ำ", "FLOW CONTROLLER", "ควบคุมน้ำได้ต่อเนื่อง / สร้างกระแสน้ำโจมตี / ป้องกันด้วยน้ำเคลื่อนที่ / เริ่มใช้พลังในสนามรบ", "Sustain water control / attack with currents / defend with moving water / begin battlefield use"],
      [7, "ผู้บิดกระแส", "CURRENT SHIFTER", "เปลี่ยนทิศทางน้ำทันที / ดึงหรือผลักศัตรูด้วยกระแสน้ำ / ควบคุมพื้นที่ / ทำให้ศัตรูเสียการทรงตัว", "Shift water direction instantly / pull or push enemies with currents / control areas / disrupt enemy balance"],
      [6, "จอมเวทวารี", "TIDE MAGE", "สร้างคลื่นขนาดใหญ่ / เปลี่ยนสนามรบเป็นพื้นที่น้ำ / เคลื่อนที่ผ่านน้ำรวดเร็ว / ควบคุมจังหวะการต่อสู้", "Create large waves / turn the battlefield into water terrain / move rapidly through water / control combat rhythm"],
      [5, "ผู้ครองคลื่น", "WAVE DOMINATOR", "ควบคุมแรงดันน้ำ / สร้างคลื่นยักษ์ / บีบอัดน้ำเป็นแรงโจมตี / เริ่มทำลายล้างวงกว้าง", "Control water pressure / create giant waves / compress water into destructive force / begin wide-area destruction"],
      [4, "ทูตแห่งวารี", "ANGEL OF TIDES", "ร่างกายกึ่งน้ำแห่งทูตสวรรค์ / ควบคุมน้ำปริมาณมหาศาล / สร้างทะเลชั่วคราวบนพื้นดิน / โจมตีแบบท่วมพื้นที่ทั้งสนามรบ / ชะล้างพลังที่อ่อนแอกว่า ชะล้างคำสาป และชะล้างอิทธิพลที่แทรกซึมร่างกาย", "Partially aquatic angelic body / control enormous amounts of water / create a temporary sea upon land / flood the entire battlefield with attacks / wash away weaker power, cleanse curses, and purge influences that have infiltrated the body"],
      [3, "ผู้คุมมหาสมุทร", "OCEAN SOVEREIGN", "ควบคุมระดับน้ำขนาดใหญ่ / สร้างคลื่นทำลายเมือง / ใช้แรงดันน้ำบดยี้ทุกสิ่ง / เปลี่ยนภูมิประเทศตามใจ / กัดเซาะอำนาจของศัตรู กัดเซาะอิทธิพลเหนือธรรมชาติ และบั่นทอนเสถียรภาพของพลัง", "Control massive water levels / create city-destroying waves / crush everything with water pressure / reshape terrain at will / erode enemy authority, supernatural influence, and the stability of power"],
      [2, "เจ้าแห่งมหาสมุทรโลก", "WORLD OCEAN LORD", "เชื่อมกับแหล่งน้ำทั้งหมดบนโลก / ควบคุมทะเลและแม่น้ำทั่วหล้า / สร้างภัยพิบัติระดับภูมิภาค / แรงกดดันน้ำระดับมหาศาล / พัดพาพลังออกจากต้นกำเนิด กลืนอิทธิพลเข้าสู่กระแสวารี และทำให้พลังที่อ่อนแอกว่าถูกชะล้างไปกับสายน้ำ", "Connect to all water sources on the world / control seas and rivers everywhere / create regional disasters / wield colossal water pressure / carry power away from its source, draw influence into the current, and wash weaker powers away with the flow"],
      [1, "เทพวารี", "PRIMORDIAL TIDE DEITY", "ควบคุมการไหลของน้ำทั้งโลก / สร้างหรือสลายมหาสมุทร / เปลี่ยนโลกให้กลายเป็นทะเล / การโจมตีคือการกลืนกินทั้งโลก / พัดพาอำนาจ กลืนกินอิทธิพล ชะล้างการคงอยู่ของพลังที่อ่อนแอกว่า และเปลี่ยนทุกสิ่งให้เป็นส่วนหนึ่งของวัฏจักรแห่งสายน้ำ", "Control the flow of all water across the world / create or dissolve oceans / turn the world into a sea / each attack devours the world / carry away authority, consume influence, wash away the existence of weaker powers, and transform all things into part of the water cycle"],
    ],
    ascensionTH: "Level 0 คือ TIDES — ตัวเส้นทางเอง ไม่ใช่ผู้ควบคุมน้ำอีกต่อไป แต่เป็นการไหล การเปลี่ยนแปลง แรงดัน และวัฏจักรแห่งวารี ไม่มีสิ่งใดขวางกระแสได้ตลอดกาล เพราะทุกสิ่งจะถูกเปลี่ยนไปตามมันในที่สุด ในหนึ่งเส้นทางมีตัวตนระดับนี้ได้เพียงหนึ่งเดียว",
    ascensionEN: "Level 0 is TIDES — the Path itself. They no longer control water; they become flow, change, pressure, and the cycle of water. Nothing can resist the current forever, for all things are eventually changed by it. Only one such existence may exist within each Path.",
  },


  "Holy Light": {
    image: "/images/paths/holy-light-banner.png",
    video: "/videos/paths/holy-light.mp4",
    accent: "from-yellow-500/30 via-amber-400/20 to-white/10",
    level0Name: "HOLY LIGHT",
    titleTH: "เส้นทางแห่งแสงศักดิ์สิทธิ์",
    titleEN: "Path of Holy Light",
    subtitleTH: "การชำระล้าง การพิพากษา และแสงร้อนแรง",
    subtitleEN: "Purification, judgment, and burning radiance",
    quoteTH: "แสงไม่ใช่การรักษา แต่มันคือการพิพากษาและชำระล้างทุกสิ่งที่ไม่ควรมีอยู่",
    quoteEN: "Light is not healing. It is judgment and the cleansing of all things that should not exist.",
    authority: "Purification • Judgment • Sacred Flame • Radiance • Erasure",
    conceptTitle: "Divine Judgment",
    conceptTH: "Holy Light แตกแขนงจาก Restoration เมื่อก้าวสู่ลำดับ 7 ผู้ใช้บางคนจะค้นพบว่าแสงของตนมิได้อบอุ่นหรืออ่อนโยนเช่นผู้ฟื้นฟูทั่วไป ออร่าของพวกเขาร้อนแรง รุนแรง และมีคุณสมบัติในการเผาผลาญสิ่งผิดเพี้ยนโดยธรรมชาติ ผู้ที่มีคุณสมบัตินี้สามารถเลือกก้าวสู่เส้นทาง Holy Light ได้ แสงของพวกเขาจะไม่มุ่งเน้นการรักษาอีกต่อไป แต่จะกลายเป็นแสงแห่งการชำระล้าง การพิพากษา และการลบล้างสิ่งที่ไม่สมควรมีอยู่",
    conceptEN: "Holy Light branches from Restoration at Sequence 7. Some users discover that their light is not warm or gentle like ordinary restorers. Their aura is intense, violent, and naturally capable of burning away distortion. Those who meet this condition may choose the Path of Holy Light. Their light no longer focuses on healing, but becomes purification, judgment, and the erasure of what should not exist.",
    sequences: [
      [9, "ผู้สัมผัสสมดุล", "BALANCE SENSOR", "รับรู้ความผิดปกติ / ฟื้นฟูเล็กน้อย / ตรวจจับพลังผิดเพี้ยน / เริ่มมองเห็นสิ่งที่ควรถูกชำระ", "Sense imbalance / perform minor recovery / detect distorted power / begin perceiving what should be cleansed"],
      [8, "ผู้ฟื้นฟู", "RESTORER", "รักษาพื้นฐาน / ลดสถานะผิดปกติ / ปรับสมดุลเล็กน้อย / เริ่มต่อต้านพลังไม่บริสุทธิ์", "Perform basic healing / reduce abnormal conditions / slightly restore balance / begin resisting impure power"],
      [7, "ผู้ชำระล้าง", "PURIFIER", "ปล่อยแสงชำระล้าง / ลบสถานะผิดปกติแบบรุนแรง / สร้างความเสียหายต่อสิ่งผิดเพี้ยน / เริ่มโจมตีด้วยแสง", "Release purifying light / erase severe abnormal conditions / damage distorted beings / begin attacking with light"],
      [6, "จอมเวทแสงศักดิ์สิทธิ์", "HOLY LIGHT MAGE", "ยิงแสงพลังสูง / เปลี่ยนแสงเป็นโล่ป้องกัน / เผาศัตรูด้วยความร้อน / ชำระล้างคำสาประดับกลาง / ทั้งลบ ป้องกัน และเผา", "Fire high-powered holy light / convert light into a protective shield / burn enemies with heat / cleanse mid-level curses / erase, protect, and burn at once"],
      [5, "ผู้ครองแสง", "LIGHT DOMINATOR", "สร้างเขตชำระล้าง / ศัตรูในพื้นที่โดนเผาอย่างต่อเนื่อง / พลังมืดถูกลดทอน / เริ่มพิพากษาทั้งพื้นที่", "Create purification zones / continuously burn enemies within the area / weaken dark power / begin judging the entire battlefield"],
      [4, "ทูตแห่งแสง", "ANGEL OF HOLY LIGHT", "ร่างกายเป็นแสง / ปล่อยคลื่นแสงทำลายล้าง / ศัตรูโดนชำระทันที / การโจมตีคือการพิพากษาในทันที", "Body becomes sacred light / release destructive waves of radiance / instantly cleanse enemies / every attack becomes immediate judgment"],
      [3, "ผู้พิพากษาแห่งแสง", "JUDICATOR OF RADIANCE", "พิพากษาศัตรูโดยตรง / แสงเลือกสิ่งที่ต้องถูกลบ / เผาศัตรูจนหายไป / สนามรบคือเขตตัดสิน", "Judge enemies directly / light selects what must be erased / burn enemies until they vanish / the battlefield becomes a court of judgment"],
      [2, "เจ้าแห่งแสงโลก", "WORLD RADIANCE LORD", "ปล่อยแสงระดับภูมิภาค / เผาทุกสิ่งที่ไม่บริสุทธิ์ / ลบสิ่งผิดเพี้ยนจำนวนมหาศาล / โลกเข้าสู่การชำระล้าง", "Release regional holy radiance / burn all impure things / erase massive distortion / force the land into purification"],
      [1, "เทพแห่งแสงศักดิ์สิทธิ์", "PRIMORDIAL HOLY LIGHT DEITY", "ควบคุมการพิพากษา / แสงลบสิ่งที่ไม่ควรมี / คำพิพากษาไม่อาจคลาดเคลื่อน / การโจมตีคือการลบออกจากการมีอยู่", "Command divine judgment / light erases what should not exist / judgment cannot deviate / every attack removes existence itself"],
    ],
    ascensionTH: "Level 0 คือ HOLY LIGHT — ตัวเส้นทางเอง ไม่ใช่ผู้รักษา ไม่ใช่เทพ และไม่ใช่ผู้ใช้แสงอีกต่อไป แต่เป็นแนวคิดแห่งการพิพากษา การชำระล้าง และแสงศักดิ์สิทธิ์โดยสมบูรณ์ สิ่งผิดเพี้ยนไม่อาจดำรงอยู่ต่อหน้าพวกเขาได้ เพราะการมีอยู่ของพวกเขาคือคำตัดสิน ในหนึ่งเส้นทางมีตัวตนระดับนี้ได้เพียงหนึ่งเดียว",
    ascensionEN: "Level 0 is HOLY LIGHT — the Path itself. They are no longer a healer, deity, or wielder of light, but the complete concept of judgment, purification, and sacred radiance. Distortion cannot exist before them, because their presence is judgment itself. Only one such existence may exist within each Path.",
  },
  Darkness: {
    image: "/images/paths/darkness-banner.png",
    video: "/videos/paths/darkness.mp4",
    accent: "from-violet-950/35 via-purple-900/25 to-black/30",
    level0Name: "DARKNESS",
    titleTH: "เส้นทางแห่งความมืด",
    titleEN: "Path of Darkness",
    subtitleTH: "ความว่าง การลบเลือน และการไม่มีอยู่",
    subtitleEN: "Void, erasure, and non-existence",
    quoteTH: "ความมืดไม่ใช่สิ่งที่มองไม่เห็น แต่มันคือสิ่งที่ไม่มีอยู่ตั้งแต่แรก",
    quoteEN: "Darkness is not the absence of light. Darkness is the absence of existence itself.",
    authority: "Erasure • Absence • Void • Non-Existence • Existence Collapse",
    conceptTitle: "Void Existence",
    conceptTH: "Darkness ไม่ใช่เพียงเงามืดหรือการซ่อนเร้น แต่คือการทำให้การมีอยู่ถูกกัดกร่อนและลบเลือนไปจากความเป็นจริง ยิ่งระดับสูง ผู้ใช้ยิ่งเปลี่ยนสนามรบ เมือง ภูมิภาค และประวัติศาสตร์ให้กลายเป็นช่องว่างที่ไม่ควรมีสิ่งใดดำรงอยู่",
    conceptEN: "Darkness is not merely shadow or concealment. It is the erosion and erasure of existence from reality itself. As the user rises, battlefields, cities, regions, and histories can be reduced into voids where nothing should be able to exist.",
    sequences: [
      [9, "ผู้สัมผัสความว่าง", "VOID SENSOR", "มองเห็นรอยแยกของการมีอยู่ / รับรู้สิ่งที่ถูกซ่อน ลบ หรือบิดเบือน / ตรวจจับจุดอ่อนของพลังและความเป็นจริง / รู้ได้ว่ามีบางสิ่งหายไป", "Sense gaps in existence / detect hidden, erased, or distorted things / find weak points in power and reality / notice what has vanished"],
      [8, "ผู้กลืนแสง", "LIGHT DEVOURER", "ดูดกลืนแสงและพลังงานรอบตัว / สร้างเขตมืดลดการรับรู้ / ลบร่องรอย เสียง และกลิ่นบางส่วน / ทำให้สิ่งในความมืดถูกลืมจากการรับรู้", "Devour surrounding light and energy / create dark zones that reduce perception / erase traces, sounds, and scents / make things within darkness fade from awareness"],
      [7, "ผู้ลบสภาพ", "EXISTENCE ERODER", "กัดกร่อนการมีอยู่ของวัตถุ / ทำให้การโจมตีหายไปบางส่วน / ทำให้บาดแผล อาวุธ หรือสิ่งก่อสร้างค่อย ๆ สูญสลาย / เริ่มแทรกแซงความเป็นจริงพื้นฐาน", "Erode the existence of objects / make attacks partially vanish / cause wounds, weapons, or structures to disintegrate / begin interfering with basic reality"],
      [6, "จอมเวทความมืด", "DARKNESS MAGE", "สร้างเขตแดนแห่งการลบเลือน / พลังโจมตีที่เข้าสู่เขตจะถูกกัดกร่อน / ศัตรูสูญเสียตัวตนบางส่วนเมื่ออยู่นานเกินไป / เริ่มลบความทรงจำระยะสั้น", "Create fields of erasure / incoming attacks are corroded / enemies lose parts of their identity if they remain too long / begin erasing short-term memory"],
      [5, "ผู้ครองความมืด", "DARKNESS DOMINATOR", "สร้าง Void Domain ขนาดใหญ่ / ศัตรูภายในเขตถูกลบความสามารถทีละส่วน / อาวุธ พลัง และการป้องกันเริ่มหายไป / ลบสิ่งปลูกสร้างหรือพื้นที่ขนาดเล็กได้", "Create a large Void Domain / erase enemy abilities piece by piece / weapons, powers, and defenses begin to disappear / erase small structures or zones"],
      [4, "ทูตแห่งความว่าง", "ANGEL OF VOID", "ร่างกายกึ่งมีอยู่กึ่งไม่มีอยู่ / การโจมตีทะลุการป้องกันทั่วไป / สัมผัสทำให้สรรพสิ่งเลือนหาย / ลบส่วนหนึ่งของวิญญาณหรือพลังต้นกำเนิด", "Body becomes half-existent and half-absent / attacks bypass normal defenses / touch causes things to fade / erase parts of the soul or origin power"],
      [3, "ผู้คุมความว่าง", "SOVEREIGN OF VOID", "ควบคุมพื้นที่ว่างเปล่าขนาดเมือง / สร้างรอยแยกที่กลืนกินความเป็นจริง / ลบอาคาร ภูเขา หรือพื้นที่ขนาดใหญ่ / ผู้ที่ถูกลบเริ่มถูกลืมจากผู้คนรอบตัว", "Control city-scale void zones / create rifts that consume reality / erase buildings, mountains, or large areas / erased targets begin to be forgotten by those around them"],
      [2, "เจ้าแห่งความว่างโลก", "WORLD VOID LORD", "กลืนกินภูมิภาคทั้งแห่ง / ลบประวัติศาสตร์ของเป้าหมายบางส่วน / เปลี่ยนพื้นที่จริงให้กลายเป็น Void Zone ถาวร / อารยธรรมอาจถูกลบจากบันทึกของโลก", "Devour entire regions / erase parts of a target's history / turn real areas into permanent Void Zones / civilizations may vanish from the world's records"],
      [1, "เทพแห่งความว่างเปล่า", "PRIMORDIAL VOID DEITY", "ควบคุมการมีอยู่และไม่มีอยู่โดยสมบูรณ์ / ลบเมือง ประเทศ เผ่าพันธุ์ หรือแนวคิดออกจากโลก / ไม่มีการฟื้นคืน ไม่มีการย้อนกลับ / เป้าหมายไม่ถูกฆ่า แต่ไม่เคยมีอยู่ตั้งแต่แรก", "Command existence and non-existence completely / erase cities, nations, races, or concepts from the world / no revival and no reversal / the target is not killed, but made to have never existed"],
    ],
    ascensionTH: "Level 0 คือ DARKNESS — ตัวเส้นทางเอง ไม่ใช่เทพ ไม่ใช่ Warden และไม่ใช่ผู้ใช้พลังอีกต่อไป แต่เป็นแนวคิดแห่งการไม่มีอยู่โดยสมบูรณ์ ไม่มีร่างกาย ไม่มีวิญญาณ ไม่มี Core ไม่มีอดีต และไม่มีอนาคต ผู้ที่ก้าวถึงระดับนี้จะถูกลบออกจากการมีอยู่ไปพร้อมกับการกลายเป็น Darkness ในหนึ่งเส้นทางมีตัวตนระดับนี้ได้เพียงหนึ่งเดียว",
    ascensionEN: "Level 0 is DARKNESS — the Path itself. They are no longer a deity, Warden, or wielder of power, but the complete concept of non-existence. No body, no soul, no Core, no past, and no future. One who reaches this level is erased from existence while becoming Darkness itself. Only one such existence may exist within each Path.",
  },
  Illusion: {
    image: "/images/paths/illusion-banner.png",
    video: "/videos/paths/illusion.mp4",
    accent: "from-fuchsia-700/30 via-pink-600/20 to-violet-950/20",
    level0Name: "ILLUSION",
    titleTH: "เส้นทางแห่งมายา",
    titleEN: "Path of Illusion",
    subtitleTH: "การรับรู้ ความเชื่อ และความจริงที่ถูกบิดเบือน",
    subtitleEN: "Perception, belief, and distorted reality",
    quoteTH: "ความจริงไม่สำคัญ ตราบใดที่เจ้าทำให้ทุกคนเชื่อในสิ่งที่เจ้าเห็น",
    quoteEN: "Reality is irrelevant, as long as you can make everyone believe what you see.",
    authority: "Belief • Perception • Deception • Cognition • Distorted Reality",
    conceptTitle: "Distorted Belief",
    conceptTH: "Illusion ไม่ใช่เพียงภาพลวงตา แต่คือการบิดเบือนระบบคิด ความเชื่อ และตรรกะของผู้รับรู้ เมื่อความเชื่อแข็งแรงพอ มายาจะเริ่มส่งผลต่อร่างกาย ระบบประสาท ความทรงจำ และในระดับสูงอาจทำให้สิ่งที่ผู้คนยอมรับกลายเป็นความจริงเทียมของโลก",
    conceptEN: "Illusion is not merely false imagery. It distorts thought systems, belief, and logic itself. When belief becomes strong enough, illusion can affect the body, the nervous system, memory, and eventually form a false reality accepted by the world.",
    sequences: [
      [9, "ผู้สร้างภาพลวง", "IMAGE CASTER", "สร้างภาพลวงตาพื้นฐาน / หลอกสายตา เสียง และเงา / สร้างวัตถุปลอมชั่วคราว / ยังไม่มีผลกระทบจริง", "Create basic illusions / deceive sight, sound, and shadow / form temporary false objects / no real physical effect yet"],
      [8, "ผู้บิดการรับรู้", "PERCEPTION TWISTER", "หลอกประสาทสัมผัสหลายด้าน / บิดระยะทาง ทิศทาง และตำแหน่ง / ทำให้ศัตรูตีพลาดหรือเดินผิดทาง / เริ่มแทรกแซงการรับรู้ของกลุ่มเป้าหมาย", "Deceive multiple senses / twist distance, direction, and position / make enemies miss or move the wrong way / begin interfering with group perception"],
      [7, "ผู้ควบคุมภาพลวง", "ILLUSION CONTROLLER", "สร้างภาพลวงตาสมจริง / ควบคุมการรับรู้ของศัตรู / ใช้มายาสร้างผลทางอ้อม / Phantom Damage ทำให้เป้าหมายเชื่อว่าถูกโจมตีจนร่างกายตอบสนองจริง", "Create realistic illusions / control enemy perception / use illusion for indirect effects / Phantom Damage makes targets believe they were struck until the body reacts"],
      [6, "จอมเวทมายา", "ILLUSION MAGE", "ป้อนข้อมูลลวงจำนวนมหาศาล / ทำให้สมองสับสนจนประมวลผลไม่ได้ / สร้างภาพลวงหลายชั้น / Overload ทำให้มนุษย์หมดสติหรือเครื่องจักรเกิด Error", "Flood targets with massive false data / overwhelm the brain's processing / create layered illusions / Overload knocks humans unconscious or forces machines into error"],
      [5, "ผู้ครองมายา", "ILLUSION DOMINATOR", "สร้าง Illusion Domain / ทุกคนภายในพื้นที่รับรู้โลกตามที่ผู้ใช้กำหนด / ศัตรูแยกจริงกับเท็จไม่ได้ / Perception Collapse ทำให้ทิศทาง ระยะ และเวลาพังทลาย", "Create an Illusion Domain / everyone inside perceives the world as the user defines it / enemies cannot separate truth from falsehood / Perception Collapse breaks direction, distance, and time"],
      [4, "ทูตแห่งมายา", "ANGEL OF ILLUSION", "ควบคุมการรับรู้ของผู้คนจำนวนมาก / สร้างความจริงส่วนบุคคล / แต่ละคนเห็นโลกคนละแบบ / Logic Corruption ทำให้ระบบคิดและ AI ขัดแย้งจนพัง", "Control the perception of many people / create personal realities / each person sees a different world / Logic Corruption breaks reasoning systems and AI through contradiction"],
      [3, "ผู้คุมความเชื่อ", "SOVEREIGN OF BELIEF", "ควบคุมความเชื่อของผู้คนจำนวนมหาศาล / ความเชื่อกลายเป็นแหล่งพลัง / สร้างเรื่องแต่งที่ทุกคนยอมรับว่าเป็นจริง / Reality Conflict ทำให้เป้าหมายเห็นหลายความจริงพร้อมกัน", "Control the beliefs of vast crowds / belief becomes a source of power / create fiction accepted as truth / Reality Conflict makes targets perceive multiple realities at once"],
      [2, "เจ้าแห่งมายาโลก", "WORLD ILLUSION LORD", "บิดการรับรู้ระดับภูมิภาค / ผู้คนทั้งดินแดนเห็นโลกในรูปแบบเดียวกัน / ประวัติศาสตร์ ข้อมูล และบันทึกเริ่มถูกบิดเบือน / ความเชื่อของมวลชนกลายเป็นอาวุธ", "Distort perception across a region / entire lands see the world in the same false form / history, data, and records begin to bend / mass belief becomes a weapon"],
      [1, "เทพแห่งมายา", "PRIMORDIAL ILLUSION DEITY", "ควบคุมความเชื่อระดับโลก / สิ่งที่คนทั้งโลกเชื่อเริ่มส่งผลต่อความจริง / สร้างความจริงเทียมทัดเทียมความจริงเดิม / โลกไม่เป็นอย่างที่มันเป็น แต่เป็นอย่างที่ผู้คนเชื่อ", "Control belief on a global scale / what the world believes begins to affect reality / create false realities equal to the original / the world is not what it is, but what people believe it is"],
    ],
    ascensionTH: "Level 0 คือ ILLUSION — ตัวเส้นทางเอง ไม่ใช่มนุษย์ ไม่ใช่เทพ และไม่ใช่ผู้ใช้พลังอีกต่อไป แต่เป็นแนวคิดแห่งมายาโดยสมบูรณ์ ไม่มีมาตรฐานใดสามารถพิสูจน์ความจริงได้อีก ทุกความเชื่อมีโอกาสกลายเป็นความจริง และทุกความจริงมีโอกาสกลายเป็นเรื่องโกหก ในหนึ่งเส้นทางมีตัวตนระดับนี้ได้เพียงหนึ่งเดียว",
    ascensionEN: "Level 0 is ILLUSION — the Path itself. They are no longer human, deity, or wielder of power, but the complete concept of illusion. No standard can fully prove truth anymore. Every belief may become reality, and every truth may become a lie. Only one such existence may exist within each Path.",
  },
};
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
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [selectedEpisode, setSelectedEpisode] = useState(null);
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
            <a href="#characters" className="hover:text-white">{t.navCharacters}</a>
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
            <a href="#characters" className="px-8 py-4 rounded-2xl bg-white text-black font-black hover:scale-105 transition">{t.navCharacters}</a>
            <a href="#world" className="px-8 py-4 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 transition">{t.enterWorld}</a>
            <a href="#beasts" className="px-8 py-4 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 transition">{t.beastArchive}</a>
          </div>
        </div>
      </header>

      <SectionBlock id="characters" kicker={t.charactersKicker} title={t.charactersTitle} text={t.charactersBody}>
        <div className="mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-black/25 shadow-[0_0_90px_rgba(139,92,246,.14)]">
          <button
            type="button"
            onClick={() => setSelectedCharacter(FEATURED_CHARACTERS[0])}
            className="group block w-full text-left"
          >
            <div className="relative overflow-hidden bg-black">
              <img
                src="/images/story/umbral-covenant.png"
                alt="Umbral Covenant"
                className="w-full object-cover transition duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#03030a] via-black/35 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <p className="text-xs uppercase tracking-[0.35em] text-violet-100/75">ARC I MAIN TEAM</p>
                <h3 className="mt-3 text-4xl md:text-6xl font-black">UMBRAL COVENANT</h3>
                <p className="mt-4 max-w-3xl text-white/75 leading-relaxed">
                  {lang === "th"
                    ? "สมาชิกหลักทั้งห้าคนของ Umbral Covenant กลุ่ม Warden ที่เป็นศูนย์กลางของ Arc I"
                    : "Five Wardens bound by fate, walking different Paths toward the same destination."}
                </p>
              </div>
            </div>
          </button>

          <div className="grid gap-3 p-5 md:grid-cols-5 md:p-6">
            {FEATURED_CHARACTERS.map((character) => (
              <button
                key={character.key}
                type="button"
                onClick={() => setSelectedCharacter(character)}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-left transition hover:-translate-y-1 hover:border-violet-200/45 hover:bg-white/[0.08]"
              >
                <p className="text-lg font-black">{character.name}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.25em] text-violet-100/65">{character.path}</p>
                <p className="mt-3 text-xs text-white/45">{character.titleEN}</p>
              </button>
            ))}
          </div>

          <div className="border-t border-white/10 px-5 pb-6 md:px-6">
            <button
              type="button"
              onClick={() => setSelectedCharacter(FEATURED_CHARACTERS[0])}
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-violet-200/25 bg-violet-500/10 px-5 py-3 text-sm font-bold text-violet-100 transition hover:bg-violet-500/20"
            >
              <span>{lang === "th" ? "เปิดข้อมูลตัวละคร" : "View Character Profiles"}</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </SectionBlock>

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
        <div className="mt-10 rounded-[2rem] border border-white/10 bg-black/35 p-5 md:p-7">
          <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-violet-200/60">
                Episode Index
              </p>
              <h3 className="mt-2 text-3xl font-black">
                {lang === "th" ? "เลือกตอนที่ต้องการอ่าน" : "Select an Episode"}
              </h3>
            </div>
            <p className="text-sm text-white/40">
              {lang === "th" ? `เผยแพร่แล้ว ${RELEASED_EPISODES} ตอน` : `${RELEASED_EPISODES} episodes released`}
            </p>
          </div>

          <div className="grid gap-3">
            {RELEASED_STORIES.map((episode) => (
              <button
                key={episode.ep}
                type="button"
                onClick={() => setSelectedEpisode(episode)}
                className="group flex w-full flex-col gap-3 rounded-3xl border border-white/10 bg-white/[0.035] p-5 text-left transition hover:border-violet-200/40 hover:bg-violet-300/10 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-violet-200/55">
                    Episode {String(episode.ep).padStart(2, "0")}
                  </p>
                  <h4 className="mt-2 text-2xl font-black text-white">
                    {lang === "th" ? episode.titleTH : episode.titleEN}
                  </h4>
                  <p className="mt-1 text-sm text-white/35">
                    {lang === "th" ? episode.titleEN : episode.titleTH}
                  </p>
                </div>
                <span className="shrink-0 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm font-bold text-white/60 transition group-hover:border-violet-200/50 group-hover:text-white">
                  {lang === "th" ? "อ่านตอนนี้" : "Read Episode"}
                </span>
              </button>
            ))}
          </div>

          {SEALED_STORY_COUNT > 0 && (
            <div className="mt-6 rounded-3xl border border-violet-200/20 bg-black/40 p-6 text-center">
              <p className="text-xs uppercase tracking-[0.35em] text-violet-200/60">
                Sealed Archive
              </p>
              <h3 className="mt-3 text-2xl font-black">
                {lang === "th" ? `คลังข้อมูลถูกปิดผนึก` : `Archive Sealed`}
              </h3>
              <p className="mx-auto mt-3 max-w-2xl text-white/55 leading-relaxed">
                {lang === "th"
                  ? "ข้อมูลตอนถัดไปถูกเก็บไว้ใน Core Archive และจะค่อยๆ เปิดเผยในอนาคต"
                  : "The remaining records are sealed within the Core Archive and will be released gradually."}
              </p>

              <div className="mx-auto mt-5 max-w-3xl rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-violet-200/60">
                  Author Verification
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/55 md:text-base">
                  I will be posting this story on Royal Road under the username FFiaz.
                </p>
              </div>
            </div>
          )}
        </div>
      </SectionBlock>

      {selectedEpisode && (
        <div className="fixed inset-0 z-[100] overflow-y-auto bg-black/90 backdrop-blur-xl">
          <div className="min-h-screen max-w-5xl mx-auto px-5 py-16">
            <button
              onClick={() => setSelectedEpisode(null)}
              className="fixed top-6 right-6 z-50 rounded-full border border-white/15 bg-black/60 px-5 py-3 text-white/75 transition hover:bg-white/10 hover:text-white"
            >
              {lang === "th" ? "กลับไปเลือกตอน" : "Back to Episodes"}
            </button>

            <StoryEpisodeCard episode={selectedEpisode} lang={lang} />
          </div>
        </div>
      )}

      {selectedCharacter && (
        <div className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-xl overflow-y-auto">
          <div className="min-h-screen max-w-6xl mx-auto px-5 py-16">
            <button onClick={() => setSelectedCharacter(null)} className="fixed top-6 right-6 z-50 rounded-full border border-white/15 bg-black/50 px-5 py-3 hover:bg-white/10">{t.close}</button>
            <div className={`overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br ${selectedCharacter.accent}`}>
              <div className="relative h-[520px] overflow-hidden bg-black">
                <img src={selectedCharacter.image} alt={selectedCharacter.name} className="absolute inset-0 h-full w-full object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#03030a] via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7 md:p-10">
                  <p className="text-xs uppercase tracking-[0.35em] text-violet-100/75">MAIN CHARACTER · ARC I</p>
                  <h2 className="mt-3 text-5xl md:text-7xl font-black">{lang === "th" ? selectedCharacter.nameTH : selectedCharacter.name}</h2>
                  <p className="mt-3 text-xl text-white/75">{lang === "th" ? selectedCharacter.titleTH : selectedCharacter.titleEN}</p>
                </div>
              </div>
              <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6 p-6 md:p-8">
                <div className="rounded-3xl border border-white/10 bg-black/35 p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-violet-200/60">Quote</p>
                  <p className="mt-4 text-2xl md:text-3xl font-black leading-snug">“{lang === "th" ? selectedCharacter.quoteTH : selectedCharacter.quoteEN}”</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <InfoCard title={t.characterPath} text={lang === "th" ? selectedCharacter.pathTH : selectedCharacter.path} />
                  <InfoCard title={t.currentSequence} text={lang === "th" ? selectedCharacter.sequenceTH : selectedCharacter.sequenceEN} />
                  <InfoCard title={t.characterRole} text={lang === "th" ? selectedCharacter.roleTH : selectedCharacter.roleEN} />
                  <InfoCard title={t.characterStatus} text={lang === "th" ? selectedCharacter.statusTH : selectedCharacter.statusEN} />
                </div>
              </div>
              <div className="px-6 pb-8 md:px-8">
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-violet-200/60">Core Concept</p>
                  <p className="mt-4 text-lg leading-relaxed text-white/72">{lang === "th" ? selectedCharacter.conceptTH : selectedCharacter.conceptEN}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {selectedCharacter.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/55">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedPath && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-xl overflow-y-auto">
          <div className="min-h-screen max-w-7xl mx-auto px-5 py-16">
            <button onClick={() => setSelectedPath(null)} className="fixed top-6 right-6 z-50 rounded-full border border-white/15 bg-black/40 px-5 py-3 hover:bg-white/10">{t.close}</button>
            <div className="rounded-[2rem] overflow-hidden border border-white/10 bg-[#06060f]">
              {PATH_ARCHIVES[selectedPath.name] ? (
                <div className="p-5 md:p-8">
                  <FullPathArchive archive={PATH_ARCHIVES[selectedPath.name]} lang={lang} />
                </div>
              ) : (
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
              )}
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
          <div className="mt-8">
            <p className="text-xs uppercase tracking-[0.35em] text-white/35 mb-3">Archive Contact</p>
            <a
              href="mailto:fondzdnc@gmail.com"
              className="text-2xl md:text-3xl font-black text-white hover:text-violet-200 transition"
            >
              fondzdnc@gmail.com
            </a>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <span className="rounded-2xl bg-white/10 px-8 py-4 font-black text-white/45 border border-white/10 cursor-not-allowed">
              {t.tiktokButton}
            </span>
            <span className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-black text-white/45 cursor-not-allowed">
              {t.discordButton}
            </span>
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
    <article id={`episode-${episode.ep}`} className="scroll-mt-28 rounded-[2rem] border border-white/10 bg-black/35 p-5 md:p-8 shadow-[0_0_60px_rgba(0,0,0,.25)]">
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

      <div className="mt-6 flex justify-end">
        <a
          href="#story"
          className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/50 transition hover:bg-white/10 hover:text-white"
        >
          ↑ Episodes
        </a>
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


function FullPathArchive({ archive, lang }) {
  const sacredRealm = SACRED_REALMS[archive.level0Name];
  const hasFullRankData = archive.sequences?.some(([level]) => level === 9) && archive.sequences?.some(([level]) => level === 1);

  return (
    <div className="space-y-6">
      <div className={`overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br ${archive.accent}`}>
        <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
          <img
            src={archive.image}
            alt={lang === "th" ? archive.titleTH : archive.titleEN}
            className="h-64 w-full object-cover md:h-96 lg:h-full"
          />
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.35em] text-white/45">Featured Path Archive</p>
            <h3 className="mt-3 text-4xl md:text-5xl font-black leading-tight">{lang === "th" ? archive.titleTH : archive.titleEN}</h3>
            <p className="mt-3 text-white/60">{lang === "th" ? archive.subtitleTH : archive.subtitleEN}</p>
            <p className="mt-7 text-xl md:text-2xl font-black leading-snug text-white/85">“{lang === "th" ? archive.quoteTH : archive.quoteEN}”</p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
        <div className="grid gap-5 lg:sticky lg:top-24">
          <InfoCard title={lang === "th" ? "ขอบเขตอำนาจ" : "Authority"} text={archive.authority} />
          <InfoCard title={archive.conceptTitle} text={lang === "th" ? archive.conceptTH : archive.conceptEN} />
          {archive.specialTitle && (
            <div className="rounded-3xl border border-red-300/20 bg-red-950/20 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-red-200/60">Signature Power</p>
              <h3 className="mt-2 text-2xl font-black">{archive.specialTitle}</h3>
              <p className="mt-4 text-white/70 leading-relaxed">{lang === "th" ? archive.specialTH : archive.specialEN}</p>
            </div>
          )}
          <div className="rounded-[2rem] border border-amber-200/20 bg-amber-500/[0.06] p-6">
            <p className="text-xs uppercase tracking-[0.35em] text-amber-200/70">Concept Ascension</p>
            <h3 className="mt-2 text-3xl font-black">Level 0</h3>
            {archive.level0Name && <p className="mt-1 text-2xl font-black tracking-[0.18em] text-amber-100/90">{archive.level0Name}</p>}
            <p className="mt-4 text-white/72 leading-relaxed">{lang === "th" ? archive.ascensionTH : archive.ascensionEN}</p>
          </div>

          {archive.video && (
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/45">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <p className="text-xs uppercase tracking-[0.32em] text-white/45">Path Video</p>
                <p className="text-xs text-white/35">9:16</p>
              </div>
              <div className="mx-auto aspect-[9/16] max-h-[560px] bg-black">
                <video src={archive.video} poster={archive.image} controls playsInline className="h-full w-full object-cover" />
              </div>
            </div>
          )}
        </div>

        <div className="rounded-[2rem] border border-violet-200/15 bg-white/[0.035] p-5 md:p-6">
          <p className="text-xs uppercase tracking-[0.35em] text-violet-200/60">Sequence Archive 9 → 1</p>
          <div className="mt-6 grid gap-4">
            {archive.sequences.map(([level, th, en, descTH, descEN, conceptTH, conceptEN]) => (
              <div key={level} className="rounded-2xl border border-white/10 bg-black/35 p-5">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h4 className="text-xl font-black">{level} | {en}</h4>
                </div>
                <p className="mt-3 text-white/65 leading-relaxed">{lang === "th" ? descTH : descEN}</p>
                {conceptTH && (
                  <p className="mt-3 text-white/65 leading-relaxed">{lang === "th" ? conceptTH : conceptEN}</p>
                )}
                {level === 1 && sacredRealm && hasFullRankData && (
                  <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4 text-white/80">
                    <p>Only one Level 1 existence may exist within this Path at a time.</p>
                    <div className="mt-3 font-black text-white">Sacred Realm:</div>
                    <p className="mt-1 text-white/65">{sacredRealm}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
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
