import _ from "lodash";
import { Grid } from "semantic-ui-react";
import GenericLayout from "../../components/layouts/GenericLayout";
import SubmitDataForm from "./SubmitDataForm";
import ErrorMessage from "../../components/ui/ErrorMessage";
import { useMemo } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useLocalStorage, usePostData } from "../../hooks";
import { formatDateForDatePicker, getCurrentDate } from "../../utils/date";
import { convertFormDataToReceipt, createReceipt } from "../../services/receiptService";

const INITIAL_ACORDITION_INDEX = -1;

const SubmitData = () => {

    const { currentUser } = useOutletContext();
    const navigate = useNavigate();
    const [isLoading, error, postData] = usePostData();

    const initialFormData = useMemo(() => ({
        date: formatDateForDatePicker(getCurrentDate()),
        uid: currentUser.uid,
        procedures: []
    }), [currentUser.uid]);

    const [formData, setFormData] = useLocalStorage('submitDataForm', initialFormData);
    const [accorditionActiveIndex, setAccorditionActiveIndex] = useLocalStorage(INITIAL_ACORDITION_INDEX);

    const isDateFieldValid = () => {
        return !!formData.date;
    }

    const isProceduresFieldValid = () => {
        return !_.isEmpty(formData.procedures);
    }

    const isFormDataValid = () => {
        if (!isDateFieldValid()) {
            return false;
        }

        if (!isProceduresFieldValid()) {
            return false;
        }

        return true;
    }

    const clearForm = () => {
        setFormData(initialFormData);
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setAccorditionActiveIndex(INITIAL_ACORDITION_INDEX);

        const receipt = await postData(createReceipt, convertFormDataToReceipt(formData));

        if (receipt.id) {
            clearForm();
            navigate('/');
        }
    }

    const handleClearFromButtonClick = () => {
        setAccorditionActiveIndex(INITIAL_ACORDITION_INDEX);
        clearForm();
    }

    const shouldDisableClearFormButton = () => {
        return _.isEqual(formData, initialFormData) || isLoading
    };

    const shouldDisableSubmitFormButton = () => {
        return isLoading || !isFormDataValid()
    }

    return (
        <GenericLayout
            icon="cloud upload"
            header="Отправить данные"
            subheader="Сохраните ваши данные в облаке"
        >
            <Grid.Row>
                <Grid.Column>
                    {
                        error && (
                            <ErrorMessage message={error.message} />
                        )
                    }
                    <SubmitDataForm
                        formData={formData}
                        setFormData={setFormData}
                        accorditionActiveIndex={accorditionActiveIndex}
                        setAccorditionActiveIndex={setAccorditionActiveIndex}
                        isLoading={isLoading}
                        handleFormSubmit={handleFormSubmit}
                        handleClearFromButtonClick={handleClearFromButtonClick}
                        shouldDisableSubmitFormButton={shouldDisableSubmitFormButton}
                        shouldDisableClearFormButton={shouldDisableClearFormButton}
                        isDateFieldValid={isDateFieldValid}
                    />
                </Grid.Column>
            </Grid.Row>
        </GenericLayout>
    )
}

SubmitData.displayName = 'SubmitDataView'
export default SubmitData