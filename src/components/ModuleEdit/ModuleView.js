import React, {useState} from "react";
import './ModuleEdit.scss';
import NewOrEditModule from "./NewOrEditModule";
import ListTheory from "./ListTheory";

const ModuleView = ({num_mod, id_course, id_module, name_module, description_module, order, refresh,
                        set_refresh, theory_data}) => {

    const [isEditCourse, setIsEditCourse] = useState(false);

    const mod_view = (
        <div>
            <div className={'edit_action'} style={{float: "right"}}>
                <span aria-label="Редактировать" className="edit_input_course"
                      onClick={() => setIsEditCourse(!isEditCourse)}/>
            </div>
            <div className={"Module"}>
                <h5>Модуль {num_mod}. {name_module}</h5>
                <div className={"Lk-Content"}>
                    <p>{description_module}</p>
                </div>
                <ListTheory list_theory={theory_data}/>
            </div>

        </div>
    );


    return (
        <div>
            {!isEditCourse && mod_view}
            {isEditCourse &&
            <NewOrEditModule num_mod={num_mod} id_course={id_course} name_module={name_module}
                             description_module={description_module} id_module={id_module}
                             save_action={'edit'} save_name_action={'Сохранить'} set_is_edit={setIsEditCourse}
                             order={order} refresh={refresh} set_refresh={set_refresh}/>}
        </div>
    );
};

export default ModuleView;

