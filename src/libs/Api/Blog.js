import WebServiceRequest from '../Api/WebServiceRequest'

class BlogCreateCommentRequest extends WebServiceRequest {
    constructor (context) {
        super(context)
        super.setTag('Posts/CreateBlog')
    }
    setParams(data){
        super.setRequestParamDataObj(data)
    }
}
export  {
    BlogCreateCommentRequest,
};
