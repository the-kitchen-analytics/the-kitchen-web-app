import { useState, useEffect } from "react";
import { getProceduresByWorkerCategory } from "../services/proceduresService";
import sortProcedures from "../utils/procedures/sortProcedures";


const useProcedures = (workerCategory) => {

    const [procedures, setProcedures] = useState([]);

    useEffect(() => {

        if (workerCategory) {
            const fetchData = async () => {
                const data = await getProceduresByWorkerCategory(workerCategory);
                setProcedures(sortProcedures(data));
            }

            fetchData();
        }

    }, [workerCategory]);

    return procedures;
}

export default useProcedures;