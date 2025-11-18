import {
  baseProps,
  UploadProgressEvent,
  uploadProps,
  UploadRawFile,
} from "./upload";

export interface UploadContentProps extends baseProps {
  beforeUpload: uploadProps["beforeUpload"];
  onStart: (rawFile: UploadRawFile) => void;
  onProgress: (e: UploadProgressEvent, rawFile: UploadRawFile) => void;
  onRemove: (rawFile: UploadRawFile) => void;
  onError: (e: any, rawFile: UploadRawFile) => void;
  onSuccess: (res: any, rawFile: UploadRawFile) => void;
}

export interface RequestOption {
  methods?: string;
  file?: File;
  name?: string;
  actions?: string;
  header?: Headers | Record<string, any>;
  data?: Record<string, any>;
  onError?: (e: Event) => void;
  onSuccess?: (res: Event) => void;
  onProgress?: (e: UploadProgressEvent) => void;
}
