import WebServiceRequest from '../Api/WebServiceRequest'

class BlogCategoryDeleteRequest extends WebServiceRequest {
    constructor (context) {
        super(context)
    }
    setId(id){
        super.setTag('BlogCategory/DeleteBlogCategory?BlogCategoryId='+id)
    }
}
class BlogCategoryGetAllRequest extends WebServiceRequest {
    constructor (context) {
        super(context)
        super.setTag('BlogCategory/GetAll')
    }
}
class BlogCategoryGetRequest extends WebServiceRequest {
    constructor (context) {
        super(context)
    }
    setId(id){
        super.setTag('BlogCategory/GetBlogCategory?blogCategoryId='+id)
    }
}
class BlogCategoryUpdateRequest extends WebServiceRequest {
    constructor (context) {
        super(context)
        super.setTag('BlogCategory/UpdateBlogCategory')
    }
    setParams(data){
        super.setRequestParamDataObj(data)
    }
}
class BlogCommentDeleteRequest extends WebServiceRequest {
    constructor (context) {
        super(context)
    }
    setId(id){
        super.setTag('BlogComment/DeleteBlogComment?BlogCommentId='+id)
    }
}
class BlogCommentGetAllByBlogIdRequest extends WebServiceRequest {
    constructor (context) {
        super(context)
    }
    setId(id){
        super.setTag('BlogComment/GetAllByBlogId?blogId='+id)
    }
}
class BlogCommentGetAllRequest extends WebServiceRequest {
    constructor (context) {
        super(context)
        super.setTag('BlogComment/GetAll')
    }
    setParams(data){
        super.setRequestParam(data)
    }
}
class BlogCommentGetByIdRequest extends WebServiceRequest {
    constructor (context) {
        super(context)
    }
    setId(id){
        super.setTag('BlogComment/GetById?blogCommentId='+id)
    }
}
class BlogCommentUpdateRequest extends WebServiceRequest {
    constructor (context) {
        super(context)
        super.setTag('BlogComment/UpdateBlogComment')
    }
    setParams(data){
        super.setRequestParamDataObj(data)
    }
}
class BlogCreateBlogRequest extends WebServiceRequest {
    constructor (context) {
        super(context)
        super.setTag('Blog/CreateBlog')
    }
    setParams(data){
        super.setRequestParamDataObj(data)
    }
}
class BlogDeleteRequest extends WebServiceRequest {
    constructor (context) {
        super(context)
    }
    setId(id){
        super.setTag('Blog/DeleteBlog?BlogId='+id)
    }
}
class BlogGetByIdRequest extends WebServiceRequest {
    constructor (context) {
        super(context)
    }
    setId(id){
        super.setTag('Blog/GetById?id='+id)
    }
}
class BlogUpdateBlogRequest extends WebServiceRequest {
    constructor (context) {
        super(context)
        super.setTag('Blog/UpdateBlog')
    }
    setParams(data){
        super.setRequestParamDataObj(data)
    }
}
class BlogUpdateBlogSEORequest extends WebServiceRequest {
    constructor (context) {
        super(context)
        super.setTag('Blog/UpdateBlogSEO')
    }
    setParams(data){
        super.setRequestParamDataObj(data)
    }
}
class BlogCategoryUpdateBlogCategorySEORequest extends WebServiceRequest {
    constructor (context) {
        super(context)
        super.setTag('BlogCategory/UpdateBlogCategorySEO')
    }
    setParams(data){
        super.setRequestParamDataObj(data)
    }
}
class CreateBlogCommentRequest extends WebServiceRequest {
    constructor (context) {
        super(context)
        super.setTag('BlogComment/CreateBlogComment')
    }
    setBlogId(blogId){
        super.setRequestParam('blogId',blogId)
    }
    setMessage(message){
        super.setRequestParam('message',message)
    }
    setParentId(parentId){
        super.setRequestParam('parentId',parentId)
    }

}
class BlogCommentGetAllByBlogIdForAdminRequest extends WebServiceRequest {
    constructor (context) {
        super(context)
        super.setTag('BlogComment/GetAllByBlogIdForAdmin')
    }
    setParams(data){
        super.setRequestParam(data)
    }
}
class BlogCommentChangeCommentActivationRequest extends WebServiceRequest {
    constructor (context) {
        super(context)
        super.setTag('BlogComment/ChangeCommentActivation')
    }
    setParams(data){
        super.setRequestParamDataObj(data)
    }
}
class BlogCategoryCreateRequest extends WebServiceRequest {
    constructor (context) {
        super(context)
        super.setTag('BlogCategory/CreateBlogCategory')
    }
    setParams(data){
        super.setRequestParamDataObj(data)
    }
}
class BlogGetAllRequest extends WebServiceRequest {
    constructor (context) {
        super(context)
        super.setTag('Blog/GetAll')
    }
    setParams(data){
        super.setRequestParam(data)
    }
}
class TagGetAllRequest extends WebServiceRequest {
    constructor (context) {
        super(context)
        super.setTag('Tag/GetAll')
    }
    setParams(data){
        super.setRequestParam(data)
    }
}
class TagGetRequest extends WebServiceRequest {
    constructor (context) {
        super(context)
        super.setTag('Tag/Get')
    }
    setParams(data){
        super.setRequestParam(data)
    }
}
class TagDeleteRequest extends WebServiceRequest {
    constructor (context) {
        super(context)
        super.setTag('Tag/Delete')
    }
    setParams(data){
        super.setRequestParam(data)
    }
}
class TagCreateRequest extends WebServiceRequest {
    constructor (context) {
        super(context)
        super.setTag('Tag/Create')
    }
    setParams(data){
        super.setRequestParamDataObj(data)
    }
}
class BlogTagCreateRequest extends WebServiceRequest {
    constructor (context) {
        super(context)
        super.setTag('BlogTag/Create')
    }
    setParams(data){
        super.setRequestParamDataObj(data)
    }
}
class BlogTagDeleteRequest extends WebServiceRequest {
    constructor (context) {
        super(context)
        super.setTag('BlogTag/Delete')
    }
    setParams(data){
        super.setRequestParam(data)
    }
}
class BlogBlogCategoryCreateRequest extends WebServiceRequest {
    constructor (context) {
        super(context)
        super.setTag('BlogBlogCategory/Create')
    }
    setParams(data){
        super.setRequestParamDataObj(data)
    }
}
class BlogBlogCategoryDeleteRequest extends WebServiceRequest {
    constructor (context) {
        super(context)
        super.setTag('BlogBlogCategory/Delete')
    }
    setParams(data){
        super.setRequestParam(data)
    }
}
export  {
    BlogCategoryDeleteRequest,
    BlogCategoryGetAllRequest,
    BlogCategoryGetRequest,
    BlogCategoryUpdateRequest,
    BlogCommentDeleteRequest,
    BlogCommentGetAllByBlogIdRequest,
    BlogCommentGetAllRequest,
    BlogCommentGetByIdRequest,
    BlogCommentUpdateRequest,
    BlogCreateBlogRequest,
    BlogDeleteRequest,
    BlogGetAllRequest,
    BlogGetByIdRequest,
    BlogUpdateBlogRequest,
    CreateBlogCommentRequest,
    BlogCategoryCreateRequest,
    TagGetAllRequest,
    TagGetRequest,
    TagDeleteRequest,
    TagCreateRequest,
    BlogCommentGetAllByBlogIdForAdminRequest,
    BlogCommentChangeCommentActivationRequest,
    BlogUpdateBlogSEORequest,
    BlogCategoryUpdateBlogCategorySEORequest,
    BlogTagCreateRequest,
    BlogBlogCategoryCreateRequest,
    BlogBlogCategoryDeleteRequest,
    BlogTagDeleteRequest,
};
