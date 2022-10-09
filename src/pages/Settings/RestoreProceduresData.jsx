import { Form, Header, Segment } from "semantic-ui-react";
import { addAllProcedures, deleteAllProcedures } from "../../services/proceduresService";
import procedures from "../../data/procedures.json";
import { useUserSettings } from "../../hooks";

const RestoreProceduresData = () => {

    const { settings: { shouldDisplayAdminActions } } = useUserSettings();

    const handleRestoreProceduresButtonClick = async () => {
        await deleteAllProcedures();

        addAllProcedures(procedures);
    }

    const handleRestoreGoodsButtonClick = () => {

    }

    return shouldDisplayAdminActions && (
        <Segment>
            <Header
                icon="redo"
                content="Восстановить значения по умолчанию"
            />

            <Form>
                <Form.Button
                    fluid
                    type="button"
                    icon="redo"
                    content="Восстановить процедуры"
                    onClick={handleRestoreProceduresButtonClick}
                />
                <Form.Button
                    fluid
                    type="button"
                    icon="redo"
                    content="Восстановить товары"
                    onClick={handleRestoreGoodsButtonClick}
                />
            </Form>

        </Segment>
    )
}

export default RestoreProceduresData;