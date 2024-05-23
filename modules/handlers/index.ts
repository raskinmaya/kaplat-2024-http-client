import {IRequestHandler} from "../types";

const getHandler = ({ id, year }: { id: number, year: number }) => {
    return {
        method: 'GET',
        uri: '/test_get_method',
        params: {
            id,
            year,
        }
    } as IRequestHandler;
}

const deleteHandler = ({ id } : { id: number }) => {
    return {
        method: 'DELETE',
        uri: '/test_delete_method',
        params: {
            id
        }
    } as IRequestHandler;
}

const putHandler = ({ id, year, requestId } : { id: number, year: number, requestId: string }) => {
    return {
        method: 'PUT',
        uri: '/test_put_method',
        params: {
            id: requestId
        },
        body: {
            id,
            year,
        }
    } as IRequestHandler;
}

const postHandler = ({ id, year, requestId } : { id: number, year: number, requestId: string }) => {
    return {
        method: 'DELETE',
        uri: '/test_delete_method',
        params: {
            id,
            year,
            requestId,
        }
    } as IRequestHandler;
}

export default [
    getHandler,
    postHandler,
    putHandler,
    deleteHandler
]