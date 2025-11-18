import { ExtractPropTypes, PropType } from "vue";

export interface UploadFile {
  uid: string | number;
  name: string;
  url: string;
  percentages: number; //上传进度
  raw: File; //原始文件对象
  size: number; //文件大小
  status: string;
}

export type UploadFiles = UploadFile[];

export type UploadRawFile = File & { uid: number }; //uid
export type UploadProgressEvent = { percenttage: number } & ProgressEvent;
//组件使用的类型,给用户用的类型
export type baseProps = {
  FileList?: UploadFiles;
  actions?: string;
  multiple?: boolean;
  name?: string;
  accept?: string;
  methods?: string;
  header?: Headers | Record<string, any>;
  data?: Record<string, any>;
  file?: File;
};

//组件的类型,给开发者用的类型
export interface uploadProps extends baseProps {
  onPreview?: (file: UploadFile) => void;
  beforeUpload?: (file: UploadRawFile) => boolean | Promise<boolean>;
  onChange?: (file: UploadFile) => void;
  beforeRemove?: (
    file: UploadFile,
    fileList?: UploadFiles
  ) => boolean | Promise<boolean>;
  onRemove?: (file: UploadFile, fileList?: UploadFiles) => void;
  onProgress?: (
    file: UploadProgressEvent,
    uplosFile: UploadFile,
    uplosFiles: UploadFiles
  ) => void;
  onError?: {
    (erro: any, uplosFile: UploadFile, uplosFiles: UploadFiles): void;
  };
  onSuccess?: {
    (res: any, uplosFile: UploadFile, uplosFiles: UploadFiles): void;
  };
}

let id = 0;
export const genId = () => id++;
