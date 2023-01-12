import sxRequest from './index'
import type { IResultData } from './index'
import { IProductDetail } from '@/store/home'

export type DetailProductType = "oppo" | "air" | "watch" | "tablet"

export interface IDetailInfo {
  id?: string,
  title?: string,
  productDetailss?: IProductDetail[],
}

export const getDetailInfo = (type: DetailProductType) => {
  return sxRequest.get<IResultData<IDetailInfo[]>>('/oppoDetail', {
    type: type || "oppo"
  })
}