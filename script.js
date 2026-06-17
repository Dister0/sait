/* =============================================
   Dulaty University — IS Department JS
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* --- Theme switcher --- */
  const themeToggle = document.querySelector('.theme-toggle');
  const savedTheme = localStorage.getItem('site-theme') || 'light';

  function setTheme(theme) {
    const isDark = theme === 'dark';
    document.body.classList.toggle('dark-theme', isDark);

    if (themeToggle) {
      themeToggle.textContent = isDark ? 'Light' : 'Dark';
      themeToggle.setAttribute('aria-pressed', String(isDark));
    }

    localStorage.setItem('site-theme', theme);
  }

  setTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const nextTheme = document.body.classList.contains('dark-theme') ? 'light' : 'dark';
      setTheme(nextTheme);
    });
  }

  /* --- Local language buttons --- */
  const langButtons = document.querySelectorAll('.lang-btn');
  const savedLang = localStorage.getItem('site-lang') || 'ru';
  const originalTextNodes = new Map();
  const originalTitle = document.title;
  const translations = {
    kz: {
      'Информационные системы — Университет Дулати': 'Ақпараттық жүйелер — Дулати университеті',
      'г. Тараз, ул. Толе би, 60 · 8 (7262) 43-24-02': 'Тараз қ., Төле би к-сі, 60 · 8 (7262) 43-24-02',
      'Информационные системы': 'Ақпараттық жүйелер',
      'О нас': 'Біз туралы',
      'Факультеты': 'Факультеттер',
      'Поступающим': 'Талапкерлерге',
      'Студентам': 'Студенттерге',
      'Наука': 'Ғылым',
      'Контакты': 'Байланыс',
      'Технологический факультет · Кафедра': 'Технологиялық факультет · Кафедра',
      'Преподавателей': 'Оқытушылар',
      'Программ': 'Бағдарламалар',
      'Уровня обучения': 'Оқу деңгейі',
      'Главная': 'Басты бет',
      'Технологический факультет': 'Технологиялық факультет',
      'Описание': 'Сипаттама',
      'Преподаватели': 'Оқытушылар',
      'Программы': 'Бағдарламалар',
      'Узнать больше →': 'Толығырақ →',
      'Программа двойного диплома': 'Қос диплом бағдарламасы',
      'Первый успех программы двойного диплома': 'Қос диплом бағдарламасының алғашқы жетістігі',
      'Партнёры кафедры': 'Кафедра серіктестері',
      'Отзывы партнёров о выпускниках': 'Серіктестердің түлектер туралы пікірлері',
      'Заведующий кафедрой': 'Кафедра меңгерушісі',
      'Ассоциированный профессор': 'Қауымдастырылған профессор',
      'Профессор': 'Профессор',
      'Старший преподаватель': 'Аға оқытушы',
      'Заведующий лабораторией': 'Зертхана меңгерушісі',
      'Бакалавриат': 'Бакалавриат',
      'Магистратура': 'Магистратура',
      'Администрирование, управление и защита компьютерных систем и сетей': 'Компьютерлік жүйелер мен желілерді әкімшілендіру, басқару және қорғау',
      'Информационные системы и технологии': 'Ақпараттық жүйелер және технологиялар',
      'Программная инженерия': 'Бағдарламалық инженерия',
      'Корпоративные информационные системы и технологии': 'Корпоративтік ақпараттық жүйелер және технологиялар',
      'План развития': 'Даму жоспары',
      'Модель выпускника': 'Түлек моделі',
      'Свидетельства о специализированной аккредитации': 'Мамандандырылған аккредиттеу куәліктері',
      'Имя сотрудника': 'Қызметкердің аты-жөні',
      'Должность': 'Лауазымы',
      'Телефон': 'Телефон',
      'Декан факультета': 'Факультет деканы',
      'Зам. декана по учебной и методической работе': 'Оқу-әдістемелік жұмыс жөніндегі декан орынбасары',
      'Зам. декана по научной работе': 'Ғылыми жұмыс жөніндегі декан орынбасары',
      'Зам. декана по воспитательной работе': 'Тәрбие жұмысы жөніндегі декан орынбасары',
      'Адрес': 'Мекенжай',
      'Телефоны': 'Телефондар',
      'Заведующий': 'Меңгеруші',
      'Факультет': 'Факультет',
      'Технологический': 'Технологиялық',
      '3 бакалавр. · 2 магистр.': '3 бакалавр · 2 магистр',
      '18 специалистов': '18 маман',
      'Специализированная аккредитация': 'Мамандандырылған аккредиттеу',
      'Образовательные программы': 'Білім беру бағдарламалары',
      'Двойной диплом': 'Қос диплом',
      'Политехн. ун-т Браганса, Португалия': 'Браганса политехникалық университеті, Португалия',
      'Сертификаты': 'Сертификаттар',
      'Поступление бакалавриат': 'Бакалавриатқа түсу',
      'Поступление магистратура': 'Магистратураға түсу',
      'Научные проекты': 'Ғылыми жобалар',
      'Контакты университета': 'Университет байланыстары',
      'Об университете': 'Университет туралы',
      'Миссия': 'Миссия',
      'История': 'Тарих',
      'Рейтинги': 'Рейтингтер',
      'Вакансии': 'Бос орындар',
      'Инструкции': 'Нұсқаулықтар',
      'Стипендии': 'Стипендиялар',
      'Общежитие': 'Жатақхана',
      'Медпомощь': 'Медициналық көмек',
      'г. Тараз, ул. Толе би, 60': 'Тараз қ., Төле би к-сі, 60',
      'Пн–Пт, 9:00–18:00': 'Дс–Жм, 9:00–18:00',
      '© 2026 Dulaty University. Все права защищены.': '© 2026 Dulaty University. Барлық құқықтар қорғалған.',
      'Кафедра «Информационные системы»': '«Ақпараттық жүйелер» кафедрасы'
    },
    en: {
      'Информационные системы — Университет Дулати': 'Information Systems — Dulaty University',
      'г. Тараз, ул. Толе би, 60 · 8 (7262) 43-24-02': 'Taraz, Tole bi St., 60 · 8 (7262) 43-24-02',
      'Информационные системы': 'Information Systems',
      'О нас': 'About',
      'Факультеты': 'Faculties',
      'Поступающим': 'Admissions',
      'Студентам': 'Students',
      'Наука': 'Science',
      'Контакты': 'Contacts',
      'Технологический факультет · Кафедра': 'Faculty of Technology · Department',
      'Преподавателей': 'Teachers',
      'Программ': 'Programs',
      'Уровня обучения': 'Study levels',
      'Главная': 'Home',
      'Технологический факультет': 'Faculty of Technology',
      'Описание': 'Description',
      'Преподаватели': 'Teachers',
      'Программы': 'Programs',
      'Узнать больше →': 'Learn more →',
      'Программа двойного диплома': 'Double Degree Program',
      'Первый успех программы двойного диплома': 'First success of the double degree program',
      'Партнёры кафедры': 'Department partners',
      'Отзывы партнёров о выпускниках': 'Partner reviews about graduates',
      'Заведующий кафедрой': 'Head of Department',
      'Ассоциированный профессор': 'Associate Professor',
      'Профессор': 'Professor',
      'Старший преподаватель': 'Senior Lecturer',
      'Заведующий лабораторией': 'Laboratory Head',
      'Бакалавриат': 'Bachelor',
      'Магистратура': 'Master',
      'Администрирование, управление и защита компьютерных систем и сетей': 'Administration, management and protection of computer systems and networks',
      'Информационные системы и технологии': 'Information Systems and Technologies',
      'Программная инженерия': 'Software Engineering',
      'Корпоративные информационные системы и технологии': 'Corporate Information Systems and Technologies',
      'План развития': 'Development plan',
      'Модель выпускника': 'Graduate model',
      'Свидетельства о специализированной аккредитации': 'Specialized accreditation certificates',
      'Имя сотрудника': 'Employee name',
      'Должность': 'Position',
      'Телефон': 'Phone',
      'Декан факультета': 'Dean of the Faculty',
      'Зам. декана по учебной и методической работе': 'Deputy Dean for academic and methodological work',
      'Зам. декана по научной работе': 'Deputy Dean for research',
      'Зам. декана по воспитательной работе': 'Deputy Dean for student affairs',
      'Адрес': 'Address',
      'Телефоны': 'Phones',
      'Заведующий': 'Head',
      'Факультет': 'Faculty',
      'Технологический': 'Technology',
      '3 бакалавр. · 2 магистр.': '3 bachelor · 2 master',
      '18 специалистов': '18 specialists',
      'Специализированная аккредитация': 'Specialized accreditation',
      'Образовательные программы': 'Educational programs',
      'Двойной диплом': 'Double degree',
      'Политехн. ун-т Браганса, Португалия': 'Polytechnic Institute of Braganca, Portugal',
      'Сертификаты': 'Certificates',
      'Поступление бакалавриат': 'Bachelor admission',
      'Поступление магистратура': 'Master admission',
      'Научные проекты': 'Research projects',
      'Контакты университета': 'University contacts',
      'Об университете': 'About the university',
      'Миссия': 'Mission',
      'История': 'History',
      'Рейтинги': 'Rankings',
      'Вакансии': 'Vacancies',
      'Инструкции': 'Instructions',
      'Стипендии': 'Scholarships',
      'Общежитие': 'Dormitory',
      'Медпомощь': 'Medical care',
      'г. Тараз, ул. Толе би, 60': 'Taraz, Tole bi St., 60',
      'Пн–Пт, 9:00–18:00': 'Mon–Fri, 9:00–18:00',
      '© 2026 Dulaty University. Все права защищены.': '© 2026 Dulaty University. All rights reserved.',
      'Кафедра «Информационные системы»': 'Department of Information Systems'
    }
  };

  function normalizeText(text) {
    return text.replace(/\s+/g, ' ').trim();
  }

  function translatedText(original, lang) {
    if (lang === 'ru') return original;

    const normalized = normalizeText(original);
    const iconMatch = normalized.match(/^([^\p{L}\p{N}]+)\s*(.+)$/u);
    const icon = iconMatch ? iconMatch[1] + ' ' : '';
    const key = iconMatch ? iconMatch[2] : normalized;
    const translated = translations[lang] && translations[lang][key];

    return translated ? icon + translated : original;
  }

  function applyLanguage(lang) {
    document.title = lang === 'ru'
      ? originalTitle
      : translations[lang][normalizeText(originalTitle)] || originalTitle;

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || !normalizeText(node.nodeValue)) return NodeFilter.FILTER_REJECT;
        if (parent.closest('script, style, .lang-switch')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach(node => {
      if (!originalTextNodes.has(node)) originalTextNodes.set(node, node.nodeValue);

      const original = originalTextNodes.get(node);
      const leading = original.match(/^\s*/)[0];
      const trailing = original.match(/\s*$/)[0];
      const translated = translatedText(original, lang);

      node.nodeValue = leading + normalizeText(translated) + trailing;
    });
  }

  function setLanguage(lang) {
    document.documentElement.lang = lang;
    langButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    applyLanguage(lang);
    localStorage.setItem('site-lang', lang);
  }

  setLanguage(savedLang);

  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.dataset.lang);
    });
  });

  /* --- Вкладки --- */
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;

      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const panel = document.getElementById('tab-' + target);
      if (panel) {
        panel.classList.add('active');
        panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  });

  /* --- Мобильное меню --- */
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      toggle.textContent = nav.classList.contains('open') ? '✕' : '☰';
    });
  }

  /* --- Плавный счётчик для статистики в hero --- */
  /* --- Scroll-reveal для карточек --- */
  if ('IntersectionObserver' in window) {
    const cards = document.querySelectorAll(
      '.teacher-card, .program-card, .news-card, .partner-card, .doc-item'
    );

    cards.forEach(c => {
      c.style.opacity = '0';
      c.style.transform = 'translateY(16px)';
      c.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    });

    const revealObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = 'translateY(0)';
          revealObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });

    cards.forEach(c => revealObs.observe(c));
  }

  /* --- Sticky nav активная ссылка --- */
  const navLinks = document.querySelectorAll('.nav-link[data-section]');

  if (navLinks.length) {
    const sectionObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const id = e.target.id;
          navLinks.forEach(l => {
            l.classList.toggle('active', l.dataset.section === id);
          });
        }
      });
    }, { rootMargin: '-40% 0px -40% 0px' });

    navLinks.forEach(l => {
      const sec = document.getElementById(l.dataset.section);
      if (sec) sectionObs.observe(sec);
    });
  }

  /* --- Закрытие мобильного меню при клике вне --- */
  document.addEventListener('click', e => {
    if (nav && toggle && !nav.contains(e.target) && !toggle.contains(e.target)) {
      nav.classList.remove('open');
      toggle.textContent = '☰';
    }
  });

});
