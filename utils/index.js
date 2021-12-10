export const sortByDate = (a, b) => {
    return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
}

export const range = (start, end) => {
    return [...Array(end).keys()].map(el => el + start)
};

export const skillList = [
    { id: 1, description: 'Languages/Libs' },
    { id: 2, description: 'JavaScript, React' },
    { id: 3, description: 'State Managment/SSR(G)' },
    { id: 4, description: 'Redux, Next' },
    { id: 5, description: 'Data fetching' },
    { id: 6, description: 'REST API, Fetch, Axios' },
    { id: 7, description: 'Markup/Stylising' },
    { id: 8, description: 'HTML, Markdown, CSS' },
    { id: 9, description: 'Version control tools' },
    { id: 10, description: 'Git, GitHub' }
]

export const workDetails = [
    { id: 0, title: 'Beautician website', desc: 'HTML, CSS, JS, JQ'},
    { id: 1, title: 'Digital product blog', desc: 'Vue, VuePress, Markdown'},
    { id: 2, title: 'Ract App CRUD', desc: 'React with Classes'},
    { id: 3, title: 'Pure JS SPA', desc: 'Pure JS MVC SPA with fetching data of REST API'},
    { id: 4, title: 'Next App', desc: 'Next.js app with TypeScript and MUI'},
]