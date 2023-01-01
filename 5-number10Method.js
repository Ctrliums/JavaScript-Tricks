/////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Intl.NumberFormat
The Intl.NumberFormat object enables language-sensitive number formatting.
*/

let number = 10000;
console.log(Intl.NumberFormat().format(number)); // 10,000
/////////////////////////////////////////////////////////////////////////////////////////////////////

/*
Using locales
This example shows some of the variations in localized number formats. 
In order to get the format of the language used in the user interface of your application, 
make sure to specify that language (and possibly some fallback languages) using the locales argument:
*/

const number = 123456.789;

// German uses comma as decimal separator and period for thousands
console.log(new Intl.NumberFormat('de-DE').format(number));
// 123.456,789

// Arabic in most Arabic speaking countries uses real Arabic digits
console.log(new Intl.NumberFormat('ar-EG').format(number));
// ١٢٣٤٥٦٫٧٨٩

// India uses thousands/lakh/crore separators
console.log(new Intl.NumberFormat('en-IN').format(number));
// 1,23,456.789

// the nu extension key requests a numbering system, e.g. Chinese decimal
console.log(new Intl.NumberFormat('zh-Hans-CN-u-nu-hanidec').format(number));
// 一二三,四五六.七八九

// when requesting a language that may not be supported, such as
// Balinese, include a fallback language, in this case Indonesian
console.log(new Intl.NumberFormat(['ban', 'id']).format(number));
// 123.456,789



/*
Using options
The results can be customized using the options argument:
*/

const number = 123456.789;

// request a currency format
console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number));
// 123.456,79 €

// the Japanese yen doesn't use a minor unit
console.log(new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(number));
// ￥123,457

// limit to three significant digits
console.log(new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number));
// 1,23,000

// Formatting with units
console.log(new Intl.NumberFormat('pt-PT', {
  style: 'unit',
  unit: 'kilometer-per-hour'
}).format(50));
// 50 km/h

console.log((16).toLocaleString('en-GB', {
  style: 'unit',
  unit: 'liter',
  unitDisplay: 'long',
}));
// 16 litres
