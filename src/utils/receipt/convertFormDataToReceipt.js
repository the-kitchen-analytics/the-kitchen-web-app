import _ from "lodash";
import { parseDateFromDropdown } from "../date";

const convertFormDataToReceipt = (formData) => {

    const procedures = formData.procedures.map(procedure => ({
        name: procedure.name,
        priceBeforeTaxes: procedure.price,
        priceAfterTaxes: procedure.workerIncome || parseFloat((procedure.price * procedure.workerRate).toFixed(2)),
        type: procedure.type,
    }));

    const totalPriceBeforeTaxes = _.sumBy(procedures, 'priceBeforeTaxes');
    const totalPriceAfterTaxes = _.sumBy(procedures, 'priceAfterTaxes');

    const data = Object.freeze({
        uid: formData.uid,
        procedures: procedures,
        date: parseDateFromDropdown(formData.date),
        totalPriceBeforeTaxes,
        totalPriceAfterTaxes,
        dateCreated: new Date(),
    });

    return data;
}

export default convertFormDataToReceipt;