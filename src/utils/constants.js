export const TYPE_SETUP = 'setup';
export const TYPE_STAGE = 'stage';
export const TYPE_BRANCH = 'branch';
export const TYPE_INSPECT = 'inspect';
export const TYPE_SHARE = 'share';
export const TYPE_REWRITE = 'rewrite';
export const TYPE_STASH = 'stash';

export const activeTypes = [
    {
        type: TYPE_SETUP,
        title: 'Initial Setup',
        description: 'Get started with Git in no time.'
    },
    {
        type: TYPE_STAGE,
        title: 'Staging',
        description: 'Staging is the step before the final commit process.'
    },
    {
        type: TYPE_BRANCH,
        title: 'Branches',
        description: ''
    },
    {
        type: TYPE_INSPECT,
        title: 'Inspection',
        description: 'Inspect commits in your Git flow.'
    },
    {
        type: TYPE_SHARE,
        title: 'Sharing',
        description: ''
    },
    {
        type: TYPE_REWRITE,
        title: 'Rewrite & History',
        description: ''
    },
    {
        type: TYPE_STASH,
        title: 'Stashing',
        description: ''
    }
];
