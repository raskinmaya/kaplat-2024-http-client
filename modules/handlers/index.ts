import {IRequest} from "../types";

const getHandler = ({ id, year }: { id: number, year: number }) => {
    return {
        method: 'GET',
        uri: '/test_get_method',
        params: {
            id,
            year,
        }
    } as IRequest;
}

const deleteHandler = ({ id } : { id: number }) => {
    return {
        method: 'DELETE',
        uri: '/test_delete_method',
        params: {
            id
        }
    } as IRequest;
}

const putHandler = ({ id, year, requestId } : { id: number, year: number, requestId: string }) => {
    return {
        method: 'PUT',
        uri: '/test_put_method',
        params: {
            id: requestId
        },
        body: {
            id: (id - 123503) % 92,
            year: (year + 123) % 45,
        }
    } as IRequest;
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
    } as IRequest;
}

export default [
    getHandler,
    postHandler,
    putHandler,
    deleteHandler
]