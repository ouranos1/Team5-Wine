import CallAPI from './CallApi';
import imageProp from '@/types/Image';

export async function ImageAPI(formData: FormData) {
  const method = 'post';
  let query = '/images/upload';
  const apiName = 'image';
  const body = formData;
  await CallAPI({ method, query, body, apiName });
}
