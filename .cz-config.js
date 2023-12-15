module.exports = {
  types: [
    { value: 'feat', name: '✨ 新功能' },
    { value: 'fix', name: '🐛 修复 bug' },
    { value: 'docs', name: '📚 文档变更' },
    { value: 'style', name: '💄 代码格式（不影响功能，比如空格、分号等格式修正）' },
    { value: 'refactor', name: '🛠 代码重构（不是新增功能也不是修改 bug 的代码变动）' },
    { value: 'perf', name: '⚡️ 性能优化' },
    { value: 'test', name: '🔧 测试相关' },
    { value: 'chore', name: '🔨 构建过程或辅助工具的变动' },
    { value: 'revert', name: '⏪ 撤销上一次的提交' }
  ],
  // 可以根据需要自定义 scopes
  scopes: [
    ['components', '组件相关'],
    ['hooks', 'hook 相关'],
    ['utils', 'utils 相关'],
    ['styles', '样式相关'],
    ['deps', '项目依赖'],
    ['other', '其他修改'],
    // 如果选择 custom，后面会让你再输入一个自定义的 scope。也可以不设置此项，把后面的 allowCustomScopes 设置为 true
    ['custom', '以上都不是？我要自定义']
  ].map(([value, description]) => {
    return {
      value,
      name: `${value.padEnd(30)} (${description})`
    }
  }),
  // 你可以根据需要自定义 scope 的位置
  scopeOverrides: {
    fix: [{ name: 'merge' }, { name: 'style' }, { name: 'e2eTest' }],
    feat: [{ name: 'ui' }, { name: 'merge' }]
  },
  // 你可以根据需要自定义消息长度限制
  messages: {
    type: '选择一种你的提交类型:',
    scope: '本次提交的改变所影响的范围（可选）:',
    // 可以添加自定义的提示消息
    customScope: '本次改变的影响范围（可选）:',
    subject: '简短、命令式的描述本次改变:\n',
    body: '详细描述本次改变，使用 "|" 换行（可选）:\n',
    breaking: '列出与上一个版本不兼容的变更（可选）:\n',
    footer: '列出与本次改变相关的 issue（可选）。E.g.: #31, #34:\n'
  },
  // 是否允许自定义提交类型
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  // 按照你的需要添加确认问题
  // 是否允许跳过 scope 的确认步骤
  skip: ['body', 'footer'],
  // 你可以在这里为每个 type 提示符的位置定义一个函数
  // 可以添加额外的提示问题
  subjectLimit: 100
};
