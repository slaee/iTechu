import './about.scss';
import about from './about.hbs';

import mustache from 'mustache';
import tag from "html-tag-js"

import list from '../../controllers/list';

export const AboutInclude = {
    initialize: function() {
        this.Page();
    },

    Page: function(){
        const about_page = tag.parse(mustache.render(about, {
            title: list.title
        }));
        document.body.append(about_page);
    },
    
    show: () =>{
        
    },
}