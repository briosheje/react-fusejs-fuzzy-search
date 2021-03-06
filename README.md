# react-fusejs-fuzzy-search

[![npm version](https://badge.fury.io/js/react-fusejs-fuzzy-search.svg)](https://badge.fury.io/js/react-fusejs-fuzzy-search)

Fuzzy search by keeping the UI layer as abstract as possible.

The motivation behind the project was to provide an abstract solution that
wraps the Fuse instance and provides a reactive way to use it through an hook.

The library was kept as light as possible by trying to make the fuse usage as
easy and as transparent as possible.

If you don't want to use the component provided for several personal reasons, the
provided hook is likely what you might need / want to use.

## Example WITHOUT hooks (using the component)

You can use the Wrapper component that, under the hood, uses the provided hook.

The component allows to host the search area and allows to customize the display
results area, you can check the `examples/with-component` folder for the full
example.

Relevant part:

```jsx
<FuseSearchWrapper
  list={searchArray}
  searchOpts={{
    limit: 10,
  }}
  fuseOpts={{
    includeScore: true,
    keys: ["author", "tags"],
  }}
  searchComponentBuilder={(search) => (
    <>
      <input
        type="text"
        defaultValue={term}
        onChange={(evt) => setTerm(evt.target.value)}
      />
      <button type="button" onClick={() => search(term)}>
        Search for {term}
      </button>
    </>
  )}
  resultsBuilder={(results) => (
    <ul>
      {results.map((v) => (
        <li>{JSON.stringify(v)}</li>
      ))}
    </ul>
  )}
/>
```

## Example with hooks

If you don't want to use the component, you can use the hook to obtain the
same result.

An example with the hook is available in the `example/with-tailwind-ui` folder.

Relevant part:

```jsx
import { useFuse } from "react-fusejs-fuzzy-search";
```

Usage:

```jsx
const { search, results } = useFuse(list, {
  keys: ["title", "author.tags.value"],
  includeScore: true,
  includeMatches: true,
});
```

Where `search` is the fuse search function to invoke to populate `results`
according to the specified options passed in the `useFuse` hook.

# For testing locally:

Ensure you have `make` utility installed and run either of the example available
commands (e.g. `make link-example-with-component`), then run the example
(e.g. `cd examples/with/component && npm run start`)
