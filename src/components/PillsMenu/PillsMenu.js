import React, {useState} from 'react';
import classnames from "classnames";
import {useHistory} from "react-router";

const PillsMenu = ({items_menu_name, items_menu_rus_name, items_menu_value, path_name, current_tab, back_ref}) => {

    const history = useHistory();

    const go_to = e => {
        history.push('/' + path_name + '/' + e.target.name);
    }

    const item_menu_name = (name, name_rus, key) => {
        return <a key={key} className={classnames("nav-link", {'active': current_tab === name})} name={name}
                  data-toggle="pill" onClick={go_to}
                  role="tab" aria-controls="v-pills-home" aria-selected="true">{name_rus}</a>
    }

    const item_menu_value = (name, include, key) => {
        return <div key={key} className={classnames("tab-pane fade", {'show active': name === current_tab})}
                    id="teacher_course" role="tabpanel"
                    aria-labelledby="v-pills-home-tab">{include}
        </div>
    }

    return(
        <div className="row">
            <div className="col-3">
                <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist"
                     aria-orientation="vertical">
                    {back_ref && <a style={{marginBottom: '15px'}} className={"nav-link"}
                                    data-toggle="pill" onClick={() => history.push(back_ref)}
                                    role="tab" aria-controls="v-pills-home" aria-selected="true">← Назад</a>}
                    {Object.keys(items_menu_name).map((key) =>
                    item_menu_name(items_menu_name[key], items_menu_rus_name[key], key))}
                </div>
            </div>
            <div className="col-9">
                <div className="tab-content" name="v-pills-tabContent">
                    {Object.keys(items_menu_value).map((key) =>
                        item_menu_value(items_menu_name[key], items_menu_value[key], key))}
                </div>
            </div>
        </div>
    )
}

export default PillsMenu;