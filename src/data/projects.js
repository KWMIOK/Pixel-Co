const gizModules = import.meta.glob('../assets/projects/GIZBooklet/*', { eager: true, import: 'default' });
const abbVieModules = import.meta.glob('../assets/projects/AbbVie/*', { eager: true, import: 'default' });
const arabPotashModules = import.meta.glob('../assets/projects/ArabPotash/*', { eager: true, import: 'default' });
const babyCordBrochureModules = import.meta.glob('../assets/projects/BabyCordBrochure/*', { eager: true, import: 'default' });
const bioLabModules = import.meta.glob('../assets/projects/BioLab/*', { eager: true, import: 'default' });
const capitalBankModules = import.meta.glob('../assets/projects/CapitalBank/*', { eager: true, import: 'default' });
const catrionModules = import.meta.glob('../assets/projects/Catrion/*', { eager: true, import: 'default' });
const globalTribesModules = import.meta.glob('../assets/projects/GlobalTribes/*', { eager: true, import: 'default' });
const jredsModules = import.meta.glob('../assets/projects/JREDS/*', { eager: true, import: 'default' });
const kemapcoModules = import.meta.glob('../assets/projects/KEMAPCO/*', { eager: true, import: 'default' });
const logosCollectionModules = import.meta.glob('../assets/projects/LogosCollection/*', { eager: true, import: 'default' });
const maadenModules = import.meta.glob('../assets/projects/Maaden/*', { eager: true, import: 'default' });
const musharbashModules = import.meta.glob('../assets/projects/Musharbash/*', { eager: true, import: 'default' });
const rocheMirceraBoothModules = import.meta.glob('../assets/projects/Roche-MirceraBooth/*', { eager: true, import: 'default' });
const unicefPrivateSectorEngagementInImmunizationModules = import.meta.glob('../assets/projects/UNICEF-PrivateSectorEngagementInImmunization/*', { eager: true, import: 'default' });
const unicefSchoolHealthManualModules = import.meta.glob('../assets/projects/UNICEF-SchoolHealthManual/*', { eager: true, import: 'default' });

export const projects = [
  {
    id: "abbvie",
    nameEn: "AbbVie | Exhibition Booth Design",
    nameAr: "AbbVie | تصميم جناح المعرض",
    thumbnail: abbVieModules['../assets/projects/AbbVie/image1.jpeg'],
    gallery: [
      abbVieModules['../assets/projects/AbbVie/image2.jpeg'],
      abbVieModules['../assets/projects/AbbVie/image3.jpeg'],
      abbVieModules['../assets/projects/AbbVie/image4.jpeg'],
    ],
    clientEn: "AbbVie",
    clientAr: "AbbVie",
    servicesEn: "Exhibition Design, Spatial Branding, Large-Format Graphics, Visual Communication",
    servicesAr: "تصميم المعارض, الهوية البصرية المكانية, تصاميم المطبوعات الكبيرة, التواصل البصري",
    overviewEn:
      "Designed event graphics, spatial branding elements, and large-format print collateral for AbbVie’s medical exhibition booth. The project required translating AbbVie’s corporate pharmaceutical identity into an immersive, high-impact physical environment designed to engage healthcare professionals and industry stakeholders.",
    overviewAr:
      "تصميم الرسومات الخاصة بالفعاليات، وعناصر الهوية المكانية، والمطبوعات كبيرة الحجم لجناح شركة 'أبڤي' في المعرض الطبي. تطلب المشروع تحويل الهوية المؤسسية لشركة الأدوية إلى بيئة واقعية جذابة ومؤثرة، صُممت لإشراك المتخصصين في الرعاية الصحية والمهتمين بالقطاع."
  },
  {
    id: "arabpotash",
    nameEn: "Arab Potash",
    nameAr: "Arab Potash",
    thumbnail: arabPotashModules['../assets/projects/ArabPotash/image1.png'],
    gallery: [
      arabPotashModules['../assets/projects/ArabPotash/image2.jpeg'],
      arabPotashModules['../assets/projects/ArabPotash/image3.jpeg'],
      arabPotashModules['../assets/projects/ArabPotash/image4.jpeg'],
      arabPotashModules['../assets/projects/ArabPotash/image5.jpeg'],
      arabPotashModules['../assets/projects/ArabPotash/image6.jpeg'],
      arabPotashModules['../assets/projects/ArabPotash/image7.jpeg'],
      arabPotashModules['../assets/projects/ArabPotash/image8.jpeg'],
    ],
    clientEn: "Arabian Potash Company (APC)",
    clientAr: "Arabian Potash Company (APC)",
    servicesEn: "Editorial Design, Corporate Publication, Data Visualization, Information Design",
    servicesAr: "تصميم التحرير والنشر، المطبوعات المؤسسية، تجسيد البيانات بصرياً، تصميم المعلومات",
    overviewEn:
      "Designed the graphic layout and visual structure for the Arabian Potash Company’s 2024 Sustainability Report. The project focused on translating complex environmental metrics, corporate governance data, and social impact initiatives into a polished, highly engaging, and structured publication.",
    overviewAr:
      "تصميم التنسيق الجرافيكي والهيكل البصري لتقرير الاستدامة لعام 2024 الخاص بشركة البوتاس العربية. تركز المشروع على تحويل المؤشرات البيئية المعقدة، وبيانات الحوكمة المؤسسية، ومبادرات الأثر الاجتماعي إلى مطبوعة أنيقة، جذابة، ومُنظّمة بدقة."
  },
  {
    id: "babycordbrochure",
    nameEn: "Baby Cord | Corporate & Informational Brochure Design",
    nameAr: "Baby Cord | تصميم الكتيب المؤسسي والمعلوماتي",
    thumbnail: babyCordBrochureModules['../assets/projects/BabyCordBrochure/image1.jpeg'],
    gallery: [
      babyCordBrochureModules['../assets/projects/BabyCordBrochure/image2.jpeg'],
      babyCordBrochureModules['../assets/projects/BabyCordBrochure/image3.jpeg'],
      babyCordBrochureModules['../assets/projects/BabyCordBrochure/image4.jpeg'],
      babyCordBrochureModules['../assets/projects/BabyCordBrochure/image5.jpeg'],
    ],
    clientEn: "Baby Cord (Stem Cell Bank)",
    clientAr: "Baby Cord (Stem Cell Bank)",
    servicesEn: "Editorial Design, Publication Layout, Medical & Health Communication, Information Design",
    servicesAr: "تصميم التحرير والنشر، تنسيق المطبوعات، التواصل الطبي والصحي، تصميم المعلومات",
    overviewEn:
      "Designed a comprehensive, informative brochure for Baby Cord, focusing on stem cell preservation and medical banking services. The project required translating sensitive healthcare concepts and complex medical information into a clear, reassuring, and visually accessible print layout for prospective parents.",
    overviewAr:
      "تصميم كتيب معلوماتي شامل لشركة 'بيبي كورد'، يركز على خدمات حفظ الخلايا الجذعية والبنوك الطبية. تطلب المشروع تحويل المفاهيم الصحية الدقيقة والمعلومات الطبية المعقدة إلى تصميم مطبوع واضح، مُطمئن، وسهل الفهم للوالدين المرتقبين."
  },
  { 
    id: "biolab",
    nameEn: "BioLab Saudi",
    nameAr: "BioLab Saudi",
    thumbnail: bioLabModules['../assets/projects/BioLab/image1.png'],
    gallery: [
      bioLabModules['../assets/projects/BioLab/image2.jpeg'],
      bioLabModules['../assets/projects/BioLab/image3.jpeg'],
      bioLabModules['../assets/projects/BioLab/image4.jpeg'],
      bioLabModules['../assets/projects/BioLab/image5.jpeg'],
      bioLabModules['../assets/projects/BioLab/image6.jpeg'],
      bioLabModules['../assets/projects/BioLab/image7.jpeg'],
    ],
    clientEn: "Biolab Saudi Arabia | Annual Social Media Creative Direction",
    clientAr: "Biolab Saudi Arabia | الإدارة الإبداعية السنوية لوسائل التواصل الاجتماعي",
    overviewEn:
      "Managed the end-to-end visual strategy for Biolab KSA’s social media presence over a full calendar year. My role focused on transforming wellness packages into engaging, 'patient-first' visual content. By following the brand guide across Instagram, Facebook and Google Ads, I helped reinforce Biolab’s position as a leader in the Kingdom’s healthcare lab.",
    overviewAr:
      "إدارة الاستراتيجية البصرية الشاملة للتواجد الرقمي لمختبرات 'بيولاب' في المملكة العربية السعودية عبر منصات التواصل الاجتماعي على مدار عام كامل. تركزت مسؤوليتي على تحويل الباقات الصحية إلى محتوى بصري جذاب يضع 'المريض أولاً'. ومن خلال الالتزام بدليل العلامة التجارية عبر إنستغرام، وفيسبوك، وإعلانات جوجل، ساهمتُ في ترسيخ مكانة 'بيولاب' كمركز رائد للمختبرات الطبية في المملكة."
  },
  { 
    id: "capitalbank",
    nameEn: "Capital Bank | Annual Report",
    nameAr: "Capital Bank | التقرير السنوي",
    thumbnail: capitalBankModules['../assets/projects/CapitalBank/image1.jpeg'],
    gallery: [
      capitalBankModules['../assets/projects/CapitalBank/image2.jpeg'],
      capitalBankModules['../assets/projects/CapitalBank/image3.jpeg'],
      capitalBankModules['../assets/projects/CapitalBank/image4.jpeg'],
      capitalBankModules['../assets/projects/CapitalBank/image5.jpeg'],
      capitalBankModules['../assets/projects/CapitalBank/image6.jpeg'],
      capitalBankModules['../assets/projects/CapitalBank/image7.jpeg'],
    ],
    clientEn: "Editorial Design | Corporate Publication",
    clientAr: "Editorial Design | Corporate Publication",
    servicesEn: "Editorial Design, Publication Layout, Information Design, Corporate Identity Assets",
    servicesAr: "تصميم التحرير والنشر، تنسيق المطبوعات، تصميم المعلومات، عناصر الهوية المؤسسية",
    overviewEn:
      "Designed the annual report for Capital Bank, focusing on a professional editorial layout that presents corporate information in a clear, structured, and visually consistent way. The design balances typography, imagery, and information hierarchy to create a polished publication that reflects the bank’s corporate identity and supports easy navigation through its content.",
    overviewAr:
      "تصميم التقرير السنوي لـ 'كابيتال بنك' بالتركيز على نسق تحريري احترافي يعرض المعلومات المؤسسية بأسلوب واضح ومُنظّم ومتناسق بصرياً. يوازن التصميم بين الخطوط، والصور، والهيكلية البصرية للمعلومات لإنتاج مطبوعة رفيعة المستوى تعكس الهوية المؤسسية للبنك وتتيح تصفح المحتوى بمرونة وسهولة."
  },
  {
    id: "catrion",
    nameEn: "Catrion | ESG Report",
    nameAr: "Catrion | ESG Report",
    thumbnail: catrionModules['../assets/projects/Catrion/image1.jpeg'],
    gallery: [
      catrionModules['../assets/projects/Catrion/image2.jpeg'],
      catrionModules['../assets/projects/Catrion/image3.jpeg'],
      catrionModules['../assets/projects/Catrion/image4.jpeg'],
      catrionModules['../assets/projects/Catrion/image5.jpeg'],
      catrionModules['../assets/projects/Catrion/image6.jpeg'],
      catrionModules['../assets/projects/Catrion/image7.jpeg'],
      catrionModules['../assets/projects/Catrion/image8.jpeg'],
      catrionModules['../assets/projects/Catrion/image9.jpeg'],
      catrionModules['../assets/projects/Catrion/image10.jpeg'],
      catrionModules['../assets/projects/Catrion/image11.jpeg'],
      catrionModules['../assets/projects/Catrion/image12.jpeg'],
    ],
    clientEn: "Catrion",
    clientAr: "Catrion",
    servicesEn: "Editorial Design | Sustainability Reporting | Corporate Communication",
    servicesAr: "تصميم التحرير والنشر، تقارير الاستدامة، التواصل المؤسسي",
    overviewEn:
      "Designed the Catrion ESG Report to communicate the company’s environmental, social, and governance initiatives through a clear, engaging, and visually structured editorial layout. The design combines corporate styling, impactful imagery, infographics, and data visualization to present complex information in an accessible and cohesive format, reflecting Catrion’s commitment to responsible business practices and sustainable growth.",
    overviewAr:
      "تصميم تقرير الحوكمة البيئية والاجتماعية وحوكمة الشركات لشركة 'كاتريون' لاستعراض مبادراتها في هذه المجالات بأسلوب تحريري واضح وجذاب ومنظم بصرياً. يدمج التصميم بين الطابع المؤسسي، والصور المؤثرة، والإنفوجرافيك، وتجسيد البيانات بصرياً لتقديم المعلومات المعقدة بأسلوب سلس ومترابط، بما يعكس التزام 'كاتريون' بممارسات الأعمال المسؤولة والنمو المستدام."
  },
  {
    id: "gizbooklets",
    nameEn: "GIZ Booklets | Operational Guidebook Design",
    nameAr: "GIZ Booklets | تصميم الدليل التشغيلي",
    thumbnail: gizModules['../assets/projects/GIZBooklet/image3.png'],
    gallery: [
      gizModules['../assets/projects/GIZBooklet/image1.png'],
      gizModules['../assets/projects/GIZBooklet/image2.png'],
      gizModules['../assets/projects/GIZBooklet/image4.png'],
      gizModules['../assets/projects/GIZBooklet/image5.png'],
      gizModules['../assets/projects/GIZBooklet/image6.png'],
      gizModules['../assets/projects/GIZBooklet/image7.png'],
      gizModules['../assets/projects/GIZBooklet/image8.png'],
    ],
    clientEn: "GIZ (Deutsche Gesellschaft für Internationale Zusammenarbeit)",
    clientAr: "GIZ (الوكالة الألمانية للتعاون الدولي)",
    servicesEn: "Editorial Design, Custom Vector Illustration, Information Design, Print Layout",
    servicesAr: "تصميم تحريري، رسوم متجهية مخصصة، تصميم معلومات، تخطيط طباعة",
    overviewEn:
      "Designed a comprehensive operational guidebook for GIZ focusing on the management, operation, and maintenance of waste collection vehicles. The goal was to transform complex technical, environmental, and operational protocols into an engaging, structured, and visually accessible format.",
    overviewAr:
      "تصميم دليل تشغيلي شامل لصالح الوكالة الألمانيّة للتعاون الدولي (GIZ)، يركز على إدارة وتشغيل وصيانة مركبات جمع النفايات. تمثل الهدف في تحويل البروتوكولات الفنية والبيئية والتشغيلية المعقدة إلى تصميم جذاب، مُنظم، وسهل الاستخدام بصرياً",
  },
  {
    id: "globaltribes",
    nameEn: "Global Tribes | UI/UX",
    nameAr: "Global Tribes | UI/UX",
    thumbnail: globalTribesModules['../assets/projects/GlobalTribes/image1.png'],
    gallery: [
      globalTribesModules['../assets/projects/GlobalTribes/image2.jpeg'],
      globalTribesModules['../assets/projects/GlobalTribes/image3.jpeg'],
      globalTribesModules['../assets/projects/GlobalTribes/image4.jpeg'],
      globalTribesModules['../assets/projects/GlobalTribes/image5.jpeg'],
      globalTribesModules['../assets/projects/GlobalTribes/image6.jpeg'],
    ],
    clientEn: "Global Tribes",
    clientAr: "Global Tribes",
    overviewEn:
      "My first project with figma & UI/UX, the client asked for a website based on the brand guidelines, and to be responsive.",
    overviewAr:
      "تصميم تقرير الحوكمة البيئية والاجتماعية وحوكمة الشركات لشركة 'كاتريون' لاستعراض مبادراتها في هذه المجالات بأسلوب تحريري واضح وجذاب ومنظم بصرياً. يدمج التصميم بين الطابع المؤسسي، والصور المؤثرة، والإنفوجرافيك، وتجسيد البيانات بصرياً لتقديم المعلومات المعقدة بأسلوب سلس ومترابط، بما يعكس التزام 'كاتريون' بممارسات الأعمال المسؤولة والنمو المستدام."
  },
  {
    id: "jreds",
    nameEn: "The Aqaba Heritage | JREDS Publication & Visual Identity",
    nameAr: "The Aqaba Heritage | JREDS Publication & Visual Identity",
    thumbnail: jredsModules['../assets/projects/JREDS/image1.jpeg'],
    gallery: [
      jredsModules['../assets/projects/JREDS/image2.jpeg'],
      jredsModules['../assets/projects/JREDS/image3.jpeg'],
      jredsModules['../assets/projects/JREDS/image4.jpeg'],
    ],
    clientEn: "JREDS (Jordan Royal Ecological Diving Society)",
    clientAr: "JREDS (Jordan Royal Ecological Diving Society)",
    servicesEn: "Editorial Design, Publication Layout, Environmental Communication, Brand Heritage Design",
    servicesAr: "تصميم التحرير والنشر، تنسيق المطبوعات، التواصل البيئي، تصميم الهوية التراثية للعلامة التجارية",
    overviewEn:
      "Designed a heritage-focused publication and visual collateral for the Jordan Royal Ecological Diving Society (JREDS). The project celebrates and documents the rich marine, cultural, and environmental heritage of Aqaba, balancing conservation storytelling with a compelling editorial layout.",
    overviewAr:
      "تصميم مطبوعة ومواد بصرية تركز على التراث لصالح الجمعية الملكية لحماية البيئة البحرية. يحتفي المشروع بالتراث البحري والثقافي والبيئي الغني لمدينة العقبة ويوثقه، مع إحداث توازن بين السرد البيئي التوعوي والتنسيق التحريري الجذاب."
  },
  {
    id: "kemapco",
    nameEn: "KEMAPCO | Corporate & Technical Publication Design",
    nameAr: "KEMAPCO | Corporate & Technical Publication Design",
    thumbnail: kemapcoModules['../assets/projects/KEMAPCO/image1.png'],
    gallery: [
      kemapcoModules['../assets/projects/KEMAPCO/image2.jpeg'],
      kemapcoModules['../assets/projects/KEMAPCO/image3.jpeg'],
      kemapcoModules['../assets/projects/KEMAPCO/image4.jpeg'],
      kemapcoModules['../assets/projects/KEMAPCO/image5.jpeg'],
      kemapcoModules['../assets/projects/KEMAPCO/image6.jpeg'],
      kemapcoModules['../assets/projects/KEMAPCO/image7.jpeg'],
      kemapcoModules['../assets/projects/KEMAPCO/image8.jpeg'],
      kemapcoModules['../assets/projects/KEMAPCO/image9.jpeg'],
    ],
    clientEn: "KEMAPCO (Arab Potash Company Subsidiary)",
    clientAr: "KEMAPCO (Arab Potash Company Subsidiary)",
    servicesEn: "Editorial Design, Corporate Publication, Information Design, Annual Report / Corporate Collateral",
    servicesAr: "تصميم التحرير والنشر، المطبوعات المؤسسية، تصميم المعلومات، التقارير السنوية والمواد الترويجية المؤسسية",
    overviewEn:
      "Designed comprehensive corporate and technical publications for KEMAPCO, a leader in the specialty fertilizers and industrial chemical sector. The project focused on structuring complex corporate data, sustainability initiatives, and operational milestones into an engaging, high-end editorial layout.",
    overviewAr:
      "تصميم مطبوعات مؤسسية وفنية شاملة لشركة 'كيمابكو'، إحدى الشركات الرائدة في قطاع الأسمدة المتخصصة والمواد الكيميائية الصناعية. ركّز المشروع على تنظيم البيانات المؤسسية المعقدة، ومبادرات الاستدامة، والإنجازات التشغيلية ضمن تصميم تحريري فاخر وجذاب."
  },
  {
    id: "logos",
    nameEn: "Brand Identity & Logo Design Collection",
    nameAr: "Brand Identity & Logo Design Collection",
    thumbnail: logosCollectionModules['../assets/projects/LogosCollection/image1.jpeg'],
    gallery: [
      logosCollectionModules['../assets/projects/LogosCollection/image1.jpeg'],
    ],
    servicesEn: "Brand Identity, Logo Design",
    servicesAr: "الهوية التجارية، تصميم الشعارات",
    overviewEn:
      "A curated collection of custom logo designs and visual identities crafted for diverse clients spanning corporate sectors, institutions, and independent businesses. Each mark was built on a foundation of strategic research, simplicity, and versatility to ensure a timeless brand presence across both digital and print mediums.",
    overviewAr:
      "تشكيلة مختارة من الشعارات المبتكرة والهويات البصرية المصممة لعملاء متنوعين عبر القطاعات المؤسسية، والهيئات، والأعمال المستقلة. بُني كل شعار على أساس من البحث الاستراتيجي، والبساطة، والمرونة، لضمان حضور دائم ومستدام للعلامة التجارية عبر الوسائط الرقمية والمطبوعة."
  },
  {
    id: "maaden",
    nameEn: "Maaden Sustainability Report",
    nameAr: "Maaden Sustainability Report",
    thumbnail: maadenModules['../assets/projects/Maaden/image1.jpeg'],
    gallery: [
      maadenModules['../assets/projects/Maaden/image2.jpeg'],
      maadenModules['../assets/projects/Maaden/image3.jpeg'],
      maadenModules['../assets/projects/Maaden/image4.jpeg'],
      maadenModules['../assets/projects/Maaden/image5.jpeg'],
      maadenModules['../assets/projects/Maaden/image6.jpeg'],
      maadenModules['../assets/projects/Maaden/image7.jpeg'],
    ],
    clientEn: "Maaden",
    clientAr: "معادن",
    overviewEn:
      "Ma'aden, also known as the Saudi Arabian Mining Co., is a Saudi state-owned mining company headquartered in Riyadh. It was formed as a Saudi joint stock company on 23 March 1997 for the purpose of facilitating the development of Saudi Arabia's mineral resources.",
    overviewAr:
      "تعدّ شركة 'معادن' (شركة التعدين العربية السعودية) شركة تعدين مملوكة للحكومة السعودية ومقرها الرئيسي في الرياض. تأسست كشركة مساهمة سعودية في 23 مارس 1997 بهدف تسهيل وتطوير الموارد المعدنية في المملكة العربية السعودية."
  },
  {
    id: "musharbash",
    nameEn: "Musharbash Exchange | TVC",
    nameAr: "Musharbash Exchange | TVC",
    thumbnail: musharbashModules['../assets/projects/Musharbash/image1.jpeg'],
    gallery: [
      musharbashModules['../assets/projects/Musharbash/media1.mp4'],
    ],
    clientEn: "Musharbash Exchange",
    clientAr: "مشربش للصرافة",
    servicesEn: "Visual Campaign Assets, Art Direction, Video Production Assets, Graphic Design",
    servicesAr: "عناصر الحملات البصرية، الإدارة الفنية، عناصر الإنتاج المرئي والفيديو، التصميم الجرافيكي",
    overviewEn:
      "Developed campaign artwork, art direction assets, and key visual elements for the Musharbash Exchange Television Commercial (TVC) campaign.",
    overviewAr:
      "تطوير الأعمال الفنية للحملة، وعناصر الإدارة الفنية، والعناصر البصرية الرئيسية للحملة الإعلانية التلفزيونية الخاصة بشركة 'مشربش للصرّافة'."
  },
  {
    id: "rochemircerabooth",
    nameEn: "Architectural Exhibition Booths & Spatial Environments",
    nameAr: "أجنحة المعارض المعمارية والبيئات المكانية (منصة ميرسيرا - روش)",
    thumbnail: rocheMirceraBoothModules['../assets/projects/Roche-MirceraBooth/image1.jpeg'],
    gallery: [
      rocheMirceraBoothModules['../assets/projects/Roche-MirceraBooth/image2.jpeg'],
      rocheMirceraBoothModules['../assets/projects/Roche-MirceraBooth/image3.jpeg'],
      rocheMirceraBoothModules['../assets/projects/Roche-MirceraBooth/image4.jpeg'],
      rocheMirceraBoothModules['../assets/projects/Roche-MirceraBooth/image5.jpeg'],
      rocheMirceraBoothModules['../assets/projects/Roche-MirceraBooth/image6.jpeg'],
    ],
    clientEn: "Roche",
    clientAr: "Roche",
    servicesEn: "Spatial Design, Tradeshow Booth Concepts, Large-Format Environmental Graphics, Visual Architecture",
    servicesAr: "التصميم المكاني، مفاهيم أجنحة المعارض التجارية، الرسومات البيئية كبيرة الحجم، العمارة البصرية",
    overviewEn:
      "Designed full-concept exhibition booths and environmental trade displays. The project focused on transforming brand identities into tangible 3D physical spaces, creating functional, visually striking environments tailored for trade shows, corporate expos, and high-foot-traffic industry events.",
    overviewAr:
      "تصميم أجنحة معارض متكاملة المفاهيم ومنصات عرض بيئية. ركّز المشروع على تحويل الهويات التجارية إلى مساحات واقعية ثلاثية الأبعاد، وإنشاء بيئات عملية ومذهلة بصرياً صُممت خصيصاً للمعارض التجارية، والمؤتمرات المؤسسية، والفعاليات ذات الإقبال الجماهيري العالي."
  },
  {
    id: "unicef1",
    nameEn: "UNICEF | Private Sector Engagement In Immunization",
    nameAr: " — مشاركة القطاع الخاص في برامج التحصين واللقاحات",
    thumbnail: unicefPrivateSectorEngagementInImmunizationModules['../assets/projects/UNICEF-PrivateSectorEngagementInImmunization/image1.jpeg'],
    gallery: [
      unicefPrivateSectorEngagementInImmunizationModules['../assets/projects/UNICEF-PrivateSectorEngagementInImmunization/image2.jpeg'],
      unicefPrivateSectorEngagementInImmunizationModules['../assets/projects/UNICEF-PrivateSectorEngagementInImmunization/image3.jpeg'],
      unicefPrivateSectorEngagementInImmunizationModules['../assets/projects/UNICEF-PrivateSectorEngagementInImmunization/image4.jpeg'],
      unicefPrivateSectorEngagementInImmunizationModules['../assets/projects/UNICEF-PrivateSectorEngagementInImmunization/image5.jpeg'],
      unicefPrivateSectorEngagementInImmunizationModules['../assets/projects/UNICEF-PrivateSectorEngagementInImmunization/image6.jpeg'],
    ],
    clientEn: "UNICEF",
    clientAr: "UNICEF",
    servicesEn: "Editorial Design, Publication Layout, Information Design, Corporate Identity Assets",
    servicesAr: "تصميم التحرير والنشر، تنسيق المطبوعات، تصميم المعلومات، عناصر الهوية المؤسسية",
    overviewEn:
      "Designed a comprehensive publication and communication collateral for UNICEF focusing on strategies for private sector engagement in public health immunization initiatives. The project required translating complex institutional data, partnership frameworks, and public health guidelines into an engaging, structured, and visually compelling layout.",
    overviewAr:
      "تصميم مطبوعة شاملة ومواد تواصل إعلامي لصالح منظمة 'اليونيسف'، تسلط الضوء على استراتيجيات إشراك القطاع الخاص في مبادرات الصحة العامة للتحصين. تطلب المشروع تحويل البيانات المؤسسية المعقدة، وأطر الشراكات، وأدلة الصحة العامة إلى تصميم جذاب، منظم، ومؤثر بصرياً."
  },
  {
    id: "unicef2",
    nameEn: "UNICEF | School Health Manual",
    nameAr: "UNICEF | School Health Manual",
    thumbnail: unicefSchoolHealthManualModules['../assets/projects/UNICEF-SchoolHealthManual/image1.jpeg'],
    gallery: [
      unicefSchoolHealthManualModules['../assets/projects/UNICEF-SchoolHealthManual/image2.jpeg'],
      unicefSchoolHealthManualModules['../assets/projects/UNICEF-SchoolHealthManual/image3.jpeg'],
      unicefSchoolHealthManualModules['../assets/projects/UNICEF-SchoolHealthManual/image4.jpeg'],
      unicefSchoolHealthManualModules['../assets/projects/UNICEF-SchoolHealthManual/image5.jpeg'],
      unicefSchoolHealthManualModules['../assets/projects/UNICEF-SchoolHealthManual/image6.jpeg'],
    ],
    clientEn: "UNICEF",
    clientAr: "UNICEF",
    servicesEn: "Editorial Design, Publication Layout",
    servicesAr: "تصميم التحرير والنشر، تنسيق المطبوعات",
    overviewEn:
      "A publication design project developed for UNICEF, focused on presenting school health information in a clear, structured, and accessible format. The manual combines editorial layout, typography, and visual hierarchy to organize educational content into a practical resource for its intended audience. The design prioritizes readability, consistency, and ease of navigation, ensuring that information can be understood and referenced efficiently throughout the publication.",
    overviewAr:
      "مشروع تصميم مطبوعة تم تطويره لصالح منظمة 'اليونيسف'، يهدف إلى تقديم معلومات الصحة المدرسية بأسلوب واضح ومُنظم وسهل الوصول. يدمج الدليل بين التنسيق التحريري، وتنسيق الخطوط، والتدرج البصري لتنظيم المحتوى التعليمي في مرجع عملي يستهدف الفئة المعنية. يعطي التصميم الأولوية لسهولة القراءة، والاتساق، وسلاسة التنقل، مما يضمن فهم المعلومات والرجوع إليها بكفاءة."
  },
];
