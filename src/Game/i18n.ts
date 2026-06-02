// Lightweight 2-locale i18n. zh / en.
// - Voice + decorative titles stay English on purpose (user direction 2026-06-01).
// - UI hints + spoken-line subtitles + button labels translate.

type Locale = 'zh' | 'en';

const STORAGE_KEY = 'fs_locale';

function detectLocale(): Locale {
  if (typeof window === 'undefined') return 'en';
  try {
    const override = window.localStorage.getItem(STORAGE_KEY);
    if (override === 'zh' || override === 'en') return override;
  } catch {}
  const nav = (typeof navigator !== 'undefined' ? navigator.language : 'en') || 'en';
  return nav.toLowerCase().startsWith('zh') ? 'zh' : 'en';
}

const LOCALE: Locale = detectLocale();

const STRINGS: Record<Locale, Record<string, string>> = {
  en: {
    'hint.firstTap': 'tap something on her desk',
    'btn.onceMore': 'replay stream',

    'hotspot.stanley':  "the pink stanley",
    'hotspot.polaroid': "her sister's polaroid",
    'hotspot.dollar':   "the framed first dollar",
    'hotspot.phone':    "her phone, face-down",
    'hotspot.face':     "her face on the webcam",
    'hotspot.showtime': 'end stream',

    'sub.stanley':  "Y'all know I've been drinking out of this thing for like… god, eight months?",
    'sub.polaroid': "That's my baby sister. She's the only person in the world who doesn't know what y'all look like.",
    'sub.dollar':   "First-ever donation. October 2020. CookieMonster1738. I still wonder who that was.",
    'sub.phone':    "Don't open it on stream. Don't open it on stream. Don't open it on—",
    'sub.face':     "Sometimes the kindest thing you can do for the people who love you is let them love a real version of you.",
  },
  zh: {
    'hint.firstTap': '点她桌上的东西',
    'btn.onceMore': '重播这场',

    'hotspot.stanley':  "粉色 Stanley 杯",
    'hotspot.polaroid': "她妹妹的 Polaroid",
    'hotspot.dollar':   "裱起来的第一块钱",
    'hotspot.phone':    "她趴着的手机",
    'hotspot.face':     "她的脸 · 直播镜头",
    'hotspot.showtime': '结束直播',

    'sub.stanley':  "你们知道我用这个杯子已经……天哪,八个月了?",
    'sub.polaroid': "这是我妹。世界上唯一不知道你们长什么样的人。",
    'sub.dollar':   "2020 年 10 月第一笔打赏。CookieMonster1738。到现在我还想那是谁。",
    'sub.phone':    "别在直播里打开,别在直播里打开,别在直播里——",
    'sub.face':     "有时候,对爱你的人最善意的事,是让他们爱一个真实的你。",
  },
};

export function t(key: string): string {
  return STRINGS[LOCALE]?.[key] ?? STRINGS.en[key] ?? key;
}

export function getLocale(): Locale {
  return LOCALE;
}
