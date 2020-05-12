const issueTypes = [
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

module.exports = function(Handlebars) {

    Handlebars.registerHelper('mergesByType', function(context, options) {
        if (!context || context.length === 0) {
            return 'no context'
        }

        const list = issueTypes
            .sort((a, b) => {
                return a.order > b.order;
            })
            .map((issueType) => {
                return {
                    issueType,
                    merges: context.filter(merge => {
                        const pattern = new RegExp(issueType.filter, 'i');
                        return pattern.test(merge.message);
                    })
                };
            })
            .filter((item) => {
                return item.merges.length > 0;
            })
            .map(item => options.fn(item))
            .join('');

        if (!list) {
            return ''
        }

        return `${list}`
    });
};
