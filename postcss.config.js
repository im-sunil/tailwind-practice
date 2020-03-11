let prod = process.env.NODE_ENV === "production";
 
module.exports = {
    plugins: [
        require("tailwindcss"),
        require("autoprefixer"),
    ]
};
