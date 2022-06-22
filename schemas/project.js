export default {
    name: 'project',
    type: 'document',
    title: 'Project',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Project Title',
            validation: (Rule) =>
                Rule.required().error('Please enter a project title.'),
        },
        {
            name: 'description',
            type: 'array',
            title: 'Project Description',
            of: [
                {
                    type: 'block',
                },
            ],
            validation: (Rule) =>
                Rule.required().error('Please enter a project description'),
        },
        {
            name: 'tags',
            type: 'array',
            title: 'Tags',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'tag' }],
                },
            ],
            validation: (Rule) =>
                Rule.required().error('Please submit a minimum of one tag.'),
        },
        {
            name: 'github',
            type: 'url',
            title: 'GitHub URL',
            validation: (Rule) =>
                Rule.required().error('Please enter the GitHub URL.'),
        },
        {
            name: 'site',
            type: 'url',
            title: 'Site URL',
            validation: (Rule) =>
                Rule.required().error('Please enter the deployed site URL.'),
        },
        {
            name: 'loom',
            type: 'url',
            title: 'Loom URL',
            validation: (Rule) =>
                Rule.required().error('Please enter a loom URL.'),
        },
    ],
};
