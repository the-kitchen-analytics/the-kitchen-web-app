import _ from "lodash";
import { Grid, Message } from "semantic-ui-react";
import DashboardLayout from "../../../components/layouts/DashboardLayout";
import CreateReceiptForm from "./CreateReceiptForm";
import ErrorMessage from "../../../components/ui/ErrorMessage";
import { useState, useMemo } from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { useLocalStorage, usePostData, useSessionStorage } from "../../../hooks";
import { formatDateForDatePicker, getCurrentDate } from "../../../utils/date";
import { createReceipt } from "../../../services/receiptService";
import { TABLE_DAILY } from "../../../data/routePaths";
import { mapReceiptToFirebaseEntity } from "../../../mappers/receipt";
import validateReceipt from "../../../validators/receipt/validateReceipt";

const INITIAL_ACORDITION_INDEX = -1;

const CreateReceipt = () => {

    const { userDetails: { uid, workerCategory } } = useOutletContext();

    const navigate = useNavigate();
    const [isLoading, error, postData] = usePostData();

    const [shouldDisplaySuccessMessage, setShouldDisplaySuccessMesage] = useState(false);

    const initialReceipt = useMemo(() => ({
        date: formatDateForDatePicker(getCurrentDate()),
        uid: uid,
        procedures: [],
    }), [uid]);

    const [receipt, setReceipt] = useSessionStorage(
        'submitFormData', initialReceipt);

    const [shouldRedirectToHomePageAfterSubmit, setShouldRedirectToHomePageAfterSubmit] =
        useLocalStorage('shouldRedirectToHomePageAfterSubmit', false);

    const [shouldDisplayPreview, setShouldDisplayPreview] =
        useLocalStorage('shouldDisplayPreview', true);

    const [accorditionActiveIndex, setAccorditionActiveIndex] =
        useSessionStorage('accorditionActiveIndex', INITIAL_ACORDITION_INDEX);

    const isReceiptValid = useMemo(() => validateReceipt(receipt), [receipt]);

    const convertedFormData = useMemo(() => {
        return mapReceiptToFirebaseEntity(receipt);
    }, [receipt]);

    const clearForm = () => {
        setReceipt(initialReceipt);
        setShouldDisplaySuccessMesage(false);
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setShouldDisplaySuccessMesage(false);

        if (!shouldDisableSubmitFormButton()) {
            setAccorditionActiveIndex(INITIAL_ACORDITION_INDEX);

            const receipt = await postData(createReceipt, convertedFormData);

            if (receipt.id) {
                clearForm();
                setShouldDisplaySuccessMesage(true);

                if (shouldRedirectToHomePageAfterSubmit) {
                    navigate('/');
                }
            }
        }
    }

    const handleClearFromButtonClick = () => {
        setAccorditionActiveIndex(INITIAL_ACORDITION_INDEX);
        clearForm();
    }

    const shouldDisableClearFormButton = () => {
        return _.isEqual(receipt, initialReceipt) || isLoading
    };

    const shouldDisableSubmitFormButton = () => {
        return isLoading || !isReceiptValid
    }

    return (
        <DashboardLayout
            icon="cloud upload"
            header="Сохранить запись"
            subheader="Сохраните ваши данные в облаке"
        >
            <Grid.Row>
                <Grid.Column>
                    {
                        shouldDisplaySuccessMessage && (
                            <Message
                                positive
                                icon="check circle"
                                header="Данные успешно сохранены"
                                content={
                                    <>Перейдите в раздел <Link to={TABLE_DAILY}>Таблицы -{">"} За день</Link>, чтобы просмотреть запись</>
                                }
                            />
                        )
                    }
                    {
                        error && (
                            <ErrorMessage message={error.message} />
                        )
                    }
                    <CreateReceiptForm
                        formData={receipt}
                        setFormData={setReceipt}
                        convertedFormData={convertedFormData}
                        workerCategory={workerCategory}
                        accorditionActiveIndex={accorditionActiveIndex}
                        setAccorditionActiveIndex={setAccorditionActiveIndex}
                        shouldRedirectToHomePageAfterSubmit={shouldRedirectToHomePageAfterSubmit}
                        setShouldRedirectToHomePageAfterSubmit={setShouldRedirectToHomePageAfterSubmit}
                        shouldDisplayPreview={shouldDisplayPreview}
                        setShouldDisplayPreview={setShouldDisplayPreview}
                        isLoading={isLoading}
                        handleFormSubmit={handleFormSubmit}
                        handleClearFromButtonClick={handleClearFromButtonClick}
                        shouldDisableSubmitFormButton={shouldDisableSubmitFormButton}
                        shouldDisableClearFormButton={shouldDisableClearFormButton}
                    />
                </Grid.Column>
            </Grid.Row>
        </DashboardLayout >
    )
}

export default CreateReceipt;