module.exports = [
    {
        title: 'dependency',
        userFriendly: '📖 Dependencies',
        filter: '(^\\[snyk\\]|^\\[dependency\\])',
        order: 10
    }, {
        title: 'maintenance',
        userFriendly: '🧰 Maintenance',
        filter: '(^\\[maintenance\\])',
        order: 9
    }, {
        title: 'feature',
        userFriendly: '🚀 Features',
        filter: '(^\\[feature\\])',
        order: 1
    }, {
        title: 'fix',
        userFriendly: '🐛 Bug Fixes',
        filter: '(^\\[fix\\])',
        order: 2
    }, {
        title: 'hotfix',
        userFriendly: '🚑 Hotfixes',
        filter: '(^\\[hotfix\\])',
        order: 0
    }, {
        title: 'docs',
        userFriendly: '💡 Docs',
        filter: '(^\\[docs\\])',
        order: 8
    }, {
        title: 'style',
        userFriendly: '💄 Styling',
        filter: '(^\\[style\\])',
        order: 7
    }, {
        title: 'refactor',
        userFriendly: '🎨 Refactoring',
        filter: '(^\\[refactor\\])',
        order: 4
    }, {
        title: 'performance',
        userFriendly: '⚡️ Performance improvements',
        filter: '(^\\[performance\\])',
        order: 3
    }, {
        title: 'test',
        userFriendly: '✅ Tests',
        filter: '(^\\[test\\])',
        order: 5
    }, {
        title: 'chore',
        userFriendly: '👷‍ Chores',
        filter: '(^\\[chore\\])',
        order: 6
    }
];
