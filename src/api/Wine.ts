import { createWineBody } from '@/types/WineProps';
import CallAPI from './CallApi';
import { id } from '@/types/Id';

export async function addWineAPI(props: createWineBody) {
  const method = 'post';
  let query = `/wines`;
  const apiName = 'addwine';
  const body = props;
  await CallAPI({ method, query, body, apiName });
}

export async function wineListAPI(limit: number | null = null, cursor: number | null = null, minPrice: number | null = null, maxPrice: number | null = null, rating: number | null = null) {
  const method = 'get';
  const queryParams = new URLSearchParams();

  if (limit !== null) queryParams.append('limit', limit.toString());
  if (cursor !== null) queryParams.append('cursor', cursor.toString());
  if (minPrice !== null) queryParams.append('minPrice', minPrice.toString());
  if (maxPrice !== null) queryParams.append('maxPrice', maxPrice.toString());
  if (rating !== null) queryParams.append('rating', rating.toString());

  const query = `/wines?${queryParams.toString()}`;
  const apiName = 'winelist';
  const body = null;
  console.log(query);

  return await CallAPI({ method, query, body, apiName });
}

export async function bestWine() {
  //추천와인은 평점 4.2 이상인 와인을 랜덤하게 반환
  let limit = 10;
  const method = 'get';
  let query = `/wines/recommended?limit=${limit}`;
  const apiName = 'bestwine';
  const body = null;
  return await CallAPI({ method, query, body, apiName });
}

export async function wineDetail(wineId: id) {
  const method = 'get';
  let query = `/wines/${wineId}`;
  const apiName = 'winedetail';
  const body = null;
  return await CallAPI({ method, query, body, apiName });
}

export async function editWine(props: createWineBody, wineId: id) {
  const method = 'patch';
  let query = `/wines/${wineId}`;
  const apiName = 'editwine';
  const body = props;
  await CallAPI({ method, query, body, apiName });
}

export async function deleteWine(wineId: id) {
  const method = 'delete';
  let query = `/wines/${wineId}`;
  const apiName = 'deletewine';
  const body = null;
  await CallAPI({ method, query, body, apiName });
}
