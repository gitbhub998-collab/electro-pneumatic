const questions = [
  {
    id: "a",
    questionEn: "Which of the following components forms a standard FRL Service Unit?",
    questionAr: "أي من المكونات التالية يشكل وحدة خدمة FRL القياسية؟",
    options: [
      { textEn: "Filter, Regulator, Lubricator.", textAr: "الفلتر، المنظم، المشحم" },
      { textEn: "Flow valve, Receiver, Lever.", textAr: "صمام التدفق، المستقبل، الرافعة" },
      { textEn: "Fast-acting Relay, Logic element, Receiver.", textAr: "مرحل سريع الاستجابة، عنصر منطقي، مستقبل" },
      { textEn: "Feed line, Reservoir, Lever.", textAr: "خط التغذية، الخزان، الرافعة" }
    ],
    correctAnswerIndex: 0
  },
  {
    id: "b",
    questionEn: "Which element acts as the signal output / positioning element in a pure pneumatic control chain?",
    questionAr: "أي عنصر يعمل كعنصر إخراج إشارة / تحديد الموضع في سلسلة تحكم نيوماتيكية (هوائية) بحتة؟",
    options: [
      { textEn: "Electrical Relay Control.", textAr: "تحكم مرحل كهربائي" },
      { textEn: "Pneumatically actuated Way-valve.", textAr: "صمام توجيهي مشغل هوائيًا" },
      { textEn: "24V DC Power Supply.", textAr: "مصدر طاقة 24 فولت تيار مستمر" },
      { textEn: "Roller-lever Valve input.", textAr: "إدخال صمام برافعة دوارة" }
    ],
    correctAnswerIndex: 1
  },
  {
    id: "c",
    questionEn: "What is a primary advantage of pneumatic systems in hazardous industrial environments?",
    questionAr: "ما هي الميزة الأساسية للأنظمة النيوماتيكية (الهوائية) في البيئات الصناعية الخطرة؟",
    options: [
      { textEn: "Incompressible fluid force.", textAr: "قوة مائع غير قابلة للانضغاط" },
      { textEn: "Extremely high positioning precision.", textAr: "دقة تحديد موضع عالية جدًا" },
      { textEn: "No fire or explosion hazards.", textAr: "عدم وجود مخاطر حريق أو انفجار" },
      { textEn: "Silent exhaust discharge.", textAr: "تفريغ عادم صامت" }
    ],
    correctAnswerIndex: 2
  },
  {
    id: "d",
    questionEn: "The fundamental formula relating force (F), pressure (p), and area (A) in a cylinder is:",
    questionAr: "الصيغة الأساسية التي تربط بين القوة (F) والضغط (p) والمساحة (A) في الأسطوانة هي:",
    options: [
      { textEn: "F = p / A", textAr: "F = p / A" },
      { textEn: "F = m / p", textAr: "F = m / p" },
      { textEn: "F = p + A", textAr: "F = p + A" },
      { textEn: "F = p · A", textAr: "F = p · A" }
    ],
    correctAnswerIndex: 3
  },
  {
    id: "e",
    questionEn: "Which signal processing element is typically used in electro-pneumatic control systems?",
    questionAr: "ما هو عنصر معالجة الإشارات المستخدم عادة في أنظمة التحكم الكهرو-نيوماتيكية؟",
    options: [
      { textEn: "Pneumatic Check Valve.", textAr: "صمام عدم رجوع نيوماتيكي" },
      { textEn: "Pneumatic Throttle Valve.", textAr: "صمام خانق نيوماتيكي" },
      { textEn: "Programmable Logic Controller (PLC).", textAr: "جهاز تحكم منطقي قابل للبرمجة - PLC" },
      { textEn: "Maintenance Unit Receiver.", textAr: "مستقبل وحدة الصيانة" }
    ],
    correctAnswerIndex: 2
  },
  {
    id: "f",
    questionEn: "Why is an Air Lubricator (L) intentionally skipped in clean-room pneumatic applications?",
    questionAr: "لماذا يتم تخطي مشحم الهواء (L) عمدًا في التطبيقات النيوماتيكية للغرف النظيفة؟",
    options: [
      { textEn: "To reduce operating pressure below 1 bar.", textAr: "لتقليل ضغط التشغيل لأقل من 1 بار" },
      { textEn: "To avoid air compressibility.", textAr: "لتجنب قابلية انضغاط الهواء" },
      { textEn: "To prevent oil mist contamination in oil-free clean environments.", textAr: "لمنع التلوث برذاذ الزيت في البيئات النظيفة الخالية من الزيت" },
      { textEn: "To silence escaping exhaust noise.", textAr: "لكتم ضوضاء العادم المتسرب" }
    ],
    correctAnswerIndex: 2
  },
  {
    id: "g",
    questionEn: "Boyle's Law for ideal gas behavior at constant temperature is represented by which expression?",
    questionAr: "قانون بويل لسلوك الغاز المثالي عند درجة حرارة ثابتة يتم تمثيله بأي تعبير؟",
    options: [
      { textEn: "p1 · V1 = p2 · V2 = constant", textAr: "p1 · V1 = p2 · V2 = constant (ثابت)" },
      { textEn: "p1 / V1 = p2 / V2", textAr: "p1 / V1 = p2 / V2" },
      { textEn: "F1 · A1 = F2 · A2", textAr: "F1 · A1 = F2 · A2" },
      { textEn: "p1 + V1 = p2 + V2", textAr: "p1 + V1 = p2 + V2" }
    ],
    correctAnswerIndex: 0
  },
  {
    id: "h",
    questionEn: "What component is used to limit and control the speed of movement of a pneumatic cylinder?",
    questionAr: "ما هو المكون المستخدم للحد من سرعة حركة الأسطوانة النيوماتيكية والتحكم فيها؟",
    options: [
      { textEn: "Pressure reducing valve.", textAr: "صمام تقليل الضغط" },
      { textEn: "Flow valve (throttle valve).", textAr: "صمام تدفق - صمام خانق" },
      { textEn: "Electrical pressure switch.", textAr: "مفتاح ضغط كهربائي" },
      { textEn: "FRL Filter.", textAr: "فلتر FRL" }
    ],
    correctAnswerIndex: 1
  },
  {
    id: "i",
    questionEn: "Which of the following is classified as an Energy Supply element in a pneumatic signal chain?",
    questionAr: "أي مما يلي يُصنف كعنصر إمداد بالطاقة في سلسلة إشارات نيوماتيكية؟",
    options: [
      { textEn: "Cylinder and pivoting drive.", textAr: "الأسطوانة ومحرك الدوران" },
      { textEn: "Proximity sensor.", textAr: "حساس التقارب" },
      { textEn: "Compressor and air receiver.", textAr: "الضاغط ومستقبل الهواء" },
      { textEn: "Directional control valve.", textAr: "صمام التحكم التوجيهي" }
    ],
    correctAnswerIndex: 2
  },
  {
    id: "j",
    questionEn: "What is the typical economic pressure limit for compressed air industrial applications?",
    questionAr: "ما هو الحد الاقتصادي النموذجي للضغط لتطبيقات الهواء المضغوط الصناعية؟",
    options: [
      { textEn: "Up to 1000 bar.", textAr: "حتى 1000 بار" },
      { textEn: "Up to 200 bar.", textAr: "حتى 200 بار" },
      { textEn: "Exactly 1 bar.", textAr: "1 بار بالضبط" },
      { textEn: "Up to 6-10 bar.", textAr: "حتى 6-10 بار" }
    ],
    correctAnswerIndex: 3
  }
];

const trueFalseQuestions = [
  {
    id: "a",
    statementEn: "The word 'Pneumatics' originates from the Greek word 'pneuma', which means water or liquid flow.",
    statementAr: "كلمة 'نيوماتيك' (Pneumatics) مشتقة من الكلمة اليونانية 'pneuma'، والتي تعني تدفق الماء أو السائل.",
    options: [
      { textEn: "True", textAr: "صح" },
      { textEn: "False", textAr: "خطأ" }
    ],
    correctAnswerIndex: 1
  },
  {
    id: "b",
    statementEn: "Pneumatic actuators can be loaded to complete mechanical standstill without causing thermal or mechanical damage.",
    statementAr: "يمكن تحميل المشغلات النيوماتيكية (الهوائية) حتى التوقف الميكانيكي التام دون التسبب في تلف حراري أو ميكانيكي.",
    options: [
      { textEn: "True", textAr: "صح" },
      { textEn: "False", textAr: "خطأ" }
    ],
    correctAnswerIndex: 0
  },
  {
    id: "c",
    statementEn: "Compressed air systems require no initial filtering, drying, or pressure regulation prior to entering pneumatic control valves.",
    statementAr: "لا تتطلب أنظمة الهواء المضغوط أي فلترة أولية، أو تجفيف، أو تنظيم للضغط قبل الدخول إلى صمامات التحكم النيوماتيكية.",
    options: [
      { textEn: "True", textAr: "صح" },
      { textEn: "False", textAr: "خطأ" }
    ],
    correctAnswerIndex: 1
  },
  {
    id: "d",
    statementEn: "Constant piston speeds are difficult to achieve in pneumatic cylinders primarily due to air compressibility.",
    statementAr: "من الصعب تحقيق سرعات ثابتة للمكبس في الأسطوانات النيوماتيكية ويرجع ذلك أساسًا إلى قابلية الهواء للانضغاط.",
    options: [
      { textEn: "True", textAr: "صح" },
      { textEn: "False", textAr: "خطأ" }
    ],
    correctAnswerIndex: 0
  },
  {
    id: "e",
    statementEn: "The standard gauge operating pressure maintained by an FRL Pressure Regulator is typically set to 6 bar.",
    statementAr: "عادةً ما يتم ضبط ضغط التشغيل القياسي الذي يحافظ عليه منظم ضغط FRL عند 6 بار.",
    options: [
      { textEn: "True", textAr: "صح" },
      { textEn: "False", textAr: "خطأ" }
    ],
    correctAnswerIndex: 0
  },
  {
    id: "f",
    statementEn: "In an electro-pneumatic system, signal processing is performed using pure pneumatic pilot air signals.",
    statementAr: "في النظام الكهرو-نيوماتيكي، تتم معالجة الإشارات باستخدام إشارات هواء دليلي نيوماتيكية بحتة.",
    options: [
      { textEn: "True", textAr: "صح" },
      { textEn: "False", textAr: "خطأ" }
    ],
    correctAnswerIndex: 1
  },
  {
    id: "g",
    statementEn: "An Air Filter in an FRL unit typically separates moisture and filters solid particles down to 5-40 μm.",
    statementAr: "عادةً ما يقوم فلتر الهواء في وحدة FRL بفصل الرطوبة وتصفية الجزيئات الصلبة حتى حجم 5-40 ميكرومتر.",
    options: [
      { textEn: "True", textAr: "صح" },
      { textEn: "False", textAr: "خطأ" }
    ],
    correctAnswerIndex: 0
  },
  {
    id: "h",
    statementEn: "According to pressure conversions, 1 bar is equal to 10^5 Pa (or 10N/cm²).",
    statementAr: "وفقًا لتحويلات الضغط، 1 بار يساوي 10^5 باسكال (أو 10 نيوتن/سم²).",
    options: [
      { textEn: "True", textAr: "صح" },
      { textEn: "False", textAr: "خطأ" }
    ],
    correctAnswerIndex: 0
  },
  {
    id: "i",
    statementEn: "In pure pneumatic systems, proximity sensors and 24V DC solenoids are used for signal input and actuation.",
    statementAr: "في الأنظمة النيوماتيكية البحتة، يتم استخدام حساسات التقارب والملفات اللولبية (Solenoids) التي تعمل بجهد 24 فولت تيار مستمر لإدخال الإشارات والتشغيل.",
    options: [
      { textEn: "True", textAr: "صح" },
      { textEn: "False", textAr: "خطأ" }
    ],
    correctAnswerIndex: 1
  },
  {
    id: "j",
    statementEn: "Escaping exhaust air in pneumatic systems produces noise that requires attenuation using exhaust silencers.",
    statementAr: "ينتج عن هواء العادم المتسرب في الأنظمة النيوماتيكية ضوضاء تتطلب التخفيف باستخدام كواتم صوت العادم.",
    options: [
      { textEn: "True", textAr: "صح" },
      { textEn: "False", textAr: "خطأ" }
    ],
    correctAnswerIndex: 0
  }
];

function toQuizData(items, questionKey, arabicQuestionKey) {
  return items.map(item => ({
    id: item.id,
    question: item[questionKey],
    arabicQuestion: item[arabicQuestionKey],
    options: Object.fromEntries(item.options.map((option, index) => [
      String.fromCharCode(65 + index),
      option.textEn
    ])),
    arabicOptions: Object.fromEntries(item.options.map((option, index) => [
      String.fromCharCode(65 + index),
      option.textAr
    ])),
    correctAnswer: String.fromCharCode(65 + item.correctAnswerIndex),
    hint: "",
    arabicHint: ""
  }));
}

const pneumaticMultipleChoiceQuiz = toQuizData(questions, "questionEn", "questionAr");
const pneumaticTrueFalseQuiz = toQuizData(trueFalseQuestions, "statementEn", "statementAr");
