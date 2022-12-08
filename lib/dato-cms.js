const API_URL = 'https://graphql.datocms.com/';
const API_TOKEN = process.env.API_TOKEN_NUMBER;

async function fetchCmsAPI(query, { variables } = {}){
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

export async function getAllPosts(){
  const data = await fetchCmsAPI(`
    {
      allBlogs {
        id
        title
        slug
        img {
          url
        }
        resume
        content
        _publishedAt
      }
    }
  `);
  
  return data.allBlogs;
}

export default { getAllPosts };