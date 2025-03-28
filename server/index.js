
// A simple Express server that takes a number and returns its Roman numeral version

const promBundle = require('express-prom-bundle');
const express = require('express');
const cors = require('cors');

const app = express();
const metricsMiddleware = promBundle({ includeMethod: true });
app.use(metricsMiddleware);
const PORT = 8080;
//Allow frontend to call
app.use(cors());
//main API endpoint
app.get('/romannumeral', (req, res) => {
    const query = parseInt(req.query.query);
    console.log(`[${new Date().toISOString()}] Incoming request: ${req.originalUrl}`);
     //input validation
    if (isNaN(query) || query < 1 || query > 3999) {
        console.warn(`Invalid query: ${req.query.query}`);
        return res.status(400).send('Enter a valid number in between 1 and 3999');
    }
    //Start
    const start = Date.now();

    const roman = convertToRoman(query);
    //Time taken
    const duration = Date.now() - start;
    console.log(`Done! ${query} became ${roman} in ${duration}ms`);

    res.json({
        input: query.toString(),
        output: roman
    });
});
// didn't use any libraries here for convertion
function convertToRoman(num) {
      if (typeof num !== 'number' || num < 1 || num > 3999) {
         throw new Error('Input must be a number between 1 and 3999');
       }
    const map = [
        { val: 1000, sym: 'M' },
        { val: 900, sym: 'CM' },
        { val: 500, sym: 'D' },
        { val: 400, sym: 'CD' },
        { val: 100, sym: 'C' },
        { val: 90, sym: 'XC' },
        { val: 50, sym: 'L' },
        { val: 40, sym: 'XL' },
        { val: 10, sym: 'X' },
        { val: 9, sym: 'IX' },
        { val: 5, sym: 'V' },
        { val: 4, sym: 'IV' },
        { val: 1, sym: 'I' },
    ];

    let result = '';
    for (const { val, sym } of map) {
        while (num >= val) {
            result += sym;
            num -= val;
        }
    }
    return result;
}
//server started here
if (require.main === module)
{
  app.listen(PORT, () => {
     console.log(`Server is running on http://localhost:${PORT}`);

  });
}
module.exports = app;