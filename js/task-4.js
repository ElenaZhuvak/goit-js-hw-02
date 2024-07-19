// function getShippingCost(country) {
//   switch (country) {
//     case 'China':
//       console.log('Shipping to China will cost 100 credits');
//       break;
//     case 'Chile':
//       console.log('Shipping to Chile will cost 250 credits');
//       break;
//     case 'Australia':
//       console.log('Shipping to Australia will cost 170 credits');
//       break;
//     case 'Jamaica':
//       console.log('Shipping to Jamaica will cost 120 credits');
//       break;
//     default:
//       console.log('Sorry, there is no delivery to your country');
//   }
// }
// getShippingCost('Australia'); // "Shipping to Australia will cost 170 credits"
// getShippingCost('Germany'); // "Sorry, there is no delivery to your country"
// getShippingCost('China'); // "Shipping to China will cost 100 credits"
// getShippingCost('Chile'); // "Shipping to Chile will cost 250 credits"
// getShippingCost('Jamaica'); // "Shipping to Jamaica will cost 120 credits"
// getShippingCost('Sweden'); // "Sorry, there is no delivery to your country"

// function getFileName(file) {
//   const index = file.indexOf('.');
//   const fileName = file.slice(0, index);
//   if (index === -1) {
//     return file;
//   } else {
//     return fileName;
//   }
// }
// console.log(getFileName('styles.css'));
// console.log(getFileName('app'));

function createFileName(name, ext) {
  const trimmedName = name.trim();
  return `${trimmedName}.${ext}`;
}
console.log(createFileName(' order ', 'txt'));
