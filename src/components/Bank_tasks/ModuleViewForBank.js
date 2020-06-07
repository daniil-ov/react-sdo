import React, {useState} from "react";
import ListTheoryForBank from "./ListTheoryForBank";

const ModuleViewForBank = ({num_mod, id_course, id_module, name_module, description_module, order, refresh,
                        set_refresh, theory_data}) => {

    return (
        <div>
            <div className={"Module"}>
                <h5>Модуль {num_mod}. {name_module}</h5>
                <ListTheoryForBank list_theory={theory_data}/>
            </div>
        </div>
    );
};

export default ModuleViewForBank;

