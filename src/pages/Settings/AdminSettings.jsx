import { Segment, List, Header, Message } from "semantic-ui-react";
import { Link } from "react-router-dom";

const AdminSettings = () => {

    const listItems = [
        {
            key: 'edit-procedures',
            // icon: 'edit',
            content: <Link to="/dashboard/procedures" > Редактировать процедуры</Link>,
        },
    ]

    return (
        <Segment>
            <Header
                icon="user secret"
                content="Настройки для администраторов"
            />

            <Message
                info
                content='В скором времени данная секция будет перемещена в отдельное приложение для администраторов'
            />
            <List
                bulleted
                relaxed
                size="large"
            >
                {
                    listItems.map(listItem => (
                        <List.Item {...listItem} />
                    ))
                }
            </List>
        </Segment>
    );
}

export default AdminSettings;