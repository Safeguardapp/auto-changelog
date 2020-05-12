module.exports = [
    {
        title: 'dependency',
        userFriendly: '📖 Dependencies',
        filter: '(^\\[snyk\\]|^dependency)',
        order: 10
    }, {
        title: 'maintenance',
        userFriendly: '🧰 Maintenance',
        filter: '(^maintenance)',
        order: 3
    }, {
        title: 'feature',
        userFriendly: '🚀 Features',
        filter: '(^feature)',
        order: 0
    }, {
        title: 'fix',
        userFriendly: '🐛 Bug Fixes',
        filter: '(^fix)',
        order: 1
    }
];
