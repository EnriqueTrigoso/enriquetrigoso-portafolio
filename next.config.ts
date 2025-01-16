// import createNextIntlPlugin from 'next-intl/plugin';

// const withNextIntl = createNextIntlPlugin();

// /** @type {import('next').NextConfig} */
// const nextConfig = {

//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https' as 'https',
//         hostname: 'correct-desire-7ba8bfcc91.media.strapiapp.com',
//       },
//     ],
//   },
// };

// export default withNextIntl(nextConfig);

import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {};
 
export default withNextIntl(nextConfig);