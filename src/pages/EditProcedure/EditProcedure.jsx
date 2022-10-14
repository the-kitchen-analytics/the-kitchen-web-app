import { useMemo, useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import GenericLayout from "../../components/layouts/GenericLayout"
import { usePostData } from "../../hooks";
import { handleInputChange } from "../../utils/ui/form";
import { getWorkerCategoryDisplayName } from "../../utils/workerCategory";
import { updateProcedure } from "../../services/proceduresService";
import { ErrorMessage } from "../../components/ui";
import EditProcedureForm from "./EditProcedureForm";

const EditProcedure = () => {

    const navigate = useNavigate();
    const [isLoading, error, postData] = usePostData();

    const { id } = useParams();
    const { getProcedureById } = useOutletContext();

    const originalProcedure = getProcedureById(id);
    const [procedure, setProcedure] = useState(
        {
            ...originalProcedure,
            workerIncome: originalProcedure.workerIncome || originalProcedure.price * originalProcedure.workerRate
        }
    );

    const handleInputChangeWrapper = (e) => {
        return handleInputChange(e, setProcedure);
    }

    const handlePriceChange = (e) => {
        const value = e.target.value;

        setProcedure(prev => ({
            ...prev,
            price: parseFloat(value),
            workerIncome: value * prev.workerRate
        }));
    }

    const handleWorkerRateChange = (e) => {
        const value = e.target.value;

        console.debug(value)

        setProcedure(prev => ({
            ...prev,
            workerRate: value ? value / 100 : '',
            workerIncome: prev.price / 100 * value,
        }));
    }

    const handleWorkerIncomeChange = (e) => {
        const value = e.target.value;

        setProcedure(prev => ({
            ...prev,
            workerRate: value / prev.price,
            workerIncome: parseFloat(value) || '',
        }));
    }

    const handleFormSubmit = async (e) => {
        // e.preventdefault();
        await postData(updateProcedure, id, procedure)
        navigate(-1);
    }

    const handleCancelButtonClick = () => {
        navigate(-1);
    }

    const subheader = useMemo(() => {
        return `${originalProcedure.name} | ${getWorkerCategoryDisplayName(originalProcedure.workerCategory)}`
    }, [originalProcedure.name, originalProcedure.workerCategory]);

    return (
        <GenericLayout
            icon="edit"
            header="Редактировать процедуру"
            subheader={subheader}
        >
            <Grid.Row>
                <Grid.Column>
                    {
                        error && <ErrorMessage message={error.message} />
                    }

                    <EditProcedureForm
                        isLoading={isLoading}
                        formData={procedure}
                        handleSubmit={handleFormSubmit}
                        handleCancelButtonClick={handleCancelButtonClick}
                        handleInputChangeWrapper={handleInputChangeWrapper}
                        handlePriceChange={handlePriceChange}
                        handleWorkerRateChange={handleWorkerRateChange}
                        handleWorkerIncomeChange={handleWorkerIncomeChange}
                    />
                </Grid.Column>
            </Grid.Row>

        </GenericLayout>
    );
}

export default EditProcedure;