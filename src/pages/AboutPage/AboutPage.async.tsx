import {lazy, LazyExoticComponent} from "react";

export const AboutPageAsync: LazyExoticComponent<() => JSX.Element> = lazy(() =>
    new Promise(resolve =>
        setTimeout(() => {
            resolve(import('./AboutPage'));
        }, 500)
    )
);