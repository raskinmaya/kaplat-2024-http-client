interface PostBody {
    id: number;
    year: number;
    requestId: string;
}

interface PutBody {
    id: number;
    year: number;
}

interface GetParams {
    id: number;
    year: number;
}

interface DeleteParams {
    id: string;
}

interface PutParams {
    id: string;
}

type BodyType = PostBody | PutBody;
type QueryParamsType = GetParams | DeleteParams | PutParams
type MethodType = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface IRequestHandler {
    method: MethodType;
    uri: string;
    params?: QueryParamsType;
    body?: BodyType;
}