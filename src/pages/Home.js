import React, { setContext } from 'react';
import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';
export default function Home() {
  const [loading, setLoading] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState(376);
  const [cocktails, setCocktails] = React.useState([]);
  //const [posts, setPosts] = setContext(cocktails);
  React.useEffect(() => {
    setLoading(true);
    async function getDrinks() {
      try {
        const response = await fetch(
          `https://49plus.co.uk/udemy/wp-json/wp/v2/posts`
        );
        const data = await response.json();
        console.log(data);

        if (data) {
          const newCocktails = data.map((item) => {
            return {
              id: item.id,
              authorName: item.authorName,
              title: item.title.rendered,
              content: item.excerpt.rendered
            };
          });
          setCocktails(newCocktails);
        } else {
          setCocktails([]);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }

    getDrinks();
  }, [searchTerm]);
  return (
    <main>
      <SearchForm setSearchTerm={setSearchTerm} />
      <CocktailList cocktails={cocktails} loading={loading} />
    </main>
  );
}
