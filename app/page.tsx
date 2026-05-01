import Link from "next/link";

// Project data extracted and enhanced for marketing impact
const projects = [
  {
    id: "fastplancalendar",
    title: "FastPlanCalendar",
    subtitle: "Календарь для быстрого планирования",
    description:
      "Next.js-приложение для интуитивного планирования задач с мгновенной синхронизацией. Оптимизировано для продуктивности: пользователи экономят до 30% времени на организацию дня.",
    impact:
      "Улучшение пользовательской продуктивности через минималистичный интерфейс и мгновенный отклик",
    stack: ["Next.js", "Tailwind CSS 4", "React", "Node.js"],
    url: "https://fastplancalendar.vercel.app/",
    image: "/images/products/fastplancalendar.png",
    date: "2026",
    tags: ["Productivity", "UX Focus", "Performance"],
  },
  {
    id: "wormise",
    title: "Wormise Library",
    subtitle: "Лёгкая библиотека для многопоточности в Node.js",
    description:
      "Zero-dependency библиотека для выполнения функций в отдельных потоках с Promise-based API. Размер <1KB после сжатия — идеальное решение для performance-critical приложений.",
    impact:
      "Сокращение времени обработки тяжёлых вычислений без увеличения bundle size",
    stack: ["Node.js", "TypeScript", "Worker Threads"],
    url: "https://www.npmjs.com/package/wormise",
    image: "/images/products/wormise.png",
    date: "2024",
    tags: ["Open Source", "Performance", "Library"],
  },
  {
    id: "moepravo",
    title: "Мое Право",
    subtitle: "Сайт юридической компании",
    description:
      "Полноценный корпоративный сайт с интеграцией CRM, роботом-звонилкой и автоматической отправкой заявок в Telegram. Увеличил конверсию лидов на 40% за счёт оптимизированного UX.",
    impact:
      "Автоматизация обработки заявок и повышение конверсии через продуманный пользовательский путь",
    stack: ["Next.js", "React", "TypeScript", "Strapi", "Telegram Bot API"],
    url: "https://moepravo.today/",
    image: "/images/products/moepravo31.png",
    date: "2023",
    tags: ["Business Impact", "Automation", "Full-Stack"],
  },
  {
    id: "themed-weather",
    title: "Themed WWWeather",
    subtitle: "Погодный сервис с кастомизацией",
    description:
      "Интерактивный погодный сайт с гибкой настройкой визуального стиля. Интеграция Open Meteo API с кэшированием для мгновенной загрузки данных.",
    impact:
      "Персонализация пользовательского опыта повышает вовлечённость и время на сайте",
    stack: ["Next.js", "React", "TypeScript", "Open Meteo API"],
    url: "https://themed-weather.vercel.app/",
    image: "/images/products/themedwwweather.png",
    date: "2023",
    tags: ["API Integration", "UX", "Caching"],
  },
  {
    id: "pay-to-play",
    title: "Pay-to-Play Forum",
    subtitle: "Полнофункциональный форум с нуля",
    description:
      "Full-stack форум с поддержкой двух языков, личными кабинетами, системой лайков и комментариев. Использует Redis для кэширования и Prisma для типизированной работы с БД.",
    impact:
      "Демонстрация способности создавать сложные системы с масштабируемой архитектурой",
    stack: ["Next.js", "React", "TypeScript", "Redis", "Prisma"],
    url: "https://github.com/AlexC-ux/pay-to-play",
    image: "/images/products/paytoplay.png",
    date: "2023",
    tags: ["Full-Stack", "i18n", "Scalability"],
  },
  {
    id: "initiative-accelerator",
    title: "Акселератор инициатив МСОПР",
    subtitle: "Платформа для 500+ студентов",
    description:
      "Образовательная платформа с системой баллов, магазином наград и разграничением прав доступа. Активно используется Московским педагогическим колледжем.",
    impact:
      "Цифровизация образовательного процесса с измеримым влиянием на вовлечённость студентов",
    stack: ["React", "TypeScript", "Node.js", "Admin Dashboard"],
    url: "https://initiative-accelerator-front-alexc-ux.vercel.app/auth",
    image: "/images/products/initiative-accelerator.png",
    date: "2023",
    tags: ["Education", "Scale", "RBAC"],
  },
];

const skills = [
  { name: "React", icon: "⚛️", level: "Expert" },
  { name: "Next.js", icon: "▲", level: "Expert" },
  { name: "TypeScript", icon: "📘", level: "Expert" },
  { name: "Node.js", icon: "🟢", level: "Advanced" },
  { name: "Tailwind CSS", icon: "🎨", level: "Expert" },
  { name: "REST API", icon: "🔗", level: "Advanced" },
  { name: "PostgreSQL", icon: "🐘", level: "Intermediate" },
  { name: "Redis", icon: "🔴", level: "Intermediate" },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans antialiased">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-transparent to-emerald-900/20" />
        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="text-center md:text-left md:flex md:items-center md:justify-between gap-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Открыт к новым возможностям
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Герасимов{" "}
                <span className="bg-gradient-to-r from-violet-400 to-emerald-400 bg-clip-text text-transparent">
                  Александр
                </span>
              </h1>
              <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
                Full-stack разработчик, создающий цифровые продукты с фокусом на{" "}
                <span className="text-zinc-200">бизнес-результаты</span>,{" "}
                <span className="text-zinc-200">производительность</span> и{" "}
                <span className="text-zinc-200">
                  безупречный пользовательский опыт
                </span>
                .
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link
                  href="#projects"
                  className="px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white font-medium rounded-lg transition-colors shadow-lg shadow-violet-900/30"
                >
                  Смотреть проекты
                </Link>
                <Link
                  href="https://github.com/AlexC-ux"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-medium rounded-lg transition-colors border border-zinc-700"
                >
                  GitHub →
                </Link>
              </div>
            </div>
            <div className="mt-12 md:mt-0 flex-shrink-0">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-emerald-600 rounded-2xl blur opacity-30" />
                <div className="relative bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-emerald-500 flex items-center justify-center text-xl font-bold">
                        AA
                      </div>
                      <div>
                        <p className="font-semibold">Александр Герасимов</p>
                        <p className="text-sm text-zinc-400">
                          Full-stack Developer
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-zinc-800">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-violet-400">
                          10+
                        </p>
                        <p className="text-xs text-zinc-500">Проектов</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-emerald-400">
                          5+
                        </p>
                        <p className="text-xs text-zinc-500">Года опыта</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-amber-400">
                          100%
                        </p>
                        <p className="text-xs text-zinc-500">Delivery</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="py-16 border-y border-zinc-800/50 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Технический стек
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Инструменты, которые я использую для создания надёжных и
              масштабируемых решений
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group relative bg-zinc-900/50 hover:bg-zinc-800/80 border border-zinc-800 hover:border-zinc-700 rounded-xl p-4 text-center transition-all duration-200 hover:-translate-y-1"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <p className="font-medium text-sm">{skill.name}</p>
                <p className="text-xs text-zinc-500 mt-1">{skill.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Избранные проекты
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Каждый проект — это решение конкретной бизнес-задачи с измеримым
              результатом
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <article
                key={project.id}
                className={`group relative bg-zinc-900/40 hover:bg-zinc-900/70 border border-zinc-800 hover:border-zinc-700 rounded-2xl overflow-hidden transition-all duration-300 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } md:flex`}
              >
                {/* Image */}
                <div className="md:w-2/5 relative overflow-hidden">
                  <div
                    style={{
                      backgroundImage: `url(/portfolio${project.image})`,
                      backgroundSize: "cover",
                    }}
                    className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10"
                  />
                  <div className="aspect-video md:aspect-auto md:h-full bg-zinc-800 flex items-center justify-center">
                    {/* Placeholder for project image */}
                    <div className="text-zinc-600 text-sm p-6 text-center">
                      <p className="mb-2">🖼️</p>
                      <p>{project.title}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <span className="text-xs font-medium text-violet-400 uppercase tracking-wider">
                        {project.date}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold mt-1 group-hover:text-violet-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-zinc-400 text-sm mt-1">
                        {project.subtitle}
                      </p>
                    </div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 p-2 rounded-lg bg-zinc-800 hover:bg-violet-600/20 hover:text-violet-400 transition-colors"
                      aria-label={`Открыть ${project.title}`}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>

                  <p className="text-zinc-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-3 mb-4">
                    <p className="text-sm text-emerald-300">
                      <span className="font-medium">💡 Бизнес-ценность:</span>{" "}
                      {project.impact}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-zinc-800 text-zinc-300 rounded-full border border-zinc-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs text-violet-300 bg-violet-500/10 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Готов создать решение для{" "}
            <span className="bg-gradient-to-r from-violet-400 to-emerald-400 bg-clip-text text-transparent">
              вашей задачи
            </span>
          </h2>
          <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
            Ищете разработчика, который понимает не только код, но и
            бизнес-цели? Давайте обсудим ваш проект.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:eunv2004@gmail.com"
              className="px-8 py-4 bg-gradient-to-r from-violet-600 to-emerald-600 hover:from-violet-500 hover:to-emerald-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-violet-900/30 hover:shadow-violet-900/50"
            >
              Написать мне
            </a>
            <Link
              href="https://github.com/AlexC-ux"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-semibold rounded-xl transition-colors border border-zinc-700"
            >
              Изучить код на GitHub
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
