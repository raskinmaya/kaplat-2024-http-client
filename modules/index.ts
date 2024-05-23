import {IResponse} from "./types";
import handlers from "./handlers";
import {STUDENT_BIRTH_YEAR, STUDENT_ID} from "../environments";

const makeAllRequests = async () => {
    const getResponse: string = await handlers.getHandler({
        id: STUDENT_ID,
        year: STUDENT_BIRTH_YEAR,
    })

    const postResponse: IResponse = await handlers.postHandler({
        id: STUDENT_ID,
        year: STUDENT_BIRTH_YEAR,
        requestId: getResponse,
    })

    const putResponse: IResponse = await handlers.putHandler({
        id: STUDENT_ID,
        year: STUDENT_BIRTH_YEAR,
        requestId: postResponse.message,
    })

    await handlers.deleteHandler({
        id: putResponse.message,
    })
}

export default makeAllRequests