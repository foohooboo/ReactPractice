# learned in this 'project'

# alot of React goofing around

# basic exporting/importing of React Components
I feel like it's probly best to keep each component in its own .js file, and none in the (app/index).js file. I would idealy like each component to also have its own .css file if it requird any css that wasn't universal to the project. Anything that gets used twice should (usually) be defined in a separate file where it is accessible to both use cases. 

# speaking of CSS..
Modular css files seem nice for when you want to bring a css 'library' (definitely not an industry term) into a component but only apply it to certain elements.

If you use two distinct CSS files in a page, but each one defines the same class, the second one imported/linked will take priority. 

