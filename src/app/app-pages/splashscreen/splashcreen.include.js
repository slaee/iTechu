import "../res/logo.svg";
import "./splashscreen.scss";

export const splashError = {
    initialize: function () {
        this.SplashError();
    },

    SplashError: function () {
        
        this.showToastShortBottom("This is taking unexepected long time");

        if (window.cordova && window.cordova.plugins.settings) {
            this.showToastLongBottom("Please clear app data to run properly.");

            setTimeout(() => {
                window.cordova.plugins.settings.open(
                    "application_details",
                    function () {
                        console.log("opened settings");
                    },
                    function () {
                        console.log("failed to open settings");
                    }
                );
            }, 5000);
        } else {
            console.log("openNativeSettingsTest is not active!");
        }
    },

    showToastShortBottom: function (msg) {
        window.plugins.toast.showWithOptions({
            message: msg,
            duration: 3500,
            position: "bottom",
            styling: {
                opacity: 0.75,
                backgroundColor: "#000000",
                textColor: "#FFFFFF",
                textSize: 13,
                cornerRadius: 16,
                horizontalPadding: 50,
                verticalPadding: 30,
            },
        });
    },

    showToastLongBottom: function (msg) {
        window.plugins.toast.showWithOptions({
            message: msg,
            duration: 5000,
            position: "bottom",
            styling: {
                opacity: 0.75,
                backgroundColor: "#000000",
                textColor: "#FFFFFF",
                textSize: 13,
                cornerRadius: 16,
                horizontalPadding: 50,
                verticalPadding: 30,
            },
        });
    },
};
