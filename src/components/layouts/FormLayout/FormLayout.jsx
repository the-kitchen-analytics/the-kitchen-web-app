import { Grid, Segment, Header, Image } from "semantic-ui-react";
import logo from "../../../assets/images/logo.svg";
import ErrorMessage from "../../ui/ErrorMessage";

const FormLayoutHeader = ({ title, subheader }) => (
    <Header
        block
        textAlign="center"
        as='h2'
        style={{
            width: '100%'
        }}
    >
        <Header.Content>
            <Image src={logo}
                circular
                size="tiny"
                centered
            />
            {
                title
            }
        </Header.Content>
        <Header.Subheader>
            {
                subheader
            }
        </Header.Subheader>
    </Header>
)

const FormLayout = ({ title, subheader, error, children }) => (
    <Grid>
        <Grid.Row centered>
            <Grid.Column mobile={16} computer={6}>
                <Segment padded>
                    <FormLayoutHeader
                        title={title}
                        subheader={subheader}
                    />
                    {
                        error && <ErrorMessage message={error.message} />
                    }
                    {
                        children
                    }
                </Segment>
            </Grid.Column>
        </Grid.Row>
    </Grid>
)


export default FormLayout;