link-react-and-react-dom:
	npm link react react-dom

link-example-with-component: link-react-and-react-dom
	cd examples/with-component/ && npm link react react-dom react-fusejs-fuzzy-search

link-example-with-tailwind-ui: link-react-and-react-dom
	cd examples/with-tailwind-ui/ && npm link react react-dom react-fusejs-fuzzy-search
