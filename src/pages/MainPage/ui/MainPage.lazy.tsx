import {lazy} from 'react';

export const MainPageLazy = lazy(()=> import('./MainPage'))

// export const MainPageLazy = lazy(() => new Promise((resolve) => {
//     setTimeout(() => {
//         resolve(import('./MainPage'));
//     }, 1500);
// }));