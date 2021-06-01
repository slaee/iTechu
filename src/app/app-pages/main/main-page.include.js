import "../res/icons/fonts/icomoon.eot";
import "../res/icons/fonts/icomoon.svg";
import "../res/icons/fonts/icomoon.ttf";
import "../res/icons/fonts/icomoon.woff";
import "../res/icons/fonts/LobsterTwo-Regular.ttf";
import "../res/icons/style.css";

import "./main.scss";
import main_template from "./main-page.hbs";
import com_template from "./com-temp.hbs";

import mustache from "mustache";
import tag from "html-tag-js";
import list from "../../controllers/list";

export const mainPage = {
    initialize: function () {
        this.Page();
    },

    Page: function () {
        const main_page = tag.parse(mustache.render(main_template));
        document.body.append(main_page);

        /// on fully loaded document then render the component
        if (document.readyState === "complete") {
            this.startComponent();

            let facebook = document.getElementById("facebook-app");
            let support = document.getElementById("support-gcash");

            /// Launch Facebook App
            facebook.addEventListener("click", function () {
                window.plugins.launcher.canLaunch(
                    {
                        packageName: "com.facebook.katana",
                    },
                    function () {
                        window.plugins.launcher.launch(
                            {
                                packageName: "com.facebook.katana",
                            },
                            function () {
                                console.log("---- Success ----");
                            },
                            function (error) {
                                console.log("Error" + error);
                            }
                        );
                    },
                    function (error) {
                        console.log("Error " + error);
                    }
                );
            });

            /// Launch Gcash App
            support.addEventListener("click", function () {
                window.plugins.launcher.canLaunch(
                    {
                        packageName: "com.globe.gcash.android",
                    },
                    function () {
                        window.plugins.launcher.launch(
                            {
                                packageName: "com.globe.gcash.android",
                            },
                            function () {
                                console.log("---- Success ---- ");
                            },
                            function (err) {
                                console.log("---- Error ---- " + err);
                            }
                        );
                    },
                    function (error) {
                        console.log("Error " + error);
                    }
                );
            });
        }
    },

    startComponent: function () {
        let body_view = document.getElementById("body-view");
        let btnContainer = document.getElementById("bottombar");
        let btns = btnContainer.getElementsByClassName("btn");
        let prevScrollpos = window.pageYOffset;

        /// Navbar transition
        window.onscroll = function () {
            let currentScrollPos = window.pageYOffset;

            if (prevScrollpos > 30 || currentScrollPos < 30) {
                document.getElementById("navbar").style.boxShadow =
                    "0 2px 1px -1px rgba(0 ,0,0,0.1)";
            }
            if (currentScrollPos < 30) {
                document.getElementById("navbar").style.boxShadow = "0 0 0 0";
            }

            prevScrollpos = currentScrollPos;
        };

        /// Bottombar transition
        for (let i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function () {
                let current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(
                    " active",
                    ""
                );

                this.className += " active";
            });
        }

        let com_list = {
            public: mustache.render(com_template, {
                servername: list.server,
                discription: "Open for any places 🤝",
                active: "active",
                users: "118,493",
            }),

            compscie: mustache.render(com_template, {
                servername: "Computer Science",
                discription: "department 👽",
                active: "active",
                users: "20,242",
            }),

            IT: mustache.render(com_template, {
                servername: "IT",
                discription: "department 👾",
                active: "active",
                users: "25,013",
            }),

            compE: mustache.render(com_template, {
                servername: "Computer Engineering",
                discription: "department 🤖",
                active: "active",
                users: "31,109",
            }),

            Mathematics: mustache.render(com_template, {
                servername: "Mathematics",
                discription: "!0 = 1 📏",
                active: "active",
                users: "7,281",
            }),

            Lovetime: mustache.render(com_template, {
                servername: "Love life",
                discription: "sana all ❤",
                active: "active",
                users: "0",
            }),
        };

        for (let communities in com_list) {
            body_view.innerHTML += com_list[communities];
        }
    },
};
