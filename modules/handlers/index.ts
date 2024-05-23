import {IRequest} from "../types";
import api from "../../api";

const getHandler = ({ id, year }: { id: number, year: number }) => {
    const req: IRequest = {
        method: 'GET',
        uri: '/test_get_method',
        params: {
            id,
            year,
        }
    };

    return api.get(req.uri, {
        params: req.params
    })
}

const deleteHandler = ({ id } : { id: string }) => {
    const req: IRequest = {
        method: 'DELETE',
        uri: '/test_delete_method',
        params: {
            id,
        }
    };

    return api.delete(req.uri, {
        params: req.params,
    })
}

const putHandler = ({ id, year, requestId } : { id: number, year: number, requestId: string }) => {
    const req: IRequest = {
        method: 'PUT',
        uri: '/test_put_method',
        params: {
            id: requestId
        },
        body: {
            id: (id - 123503) % 92,
            year: (year + 123) % 45,
        }
    };

    return api.put(req.uri, req.body, {
        params: req.params,
    })
}

const postHandler = ({ id, year, requestId } : { id: number, year: number, requestId: string }) => {
    const req: IRequest = {
        method: 'DELETE',
        uri: '/test_delete_method',
        body: {
            id,
            year,
            requestId,
        }
    };

    return api.post(req.uri, req.body)
}

export default {
    getHandler,
    postHandler,
    putHandler,
    deleteHandler
}