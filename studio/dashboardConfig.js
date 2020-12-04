export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fca94a5b218ad011c849cea',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-i8aho8ef',
                  apiId: 'f35d522c-e750-46cf-bf84-5cf47535c70d'
                },
                {
                  buildHookId: '5fca94a51990ca00f1c929cb',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-ka4xii4b',
                  apiId: '77e000dc-c611-49d6-af9a-a13d27c213de'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/maya-the-creator/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-ka4xii4b.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
