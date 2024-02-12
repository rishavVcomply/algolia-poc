import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  Configure,
  Highlight,
  Hits,
  InstantSearch,
  Pagination,
  SearchBox,
} from 'react-instantsearch';

import type { Hit } from 'instantsearch.js';

import './App.css';

const searchClient = algoliasearch(
  String(process.env.REACT_APP_CLIENT_ID),
  String(process.env.REACT_APP_API_KEY)
);

// const INDEX = "movie";
const INDEX = 'files';

const future = { preserveSharedStateOnUnmount: true };

export function App() {
  return (
    <div>
      <header className="header">
        <h1 className="header-title">
          <a href="/">algolia-instantsearch-app</a>
        </h1>
        <p className="header-subtitle">
          using{' '}
          <a href="https://github.com/algolia/instantsearch/tree/master/packages/react-instantsearch">
            React InstantSearch
          </a>
        </p>
      </header>

      <div className="container">
        <InstantSearch
          searchClient={searchClient}
          indexName={INDEX}
          future={future}
        >
          <Configure hitsPerPage={8} />
          <div className="search-panel">
            <div className="search-panel__filters"></div>

            <div className="search-panel__results">
              <SearchBox
                placeholder="Enter search query"
                className="searchbox"
              />
              {/* <Hits hitComponent={MovieHit} /> */}
              <Hits hitComponent={FileHit} />

              <div className="pagination">
                <Pagination />
              </div>
            </div>
          </div>
        </InstantSearch>
      </div>
    </div>
  );
}

type HitProps = {
  hit: Hit;
};

function MovieHit({ hit }: HitProps) {
  return (
    <article>
      <img src={hit.poster_path} alt={hit.title} />
      <div>
        <h1>
          <Highlight attribute="title" hit={hit} />
        </h1>
        <p>
          <Highlight attribute="overview" hit={hit} />
        </p>
        <p>
          <Highlight attribute="release_date" hit={hit} />
        </p>
      </div>
    </article>
  );
}

function FileHit({ hit }: HitProps) {
  return (
    <article>
      <div>
        <h1>
          <Highlight attribute="name" hit={hit} />
        </h1>
        <p>
          <Highlight attribute="content" hit={hit} />
        </p>
      </div>
    </article>
  );
}
