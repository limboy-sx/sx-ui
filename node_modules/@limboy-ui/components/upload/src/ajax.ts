import { UploadProgressEvent } from "./upload";
import { RequestOption } from "./upload-content";

export function httpRequest(options: RequestOption) {
  const xhr = new XMLHttpRequest();
  const action = options.actions!;
  const method = options.methods || "POST";

  // 打开请求
  xhr.open(method, action);

  // 设置 header
  if (options.header) {
    for (const [key, value] of Object.entries(options.header)) {
      xhr.setRequestHeader(key, value as string);
    }
  }

  // 进度事件
  xhr.upload.addEventListener("progress", (e) => {
    const progressEvents = e as UploadProgressEvent;
    progressEvents.percenttage = e.total > 0 ? (e.loaded / e.total) * 100 : 0;
    options.onProgress?.(progressEvents);
  });

  // formData
  const formData = new FormData();

  if (options.data) {
    for (const [key, value] of Object.entries(options.data)) {
      formData.append(key, value);
    }
  }

  // 文件
  if (options.file) {
    formData.append(options.name!, options.file);
  }

  xhr.onload = () => {
    if (xhr.status < 300 && xhr.status >= 200) {
      options.onSuccess?.(xhr.response);
    } else {
      options.onError!({ status: xhr.status });
    }
  };

  xhr.onerror = () => {
    options.onError?.(xhr.response);
  };

  xhr.send(formData);

  return xhr;
}
