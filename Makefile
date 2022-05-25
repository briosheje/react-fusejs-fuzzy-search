link-react-and-react-dom:
	npm link react react-dom

link-example-with-component: link-react-and-react-dom
	cd examples/with-component/ && npm link react-fusejs-fuzzy-search
