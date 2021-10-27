interface XHRConfig {
  url: string;
  method?: 'get' | 'post';
  responseType: XMLHttpRequestResponseType;
  headers?: { [key: string]: string};
  data?: any;
}

export default function <T extends XHRConfig>(config: T) {
  return new Promise((resolve) => {
    const { url, headers, method = 'get', responseType } = config;
    let { data } = config;
    const xhr = new XMLHttpRequest();

    if (headers['Content-Type'] === 'application/json') {
      data = JSON.stringify(data);
    }

    xhr.open(method, `/proxy${url}`);
    
    Object.keys(headers).forEach(key => {
      xhr.setRequestHeader(key, headers[key]);
    })

    xhr.addEventListener('loadend', function () {
      resolve(JSON.parse(xhr.response))
    })

    xhr.send(data || null)
  })
}
