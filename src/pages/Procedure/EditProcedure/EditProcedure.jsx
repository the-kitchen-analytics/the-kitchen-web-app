import _ from "lodash";
import { useMemo, useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import DashboardLayout from "../../../components/layouts/DashboardLayout"
import { usePostData } from "../../../hooks";
import { handleInputChange } from "../../../utils/ui/form";
import { getWorkerCategoryDisplayName } from "../../../utils/workerCategory";
import { deleteProcedure, updateProcedure } from "../../../services/proceduresService";
import { ErrorMessage } from "../../../components/ui";
import EditProcedureForm from "./EditProcedureForm";
import { getProcedureTypeDisplayName } from "../../../utils/procedures";
import validateProcedure from "../../../validators/procedure";
import { PROCEDURES } from "../../../data/routePaths";
import NoContent from "../../NoContent";

const adjustWithWorkerRate = (procedure) => {
    return {
        ...procedure,
        workerRate: _.round(procedure.workerIncome / procedure.price * 100, 2) || 0
    }
}

const EditProcedure = () => {

    const navigate = useNavigate();
    const [isLoading, error, postData] = usePostData();

    const { id } = useParams();
    const { getProcedureById } = useOutletContext();

    const initialProcedureData = useMemo(() => adjustWithWorkerRate(getProcedureById(id)), [getProcedureById, id]);
    const [procedure, setProcedure] = useState(initialProcedureData);

    const isProcedureValid = useMemo(() => validateProcedure(procedure), [procedure]);

    const handleInputChangeWrapper = (e) => {
        return handleInputChange(e, setProcedure);
    }

    const getRoundedValue = (value) => {
        return value >= 0
            ? value > 0
                ? _.round(value, 2)
                : value
            : '';
    }

    const handlePriceChange = ({ target }) => {
        const price = getRoundedValue(target.value);

        setProcedure(prev => ({
            ...prev,
            price: price > 0 ? _.round(price, 2) : price,
            workerIncome: price * prev.workerRate / 100
        }));
    }

    const handleWorkerRateChange = ({ target }) => {
        const workerRate = getRoundedValue(target.value);

        setProcedure(prev => ({
            ...prev,
            workerRate,
            workerIncome: workerRate >= 0
                ? _.round(prev.price / 100 * workerRate, 2)
                : prev.workerIncome
        }));
    }

    const handleWorkerIncomeChange = ({ target }) => {
        const workerIncome = getRoundedValue(target.value);

        setProcedure(prev => ({
            ...prev,
            workerIncome,
            workerRate: workerIncome >= 0
                ? _.round(workerIncome / prev.price * 100, 2)
                : prev.workerRate,
        }));
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        await postData(updateProcedure, id, procedure);
        navigate(PROCEDURES);
    }

    const handleDeleteButtonClick = async (e) => {
        if (window.confirm('Вы действительно хотите удалить данную процедуру?')) {
            await postData(deleteProcedure, id);
            navigate(PROCEDURES);
        }
    }

    const subheader = useMemo(() => {
        if (initialProcedureData) {
            return `${initialProcedureData.name} – ${getProcedureTypeDisplayName(initialProcedureData.type)} | ${getWorkerCategoryDisplayName(initialProcedureData.workerCategory)}`
        }
    }, [initialProcedureData]);

    if (!initialProcedureData) {
        return <NoContent />
    }

    return (
        <DashboardLayout
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
                        shouldDisableSubmitButton={isLoading || !isProcedureValid}
                        handleSubmit={handleFormSubmit}
                        handleInputChangeWrapper={handleInputChangeWrapper}
                        handlePriceChange={handlePriceChange}
                        handleWorkerRateChange={handleWorkerRateChange}
                        handleWorkerIncomeChange={handleWorkerIncomeChange}
                        handleDeleteButtonClick={handleDeleteButtonClick}
                    />
                </Grid.Column>
            </Grid.Row>

        </DashboardLayout>
    );
}

export default EditProcedure;