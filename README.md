# Prep

1) Create a new folder and open it.
2) In folder url type `cmd` + enter.
3) In the terminal: npx create-remix@latest
4) Following the set up prompts.
5) npm run dev to open localhost.

#Notes

app/ - This is where all your Remix app code goes
app/entry.client.tsx - This is the first bit of your JavaScript that will run when the app loads in the browser. We use this file to hydrate our React components.
app/entry.server.tsx - This is the first bit of your JavaScript that will run when a request hits your server. Remix handles loading all the necessary data and you're responsible for sending back the response. We'll use this file to render our React app to a string/stream and send that as our response to the client.
app/root.tsx - This is where we put the root component for our application. You render the <html> element here.
app/routes/ - This is where all your "route modules" will go. Remix uses the files in this directory to create the URL routes for your app based on the name of the files.
public/ - This is where your static assets go (images/fonts/etc)
remix.config.js - Remix has a handful of configuration options you can set in this file.
