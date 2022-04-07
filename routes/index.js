const user = require("./userRoutes");

module.exports = () => {
    app.use("/user", user);
}