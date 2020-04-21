import React from 'react';
import CourseIcon from "./CourseIcon";
import {Link} from "react-router-dom";

const Main = () => {


    return (
        <div className="main">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <CourseIcon
                            name_course={"Исследование кодов Рида-Соломона"}
                            description={"Здесь написано небольшое описание этого курса. Можно просто посмотреть как это будет выглядеть."}
                            img={"files/course_1.jpeg"}
                            href={"/course/1"}

                        />
                    </div>
                    <div className="col">
                        <CourseIcon
                            name_course={"Исследование кодов Рида-Соломона"}
                            description={"Здесь написано небольшое описание этого курса. Можно просто посмотреть как это будет выглядеть."}
                            img={"files/course_1.jpeg"}
                            href={"/course/1"}

                        />
                    </div>
                    <div className="col">
                        <CourseIcon
                            name_course={"Исследование кодов Рида-Соломона"}
                            description={"Здесь написано небольшое описание этого курса. Можно просто посмотреть как это будет выглядеть."}
                            img={"files/course_1.jpeg"}
                            href={"/course/1"}

                        />
                    </div>
                </div>
            </div>

        </div>


    );

};

export default Main;