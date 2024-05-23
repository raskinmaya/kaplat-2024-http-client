import {IRequest, IResponse} from "../types";
import api from "../../api";

const getHandler = async ({id, year}: { id: number, year: number }): Promise<string> => {
    const req: IRequest = {
        method: 'GET',
        uri: '/test_get_method',
        params: {
            id,
            year,
        }
    };

    const res = await api.get(req.uri, {
        params: req.params
    });

    return res.data as string;
}

const deleteHandler = async ({id}: { id: string }): Promise<void> => {
    const req: IRequest = {
        method: 'DELETE',
        uri: '/test_delete_method',
        params: {
            id,
        }
    };

    await api.delete(req.uri, {
        params: req.params,
    });
}

const putHandler = async ({id, year, requestId}: { id: number, year: number, requestId: string }): Promise<IResponse> => {
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

    const res = await api.put(req.uri, req.body, {
        params: req.params,
    });

    return res.data as IResponse;
}

const postHandler = async ({ id, year, requestId } : { id: number, year: number, requestId: string }): Promise<IResponse> => {
    const req: IRequest = {
        method: 'POST',
        uri: '/test_post_method',
        body: {
            id,
            year,
            requestId,
        }
    };

    const res = await api.post(req.uri, req.body);
    return res.data as IResponse;
}

export default {
    getHandler,
    postHandler,
    putHandler,
    deleteHandler
}