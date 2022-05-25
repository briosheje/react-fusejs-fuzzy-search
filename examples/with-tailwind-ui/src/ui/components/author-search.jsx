import React, { useCallback } from 'react';
import { useFuse } from "react-fusejs-fuzzy-search";

const list = [
  {
    "title": "Old Man's War",
    "author": {
      "name": "John Scalzi",
      "tags": [
        {
          "value": "American"
        }
      ]
    }
  },
  {
    "title": "The Lock Artist",
    "author": {
      "name": "Steve Hamilton",
      "tags": [
        {
          "value": "English"
        }
      ]
    }
  }
];

export default function AuthorSearchForm() {
  const { search, results } = useFuse(list, {
    keys: ['title', 'author.tags.value'],
    includeScore: true,
    includeMatches: true
  });

  const onSubmit = useCallback((evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.currentTarget);
    const data = Object.fromEntries(formData.entries());

    console.log('data is', data);
    search(data['search-term']);
  }, [search]);

  return (
    <form onSubmit={onSubmit}>
      <label className="block">
        <span className="block text-sm font-medium text-slate-700">Search the author you are looking for</span>
        <input placeholder="write something (ex. 'old')" name="search-term" type="text" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder:text-lime-400
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500
          text-slate-500
        "/>
        <button type="submit" className="rounded-full bg-sky-500/100">click to search</button>
      </label>
      {results.length > 0 && (
        <ul class="list-inside">
          {results.map((v, i) => (
            <li>{v.item.author.name} - {v.item.title} (score: {v.score})</li>
          ))}
        </ul>
      )}
    </form>
  )
}