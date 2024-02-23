import React from "react";
import List from "./List";

const Section = (props) => {
    return <List api={props.apiLink} sectionTitle={props.sectionTitle}></List>;
};

export default Section;
