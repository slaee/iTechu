import server_template from "server-main.hbs";

import mustache from "mustache";
import tag from "html-tag-js";

export const ServerPage = {
    initialize: function(){
        this.Page();
    },

    Page: function(){
        const server_page = tag.parse(mustache.render(server_template));
        document.body.append(server_page);

        
    },

    show: function(){

    },

    hide: function(){

    }
}