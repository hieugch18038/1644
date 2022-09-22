var http = require("http");
http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1 style='color: red;'>1644 - cloud coputing</h1>")
    res.write("<h2 style='font-style: italic;'>fall 2022</h2>");
    res.write("<h3 style= 'text-decoration: underline;'>University of Greewich</h3>")
    res.write("<img src='https://www.nestle.com/sites/default/files/styles/da_vinci_header_hero_desktop/public/2022-02/sustainability-nature-forest-river-article-header-fw.jpg?h=a612ed85&itok=1mqqgg1L'>")
    res.end();
})
.listen(8000, () => {
    console.log("http://localhost:"+ 8000);
});
//80 la cong http mac dinh => khi chay chi can go localhost