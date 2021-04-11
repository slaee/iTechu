//lazy loading on page load
const page_modules = {
    SplashScreen: import(/* webpackChunkName: "splashscreen" */ './splashscreen/splashcreen.include'),
    Login: import(/* webpackChunkName: "login" */ './login/login'),
    Home:  import( /* webpackChunkName: "mainpage" */ './main/main-page.include'),
    About: import( /* webpackChunkName: "about" */ './about/about.include')
}

export default class Page{
    static route(module){
        for(let id in page_modules){
            if(module === id){
                return page_modules[id];
            } else {
                console.log("Error Page");
            }
        }
    }
}
