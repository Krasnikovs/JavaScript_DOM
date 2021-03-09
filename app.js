const banner= document.querySelector('#page-banner');

console.log('#page-banner node type is:', banner.nodeType);
console.log('#page-banner node type is:', banner.nodeName);
console.log('#page-banner node type is:', banner.hasChildNodes());

const cloneBanner = banner.cloneNode(true);
console.log(cloneBanner)