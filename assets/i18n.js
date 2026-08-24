/* YancoTV release site — language switching.
   English lives in the markup, so the page is already correct before this
   file runs. This only swaps it for one of the other three.
   Strings containing markup are inserted as HTML on purpose: the dictionary
   below is the only source, it ships with the site, and nothing here ever
   touches user input. */
(function () {
  "use strict";

  var LANGS = {
    en: { name: "English",  dir: "ltr" },
    ar: { name: "العربية",  dir: "rtl" },
    es: { name: "Español",  dir: "ltr" },
    fr: { name: "Français", dir: "ltr" }
  };

  var DICT = {

  /* ─────────────────────────────── English ─────────────────────────── */
  en: {
    "meta.title": "YancoTV — IPTV player for Fire TV, Android TV and Android",
    "meta.desc": "A TV player for the playlist you already have. M3U, Xtream and Stalker sources, a full programme guide, catch-up and recording. No account, no ads, nothing phoning home.",
    "skip": "Skip to content",

    "nav.what": "What it does",
    "nav.install": "Install",
    "nav.trust": "Privacy",
    "nav.faq": "FAQ",
    "nav.get": "Get the APK",

    "hero.eyebrow": "Fire TV · Android TV · Google TV · Android phones",
    "hero.title": "A proper TV app for the playlist you already have.",
    "hero.lede": "YancoTV plays M3U, Xtream and Stalker sources. Full programme guide, catch-up, recording, and it remembers where you stopped. No account, no ads, nothing phoning home.",
    "hero.download": "Download the APK",
    "hero.how": "How to install",
    "hero.meta": "Android 7.0 or newer · sideload only — not on Google Play or the Amazon Appstore.",

    "strip.1.h": "No ads, no trackers",
    "strip.1.p": "There is no analytics SDK in the build. Crash reporting is off unless you switch it on.",
    "strip.2.h": "Your playlist stays put",
    "strip.2.p": "Channels, history and logins live on your device. Provider passwords go in the hardware keystore.",
    "strip.3.h": "Every build is signed",
    "strip.3.p": "Same key every time, and the fingerprint is published so you can check a download yourself.",
    "strip.4.h": "No account, ever",
    "strip.4.p": "Nothing to sign up for. There is no YancoTV server for your data to sit on.",

    "what.eyebrow": "What it does",
    "what.title": "Built for a remote, not a mouse.",

    "f.guide.h": "The guide is the whole point",
    "f.guide.p": "Most players bolt an EPG onto the side. YancoTV opens on the full grid — every channel down the page, the whole evening across it. Left and right walk through one channel's programmes instead of dropping you onto the next channel, which is the thing that makes a guide usable from a sofa.",
    "f.src.h": "Bring whatever you already have",
    "f.src.p": "M3U playlists, Xtream Codes logins, Stalker portals, and a separate XMLTV guide URL if your provider keeps one elsewhere. Add more than one and they merge into a single catalogue, so live channels, films and series sit side by side.",
    "f.rec.h": "Catch-up and recording, where they actually work",
    "f.rec.p": "Catch-up only appears on channels whose provider really keeps an archive, so you are not offered a rewind that fails when you press it. Recordings are written to your own storage — nothing is uploaded anywhere, because there is nowhere to upload it to.",
    "f.lang.h": "Four languages, including right-to-left",
    "f.lang.p": "English, العربية, Français and Español — the whole app, not just the menus. Arabic flips the layout properly rather than pushing English text to the other side. Channel and category names always come through from your source exactly as they are.",
    "f.upd.h": "It updates itself",
    "f.upd.p": "YancoTV checks once a day, quietly, and tells you when a new build is out. You approve it, it installs over the top, and your sources, history and recordings survive. Downloads are checked against a published hash before anything installs.",

    "ui.kicker": "CONTINUE WATCHING",
    "ui.sub": "42m left · pick up where you stopped",
    "ui.btn": "Watch now",
    "ui.row": "For you",
    "inst.eyebrow": "Install",
    "inst.title": "Pick your device.",
    "inst.tab.fire": "Fire TV",
    "inst.tab.atv": "Android TV / Google TV",
    "inst.tab.phone": "Phone or tablet",

    "inst.fire.1h": "Allow apps from unknown sources",
    "inst.fire.1p": "Settings → My Fire TV → Developer Options → Apps from Unknown Sources → On. If Developer Options isn't there, open Settings → My Fire TV → About and click your device name seven times.",
    "inst.fire.2h": "Install Downloader",
    "inst.fire.2p": "It's free, on the Amazon Appstore, and it's the standard way to sideload on Fire TV.",
    "inst.fire.code": "Type just those digits into Downloader — it expands to the link below on its own.",
    "inst.fire.3h": "Type this into Downloader",
    "inst.fire.3p": "Long, but it skips this page entirely and grabs the APK in one shot — that's one less thing to do with a remote.",
    "inst.fire.4h": "Install it",
    "inst.fire.4p": "The download starts on its own. Press Install when it finishes, then delete the APK when Downloader offers — the app is already installed by then.",

    "inst.atv.1h": "Allow unknown apps",
    "inst.atv.1p": "Settings → System → About and click Android build seven times, then Settings → Apps → Security & restrictions → Unknown sources, and switch it on for the app you'll download with.",
    "inst.atv.2h": "Install Downloader",
    "inst.atv.2p": "From the Play Store on the TV. Any sideload-capable browser works too, but Downloader is the least painful with a remote.",
    "inst.atv.3h": "Type this in",
    "inst.atv.3p": "It goes straight to the APK, so you never have to load this page on the TV.",
    "inst.atv.4h": "Install it",
    "inst.atv.4p": "Press Install when the download finishes. YancoTV shows up in your apps row.",

    "inst.ph.1h": "Download it",
    "inst.ph.1p": "Tap the button below. Your browser will ask whether to keep the file — that prompt is normal for anything that isn't from the Play Store.",
    "inst.ph.btn": "Download the APK",
    "inst.ph.2h": "Let your browser install it",
    "inst.ph.2p": "Open the downloaded file. Android will ask once whether this browser is allowed to install apps; say yes and you're through.",
    "inst.ph.3h": "That's it",
    "inst.ph.3p": "Same app as the TV build. The layout is designed for a remote, so it works on a phone but it's happiest on a big screen.",

    "copy": "Copy",
    "copied": "Copied",

    "warn.h": "Only install YancoTV from here",
    "warn.p": "This page and the <a href='https://github.com/YamanAddas/yancotv-releases/releases'>GitHub releases</a> are the only places builds come from. If you find YancoTV on an APK mirror, it isn't ours. Every real build is signed with the same key, and you can check a download against the fingerprint yourself.",
    "warn.verify": "How to verify a download",
    "warn.verify.p": "Run this against the file you downloaded:",
    "warn.verify.fp": "The certificate SHA-256 must be:",
    "warn.verify.sha": "The current release's APK also hashes to:",

    "byo.h": "YancoTV is a player. You bring the content.",
    "byo.p": "There are no channels in this app, no subscription, and no list of providers. It ships empty. After installing, open Settings → Sources and add your own: an M3U URL, an Xtream host with a username and password, a Stalker portal, or an XMLTV guide. What you add is between you and your provider, and it's on you to have the right to watch it where you live.",
    "byo.cap": "This is what a fresh install looks like: nothing in it until you add a source.",
    "byo.alt": "YancoTV's Live TV screen on a fresh install, with no channels in it",

    "faq.eyebrow": "Questions",
    "faq.title": "The ones people actually ask.",
    "faq.1q": "Why isn't this on the Play Store?",
    "faq.1a": "Because it's a personal project distributed to whoever wants it, not a storefront product. Sideloading is the honest way to do that. It also means updates come from here rather than through a review queue.",
    "faq.2q": "Does it come with channels?",
    "faq.2a": "No. It's empty on first launch and stays empty until you add a source. YancoTV doesn't host, resell or recommend any provider, and there's no built-in list to pick from.",
    "faq.3q": "Is sideloading safe?",
    "faq.3a": "It's as safe as the file you install. That's why every build is signed with the same key and the fingerprint is published above — check it and you know the APK came from us. The risk with sideloading is mirror sites repackaging apps, so take the file from this page or from GitHub and nowhere else.",
    "faq.4q": "What happens to my data?",
    "faq.4a": "It stays on the device. Sources, guide data, favourites, history and recordings are stored locally, and provider passwords go into the Android keystore rather than a settings file. There's no YancoTV account and no server. Full detail is in the <a href='privacy.html'>privacy policy</a>.",
    "faq.5q": "Does it run on a phone?",
    "faq.5a": "Yes, Android 7.0 and up. It's the same build as the TV one and the layout is designed around a remote, so a phone works but a TV is where it belongs.",
    "faq.6q": "How do updates work?",
    "faq.6a": "The app checks once a day and tells you when there's a new version. You approve the install; it goes over the top and keeps your data. You can turn the check off in Settings → About and just come back here instead.",
    "faq.7q": "Something's broken. Where do I say so?",
    "faq.7a": "Email <a href='mailto:contact@yancoverse.com'>contact@yancoverse.com</a> and say which device, which version, and what you were doing. Turning on crash reports in Settings → About helps, but it's off by default and it's your call.",

    "final.h": "Put it on the TV.",
    "final.p": "One APK, about 53 MB, Android 7.0 or newer.",
    "final.new": "Latest change",
    "final.all": "All releases and changelogs",

    "foot.tag": "An IPTV player for Fire TV, Android TV and Android. It plays what you bring to it.",
    "foot.privacy": "Privacy policy",
    "foot.terms": "Terms of use",
    "foot.releases": "All releases",
    "foot.licence": "MIT licence",
    "foot.disclaimer": "YancoTV is a media player. It supplies no channels, subscriptions or media of any kind, and is not affiliated with any content provider. You are responsible for the sources you add and for having the right to watch them where you live."
  },

  /* ─────────────────────────────── العربية ─────────────────────────── */
  ar: {
    "meta.title": "YancoTV — مشغّل IPTV لأجهزة Fire TV وAndroid TV وأندرويد",
    "meta.desc": "مشغّل تلفزيوني لقائمة التشغيل التي تملكها أصلاً. مصادر M3U وXtream وStalker، ودليل برامج كامل، ومشاهدة لاحقة وتسجيل. بلا حساب، وبلا إعلانات، ولا شيء يُرسَل إلى الخارج.",
    "skip": "تخطَّ إلى المحتوى",

    "nav.what": "ماذا يفعل",
    "nav.install": "التثبيت",
    "nav.trust": "الخصوصية",
    "nav.faq": "أسئلة شائعة",
    "nav.get": "حمِّل الملف",

    "hero.eyebrow": "Fire TV · Android TV · Google TV · هواتف أندرويد",
    "hero.title": "تطبيق تلفزيوني حقيقي لقائمة التشغيل التي تملكها أصلاً.",
    "hero.lede": "يشغّل YancoTV مصادر M3U وXtream وStalker. دليل برامج كامل، ومشاهدة لاحقة، وتسجيل، ويتذكّر أين توقفت. بلا حساب، وبلا إعلانات، ولا شيء يُرسَل إلى الخارج.",
    "hero.download": "تنزيل ملف APK",
    "hero.how": "طريقة التثبيت",
    "hero.meta": "أندرويد 7.0 أو أحدث · تثبيت يدوي فقط — غير متوفر على Google Play ولا على متجر أمازون.",

    "strip.1.h": "بلا إعلانات ولا تتبُّع",
    "strip.1.p": "لا توجد أدوات تحليلات في التطبيق. وتقارير الأعطال معطّلة ما لم تشغّلها بنفسك.",
    "strip.2.h": "قائمتك تبقى عندك",
    "strip.2.p": "القنوات وسجل المشاهدة وبيانات الدخول تبقى على جهازك، وكلمات مرور المزوّد تُحفَظ في مخزن المفاتيح المدمج بالجهاز.",
    "strip.3.h": "كل نسخة موقَّعة",
    "strip.3.p": "المفتاح نفسه في كل مرة، وبصمته منشورة هنا لتتحقق من أي ملف بنفسك.",
    "strip.4.h": "لا حساب على الإطلاق",
    "strip.4.p": "لا شيء تسجّل فيه. ولا يوجد خادم لـ YancoTV تُخزَّن عليه بياناتك.",

    "what.eyebrow": "ماذا يفعل",
    "what.title": "مصمَّم لجهاز التحكم، لا للفأرة.",

    "f.guide.h": "الدليل هو أساس الفكرة",
    "f.guide.p": "معظم المشغّلات تضيف دليل البرامج كملحق جانبي. أما YancoTV فيفتح على الشبكة الكاملة — كل القنوات نزولاً، والمساء كله عرضاً. اليمين واليسار يتنقّلان بين برامج القناة نفسها بدل أن يقفزا بك إلى القناة التالية، وهذا تحديداً ما يجعل الدليل صالحاً للاستخدام من على الأريكة.",
    "f.src.h": "أحضِر ما لديك أصلاً",
    "f.src.p": "قوائم M3U، وحسابات Xtream Codes، وبوابات Stalker، ورابط XMLTV منفصل إن كان مزوّدك يحتفظ بالدليل في مكان آخر. أضِف أكثر من مصدر وستندمج جميعها في كتالوج واحد، فتجد القنوات المباشرة والأفلام والمسلسلات جنباً إلى جنب.",
    "f.rec.h": "المشاهدة اللاحقة والتسجيل، حيث يعملان فعلاً",
    "f.rec.p": "لا تظهر المشاهدة اللاحقة إلا على القنوات التي يحتفظ مزوّدها بأرشيف حقيقي لها، فلا يُعرَض عليك خيار يفشل عند الضغط. أما التسجيلات فتُكتَب على مساحة تخزينك أنت — لا شيء يُرفَع إلى أي مكان، ببساطة لأنه لا يوجد مكان يُرفَع إليه.",
    "f.lang.h": "أربع لغات، ومن بينها الاتجاه من اليمين لليسار",
    "f.lang.p": "الإنجليزية والعربية والفرنسية والإسبانية — التطبيق كله، لا القوائم وحدها. والعربية تقلب التخطيط كما ينبغي بدل أن تدفع نصاً إنجليزياً إلى الجهة الأخرى. أما أسماء القنوات والفئات فتصل كما هي من مصدرك دائماً.",
    "f.upd.h": "يحدّث نفسه",
    "f.upd.p": "يتحقق YancoTV مرة كل يوم، بهدوء، ويخبرك حين تصدر نسخة جديدة. توافق أنت، فيثبَّت فوق القديم، وتبقى مصادرك وسجلك وتسجيلاتك كما هي. ويُطابَق الملف المنزَّل مع بصمة منشورة قبل أن يُثبَّت أي شيء.",

    "ui.kicker": "تابع المشاهدة",
    "ui.sub": "بقي 42 دقيقة · استأنف من حيث توقفت",
    "ui.btn": "شاهد الآن",
    "ui.row": "مختار لك",
    "inst.eyebrow": "التثبيت",
    "inst.title": "اختر جهازك.",
    "inst.tab.fire": "Fire TV",
    "inst.tab.atv": "Android TV / Google TV",
    "inst.tab.phone": "هاتف أو جهاز لوحي",

    "inst.fire.1h": "اسمح بالتطبيقات من مصادر غير معروفة",
    "inst.fire.1p": "الإعدادات ← ‏My Fire TV ← خيارات المطوّر ← التطبيقات من مصادر غير معروفة ← تشغيل. وإن لم تجد خيارات المطوّر، افتح الإعدادات ← ‏My Fire TV ← حول، واضغط على اسم جهازك سبع مرات.",
    "inst.fire.2h": "ثبّت تطبيق Downloader",
    "inst.fire.2p": "مجاني، وموجود على متجر أمازون، وهو الطريقة المعتادة للتثبيت اليدوي على Fire TV.",
    "inst.fire.code": "اكتب هذه الأرقام وحدها في Downloader — وسيتحوّل بنفسه إلى الرابط أدناه.",
    "inst.fire.3h": "اكتب هذا داخل Downloader",
    "inst.fire.3p": "طويل، لكنه يتخطى هذه الصفحة تماماً ويجلب الملف مباشرة — أي خطوة أقل على جهاز التحكم.",
    "inst.fire.4h": "ثبّته",
    "inst.fire.4p": "يبدأ التنزيل وحده. اضغط تثبيت عند انتهائه، ثم احذف الملف حين يعرض عليك Downloader ذلك — فالتطبيق يكون قد ثُبّت بالفعل.",

    "inst.atv.1h": "اسمح بالتطبيقات غير المعروفة",
    "inst.atv.1p": "الإعدادات ← النظام ← حول، واضغط على رقم إصدار أندرويد سبع مرات، ثم الإعدادات ← التطبيقات ← الأمان والقيود ← مصادر غير معروفة، وفعّلها للتطبيق الذي ستنزّل عبره.",
    "inst.atv.2h": "ثبّت تطبيق Downloader",
    "inst.atv.2p": "من متجر Play على التلفزيون. أي متصفح يدعم التثبيت اليدوي يفي بالغرض، لكن Downloader هو الأسهل مع جهاز التحكم.",
    "inst.atv.3h": "اكتب هذا",
    "inst.atv.3p": "يذهب إلى الملف مباشرة، فلا تحتاج إلى فتح هذه الصفحة على التلفزيون أصلاً.",
    "inst.atv.4h": "ثبّته",
    "inst.atv.4p": "اضغط تثبيت عند انتهاء التنزيل. سيظهر YancoTV في صف تطبيقاتك.",

    "inst.ph.1h": "نزّله",
    "inst.ph.1p": "اضغط الزر أدناه. سيسألك المتصفح إن كنت تريد الاحتفاظ بالملف — وهذا سؤال طبيعي لأي ملف لا يأتي من متجر Play.",
    "inst.ph.btn": "تنزيل ملف APK",
    "inst.ph.2h": "دع المتصفح يثبّته",
    "inst.ph.2p": "افتح الملف بعد تنزيله. سيسألك أندرويد مرة واحدة إن كان يُسمح لهذا المتصفح بتثبيت التطبيقات؛ وافق وانتهى الأمر.",
    "inst.ph.3h": "هذا كل شيء",
    "inst.ph.3p": "التطبيق نفسه الموجود على التلفزيون. التخطيط مصمَّم لجهاز التحكم، فهو يعمل على الهاتف لكنه في بيئته الطبيعية على شاشة كبيرة.",

    "copy": "نسخ",
    "copied": "تم النسخ",

    "warn.h": "لا تثبّت YancoTV إلا من هنا",
    "warn.p": "هذه الصفحة و<a href='https://github.com/YamanAddas/yancotv-releases/releases'>صفحة الإصدارات على GitHub</a> هما المصدران الوحيدان للنسخ. وإن وجدت YancoTV على موقع نسخ APK، فهو ليس منا. كل نسخة حقيقية موقَّعة بالمفتاح نفسه، ويمكنك مطابقة أي ملف مع البصمة بنفسك.",
    "warn.verify": "كيف تتحقق من الملف المنزَّل",
    "warn.verify.p": "نفّذ هذا الأمر على الملف الذي نزّلته:",
    "warn.verify.fp": "يجب أن تكون بصمة الشهادة SHA-256 كالتالي:",
    "warn.verify.sha": "كما أن بصمة ملف الإصدار الحالي هي:",

    "byo.h": "‏YancoTV مشغّل. والمحتوى تأتي به أنت.",
    "byo.p": "لا توجد قنوات في هذا التطبيق، ولا اشتراك، ولا قائمة مزوّدين. يأتي فارغاً. بعد التثبيت، افتح الإعدادات ← المصادر وأضِف مصدرك: رابط M3U، أو مضيف Xtream باسم مستخدم وكلمة مرور، أو بوابة Stalker، أو دليل XMLTV. ما تضيفه شأن بينك وبين مزوّدك، ومسؤوليتك أن تملك حق مشاهدته في بلدك.",
    "byo.cap": "هكذا يبدو التطبيق بعد تثبيته مباشرة: لا شيء فيه حتى تضيف مصدراً.",
    "byo.alt": "شاشة القنوات المباشرة في YancoTV بعد تثبيت جديد، بلا أي قنوات",

    "faq.eyebrow": "أسئلة",
    "faq.title": "الأسئلة التي تُطرح فعلاً.",
    "faq.1q": "لماذا ليس على متجر Play؟",
    "faq.1a": "لأنه مشروع شخصي يُوزَّع على من يريده، لا منتج متجر. والتثبيت اليدوي هو الطريقة الصادقة لذلك. كما يعني أن التحديثات تأتي من هنا مباشرة بدل أن تنتظر في طابور المراجعة.",
    "faq.2q": "هل يأتي معه قنوات؟",
    "faq.2a": "لا. يبدأ فارغاً ويبقى كذلك حتى تضيف مصدراً. ولا يستضيف YancoTV أي مزوّد ولا يبيعه ولا يرشّحه، ولا توجد قائمة جاهزة تختار منها.",
    "faq.3q": "هل التثبيت اليدوي آمن؟",
    "faq.3a": "آمن بقدر أمان الملف الذي تثبّته. ولهذا تُوقَّع كل نسخة بالمفتاح نفسه وتُنشَر بصمته أعلاه — طابِقها وستعرف أن الملف منا. الخطر الحقيقي في التثبيت اليدوي هو المواقع التي تعيد تغليف التطبيقات، فخذ الملف من هذه الصفحة أو من GitHub ولا شيء غيرهما.",
    "faq.4q": "ماذا يحدث لبياناتي؟",
    "faq.4a": "تبقى على الجهاز. المصادر وبيانات الدليل والمفضلة والسجل والتسجيلات كلها محفوظة محلياً، وكلمات مرور المزوّد تذهب إلى مخزن مفاتيح أندرويد لا إلى ملف إعدادات. لا يوجد حساب ولا خادم. التفاصيل كاملة في <a href='privacy.html'>سياسة الخصوصية</a>.",
    "faq.5q": "هل يعمل على الهاتف؟",
    "faq.5a": "نعم، أندرويد 7.0 فأحدث. هي النسخة نفسها الموجودة على التلفزيون، وتخطيطها مبني حول جهاز التحكم، فالهاتف يعمل لكن مكانه الطبيعي هو التلفزيون.",
    "faq.6q": "كيف تعمل التحديثات؟",
    "faq.6a": "يتحقق التطبيق مرة يومياً ويخبرك عند صدور نسخة جديدة. توافق أنت على التثبيت، فيُثبَّت فوق القديم مع الحفاظ على بياناتك. ويمكنك إيقاف هذا التحقق من الإعدادات ← حول والعودة إلى هنا يدوياً بدلاً منه.",
    "faq.7q": "هناك خلل. أين أبلّغ عنه؟",
    "faq.7a": "راسل <a href='mailto:contact@yancoverse.com'>contact@yancoverse.com</a> وأخبرنا بالجهاز، والإصدار، وما كنت تفعله وقتها. تفعيل تقارير الأعطال من الإعدادات ← حول يساعد، لكنه معطّل افتراضياً والقرار قرارك.",

    "final.h": "ضعه على التلفزيون.",
    "final.p": "ملف واحد، نحو 53 ميغابايت، أندرويد 7.0 أو أحدث.",
    "final.new": "آخر تغيير",
    "final.all": "كل الإصدارات وسجل التغييرات",

    "foot.tag": "مشغّل IPTV لأجهزة Fire TV وAndroid TV وأندرويد. يشغّل ما تأتي به إليه.",
    "foot.privacy": "سياسة الخصوصية",
    "foot.terms": "شروط الاستخدام",
    "foot.releases": "كل الإصدارات",
    "foot.licence": "رخصة MIT",
    "foot.disclaimer": "‏YancoTV مشغّل وسائط. لا يوفّر أي قنوات أو اشتراكات أو مواد من أي نوع، ولا تربطه صلة بأي مزوّد محتوى. وأنت المسؤول عن المصادر التي تضيفها وعن امتلاك حق مشاهدتها في بلدك."
  },

  /* ─────────────────────────────── Español ─────────────────────────── */
  es: {
    "meta.title": "YancoTV — reproductor IPTV para Fire TV, Android TV y Android",
    "meta.desc": "Un reproductor de televisión para la lista que ya tienes. Fuentes M3U, Xtream y Stalker, guía de programación completa, catch-up y grabación. Sin cuenta, sin anuncios y sin nada que llame a casa.",
    "skip": "Ir al contenido",

    "nav.what": "Qué hace",
    "nav.install": "Instalar",
    "nav.trust": "Privacidad",
    "nav.faq": "Preguntas",
    "nav.get": "Descargar APK",

    "hero.eyebrow": "Fire TV · Android TV · Google TV · móviles Android",
    "hero.title": "Una app de televisión en condiciones para la lista que ya tienes.",
    "hero.lede": "YancoTV reproduce fuentes M3U, Xtream y Stalker. Guía de programación completa, catch-up, grabación, y recuerda dónde lo dejaste. Sin cuenta, sin anuncios y sin nada que llame a casa.",
    "hero.download": "Descargar el APK",
    "hero.how": "Cómo instalarlo",
    "hero.meta": "Android 7.0 o superior · solo instalación manual: no está en Google Play ni en la Amazon Appstore.",

    "strip.1.h": "Sin anuncios ni rastreadores",
    "strip.1.p": "La app no lleva ningún SDK de analítica. Los informes de fallos están apagados salvo que los enciendas tú.",
    "strip.2.h": "Tu lista se queda donde está",
    "strip.2.p": "Canales, historial y credenciales viven en tu dispositivo. Las contraseñas del proveedor van al almacén de claves del hardware.",
    "strip.3.h": "Cada versión va firmada",
    "strip.3.p": "Siempre la misma clave, y la huella está publicada para que compruebes tú mismo cualquier descarga.",
    "strip.4.h": "Nunca hay cuenta",
    "strip.4.p": "No hay nada en lo que registrarse. No existe ningún servidor de YancoTV donde puedan estar tus datos.",

    "what.eyebrow": "Qué hace",
    "what.title": "Pensado para un mando, no para un ratón.",

    "f.guide.h": "La guía es el motivo de todo",
    "f.guide.p": "La mayoría de reproductores añaden la EPG como un apaño lateral. YancoTV abre directamente en la parrilla completa: todos los canales hacia abajo y la noche entera a lo ancho. Izquierda y derecha recorren los programas de un mismo canal en vez de saltar al siguiente, que es justo lo que hace que una guía se pueda usar desde el sofá.",
    "f.src.h": "Trae lo que ya tengas",
    "f.src.p": "Listas M3U, credenciales de Xtream Codes, portales Stalker y una URL XMLTV aparte si tu proveedor guarda la guía en otro sitio. Añade más de una y se combinan en un único catálogo, con los canales en directo, las películas y las series uno al lado del otro.",
    "f.rec.h": "Catch-up y grabación, donde de verdad funcionan",
    "f.rec.p": "El catch-up solo aparece en los canales cuyo proveedor mantiene archivo de verdad, así que no se te ofrece un rebobinado que falla al pulsarlo. Las grabaciones se escriben en tu propio almacenamiento: no se sube nada a ninguna parte, sencillamente porque no hay ninguna parte a la que subirlo.",
    "f.lang.h": "Cuatro idiomas, incluida escritura de derecha a izquierda",
    "f.lang.p": "Inglés, العربية, francés y español: la app entera, no solo los menús. El árabe voltea la interfaz como es debido en lugar de empujar texto en inglés al otro lado. Los nombres de canales y categorías llegan siempre tal cual desde tu fuente.",
    "f.upd.h": "Se actualiza solo",
    "f.upd.p": "YancoTV comprueba una vez al día, en segundo plano, y te avisa cuando hay versión nueva. Tú la apruebas, se instala encima y tus fuentes, tu historial y tus grabaciones siguen ahí. Antes de instalar nada, la descarga se contrasta con una huella publicada.",

    "ui.kicker": "SEGUIR VIENDO",
    "ui.sub": "Quedan 42 min · continúa donde lo dejaste",
    "ui.btn": "Ver ahora",
    "ui.row": "Para ti",
    "inst.eyebrow": "Instalación",
    "inst.title": "Elige tu dispositivo.",
    "inst.tab.fire": "Fire TV",
    "inst.tab.atv": "Android TV / Google TV",
    "inst.tab.phone": "Móvil o tablet",

    "inst.fire.1h": "Permite apps de origen desconocido",
    "inst.fire.1p": "Ajustes → Mi Fire TV → Opciones de desarrollador → Apps de origen desconocido → Activado. Si no ves las opciones de desarrollador, entra en Ajustes → Mi Fire TV → Acerca de y pulsa siete veces sobre el nombre del dispositivo.",
    "inst.fire.2h": "Instala Downloader",
    "inst.fire.2p": "Es gratis, está en la Amazon Appstore y es la forma habitual de instalar manualmente en Fire TV.",
    "inst.fire.code": "Escribe solo esos dígitos en Downloader: él solo se convierte en el enlace de abajo.",
    "inst.fire.3h": "Escribe esto en Downloader",
    "inst.fire.3p": "Es larga, pero se salta esta página del todo y baja el APK de una vez: una cosa menos que hacer con el mando.",
    "inst.fire.4h": "Instálalo",
    "inst.fire.4p": "La descarga arranca sola. Pulsa Instalar al terminar y borra el APK cuando Downloader te lo ofrezca: para entonces la app ya está instalada.",

    "inst.atv.1h": "Permite apps desconocidas",
    "inst.atv.1p": "Ajustes → Sistema → Acerca de y pulsa siete veces sobre el número de compilación; luego Ajustes → Aplicaciones → Seguridad y restricciones → Orígenes desconocidos, y actívalo para la app con la que vayas a descargar.",
    "inst.atv.2h": "Instala Downloader",
    "inst.atv.2p": "Desde Play Store en la tele. Cualquier navegador que permita instalar sirve, pero Downloader es el menos doloroso con un mando.",
    "inst.atv.3h": "Escribe esto",
    "inst.atv.3p": "Va directo al APK, así que no tienes que abrir esta página en la tele.",
    "inst.atv.4h": "Instálalo",
    "inst.atv.4p": "Pulsa Instalar cuando termine la descarga. YancoTV aparecerá en tu fila de aplicaciones.",

    "inst.ph.1h": "Descárgalo",
    "inst.ph.1p": "Toca el botón de abajo. El navegador te preguntará si quieres conservar el archivo: ese aviso es normal con cualquier cosa que no venga de Play Store.",
    "inst.ph.btn": "Descargar el APK",
    "inst.ph.2h": "Deja que el navegador lo instale",
    "inst.ph.2p": "Abre el archivo descargado. Android te preguntará una vez si ese navegador puede instalar aplicaciones; acepta y listo.",
    "inst.ph.3h": "Ya está",
    "inst.ph.3p": "Es la misma app que en la tele. La interfaz está pensada para un mando, así que en el móvil funciona, pero donde está a gusto es en una pantalla grande.",

    "copy": "Copiar",
    "copied": "Copiado",

    "warn.h": "Instala YancoTV solo desde aquí",
    "warn.p": "Esta página y las <a href='https://github.com/YamanAddas/yancotv-releases/releases'>versiones en GitHub</a> son los únicos sitios de los que salen las compilaciones. Si encuentras YancoTV en una web de APKs, no es nuestro. Todas las versiones reales van firmadas con la misma clave y puedes contrastar cualquier descarga con la huella tú mismo.",
    "warn.verify": "Cómo comprobar una descarga",
    "warn.verify.p": "Ejecuta esto sobre el archivo que has descargado:",
    "warn.verify.fp": "La huella SHA-256 del certificado tiene que ser:",
    "warn.verify.sha": "El APK de la versión actual además tiene este hash:",

    "byo.h": "YancoTV es un reproductor. El contenido lo pones tú.",
    "byo.p": "En esta app no hay canales, ni suscripción, ni lista de proveedores. Viene vacía. Después de instalarla, abre Ajustes → Fuentes y añade las tuyas: una URL M3U, un servidor Xtream con usuario y contraseña, un portal Stalker o una guía XMLTV. Lo que añadas es cosa tuya y de tu proveedor, y te corresponde a ti tener derecho a verlo donde vives.",
    "byo.cap": "Así se ve una instalación recién hecha: no hay nada dentro hasta que añades una fuente.",
    "byo.alt": "La pantalla de TV en directo de YancoTV recién instalada, sin ningún canal",

    "faq.eyebrow": "Preguntas",
    "faq.title": "Las que de verdad hace la gente.",
    "faq.1q": "¿Por qué no está en Play Store?",
    "faq.1a": "Porque es un proyecto personal que se reparte a quien lo quiera, no un producto de tienda. Instalarlo manualmente es la forma honesta de hacerlo. Además, así las actualizaciones salen de aquí y no de una cola de revisión.",
    "faq.2q": "¿Trae canales?",
    "faq.2a": "No. Está vacía al abrirla por primera vez y sigue vacía hasta que añades una fuente. YancoTV no aloja, revende ni recomienda ningún proveedor, y no hay ninguna lista integrada donde elegir.",
    "faq.3q": "¿Es seguro instalarlo manualmente?",
    "faq.3a": "Es tan seguro como el archivo que instales. Por eso cada versión va firmada con la misma clave y la huella está publicada más arriba: contrástala y sabrás que el APK viene de nosotros. El riesgo real de la instalación manual son las webs espejo que reempaquetan apps, así que coge el archivo de esta página o de GitHub y de ningún otro sitio.",
    "faq.4q": "¿Qué pasa con mis datos?",
    "faq.4a": "Se quedan en el dispositivo. Fuentes, guía, favoritos, historial y grabaciones se guardan en local, y las contraseñas del proveedor van al almacén de claves de Android, no a un archivo de ajustes. No hay cuenta de YancoTV ni servidor. Todo el detalle está en la <a href='privacy.html'>política de privacidad</a>.",
    "faq.5q": "¿Funciona en el móvil?",
    "faq.5a": "Sí, desde Android 7.0. Es la misma compilación que la de la tele y la interfaz está diseñada alrededor de un mando, así que en el móvil funciona, pero su sitio es el televisor.",
    "faq.6q": "¿Cómo van las actualizaciones?",
    "faq.6a": "La app comprueba una vez al día y te avisa cuando hay versión nueva. Tú apruebas la instalación; se pone encima y conserva tus datos. Puedes desactivar la comprobación en Ajustes → Acerca de y volver aquí a mano cuando quieras.",
    "faq.7q": "Algo no funciona. ¿Dónde lo digo?",
    "faq.7a": "Escribe a <a href='mailto:contact@yancoverse.com'>contact@yancoverse.com</a> e indica el dispositivo, la versión y qué estabas haciendo. Activar los informes de fallos en Ajustes → Acerca de ayuda, pero viene apagado y la decisión es tuya.",

    "final.h": "Ponlo en la tele.",
    "final.p": "Un solo APK, unos 53 MB, Android 7.0 o superior.",
    "final.new": "Último cambio",
    "final.all": "Todas las versiones y sus cambios",

    "foot.tag": "Un reproductor IPTV para Fire TV, Android TV y Android. Reproduce lo que tú le traigas.",
    "foot.privacy": "Política de privacidad",
    "foot.terms": "Términos de uso",
    "foot.releases": "Todas las versiones",
    "foot.licence": "Licencia MIT",
    "foot.disclaimer": "YancoTV es un reproductor multimedia. No proporciona canales, suscripciones ni contenido de ningún tipo, y no está afiliado a ningún proveedor de contenido. Eres responsable de las fuentes que añadas y de tener derecho a verlas donde vives."
  },

  /* ─────────────────────────────── Français ────────────────────────── */
  fr: {
    "meta.title": "YancoTV — lecteur IPTV pour Fire TV, Android TV et Android",
    "meta.desc": "Un lecteur TV pour la liste que vous avez déjà. Sources M3U, Xtream et Stalker, guide des programmes complet, replay et enregistrement. Sans compte, sans publicité, sans rien qui remonte ailleurs.",
    "skip": "Aller au contenu",

    "nav.what": "Ce qu'il fait",
    "nav.install": "Installer",
    "nav.trust": "Confidentialité",
    "nav.faq": "Questions",
    "nav.get": "Télécharger l'APK",

    "hero.eyebrow": "Fire TV · Android TV · Google TV · téléphones Android",
    "hero.title": "Une vraie application TV pour la liste que vous avez déjà.",
    "hero.lede": "YancoTV lit les sources M3U, Xtream et Stalker. Guide des programmes complet, replay, enregistrement, et il retient où vous vous êtes arrêté. Sans compte, sans publicité, sans rien qui remonte ailleurs.",
    "hero.download": "Télécharger l'APK",
    "hero.how": "Comment l'installer",
    "hero.meta": "Android 7.0 ou plus récent · installation manuelle uniquement — absent de Google Play et de l'Amazon Appstore.",

    "strip.1.h": "Ni publicité ni traceurs",
    "strip.1.p": "Aucun SDK d'analyse dans l'application. Les rapports de plantage restent désactivés tant que vous ne les activez pas.",
    "strip.2.h": "Votre liste ne bouge pas",
    "strip.2.p": "Chaînes, historique et identifiants restent sur votre appareil. Les mots de passe du fournisseur vont dans le coffre de clés matériel.",
    "strip.3.h": "Chaque version est signée",
    "strip.3.p": "La même clé à chaque fois, et l'empreinte est publiée pour que vous vérifiiez un téléchargement vous-même.",
    "strip.4.h": "Jamais de compte",
    "strip.4.p": "Rien à créer. Il n'existe aucun serveur YancoTV où vos données pourraient se trouver.",

    "what.eyebrow": "Ce qu'il fait",
    "what.title": "Conçu pour une télécommande, pas pour une souris.",

    "f.guide.h": "Le guide, c'est tout l'intérêt",
    "f.guide.p": "La plupart des lecteurs greffent l'EPG sur le côté. YancoTV ouvre directement sur la grille complète : toutes les chaînes en hauteur, la soirée entière en largeur. Gauche et droite parcourent les programmes d'une même chaîne au lieu de vous faire basculer sur la suivante — c'est précisément ce qui rend un guide utilisable depuis un canapé.",
    "f.src.h": "Apportez ce que vous avez déjà",
    "f.src.p": "Listes M3U, identifiants Xtream Codes, portails Stalker, et une URL XMLTV distincte si votre fournisseur héberge le guide ailleurs. Ajoutez-en plusieurs et elles fusionnent en un seul catalogue : chaînes en direct, films et séries côte à côte.",
    "f.rec.h": "Replay et enregistrement, là où ils marchent vraiment",
    "f.rec.p": "Le replay n'apparaît que sur les chaînes dont le fournisseur conserve réellement une archive : on ne vous propose donc pas un retour arrière qui échoue une fois lancé. Les enregistrements sont écrits sur votre propre stockage — rien n'est envoyé nulle part, tout simplement parce qu'il n'y a nulle part où l'envoyer.",
    "f.lang.h": "Quatre langues, dont une de droite à gauche",
    "f.lang.p": "Anglais, العربية, français et espagnol — toute l'application, pas seulement les menus. L'arabe retourne réellement la mise en page au lieu de renvoyer du texte anglais de l'autre côté. Les noms de chaînes et de catégories arrivent toujours tels quels depuis votre source.",
    "f.upd.h": "Il se met à jour tout seul",
    "f.upd.p": "YancoTV vérifie une fois par jour, discrètement, et vous prévient quand une nouvelle version sort. Vous l'acceptez, elle s'installe par-dessus, et vos sources, votre historique et vos enregistrements restent en place. Le fichier téléchargé est comparé à une empreinte publiée avant toute installation.",

    "ui.kicker": "REPRENDRE",
    "ui.sub": "42 min restantes · reprenez où vous en étiez",
    "ui.btn": "Regarder",
    "ui.row": "Pour vous",
    "inst.eyebrow": "Installation",
    "inst.title": "Choisissez votre appareil.",
    "inst.tab.fire": "Fire TV",
    "inst.tab.atv": "Android TV / Google TV",
    "inst.tab.phone": "Téléphone ou tablette",

    "inst.fire.1h": "Autorisez les applications de sources inconnues",
    "inst.fire.1p": "Paramètres → Mon Fire TV → Options de développeur → Applications de sources inconnues → Activé. Si les options de développeur n'apparaissent pas, allez dans Paramètres → Mon Fire TV → À propos et cliquez sept fois sur le nom de l'appareil.",
    "inst.fire.2h": "Installez Downloader",
    "inst.fire.2p": "Gratuit, sur l'Amazon Appstore, et c'est la méthode habituelle pour installer manuellement sur Fire TV.",
    "inst.fire.code": "Saisissez juste ces chiffres dans Downloader — il se transforme tout seul en le lien ci-dessous.",
    "inst.fire.3h": "Saisissez ceci dans Downloader",
    "inst.fire.3p": "C'est long, mais ça saute complètement cette page et récupère l'APK d'un coup — une manipulation de moins à la télécommande.",
    "inst.fire.4h": "Installez",
    "inst.fire.4p": "Le téléchargement démarre seul. Appuyez sur Installer une fois terminé, puis supprimez l'APK quand Downloader le propose — l'application est déjà installée à ce moment-là.",

    "inst.atv.1h": "Autorisez les applications inconnues",
    "inst.atv.1p": "Paramètres → Système → À propos et cliquez sept fois sur le numéro de build, puis Paramètres → Applications → Sécurité et restrictions → Sources inconnues, et activez-le pour l'application avec laquelle vous téléchargerez.",
    "inst.atv.2h": "Installez Downloader",
    "inst.atv.2p": "Depuis le Play Store de la télé. N'importe quel navigateur capable d'installer fait l'affaire, mais Downloader reste le moins pénible à la télécommande.",
    "inst.atv.3h": "Saisissez ceci",
    "inst.atv.3p": "Ça mène directement à l'APK, vous n'avez donc jamais à ouvrir cette page sur la télé.",
    "inst.atv.4h": "Installez",
    "inst.atv.4p": "Appuyez sur Installer à la fin du téléchargement. YancoTV apparaît dans votre rangée d'applications.",

    "inst.ph.1h": "Téléchargez-le",
    "inst.ph.1p": "Appuyez sur le bouton ci-dessous. Le navigateur demandera si vous voulez conserver le fichier — cet avertissement est normal pour tout ce qui ne vient pas du Play Store.",
    "inst.ph.btn": "Télécharger l'APK",
    "inst.ph.2h": "Laissez le navigateur l'installer",
    "inst.ph.2p": "Ouvrez le fichier téléchargé. Android demandera une fois si ce navigateur peut installer des applications ; acceptez et c'est fait.",
    "inst.ph.3h": "C'est tout",
    "inst.ph.3p": "La même application que sur la télé. L'interface est pensée pour une télécommande : ça marche sur un téléphone, mais c'est sur grand écran qu'elle est à sa place.",

    "copy": "Copier",
    "copied": "Copié",

    "warn.h": "N'installez YancoTV que depuis ici",
    "warn.p": "Cette page et les <a href='https://github.com/YamanAddas/yancotv-releases/releases'>versions publiées sur GitHub</a> sont les seules origines des compilations. Si vous trouvez YancoTV sur un site miroir d'APK, ce n'est pas le nôtre. Chaque version authentique est signée avec la même clé, et vous pouvez comparer un téléchargement à l'empreinte vous-même.",
    "warn.verify": "Comment vérifier un téléchargement",
    "warn.verify.p": "Lancez ceci sur le fichier que vous avez téléchargé :",
    "warn.verify.fp": "L'empreinte SHA-256 du certificat doit être :",
    "warn.verify.sha": "L'APK de la version actuelle a par ailleurs cette empreinte :",

    "byo.h": "YancoTV est un lecteur. Le contenu, c'est vous.",
    "byo.p": "Cette application ne contient aucune chaîne, aucun abonnement et aucune liste de fournisseurs. Elle arrive vide. Après l'installation, ouvrez Paramètres → Sources et ajoutez les vôtres : une URL M3U, un hôte Xtream avec identifiant et mot de passe, un portail Stalker ou un guide XMLTV. Ce que vous ajoutez ne regarde que vous et votre fournisseur, et c'est à vous d'avoir le droit de le regarder là où vous vivez.",
    "byo.cap": "Voilà à quoi ressemble une installation neuve : rien dedans tant que vous n'ajoutez pas de source.",
    "byo.alt": "L'écran TV en direct de YancoTV après une installation neuve, sans aucune chaîne",

    "faq.eyebrow": "Questions",
    "faq.title": "Celles qu'on nous pose vraiment.",
    "faq.1q": "Pourquoi n'est-ce pas sur le Play Store ?",
    "faq.1a": "Parce que c'est un projet personnel distribué à qui en veut, pas un produit de boutique. L'installation manuelle est la façon honnête de faire ça. Et les mises à jour partent d'ici plutôt que d'une file de validation.",
    "faq.2q": "Est-ce qu'il vient avec des chaînes ?",
    "faq.2a": "Non. Il est vide au premier lancement et le reste tant que vous n'ajoutez pas de source. YancoTV n'héberge, ne revend ni ne recommande aucun fournisseur, et il n'y a aucune liste intégrée où piocher.",
    "faq.3q": "L'installation manuelle est-elle sûre ?",
    "faq.3a": "Elle vaut ce que vaut le fichier installé. C'est pour ça que chaque version est signée avec la même clé et que l'empreinte est publiée plus haut : comparez-la et vous saurez que l'APK vient bien de nous. Le vrai risque, ce sont les sites miroirs qui reconditionnent les applications — prenez donc le fichier sur cette page ou sur GitHub, et nulle part ailleurs.",
    "faq.4q": "Que deviennent mes données ?",
    "faq.4a": "Elles restent sur l'appareil. Sources, guide, favoris, historique et enregistrements sont stockés en local, et les mots de passe du fournisseur vont dans le coffre de clés Android plutôt que dans un fichier de réglages. Il n'y a ni compte YancoTV ni serveur. Tout le détail est dans la <a href='privacy.html'>politique de confidentialité</a>.",
    "faq.5q": "Est-ce que ça tourne sur un téléphone ?",
    "faq.5a": "Oui, à partir d'Android 7.0. C'est la même version que celle de la télé et l'interface est pensée autour d'une télécommande : sur téléphone ça marche, mais sa place est sur un téléviseur.",
    "faq.6q": "Comment marchent les mises à jour ?",
    "faq.6a": "L'application vérifie une fois par jour et vous prévient quand une nouvelle version existe. Vous validez l'installation ; elle se pose par-dessus et conserve vos données. Vous pouvez couper la vérification dans Paramètres → À propos et revenir ici à la main.",
    "faq.7q": "Quelque chose ne marche pas. Où le signaler ?",
    "faq.7a": "Écrivez à <a href='mailto:contact@yancoverse.com'>contact@yancoverse.com</a> en précisant l'appareil, la version et ce que vous faisiez. Activer les rapports de plantage dans Paramètres → À propos aide, mais c'est désactivé par défaut et ça reste votre choix.",

    "final.h": "Mettez-le sur la télé.",
    "final.p": "Un seul APK, environ 53 Mo, Android 7.0 ou plus récent.",
    "final.new": "Dernier changement",
    "final.all": "Toutes les versions et leurs nouveautés",

    "foot.tag": "Un lecteur IPTV pour Fire TV, Android TV et Android. Il lit ce que vous lui apportez.",
    "foot.privacy": "Politique de confidentialité",
    "foot.terms": "Conditions d'utilisation",
    "foot.releases": "Toutes les versions",
    "foot.licence": "Licence MIT",
    "foot.disclaimer": "YancoTV est un lecteur multimédia. Il ne fournit ni chaînes, ni abonnements, ni contenu d'aucune sorte, et n'est affilié à aucun fournisseur de contenu. Vous êtes responsable des sources que vous ajoutez et du droit de les regarder là où vous vivez."
  }
  };

  /* Pages other than the landing page (privacy, terms) declare their own
     strings in window.YANCO_PAGE_DICT before this file loads. Merging here
     means those pages inherit the nav, footer and language names for free
     and only have to carry their own body copy. */
  if (window.YANCO_PAGE_DICT) {
    Object.keys(DICT).forEach(function (code) {
      var extra = window.YANCO_PAGE_DICT[code];
      if (!extra) return;
      Object.keys(extra).forEach(function (k) { DICT[code][k] = extra[k]; });
    });
  }

  /* ── the Arabic face is fetched only if Arabic is actually chosen ─── */

  var arabicFontLoaded = false;
  function loadArabicFont() {
    if (arabicFontLoaded) return;
    arabicFontLoaded = true;
    var pre = document.createElement("link");
    pre.rel = "preconnect";
    pre.href = "https://fonts.gstatic.com";
    pre.crossOrigin = "";
    document.head.appendChild(pre);
    var l = document.createElement("link");
    l.rel = "stylesheet";
    l.href = "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;600;700&display=swap";
    document.head.appendChild(l);
  }

  /* ── apply ───────────────────────────────────────────────────────── */

  function apply(code, opts) {
    var lang = LANGS[code] ? code : "en";
    var dict = DICT[lang];
    var meta = LANGS[lang];

    if (lang === "ar") loadArabicFont();

    // Array.prototype.slice rather than NodeList.forEach — some older TV
    // browsers have no forEach on a NodeList, and a throw here would leave
    // the page half-translated.
    var all = function (sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); };

    all("[data-i18n]").forEach(function (el) {
      var v = dict[el.getAttribute("data-i18n")];
      if (v == null) return;
      if (v.indexOf("<") !== -1) el.innerHTML = v;
      else el.textContent = v;
    });

    all("[data-i18n-attr-alt]").forEach(function (el) {
      var v = dict[el.getAttribute("data-i18n-attr-alt")];
      if (v != null) el.setAttribute("alt", v);
    });

    // The copy buttons flash a confirmation, so they need the word too.
    all(".copy").forEach(function (b) {
      b.setAttribute("data-copied", dict["copied"] || "Copied");
    });

    var root = document.documentElement;
    root.setAttribute("lang", lang);
    root.setAttribute("dir", meta.dir);

    // A page can name its own title/description keys on <html>; without that
    // every page would inherit the landing page's <title>.
    var tKey = root.getAttribute("data-title-key") || "meta.title";
    var dKey = root.getAttribute("data-desc-key") || "meta.desc";
    if (dict[tKey]) document.title = dict[tKey];
    var md = document.querySelector('meta[name="description"]');
    if (md && dict[dKey]) md.setAttribute("content", dict[dKey]);

    var cur = document.getElementById("lang-current");
    if (cur) cur.textContent = meta.name;

    all("#lang-menu [data-lang]").forEach(function (b) {
      b.setAttribute("aria-selected", b.getAttribute("data-lang") === lang ? "true" : "false");
    });

    try { localStorage.setItem("yanco.lang", lang); } catch (e) {}

    if (opts && opts.push) {
      try {
        var url = new URL(window.location.href);
        if (lang === "en") url.searchParams.delete("lang");
        else url.searchParams.set("lang", lang);
        history.replaceState(null, "", url);
      } catch (e) {}
    }

    try {
      window.dispatchEvent(new CustomEvent("yanco:lang", { detail: { lang: lang } }));
    } catch (e) {}
  }

  /* ── pick a starting language ────────────────────────────────────── */

  function initial() {
    var q = new URLSearchParams(window.location.search).get("lang");
    if (q && LANGS[q]) return q;
    try {
      var saved = localStorage.getItem("yanco.lang");
      if (saved && LANGS[saved]) return saved;
    } catch (e) {}
    var navs = navigator.languages || [navigator.language || "en"];
    for (var i = 0; i < navs.length; i++) {
      var two = String(navs[i]).slice(0, 2).toLowerCase();
      if (LANGS[two]) return two;
    }
    return "en";
  }

  /* ── dropdown ────────────────────────────────────────────────────── */

  var wrap = document.getElementById("lang");
  var btn = document.getElementById("lang-btn");
  var menu = document.getElementById("lang-menu");

  if (wrap && btn && menu) {
    var close = function () {
      wrap.classList.remove("is-open");
      btn.setAttribute("aria-expanded", "false");
    };
    var open = function () {
      wrap.classList.add("is-open");
      btn.setAttribute("aria-expanded", "true");
      // Deferred by a tick: the menu is still visibility:hidden on the frame
      // the class lands, and focus() on a hidden subtree is a no-op.
      setTimeout(function () {
        var sel = menu.querySelector('[aria-selected="true"]') || menu.querySelector("button");
        if (sel) sel.focus();
      }, 0);
    };

    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      wrap.classList.contains("is-open") ? close() : open();
    });

    menu.addEventListener("click", function (e) {
      var b = e.target.closest("[data-lang]");
      if (!b) return;
      document.body.classList.add("is-swapping");
      setTimeout(function () {
        apply(b.getAttribute("data-lang"), { push: true });
        document.body.classList.remove("is-swapping");
      }, 150);
      close();
      btn.focus();
    });

    menu.addEventListener("keydown", function (e) {
      var items = Array.prototype.slice.call(menu.querySelectorAll("button"));
      var at = items.indexOf(document.activeElement);
      if (e.key === "Escape") { close(); btn.focus(); }
      else if (e.key === "ArrowDown" && at > -1) { e.preventDefault(); items[(at + 1) % items.length].focus(); }
      else if (e.key === "ArrowUp" && at > -1) { e.preventDefault(); items[(at - 1 + items.length) % items.length].focus(); }
    });

    document.addEventListener("click", function (e) {
      if (!wrap.contains(e.target)) close();
    });
  }

  apply(initial(), { push: false });

  window.YancoI18n = { apply: apply, langs: LANGS, dict: DICT };
})();
