import {lazy, LazyExoticComponent} from "react";

export const MainPageAsync: LazyExoticComponent<() => JSX.Element> = lazy(() =>
    new Promise(resolve =>
        setTimeout(() => {
            resolve(import('./MainPage'));
        }, 500)
    )
);
