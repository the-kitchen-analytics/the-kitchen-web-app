import { Header, List, Segment } from "semantic-ui-react"

const Info = ({ user }) => (
    <Segment>
        <Header
            icon="info circle"
            content="О приложении"
        />
        <List
            relaxed
            bulleted
        >
            <List.Item>
                Версия: <strong>
                    {process.env.REACT_APP_VERSION}
                </strong>
            </List.Item>
            <List.Item>
                Дата последнего входа: <strong>
                    {user.metadata.lastSignInTime}
                </strong>
            </List.Item>
        </List>
    </Segment>
);

export default Info;