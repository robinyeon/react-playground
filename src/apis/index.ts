import Http from "./Http/Http";

const http = new Http();

const httpObj = {
  get: http.get.bind(http),
  post: http.post.bind(http),
  patch: http.patch.bind(http),
  del: http.del.bind(http),
};

const { get, post, patch, del } = httpObj;

export { get, post, patch, del };
