import "html-tag-js/polyfill";
import * as FastClick from "fastclick";
import Page from "./app-pages/page-router";
import "./app-pages/splashscreen/splashscreen.scss";

/**
 * @type {class} App
 */

export default class App {
    static initialize() {
        document.addEventListener("deviceready", this.onDeviceReady);

        if ("addEventListener" in document) {
            document.addEventListener(
                "DOMContentLoaded",
                function () {
                    FastClick.attach(document.body);
                },
                false
            );
        }
    }

    static onDeviceReady() {
        StatusBar.overlaysWebView(false);
        StatusBar.styleDefault();
        StatusBar.backgroundColorByHexString("");
        NavigationBar.backgroundColorByHexString("#ffffff", true);

        /// App permissions
        cordova.plugins.notification.badge.hasPermission(function (granted) {
            if (granted == false) {
                cordova.plugins.notification.badge.requestPermission();

                console.log("Badge Plugin granted: " + granted);
            } else {
                console.log("Badge plugin is already granted");
                cordova.plugins.notification.badge.configure({
                    indicator: "circular",
                });
            }
        });

        cordova.plugins.notification.local.hasPermission(function (granted) {
            if (granted == false) {
                cordova.plugins.notification.local.requestPermission(function (
                    granted) {
                    console.log("Notification plugin granted: " + granted);
                });
            } else {
                console.log("Notification plugin is already granted");
            }
        });

        Page.route('Home').then(component => component.mainPage.initialize());

        window._ = cordova.plugins;
        window.splashscreen = document.getElementById("splashscreen");

        /// SplashScreen
        if (BuildInfo.debug) {
            splashscreen.classList.add("animate");
            setTimeout(function () {
                splashscreen.classList.remove("loading", "splash");
            }, 1000);
        } else {
            Page.route('SplashScreen').then((component) => component.splashError.initialize());
        }
    }

    /**
     * @type {EventListener} "resume"
     */
    static #onResume(){
        // handle resume event
    }

    /**
     * @type {EventListener} "pause"
     */
    static #onPause(){
        // handle pause event
    }

    /**
     * @type {EventListener} "online"
     */
    static #onOnline(){
        // handle internet connection event
    }

    /**
     * @type {EventListener} "offline"
     */
    static #onOffline(){
        // handle no internet connection event
    }

    /**
     * @type {EventListener} "backbutton"
     */
    static onBackButton(){
        // handle back button
    }
}