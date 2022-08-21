import React from "react";
import { Dimmer, Loader as SemanticLoader } from "semantic-ui-react";

const Loader = ({ text = 'Загрузка данных..' }) => (
    <div className="loader">
        <Dimmer active inverted>
            <SemanticLoader size='huge'>{text}</SemanticLoader>
        </Dimmer>
    </div>
);

export default Loader;