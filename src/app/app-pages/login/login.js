import login_template from "./login.hbs";
import "./login.scss";
import "../main/main.scss";

import tag from "html-tag-js";
import mustache from "mustache";

export const LoginPage = {
    initialize: function(){
        this.Page();
    },

    Page: function(){
        const login_page = tag.parse(mustache.render(login_template,{

        }));
        document.body.append(login_page);

        if(document.readyState === "complete"){
            this.render();
        }
    },

    render: function(){
        
    }
}