// ============================================================
// MINI QUESTIONNAIRE
// Online storage: Supabase + PDF export
//
// IMPORTANT:
// - Put your Supabase PROJECT URL and PUBLISHABLE KEY below.
// - The publishable key is designed for browser use when RLS is configured.
// - NEVER put a Supabase SECRET / service_role key in this file.
// - If you leave the values as-is, the page works in local demo mode.
// ============================================================
const SUPABASE_URL = "https://qpuqqtqpciftnyvxhjlv.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_XN_YvEk3bRUPiMHCjxvjuA_flOVoDK2";

const supabaseClient =
  window.supabase &&
  SUPABASE_URL.startsWith("https://") &&
  !SUPABASE_URL.includes("YOUR_") &&
  SUPABASE_PUBLISHABLE_KEY &&
  !SUPABASE_PUBLISHABLE_KEY.includes("YOUR_")
    ? window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY)
    : null;

const ONLINE_MODE = Boolean(supabaseClient);

const translations = {
  en: {
    dir: "ltr",
    eyebrow: "2-minute product research",
    heroTitle: "Small problem. <span>Simple first-aid.</span>",
    heroLead: "We are exploring a compact, ready-to-use solution for small everyday injuries. Your honest opinion will help us decide what to build.",
    start: "Start the questionnaire",
    privacyShort: "No name or email required.",
    twoMinutes: "About 2 minutes",
    noSensitive: "No sensitive questions",
    honest: "Honest answers welcome",
    cardClean: "Clean",
    cardCleanSub: "Ready when needed",
    cardCarry: "Carry it",
    cardCarrySub: "Pocket • bag • car",
    sectionKicker: "Product research",
    sectionTitle: "Help shape the first version",
    sectionLead: "We intentionally keep the product description broad so your answers are not influenced by a specific design.",
    complete: "complete",
    consentTitle: "No personal information is requested.",
    consentText: "Please answer based on your own experience. Do not enter names, phone numbers, emails or medical details.",
    required: "Required question",
    submit: "Send my answers",
    successKicker: "Thank you",
    successTitle: "Your feedback has been saved.",
    successText: "Your answer has been saved. You can download a PDF copy of your response below.",
    another: "Answer again",
    info1Title: "We test the problem first",
    info1Text: "The goal is to understand everyday habits before producing anything.",
    info2Title: "Your price opinion matters",
    info2Text: "It helps us understand whether the idea can stay accessible.",
    info3Title: "One small answer can help",
    info3Text: "Even a short response helps us decide what to test next.",
    footer: "Concept research • Morocco • 2026",
    validation: "Please answer the required questions.",
    onlineSuccess: "Thank you — your response was submitted.",
    networkError: "The response could not be sent online. It has been saved on this device instead. Check your Supabase settings.",
    saved: "Saved locally"
  },
  fr: {
    dir: "ltr",
    eyebrow: "Étude produit en 2 minutes",
    heroTitle: "Petit problème. <span>Premiers soins simples.</span>",
    heroLead: "Nous explorons une solution compacte et prête à l'emploi pour les petites blessures du quotidien. Votre avis sincère nous aidera à décider quoi créer.",
    start: "Commencer le questionnaire",
    privacyShort: "Aucun nom ni email demandé.",
    twoMinutes: "Environ 2 minutes",
    noSensitive: "Aucune question sensible",
    honest: "Réponses sincères bienvenues",
    cardClean: "Propre",
    cardCleanSub: "Prêt quand il le faut",
    cardCarry: "À emporter",
    cardCarrySub: "Poche • sac • voiture",
    sectionKicker: "Étude produit",
    sectionTitle: "Aidez-nous à créer la première version",
    sectionLead: "Nous gardons volontairement la description du produit générale afin de ne pas influencer vos réponses avec un design précis.",
    complete: "terminé",
    consentTitle: "Aucune information personnelle n'est demandée.",
    consentText: "Répondez selon votre expérience. N'indiquez pas de nom, téléphone, email ou détail médical.",
    required: "Question obligatoire",
    submit: "Envoyer mes réponses",
    successKicker: "Merci",
    successTitle: "Votre avis a bien été enregistré.",
    successText: "Votre réponse a été enregistrée. Vous pouvez télécharger une copie PDF de votre réponse ci-dessous.",
    download: "Télécharger la réponse en PDF",
    another: "Répondre encore",
    info1Title: "On teste d'abord le problème",
    info1Text: "Le but est de comprendre les habitudes avant de produire quoi que ce soit.",
    info2Title: "Votre avis sur le prix compte",
    info2Text: "Il nous aide à savoir si l'idée peut rester accessible.",
    info3Title: "Chaque réponse compte",
    info3Text: "Même une réponse courte aide à décider de la prochaine étape.",
    footer: "Recherche concept • Maroc • 2026",
    validation: "Veuillez répondre aux questions obligatoires.",
    onlineSuccess: "Merci — votre réponse a été envoyée.",
    networkError: "La réponse n'a pas pu être envoyée en ligne. Elle a été enregistrée sur cet appareil. Vérifiez la configuration Supabase.",
    saved: "Enregistré localement"
  },
  ar: {
    dir: "rtl",
    eyebrow: "استبيان سريع لمدة دقيقتين",
    heroTitle: "جرح صغير. <span>إسعافات أولية بسيطة.</span>",
    heroLead: "نحن ندرس فكرة منتج صغير وجاهز للاستعمال للحوادث والجروح اليومية البسيطة. رأيك الصريح سيساعدنا على معرفة ما الذي يجب تطويره.",
    start: "ابدأ الاستبيان",
    privacyShort: "لا نطلب الاسم أو البريد الإلكتروني.",
    twoMinutes: "حوالي دقيقتين",
    noSensitive: "لا توجد أسئلة حساسة",
    honest: "نرحب بالإجابات الصريحة",
    cardClean: "نظيف",
    cardCleanSub: "جاهز عند الحاجة",
    cardCarry: "سهل الحمل",
    cardCarrySub: "جيب • حقيبة • سيارة",
    sectionKicker: "دراسة المنتج",
    sectionTitle: "ساعدنا في تصميم النسخة الأولى",
    sectionLead: "وصفنا الفكرة بشكل عام عمداً حتى لا نؤثر على إجاباتك بتصميم محدد.",
    complete: "مكتمل",
    consentTitle: "لا نطلب أي معلومات شخصية.",
    consentText: "أجب حسب تجربتك الشخصية. لا تكتب الاسم أو الهاتف أو البريد الإلكتروني أو تفاصيل طبية.",
    required: "سؤال إلزامي",
    submit: "إرسال إجاباتي",
    successKicker: "شكراً",
    successTitle: "تم حفظ إجابتك.",
    successText: "تم حفظ إجابتك. يمكنك أيضاً تحميل نسخة PDF من إجابتك من الزر أسفله.",
    download: "تحميل الإجابة بصيغة PDF",
    another: "إجابة جديدة",
    info1Title: "نختبر المشكلة أولاً",
    info1Text: "الهدف هو فهم العادات اليومية قبل إنتاج أي شيء.",
    info2Title: "رأيك في السعر مهم",
    info2Text: "يساعدنا على معرفة ما إذا كانت الفكرة يمكن أن تبقى في متناول الناس.",
    info3Title: "كل إجابة مفيدة",
    info3Text: "حتى الإجابة القصيرة تساعدنا في تحديد الخطوة التالية.",
    footer: "بحث أولي عن الفكرة • المغرب • 2026",
    validation: "المرجو الإجابة عن الأسئلة الإلزامية.",
    onlineSuccess: "شكراً — تم إرسال إجابتك.",
    networkError: "تعذر إرسال الإجابة عبر الإنترنت. تم حفظها على هذا الجهاز. تحقق من إعدادات Supabase.",
    saved: "تم الحفظ محلياً"
  }
};

const questions = [
  {
    id: "profile",
    required: true,
    type: "radio",
    title: {
      en: "Which description fits you best?",
      fr: "Quelle description vous correspond le mieux ?",
      ar: "ما هو الوصف الأقرب إليك؟"
    },
    hint: {
      en: "Choose one.", fr: "Choisissez une réponse.", ar: "اختر إجابة واحدة."
    },
    options: {
      en: ["Student / pupil", "Employee", "Parent", "Self-employed / professional", "Other"],
      fr: ["Étudiant(e) / élève", "Employé(e)", "Parent", "Indépendant(e) / professionnel(le)", "Autre"],
      ar: ["طالب(ة)", "موظف(ة)", "أب/أم", "مستقل(ة) / مهني(ة)", "أخرى"]
    }
  },
  {
    id: "injuryFrequency",
    required: true,
    type: "radio",
    title: {
      en: "How often do you get a small everyday cut or scratch?",
      fr: "À quelle fréquence avez-vous une petite coupure ou égratignure au quotidien ?",
      ar: "كم مرة تتعرض لجرح أو خدش صغير في حياتك اليومية؟"
    },
    hint: {
      en: "For example, a paper cut or a small superficial scratch.",
      fr: "Par exemple, une coupure avec du papier ou une petite égratignure superficielle.",
      ar: "مثلاً جرح صغير بسبب الورق أو خدش سطحي بسيط."
    },
    options: {
      en: ["Often", "Sometimes", "Rarely", "Almost never"],
      fr: ["Souvent", "Parfois", "Rarement", "Presque jamais"],
      ar: ["غالباً", "أحياناً", "نادراً", "تقريباً أبداً"]
    }
  },
  {
    id: "currentAction",
    required: true,
    type: "radio",
    title: {
      en: "What do you usually do when you have a small cut?",
      fr: "Que faites-vous généralement en cas de petite coupure ?",
      ar: "ماذا تفعل عادة عندما يصيبك جرح صغير؟"
    },
    options: {
      en: ["Use something I already have at home", "Buy a bandage / first-aid item", "Use water / tissue / another simple option", "Do nothing", "Other"],
      fr: ["J'utilise ce que j'ai déjà à la maison", "J'achète un pansement / produit de premiers soins", "J'utilise de l'eau / un mouchoir / une autre solution simple", "Je ne fais rien", "Autre"],
      ar: ["أستعمل شيئاً موجوداً في المنزل", "أشتري ضمادة أو منتج إسعافات أولية", "أستعمل الماء أو منديل أو حلاً بسيطاً آخر", "لا أفعل شيئاً", "أخرى"]
    }
  },
  {
    id: "difficulty",
    required: true,
    type: "checkbox",
    limit: 3,
    title: {
      en: "What is the most annoying part?",
      fr: "Qu'est-ce qui vous dérange le plus ?",
      ar: "ما أكثر شيء يزعجك؟"
    },
    hint: {
      en: "You can choose up to 3.", fr: "Vous pouvez choisir jusqu'à 3 réponses.", ar: "يمكنك اختيار 3 إجابات كحد أقصى."
    },
    options: {
      en: ["I need only a small amount but products come in larger packs", "I do not have first-aid items with me", "I have to go find a pharmacy / shop", "It is not convenient to carry bottles or packs", "I do not really have a problem", "Other"],
      fr: ["J'ai besoin de peu mais les produits sont vendus en plus grandes quantités", "Je n'ai pas de produits de premiers soins avec moi", "Je dois aller chercher une pharmacie / un magasin", "Les flacons et grandes boîtes sont peu pratiques à transporter", "Je n'ai pas vraiment de problème", "Autre"],
      ar: ["أحتاج كمية صغيرة لكن المنتجات تباع بكميات أكبر", "لا أحمل معي مستلزمات الإسعافات الأولية", "يجب أن أذهب للبحث عن صيدلية أو متجر", "القوارير والعبوات الكبيرة غير مريحة للحمل", "لا توجد لدي مشكلة فعلية", "أخرى"]
    }
  },
  {
    id: "usefulness",
    required: true,
    type: "radio",
    title: {
      en: "How useful would a very small ready-to-use first-aid product be to you?",
      fr: "À quel point un très petit produit de premiers soins prêt à l'emploi vous serait-il utile ?",
      ar: "إلى أي حد سيكون منتج إسعافات أولية صغير جداً وجاهز للاستعمال مفيداً لك؟"
    },
    options: {
      en: ["Very useful", "Useful", "Not sure", "Not very useful", "Not useful for me"],
      fr: ["Très utile", "Utile", "Je ne sais pas", "Peu utile", "Pas utile pour moi"],
      ar: ["مفيد جداً", "مفيد", "لست متأكداً", "ليس مفيداً كثيراً", "غير مفيد لي"]
    }
  },
  {
    id: "format",
    required: true,
    type: "radio",
    title: {
      en: "Which format sounds more practical?",
      fr: "Quel format vous paraît le plus pratique ?",
      ar: "أي شكل يبدو لك أكثر عملية؟"
    },
    options: {
      en: ["A flat single-use sachet", "A small reusable pouch", "No preference"],
      fr: ["Un sachet plat à usage unique", "Une petite pochette réutilisable", "Pas de préférence"],
      ar: ["كيس صغير مسطح للاستعمال مرة واحدة", "حقيبة صغيرة قابلة لإعادة الاستعمال", "لا فرق لدي"]
    }
  },
  {
    id: "purchasePlace",
    required: true,
    type: "checkbox",
    limit: 4,
    title: {
      en: "Where would you like to find it?",
      fr: "Où aimeriez-vous pouvoir l'acheter ?",
      ar: "أين تفضل أن تجد هذا المنتج؟"
    },
    hint: {
      en: "Choose up to 4.", fr: "Choisissez jusqu'à 4 réponses.", ar: "اختر حتى 4 إجابات."
    },
    options: {
      en: ["Pharmacy", "Supermarket", "Local convenience shop", "School / university", "Office / company", "Online", "Anywhere easy to access"],
      fr: ["Pharmacie", "Supermarché", "Épicerie / commerce de proximité", "École / université", "Bureau / entreprise", "En ligne", "Partout où c'est facile à trouver"],
      ar: ["الصيدلية", "السوبرماركت", "متجر قريب", "المدرسة / الجامعة", "المكتب / الشركة", "الإنترنت", "أي مكان يسهل الوصول إليه"]
    }
  },
  {
    id: "goodPrice",
    required: true,
    type: "radio",
    title: {
      en: "For a tiny one-use product, what price feels reasonable to you?",
      fr: "Pour un tout petit produit à usage unique, quel prix vous paraît raisonnable ?",
      ar: "بالنسبة لمنتج صغير جداً للاستعمال مرة واحدة، ما هو السعر المناسب في رأيك؟"
    },
    hint: { en: "Please answer honestly, even if the number is low.", fr: "Répondez librement, même si le montant vous paraît bas.", ar: "أجب بصراحة حتى لو كان السعر منخفضاً." },
    options: {
      en: ["2 MAD", "3 MAD", "4 MAD", "5 MAD", "More than 5 MAD", "I don't know"],
      fr: ["2 DH", "3 DH", "4 DH", "5 DH", "Plus de 5 DH", "Je ne sais pas"],
      ar: ["2 درهم", "3 دراهم", "4 دراهم", "5 دراهم", "أكثر من 5 دراهم", "لا أعرف"]
    }
  },
  {
    id: "tooExpensive",
    required: true,
    type: "radio",
    title: {
      en: "Above what price would you say: “That is too expensive for this”?",
      fr: "Au-dessus de quel prix diriez-vous : « C'est trop cher pour ça » ?",
      ar: "ابتداءً من أي سعر ستقول: «هذا غالٍ جداً بالنسبة لي»؟"
    },
    options: {
      en: ["5 MAD", "7 MAD", "10 MAD", "15 MAD", "More than 15 MAD", "I don't know"],
      fr: ["5 DH", "7 DH", "10 DH", "15 DH", "Plus de 15 DH", "Je ne sais pas"],
      ar: ["5 دراهم", "7 دراهم", "10 دراهم", "15 درهماً", "أكثر من 15 درهماً", "لا أعرف"]
    }
  },
  {
    id: "buyIntent",
    required: true,
    type: "radio",
    title: {
      en: "If you saw it in a place you already shop, would you buy it when you needed it?",
      fr: "Si vous le voyez dans un endroit où vous achetez déjà, l'achèteriez-vous lorsque vous en auriez besoin ?",
      ar: "إذا رأيته في مكان تتسوق منه عادة، هل ستشتريه عندما تحتاج إليه؟"
    },
    options: {
      en: ["Yes, probably", "Maybe", "Not sure", "Probably not", "No"],
      fr: ["Oui, probablement", "Peut-être", "Je ne sais pas", "Probablement pas", "Non"],
      ar: ["نعم، على الأرجح", "ربما", "لست متأكداً", "على الأرجح لا", "لا"]
    }
  },
  {
    id: "priorities",
    required: true,
    type: "checkbox",
    limit: 3,
    title: {
      en: "What matters most to you in this kind of product?",
      fr: "Qu'est-ce qui compte le plus pour vous dans ce type de produit ?",
      ar: "ما أهم الأمور بالنسبة لك في هذا النوع من المنتجات؟"
    },
    hint: { en: "Choose up to 3.", fr: "Choisissez jusqu'à 3 réponses.", ar: "اختر حتى 3 إجابات." },
    options: {
      en: ["Low price", "Cleanliness", "Quality", "Easy to use", "Small size", "Easy to carry", "Trust / safety", "Nice packaging", "Easy to find"],
      fr: ["Prix bas", "Propreté", "Qualité", "Facilité d'utilisation", "Petite taille", "Facile à transporter", "Confiance / sécurité", "Beau packaging", "Facile à trouver"],
      ar: ["سعر منخفض", "النظافة", "الجودة", "سهولة الاستعمال", "الحجم الصغير", "سهولة الحمل", "الثقة / الأمان", "تغليف جميل", "سهولة العثور عليه"]
    }
  },
  {
    id: "expectations",
    required: false,
    type: "textarea",
    title: {
      en: "What would you expect to find inside a small first-aid product for a minor everyday injury?",
      fr: "Qu'attendriez-vous de trouver dans un petit produit de premiers soins pour une petite blessure du quotidien ?",
      ar: "ماذا تتوقع أن تجد داخل منتج إسعافات أولية صغير مخصص لجرح بسيط؟"
    },
    hint: { en: "This is intentionally open so we can hear your idea, not ours.", fr: "La question est volontairement ouverte pour connaître votre idée, pas la nôtre.", ar: "السؤال مفتوح عمداً حتى نعرف فكرتك أنت، وليس فكرتنا." },
    placeholder: { en: "Write your idea here…", fr: "Écrivez votre idée ici…", ar: "اكتب فكرتك هنا…" }
  },
  {
    id: "suggestions",
    required: false,
    type: "textarea",
    title: {
      en: "Any suggestion that would make this product more useful or easier to buy?",
      fr: "Une suggestion pour rendre ce produit plus utile ou plus facile à acheter ?",
      ar: "هل لديك اقتراح يجعل المنتج أكثر فائدة أو أسهل في الشراء؟"
    },
    placeholder: { en: "Your suggestion…", fr: "Votre suggestion…", ar: "اقتراحك…" }
  }
];

let currentLang = localStorage.getItem("miniSurveyLang") || "en";
let lastSubmission = null;

const form = document.getElementById("surveyForm");
const questionsEl = document.getElementById("questions");
const progressBar = document.getElementById("progressBar");
const progressLabel = document.getElementById("progressLabel");
const successState = document.getElementById("successState");
const startBtn = document.getElementById("startBtn");
const anotherBtn = document.getElementById("anotherBtn");

function t(key) { return translations[currentLang][key] || key; }

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderStaticTranslations() {
  document.documentElement.lang = currentLang;
  document.documentElement.dir = translations[currentLang].dir;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[currentLang][key]) el.innerHTML = translations[currentLang][key];
  });
  document.querySelectorAll(".lang-btn").forEach(btn => btn.classList.toggle("active", btn.dataset.lang === currentLang));
}

function renderQuestions(preserve = true) {
  const snapshot = preserve ? collectAnswers(false) : {};
  questionsEl.innerHTML = questions.map((q, index) => {
    const typeClass = q.type === "checkbox" ? "checkbox" : "";
    let fieldHtml = "";

    if (q.type === "textarea") {
      fieldHtml = `<textarea class="text-area" id="${q.id}" name="${q.id}" placeholder="${escapeHtml((q.placeholder && q.placeholder[currentLang]) || "")}">${escapeHtml(snapshot[q.id] || "")}</textarea>`;
    } else {
      const values = (q.options[currentLang] || []).map((label, i) => ({ label, value: q.options.en[i] || label }));
      fieldHtml = `<div class="option-grid ${values.length >= 7 ? "three" : ""}">${values.map(({label, value}, i) => `
        <div class="option ${typeClass}">
          <input type="${q.type}" id="${q.id}-${i}" name="${q.id}" value="${escapeHtml(value)}" ${q.type === "checkbox" && (snapshot[q.id] || []).includes(value) ? "checked" : q.type === "radio" && snapshot[q.id] === value ? "checked" : ""}>
          <label for="${q.id}-${i}"><span>${escapeHtml(label)}</span></label>
        </div>`).join("")}</div>`;
      if (q.limit) fieldHtml += `<div class="counter-note" data-counter-for="${q.id}" data-limit="${q.limit}"></div>`;
    }

    return `<article class="question" data-question-id="${q.id}" data-required="${q.required}">
      <div class="question-head">
        <div class="q-number">${String(index + 1).padStart(2, "0")}</div>
        <div>
          <h3>${escapeHtml(q.title[currentLang])}${q.required ? " <span style=\"color:#c24141\">*</span>" : ""}</h3>
          ${q.hint && q.hint[currentLang] ? `<p class="hint">${escapeHtml(q.hint[currentLang])}</p>` : ""}
        </div>
      </div>
      ${fieldHtml}
    </article>`;
  }).join("");

  bindLimitHandlers();
  updateProgress();
}

function bindLimitHandlers() {
  questions.forEach(q => {
    if (!q.limit || q.type !== "checkbox") return;
    const inputs = [...document.querySelectorAll(`input[name="${q.id}"]`)].filter(Boolean);
    const counter = document.querySelector(`[data-counter-for="${q.id}"]`);
    const update = () => {
      const count = inputs.filter(i => i.checked).length;
      counter.textContent = currentLang === "fr" ? `${count}/${q.limit} sélection(s)` : currentLang === "ar" ? `${count}/${q.limit} اختيارات` : `${count}/${q.limit} selected`;
      inputs.forEach(i => i.disabled = count >= q.limit && !i.checked);
    };
    inputs.forEach(i => i.addEventListener("change", () => { update(); updateProgress(); }));
    update();
  });

  document.querySelectorAll("#surveyForm input, #surveyForm textarea").forEach(el => {
    el.addEventListener("change", updateProgress);
    el.addEventListener("input", updateProgress);
  });
}

function collectAnswers(withEmptyRequired = true) {
  const data = {};
  questions.forEach(q => {
    if (q.type === "textarea") {
      const el = document.getElementById(q.id);
      data[q.id] = el ? el.value.trim() : "";
    } else if (q.type === "checkbox") {
      data[q.id] = [...document.querySelectorAll(`input[name="${q.id}"]:checked`)].map(i => i.value);
    } else {
      const el = document.querySelector(`input[name="${q.id}"]:checked`);
      data[q.id] = el ? el.value : "";
    }
  });
  return data;
}

function requiredIdsMissing(data) {
  return questions.filter(q => q.required).filter(q => {
    const v = data[q.id];
    return q.type === "checkbox" ? !Array.isArray(v) || v.length === 0 : !v;
  }).map(q => q.id);
}

function updateProgress() {
  const data = collectAnswers(false);
  const required = questions.filter(q => q.required);
  const done = required.filter(q => {
    const v = data[q.id];
    return q.type === "checkbox" ? Array.isArray(v) && v.length > 0 : Boolean(v);
  }).length;
  const pct = Math.round((done / required.length) * 100);
  progressBar.style.width = `${pct}%`;
  progressLabel.textContent = `${pct}%`;
}

function validateAndScroll() {
  const data = collectAnswers();
  const missing = requiredIdsMissing(data);
  if (!missing.length) return true;
  const first = document.querySelector(`[data-question-id="${missing[0]}"]`);
  if (first) {
    first.style.animation = "none";
    void first.offsetWidth;
    first.style.animation = "shake .35s ease";
    first.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  alert(t("validation"));
  return false;
}

function buildPayload() {
  return {
    project: "MINI Everyday First Aid Concept",
    language: currentLang,
    submittedAt: new Date().toISOString(),
    answers: collectAnswers()
  };
}

function saveLocally(payload) {
  const existing = JSON.parse(localStorage.getItem("miniSurveyResponses") || "[]");
  existing.push(payload);
  localStorage.setItem("miniSurveyResponses", JSON.stringify(existing));
  return existing.length;
}

async function sendOnline(payload) {
  if (!supabaseClient) return { ok: false, demo: true };

  const { error } = await supabaseClient.from("responses").insert({
    project: payload.project,
    language: payload.language,
    submitted_at: payload.submittedAt,
    answers: payload.answers,
    source: "github-pages"
  });

  if (error) throw error;
  return { ok: true, demo: false };
}

function answerLabel(q, value) {
  if (Array.isArray(value)) {
    return value.map(v => {
      const idx = (q.options?.en || []).indexOf(v);
      return (q.options?.[currentLang]?.[idx] || v);
    });
  }
  const idx = (q.options?.en || []).indexOf(value);
  return idx >= 0 ? (q.options?.[currentLang]?.[idx] || value) : value;
}



form.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!validateAndScroll()) return;

  const submitBtn = document.getElementById("submitBtn");
  submitBtn.disabled = true;
  const original = submitBtn.innerHTML;
  submitBtn.textContent = "...";

  const payload = buildPayload();
  let status = "local";

  try {
    const result = await sendOnline(payload);
    if (result.ok) {
      status = "online";
      alert(t("onlineSuccess"));
    } else {
      saveLocally(payload);
      status = "local";
    }
  } catch (err) {
    console.error(err);
    saveLocally(payload);
    status = "local-fallback";
    alert(t("networkError"));
  }

  lastSubmission = payload;
  form.hidden = true;
  successState.hidden = false;
  successState.dataset.status = status;
  const successTextEl = successState.querySelector('[data-i18n="successText"]');
  if (successTextEl) {
    const onlineMessage = t("successText");
    const localMessage = currentLang === "fr"
      ? "Votre réponse a été enregistrée sur cet appareil. Vous pouvez télécharger une copie PDF ci-dessous."
      : currentLang === "ar"
        ? "تم حفظ إجابتك على هذا الجهاز. يمكنك تحميل نسخة PDF من إجابتك من الزر أسفله."
        : "Your answer was saved on this device. You can download a PDF copy of your response below.";
    successTextEl.textContent = status === "online" ? onlineMessage : localMessage;
  }
  submitBtn.disabled = false;
  submitBtn.innerHTML = original;
  successState.scrollIntoView({ behavior: "smooth", block: "center" });
});

startBtn.addEventListener("click", () => {
  document.getElementById("survey").scrollIntoView({ behavior: "smooth", block: "start" });
});

anotherBtn.addEventListener("click", () => {
  form.reset();
  successState.hidden = true;
  form.hidden = false;
  renderQuestions(false);
  document.getElementById("survey").scrollIntoView({ behavior: "smooth", block: "start" });
});


document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const newLang = btn.dataset.lang;
    const currentAnswers = collectAnswers(false);
    currentLang = newLang;
    localStorage.setItem("miniSurveyLang", currentLang);
    renderStaticTranslations();
    renderQuestions(true);
    // Put previous answers back after re-render.
    Object.entries(currentAnswers).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach(v => {
          const el = document.querySelector(`input[name="${key}"][value="${CSS.escape(v)}"]`);
          if (el) el.checked = true;
        });
      } else if (value) {
        const el = document.querySelector(`input[name="${key}"][value="${CSS.escape(value)}"]`);
        if (el) el.checked = true;
      } else {
        const el = document.getElementById(key);
        if (el) el.value = "";
      }
    });
    bindLimitHandlers();
    updateProgress();
  });
});

const style = document.createElement("style");
style.textContent = `@keyframes shake {0%,100%{transform:translateX(0)}25%{transform:translateX(-5px)}75%{transform:translateX(5px)}}`;
document.head.appendChild(style);

renderStaticTranslations();
renderQuestions(false);
