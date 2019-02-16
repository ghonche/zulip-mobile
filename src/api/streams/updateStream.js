/* @flow strict-local */
import type { ApiResponse, Auth } from '../apiTypes';
import { apiPatch } from '../apiFetch';

export default (
  auth: Auth,
  id: number,
  property: string,
  value: string | boolean,
): Promise<ApiResponse> =>
  apiPatch(auth, `streams/${id}`, {
    [property]: value,
  });
