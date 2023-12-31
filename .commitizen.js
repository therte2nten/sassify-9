"use strict";

module.exports = {

  // Описание типов на русском языке:
  types: [
    { value: "build", name: "build: Сборка проекта или изменения внешних зависимостей" },
    { value: "ci", name: "ci: Настройка CI и работа со скриптами" },
    { value: "docs", name: "docs: Обновление документации" },
    { value: "feat", name: "feat: Добавление нового функционала" },
    { value: "fix", name: "fix: Исправление ошибок" },
    { value: "perf", name: "perf: Изменения направленные на улучшение производительности" },
    { value: "refactor", name: "refactor: Правки кода без исправления ошибок или добавления новых функций" },
    { value: "revert", name: "revert: Откат на предыдущие коммиты" },
    { value: "style", name: "style: Правки по кодстайлу (табы, отступы, точки, запятые и т.д.)" },
    { value: "test", name: "test: Добавление тестов" },
    { value: "config", name: "config: Изменения конфигов" },
    { value: "dependencies", name: "dependencies: Зависимости (добавление, обновление, изменение или удаление)" },
  ],

  // Область. Она характеризует фрагмент кода, которую затронули изменения
  scopes: [
    { name: 'sass' },
    { name: 'sassify' },
    { name: 'sassdoc' },
    { name: 'module' },
    { name: 'git' },
    { name: 'github' },
    { name: 'vscode' },
    { name: 'prefixer' },
    { name: 'helper' },
    { name: 'npm' },
    { name: 'cz' },
  ],

  // Возможность задать спец ОБЛАСТЬ для определенного типа коммита (пример для 'fix')
  /*
  scopeOverrides: {
    fix: [
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */

  // Поменяем дефолтные вопросы
  messages: {
    type: 'Какие изменения вы вносите?',
    scope: '\nВыберите ОБЛАСТЬ, которую вы изменили (опционально):',
    // Спросим если allowCustomScopes в true
    customScope: 'Укажите свою ОБЛАСТЬ:',
    subject: 'Напишите КОРОТКОЕ описание, которое отвечает на вопрос: "Что я сделал в этом коммите?":\n',
    body: 'Напишите ПОДРОБНОЕ описание (опционально). Используйте "|" для новой строки:\n',
    breaking: 'Список BREAKING CHANGES (опционально):\n',
    footer: 'Место для мета данных (тикетов, ссылок и остального). Например: SECRETMRKT-700, SECRETMRKT-800:\n',
    confirmCommit: 'Вас устраивает получившийся коммит?'
  },

  // Разрешим собственную ОБЛАСТЬ
  allowCustomScopes: true,

  // Запрет на Breaking Changes
  allowBreakingChanges: false,

  // Префикс для нижнего колонтитула
  footerPrefix: "МЕТА ДАННЫЕ:",

  // limit subject length
  subjectLimit: 72

};
