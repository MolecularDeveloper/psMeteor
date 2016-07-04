Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'loading'
});

Router.route("/", {
  name: "homeIndex",
  data: function() {
    return{
     message: "sup, welcome to the page..."
   };
  }
});

Router.route("/posts", {
  name: "posts"
});

Router.route("/messages", {
  name: "messages"
});

Router.route("dashboard", {
  name: "dashboard"
});
