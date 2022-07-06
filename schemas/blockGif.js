export default {
    name: 'gif',
    type: 'document',
    title: 'Gif',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'url',
            type: 'string',
            title: 'URL',
        },
        {
            title: 'File',
            name: 'file',
            type: 'image',
        },
    ],
};
